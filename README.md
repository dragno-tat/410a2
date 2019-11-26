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

This was done by scanning through every Java source code file in the repo using the github api, and then running a series of regex
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
to the metrics, and the circles are sized appropriately to reflect the relative differences across developers. Hovering
over the circle will show the actual value of that metric for that developer.    

### User Studies
We conducted one user study with our prototype and two user studies with our final product. Our initial prototype was a drawing of our visualization where each person had five unfilled circles showing our metadata analysis. The user gave more feedback on adding more metrics (Lexical/Static and Dynamic Analysis) as well as suggesting some visual changes. We made these changes in our final product and got great feedback from two engineering students. Both students gave positive feedback on our visualization. Future suggestions were to highlight the 1st, 2nd, and 3rd largest contributors in the visualization.


