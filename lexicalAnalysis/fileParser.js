const request = require('request');
const fs = require("fs");

const repo = "EnterpriseQualityCoding/FizzBuzzEnterpriseEdition";

// Github authentication recommended for faster request rates
// Input below
const auth = '';


async function parse(filePath) {
    /*
    Given a path to the file, output some lexical info about the file
    
    returns: 
    {
        size : number representing lines in the file
        dependencies : a list of dependencies of the file
        methods : {
            method_name : {
                lines : number of lines
                comments : number of comments
                comment_ratio : comments / lines
            }
        }
        comment_ratio : a float number representing comments per lines of code
    }
    */

    let result = {};
    let file = await getJavaFile(filePath);
    let lines = file.split("\n");
    result["size"] = lines.length;
    if (result["size"] == 0) {
        console.log("Error, empty file");
        exit(0);
    }
    result["dependencies"] = parseDependencies(lines);
    result["mathods"] = parseMethods(lines);
    result["comment_ratio"] = parseComments(lines) / result["size"];
    return result;
}

function parseDependencies(lines) {
    let dependecies = [];
    for (line of lines) {
        let splitLine = line.split(" ");
        let first = splitLine[0];
        if (splitLine[0] == "import") {
            dependecies.push(splitLine[1]);
        }
        if (first.includes("public") || first.includes("private") || first.includes("protected")) {
            return dependecies;
        }
    }
    return dependecies;
}

function parseMethods(lines) {
    let methods = {};
    let method_regex = /(public|protected|private|static|\s) +[\w\<\>\[\],\s]+\s+(\w+) *\([^\)]*\)/;
    let in_method = false;
    let curr_method = null;
    let left_bCount = 0;
    let right_bCount = 0;
    let commenting = false;
    for (line of lines) {
        if (in_method) {
            methods[curr_method]["lines"] += 1;
        }
        let matches = line.match(method_regex);
        if (matches) {
            let name = matches[2];
            methods[name] = {};
            methods[name]["lines"] = 1;
            methods[name]["comments"] = 0;
            curr_method = name;
            in_method = true;
        }
        if (in_method) {
            let lbc = line.match(/{/g || []);
            let rbc = line.match(/}/g || []);
            left_bCount += (lbc ? lbc.length : 0);
            right_bCount += (rbc ? rbc.length: 0);
            if (commenting) {
                methods[curr_method]["comments"] += 1;
            }
            if (line.includes("//") && !commenting) {
                methods[curr_method]["comments"] += 1;
            } else if (line.includes("/*") && !commenting) {
                commenting = true;
                methods[curr_method]["comments"] += 1;
            } else if (line.includes("*/")) {
                commenting = false;
            }
            if ((left_bCount - right_bCount) == 0) {
                methods[curr_method]["comment_ratio"] = methods[curr_method]["comments"] / methods[curr_method]["lines"];
                curr_method = null;
                in_method = false;
            }
        }
    }
    return methods;
}

function parseComments(lines) {
    let comments = 0;
    let commenting = false;
    for (line of lines) {
        if (commenting) {
            comments += 1;
        }
        if (line.includes("//") && !commenting) {
            comments += 1;
        } else if (line.includes("/*") && !commenting) {
            commenting = true;
            comments += 1;
        } else if (line.includes("*/")) {
            commenting = false;
        }
    }
    return comments;
}

function getJavaFiles() {
    return new Promise( function (resolve, reject) {
        let options = { 
            method: 'GET',
            url: 'https://api.github.com/repos/' + repo + '/git/trees/master',
            qs: { recursive: '1' },
            headers: {
                'User-Agent' : 'User'
            }
        };
        request(options, function (error, response, body) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                let javaFiles = [];
                let b = JSON.parse(body);
                for (t of b["tree"]) {
                    let path = t["path"];
                    if ((t["type"] == "blob") && (path.substring(path.length - 5, path.length) == ".java")) {
                        javaFiles.push(path);
                    }
                }
                resolve(javaFiles);
            }
        });
    });
}

function getJavaFile(path) {
    return new Promise( function (resolve, reject) {
        let options = { 
            method: 'GET',
            url: 'https://api.github.com/repos/' + repo + '/contents/' + path,
            headers: { 
                Authorization: auth,
                'User-Agent': 'User'
            }
        };

        request(options, function (error, response, body) {
            if (error)  {
                console.log(error);
                reject(error);
            } else {
                try {
                    let content = JSON.parse(body)["content"];
                    resolve(Buffer.from(content, 'base64').toString('utf8'));
                } catch (err) {
                    console.log(err);
                    console.log("Error getting file: " + path);
                }
            }
        });
    });
}

async function main() {
    let result = {};
    let files = await getJavaFiles();
    for (file of files) {
        console.log("Parsing " + file);
        let res = await parse(file);
        result[file] = res;
    }
    fs.writeFileSync('./results.json', JSON.stringify(result));
}

main();

// for testing
//let res = parse('./test.java');
//console.log(res);