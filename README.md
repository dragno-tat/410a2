# CPSC 410 Project 2

Motivation: Imagine a software company is downsizing and trying to determine which developers to keep and which to fire

Data analysis and visualization on the repo https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition

## Viewing Locally
* Create a whitelist.json file which maps git names to an identifier which will appear in the visualization
* Run the init.sh script
* Open index.html in a browser

### Metrics Per Developer
#### Metadata Analysis
* Lines of code added
* Lines of code removed
* Number of commits
* Active days
* Length on project

This was done by using the gitstats tool from http://gitstats.sourceforge.net/ to generate the necessary metadata from
the repo, and then parsing the output html into a usable json file for our visualization.  

#### Lexical/Static Analysis
* Average number of dependencies in files worked on
* Number of dependencies in files worked on weighted by file size
* Average method size in files worked on
* Method size in files worked on weighted by file size

This was done by scanning through every Java source code file in the repo, and then running a series of regex
expressions on the code to obtain the size of the file, a list of the dependencies, a list of the methods along 
with their metadata, and the comment ratio of the file. Unfortunately, comment metrics were not incorporated into 
the final visualization due to there not being any comments in the source files of the target repo.

#### Dynamic Analysis
* Average line coverage in classes worked on
* Line coverage in classes worked on weighted by number of commits

This was done by using the JaCoCo code coverage tool to generate a code coverage report across all the Java classes
within the repo, and then parsing that output into a csv file as well as a json file.

### Visualization
The visualization was built using the D3.js library. The json data generated from all the analysis was aggregated into
a single javascript file which was then fed into the visualization as the dataset. The visualization is similar to a
spider chart, where we have a representation for each developer in the repo which is composed of circles corresponding
to the metrics, and the circles are sized appropriately to reflect the relative differences across developers.    
