const fs = require('fs');

function parse(filePath) {
    /*
    Given a path to the file, output some lexical info about the file
    
    returns: 
    {
        size : number representing lines in the file
        dependencies : a list of dependencies of the file
        methods : a list of methods of the file
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
    let methods = [];
    let method_regex = /(public|protected|private|static|\s) +[\w\<\>\[\],\s]+\s+(\w+) *\([^\)]*\)/;
    for (line of lines) {
        let matches = line.match(method_regex);
        if (matches) {
            methods.push(matches[2]);
        }
    }
    return methods;
}

function parseComments(lines) {
    let comments = 0;
    let commenting = false;
    for (line of lines) {
        let v = line;
        if (commenting) {
            comments += 1;
        }
        if (line.includes("//")) {
            comments += 1;
        } else if (line.includes("/*")) {
            commenting = true;
            comments += 1;
        } else if (line.includes("*/")) {
            commenting = false;
        }
    }
    return comments;
}

/* for testing
let res = parse('./lexicalAnalysis/test.java');
*/