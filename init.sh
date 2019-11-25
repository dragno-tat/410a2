#!/bin/bash
# assumes npm and node are installed
if [ ! -f whitelist.json ]; then
  echo "A mapping of users to their identities is required in whitelist.json"
  exit 1
fi

echo "Installing npm dependencies"
npm install fs
npm install request
npm install jsdom

echo "Cloning repo"
git clone "git@github.com:EnterpriseQualityCoding/FizzBuzzEnterpriseEdition.git"

echo "Performing lexical analysis"
cd lexicalAnalysis
node fileParser.js

echo "Performing metadata analysis"
cd ../metadataAnalysis
node gitstatsParser.js

echo "Retrieving authors per file"
cd ..
./get_file_authors.sh FizzBuzzEnterpriseEdition

echo "Aggregating all the metrics together"
node metricAggregator.js

echo "Cleaning up"
rm -rf node_modules
rm package-lock.json
rm -rf FizzBuzzEnterpriseEdition

echo "To view the visualization, open up index.html in a browser"
