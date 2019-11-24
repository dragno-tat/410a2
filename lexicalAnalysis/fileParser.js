const fs = require('fs');

function parse(filePath) {
    /*
    Given a path to the file, output some lexical info about the file
    
    returns: 
    {
        size : number representing lines in the file
        dependencies : a list of dependencies of the file
        methods : {
            method_name : number of lines
        }
        comment_ratio : a float number representing comments per lines of code
    }
    */

    let result = {};
    let file = fs.readFileSync(filePath, "utf-8");
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
    console.log("!!!" + comments);
    return comments;
}

// for testing
//let res = parse('./test.java');
//console.log(res);
