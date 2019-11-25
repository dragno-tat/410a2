const fs = require('fs');

const metadataResults = JSON.parse(fs.readFileSync("metadataAnalysis/metadata.json", "utf-8"));
const lexicalResults = JSON.parse(fs.readFileSync("lexicalAnalysis/results.json", "utf-8"));
const dynamicResults = JSON.parse(fs.readFileSync("dynamicAnalysis/DynamicAnalysis.json", "utf-8"));
const authorMap = JSON.parse(fs.readFileSync("whitelist.json", "utf-8"));

const metricsDataByName = {};

for(const author in authorMap){
    metricsDataByName[authorMap[author]] = { name: authorMap[author] };
}

const fileAuthors = parseFileAuthors();

function parseFileAuthors(){
    const fileAuthors = {};
    const fileAuthorsFile = fs.readFileSync("file_authors.txt", "utf-8");
    let filename = "";
    for(const line of fileAuthorsFile.split("\n")){
        if(line.startsWith("./")){
            filename = line.substring(2);
            fileAuthors[filename] = [];
        } else {
            // line is author
            if(line in authorMap){
                fileAuthors[filename].push(authorMap[line]);
            }

        }
    }
    return fileAuthors;
}

function addMetadataResults(){
    for(const a of metadataResults.authors["List of Authors"]){
        const age = Number(a["Age"].split(" ")[0]);
        const name = a["Author"];
        if(name in authorMap){
            const author = metricsDataByName[authorMap[name]];
            author.linesAdded = Number(a["+ lines"]);
            author.linesRemoved = Number(a["- lines"]);
            author.activeDays = Number(a["Active days"]);
            author.commits = Number(a["Commits (%)"].split(" ")[0]);
            author.age = isNaN(age) ? 1 : age;
        }
    }
}

function addLexicalResults(){
    let totalFileSize = 0;
    for(const filename in lexicalResults){
        totalFileSize += lexicalResults[filename].size;
    }

    const lexicalMetrics = {};
    for(const filename in fileAuthors){
        const lexicalResult = lexicalResults[filename];
        const dependencies = lexicalResult.dependencies.length;
        const methods = Object.keys(lexicalResult.methods).length;
        const weightedDependency = lexicalResult.size / totalFileSize * dependencies;
        let methodLines = 0;
        for(const method in lexicalResult.methods){
            methodLines += lexicalResult.methods[method].lines;
        }
        const weightedMethodSize = lexicalResult.size / totalFileSize * methodLines;

        for(const author of fileAuthors[filename]){
            if(!lexicalMetrics[author]){
                lexicalMetrics[author] = {
                    files: 0,
                    dependencies: 0,
                    methods: 0,
                    methodLines: 0,
                    weightedDependencies: 0,
                    weightedMethodSize: 0,
                };
            }
            lexicalMetrics[author].files++;
            lexicalMetrics[author].dependencies += dependencies;
            lexicalMetrics[author].methods += methods;
            lexicalMetrics[author].methodLines += methodLines;
            lexicalMetrics[author].weightedDependencies += weightedDependency;
            lexicalMetrics[author].weightedMethodSize += weightedMethodSize;
        }
    }

    for(const author in lexicalMetrics){
        metricsDataByName[author].weightedDependencies = lexicalMetrics[author].weightedDependencies;
        metricsDataByName[author].weightedMethodSize = lexicalMetrics[author].weightedMethodSize;
        metricsDataByName[author].avgDependencies = lexicalMetrics[author].dependencies / lexicalMetrics[author].files;
        metricsDataByName[author].avgMethodSize = lexicalMetrics[author].methodLines / lexicalMetrics[author].methods;
    }
}

function addDynamicResults(){
    const dynamicMetrics = {};
    for(const result of dynamicResults){
        if(result["Class"] === "TOTAL_FILE_EDITS_PER_USER"){
            continue;
        }
        let resultTotal = 0;
        for(const prop in result){
            if(!(prop in authorMap)){
                continue;
            }
            resultTotal += result[prop];
        }

        for(const prop in result){
            if(!(prop in authorMap)){
                continue;
            }
            const author = authorMap[prop];
            if(!dynamicMetrics[author]){
                dynamicMetrics[author] = {
                    lineCoverage: 0,
                    classes: 0,
                    weightedLineCoverage: 0
                }
            }
            dynamicMetrics[author].lineCoverage += result["LineCoveragePercentage"];
            dynamicMetrics[author].classes++;
            dynamicMetrics[author].weightedLineCoverage += result["LineCoveragePercentage"] * result[prop] / resultTotal;
        }
    }

    for(const author in dynamicMetrics){
        metricsDataByName[author].avgLineCoverage = dynamicMetrics[author].lineCoverage / dynamicMetrics[author].classes;
        metricsDataByName[author].weightedLineCoverage = dynamicMetrics[author].weightedLineCoverage;
    }
}

addMetadataResults();
addLexicalResults();
addDynamicResults();
const metricsDataset = [];
for(const author in metricsDataByName){
    metricsDataset.push(metricsDataByName[author]);
}
fs.writeFileSync("metrics.js", "const metricsDataset = " + JSON.stringify(metricsDataset));