/*

GitStats was used to generate HTML files containing the desired metadata for analysis.
Here, we parse the HTML into JSON for consumption by the visualization.
This requires you have jsdom installed locally. If you're missing it, run "npm install jsdom".
This also requires fs installed locally to write the output to metadata.json.
Use GitStats to generate HTML files and then change the Html consts used in this file to pull data from a different source.
Link to analyzed repo: https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition

*/

const jsdom = require("jsdom");
const fs = require('fs');
const { JSDOM } = jsdom;

const indexHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GitStats - FizzBuzzEnterpriseEdition</title><link rel="stylesheet" href="gitstats.css" type="text/css"><meta name="generator" content="GitStats 55c5c28"><script type="text/javascript" src="sortable.js"></script></head><body><h1>GitStats - FizzBuzzEnterpriseEdition</h1><div class="nav"><ul><li><a href="index.html">General</a></li><li><a href="activity.html">Activity</a></li><li><a href="authors.html">Authors</a></li><li><a href="files.html">Files</a></li><li><a href="lines.html">Lines</a></li><li><a href="tags.html">Tags</a></li></ul></div><dl><dt>Project name</dt><dd>FizzBuzzEnterpriseEdition</dd><dt>Generated</dt><dd>2019-11-21 12:45:16 (in 2 seconds)</dd><dt>Generator</dt><dd><a href="http://gitstats.sourceforge.net/">GitStats</a> (version 55c5c28), git version 2.21.0 (Apple Git-122.2), gnuplot 5.2 patchlevel 7</dd><dt>Report Period</dt><dd>2012-11-23 16:44:16 to 2017-02-04 00:41:15</dd><dt>Age</dt><dd>1534 days, 76 active days (4.95%)</dd><dt>Total Files</dt><dd>102</dd><dt>Total Lines of Code</dt><dd>2550 (6751 added, 4201 removed)</dd><dt>Total Commits</dt><dd>161 (average 2.1 commits per active day, 0.1 per all days)</dd><dt>Authors</dt><dd>36 (average 4.5 commits per author)</dd></dl></body></html>';
const activityHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GitStats - FizzBuzzEnterpriseEdition</title><link rel="stylesheet" href="gitstats.css" type="text/css"><meta name="generator" content="GitStats 55c5c28"><script type="text/javascript" src="sortable.js"></script></head><body><h1>Activity</h1><div class="nav"><ul><li><a href="index.html">General</a></li><li><a href="activity.html">Activity</a></li><li><a href="authors.html">Authors</a></li><li><a href="files.html">Files</a></li><li><a href="lines.html">Lines</a></li><li><a href="tags.html">Tags</a></li></ul></div><h2 id="weekly_activity"><a href="#weekly_activity">Weekly activity</a></h2><p>Last 32 weeks</p><table class="noborders"><tr><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td><td style="text-align: center; vertical-align: bottom">0<div style="display: block; background-color: red; width: 20px; height: 1px"></div></td></tr><tr><td>32</td><td>31</td><td>30</td><td>29</td><td>28</td><td>27</td><td>26</td><td>25</td><td>24</td><td>23</td><td>22</td><td>21</td><td>20</td><td>19</td><td>18</td><td>17</td><td>16</td><td>15</td><td>14</td><td>13</td><td>12</td><td>11</td><td>10</td><td>9</td><td>8</td><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td></tr></table><h2 id="hour_of_day"><a href="#hour_of_day">Hour of Day</a></h2><table><tr><th>Hour</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th></tr><tr><th>Commits</th><td style="background-color: rgb(203, 0, 0)">9</td><td style="background-color: rgb(169, 0, 0)">5</td><td style="background-color: rgb(229, 0, 0)">12</td><td style="background-color: rgb(255, 0, 0)">15</td><td style="background-color: rgb(195, 0, 0)">8</td><td style="background-color: rgb(203, 0, 0)">9</td><td style="background-color: rgb(237, 0, 0)">13</td><td style="background-color: rgb(229, 0, 0)">12</td><td style="background-color: rgb(203, 0, 0)">9</td><td style="background-color: rgb(178, 0, 0)">6</td><td style="background-color: rgb(169, 0, 0)">5</td><td style="background-color: rgb(212, 0, 0)">10</td><td style="background-color: rgb(135, 0, 0)">1</td><td style="background-color: rgb(178, 0, 0)">6</td><td style="background-color: rgb(186, 0, 0)">7</td><td style="background-color: rgb(195, 0, 0)">8</td><td style="background-color: rgb(195, 0, 0)">8</td><td style="background-color: rgb(169, 0, 0)">5</td><td style="background-color: rgb(135, 0, 0)">1</td><td>0</td><td style="background-color: rgb(135, 0, 0)">1</td><td style="background-color: rgb(152, 0, 0)">3</td><td style="background-color: rgb(144, 0, 0)">2</td><td style="background-color: rgb(178, 0, 0)">6</td></tr><tr><th>%</th><td style="background-color: rgb(203, 0, 0)">5.59</td><td style="background-color: rgb(169, 0, 0)">3.11</td><td style="background-color: rgb(229, 0, 0)">7.45</td><td style="background-color: rgb(255, 0, 0)">9.32</td><td style="background-color: rgb(195, 0, 0)">4.97</td><td style="background-color: rgb(203, 0, 0)">5.59</td><td style="background-color: rgb(237, 0, 0)">8.07</td><td style="background-color: rgb(229, 0, 0)">7.45</td><td style="background-color: rgb(203, 0, 0)">5.59</td><td style="background-color: rgb(178, 0, 0)">3.73</td><td style="background-color: rgb(169, 0, 0)">3.11</td><td style="background-color: rgb(212, 0, 0)">6.21</td><td style="background-color: rgb(135, 0, 0)">0.62</td><td style="background-color: rgb(178, 0, 0)">3.73</td><td style="background-color: rgb(186, 0, 0)">4.35</td><td style="background-color: rgb(195, 0, 0)">4.97</td><td style="background-color: rgb(195, 0, 0)">4.97</td><td style="background-color: rgb(169, 0, 0)">3.11</td><td style="background-color: rgb(135, 0, 0)">0.62</td><td>0.00</td><td style="background-color: rgb(135, 0, 0)">0.62</td><td style="background-color: rgb(152, 0, 0)">1.86</td><td style="background-color: rgb(144, 0, 0)">1.24</td><td style="background-color: rgb(178, 0, 0)">3.73</td></tr></table><img src="hour_of_day.png" alt="Hour of Day"><h2 id="day_of_week"><a href="#day_of_week">Day of Week</a></h2><div class="vtable"><table><tr><th>Day</th><th>Total (%)</th></tr><tr><th>Mon</th><td>17 (10.56%)</td></tr><tr><th>Tue</th><td>43 (26.71%)</td></tr><tr><th>Wed</th><td>24 (14.91%)</td></tr><tr><th>Thu</th><td>15 (9.32%)</td></tr><tr><th>Fri</th><td>30 (18.63%)</td></tr><tr><th>Sat</th><td>20 (12.42%)</td></tr><tr><th>Sun</th><td>12 (7.45%)</td></tr></table></div><img src="day_of_week.png" alt="Day of Week"><h2 id="hour_of_week"><a href="#hour_of_week">Hour of Week</a></h2><table><tr><th>Weekday</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th></tr><tr><th>Mon</th><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(255, 0, 0)">5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td></tr><tr><th>Tue</th><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(255, 0, 0)">5</td><td style="background-color: rgb(255, 0, 0)">5</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(229, 0, 0)">4</td><td></td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(255, 0, 0)">5</td><td></td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(152, 0, 0)">1</td></tr><tr><th>Wed</th><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(178, 0, 0)">2</td><td></td><td></td><td style="background-color: rgb(178, 0, 0)">2</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(203, 0, 0)">3</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(203, 0, 0)">3</td><td></td><td></td></tr><tr><th>Thu</th><td style="background-color: rgb(203, 0, 0)">3</td><td></td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(178, 0, 0)">2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(178, 0, 0)">2</td></tr><tr><th>Fri</th><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(229, 0, 0)">4</td><td style="background-color: rgb(203, 0, 0)">3</td><td></td><td style="background-color: rgb(255, 0, 0)">5</td><td style="background-color: rgb(229, 0, 0)">4</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(229, 0, 0)">4</td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td style="background-color: rgb(178, 0, 0)">2</td><td style="background-color: rgb(178, 0, 0)">2</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>Sat</th><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(178, 0, 0)">2</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(229, 0, 0)">4</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(255, 0, 0)">5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>Sun</th><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(203, 0, 0)">3</td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(152, 0, 0)">1</td><td style="background-color: rgb(178, 0, 0)">2</td></tr></table><h2 id="month_of_year"><a href="#month_of_year">Month of Year</a></h2><div class="vtable"><table><tr><th>Month</th><th>Commits (%)</th></tr><tr><td>1</td><td>2 (1.24 %)</td></tr><tr><td>2</td><td>8 (4.97 %)</td></tr><tr><td>3</td><td>37 (22.98 %)</td></tr><tr><td>4</td><td>6 (3.73 %)</td></tr><tr><td>5</td><td>11 (6.83 %)</td></tr><tr><td>6</td><td>0 (0.00 %)</td></tr><tr><td>7</td><td>11 (6.83 %)</td></tr><tr><td>8</td><td>42 (26.09 %)</td></tr><tr><td>9</td><td>7 (4.35 %)</td></tr><tr><td>10</td><td>14 (8.70 %)</td></tr><tr><td>11</td><td>21 (13.04 %)</td></tr><tr><td>12</td><td>2 (1.24 %)</td></tr></table></div><img src="month_of_year.png" alt="Month of Year"><h2 id="commits_by_year/month"><a href="#commits_by_year/month">Commits by year/month</a></h2><div class="vtable"><table><tr><th>Month</th><th>Commits</th><th>Lines added</th><th>Lines removed</th></tr><tr><td>2017-02</td><td>2</td><td>2</td><td>1</td></tr><tr><td>2017-01</td><td>1</td><td>14</td><td>50</td></tr><tr><td>2016-11</td><td>1</td><td>293</td><td>1</td></tr><tr><td>2016-10</td><td>6</td><td>0</td><td>0</td></tr><tr><td>2016-09</td><td>2</td><td>71</td><td>29</td></tr><tr><td>2016-08</td><td>5</td><td>27</td><td>8</td></tr><tr><td>2016-07</td><td>4</td><td>180</td><td>85</td></tr><tr><td>2016-01</td><td>1</td><td>0</td><td>0</td></tr><tr><td>2015-11</td><td>1</td><td>0</td><td>0</td></tr><tr><td>2015-10</td><td>6</td><td>817</td><td>2967</td></tr><tr><td>2015-08</td><td>1</td><td>2154</td><td>4</td></tr><tr><td>2015-07</td><td>3</td><td>22</td><td>0</td></tr><tr><td>2015-05</td><td>8</td><td>506</td><td>289</td></tr><tr><td>2015-04</td><td>2</td><td>432</td><td>196</td></tr><tr><td>2015-03</td><td>9</td><td>4</td><td>4</td></tr><tr><td>2014-12</td><td>2</td><td>3</td><td>3</td></tr><tr><td>2014-10</td><td>2</td><td>0</td><td>0</td></tr><tr><td>2014-09</td><td>2</td><td>3</td><td>2</td></tr><tr><td>2014-08</td><td>9</td><td>101</td><td>46</td></tr><tr><td>2014-07</td><td>3</td><td>143</td><td>33</td></tr><tr><td>2014-03</td><td>15</td><td>259</td><td>79</td></tr><tr><td>2014-02</td><td>6</td><td>11</td><td>0</td></tr><tr><td>2013-09</td><td>3</td><td>2</td><td>2</td></tr><tr><td>2013-08</td><td>27</td><td>502</td><td>148</td></tr><tr><td>2013-07</td><td>1</td><td>21</td><td>7</td></tr><tr><td>2013-05</td><td>3</td><td>2</td><td>2</td></tr><tr><td>2013-04</td><td>4</td><td>29</td><td>7</td></tr><tr><td>2013-03</td><td>13</td><td>121</td><td>4</td></tr><tr><td>2012-11</td><td>19</td><td>1032</td><td>234</td></tr></table></div><img src="commits_by_year_month.png" alt="Commits by year/month"><h2 id="commits_by_year"><a href="#commits_by_year">Commits by Year</a></h2><div class="vtable"><table><tr><th>Year</th><th>Commits (% of all)</th><th>Lines added</th><th>Lines removed</th></tr><tr><td>2017</td><td>3 (1.86%)</td><td>16</td><td>51</td></tr><tr><td>2016</td><td>19 (11.80%)</td><td>571</td><td>123</td></tr><tr><td>2015</td><td>30 (18.63%)</td><td>3935</td><td>3460</td></tr><tr><td>2014</td><td>39 (24.22%)</td><td>520</td><td>163</td></tr><tr><td>2013</td><td>51 (31.68%)</td><td>677</td><td>170</td></tr><tr><td>2012</td><td>19 (11.80%)</td><td>1032</td><td>234</td></tr></table></div><img src="commits_by_year.png" alt="Commits by Year"><h2 id="commits_by_timezone"><a href="#commits_by_timezone">Commits by Timezone</a></h2><table><tr><th>Timezone</th><th>Commits</th></tr><tr><th>-0800</th><td style="background-color: rgb(140, 0, 0)">5</td></tr><tr><th>-0700</th><td style="background-color: rgb(188, 0, 0)">23</td></tr><tr><th>-0500</th><td style="background-color: rgb(151, 0, 0)">9</td></tr><tr><th>-0400</th><td style="background-color: rgb(148, 0, 0)">8</td></tr><tr><th>+0000</th><td style="background-color: rgb(132, 0, 0)">2</td></tr><tr><th>+0100</th><td style="background-color: rgb(255, 0, 0)">48</td></tr><tr><th>+0200</th><td style="background-color: rgb(188, 0, 0)">23</td></tr><tr><th>+0300</th><td style="background-color: rgb(140, 0, 0)">5</td></tr><tr><th>+0400</th><td style="background-color: rgb(207, 0, 0)">30</td></tr><tr><th>+0900</th><td style="background-color: rgb(143, 0, 0)">6</td></tr><tr><th>+1000</th><td style="background-color: rgb(129, 0, 0)">1</td></tr><tr><th>+1100</th><td style="background-color: rgb(129, 0, 0)">1</td></tr></table></body></html>';
const authorsHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GitStats - FizzBuzzEnterpriseEdition</title><link rel="stylesheet" href="gitstats.css" type="text/css"><meta name="generator" content="GitStats 55c5c28"><script type="text/javascript" src="sortable.js"></script></head><body><h1>Authors</h1><div class="nav"><ul><li><a href="index.html">General</a></li><li><a href="activity.html">Activity</a></li><li><a href="authors.html">Authors</a></li><li><a href="files.html">Files</a></li><li><a href="lines.html">Lines</a></li><li><a href="tags.html">Tags</a></li></ul></div><h2 id="list_of_authors"><a href="#list_of_authors">List of Authors</a></h2><table class="authors sortable" id="authors"><tr><th>Author</th><th>Commits (%)</th><th>+ lines</th><th>- lines</th><th>First commit</th><th>Last commit</th><th class="unsortable">Age</th><th>Active days</th><th># by commits</th></tr><tr><td>Dmitry-Me</td><td>30 (18.63%)</td><td>667</td><td>185</td><td>2013-08-02</td><td>2015-05-16</td><td>652 days, 2:23:00</td><td>18</td><td>1</td></tr><tr><td>Mikael Kragbæk</td><td>29 (18.01%)</td><td>1673</td><td>3079</td><td>2012-11-23</td><td>2015-10-26</td><td>1066 days, 17:51:01</td><td>17</td><td>2</td></tr><tr><td>emiln</td><td>14 (8.70%)</td><td>438</td><td>204</td><td>2013-08-13</td><td>2015-04-19</td><td>614 days, 3:29:44</td><td>7</td><td>3</td></tr><tr><td>Emil Holm Nauerby</td><td>14 (8.70%)</td><td>23</td><td>1</td><td>2015-05-26</td><td>2017-02-04</td><td>619 days, 17:58:50</td><td>8</td><td>4</td></tr><tr><td>Vojtech Krasa</td><td>7 (4.35%)</td><td>738</td><td>448</td><td>2015-04-22</td><td>2016-07-26</td><td>460 days, 23:08:49</td><td>5</td><td>5</td></tr><tr><td>Mikkel Kjeldsen</td><td>7 (4.35%)</td><td>28</td><td>557</td><td>2012-11-24</td><td>2012-11-25</td><td>16:02:54</td><td>2</td><td>6</td></tr><tr><td>Joe Zeng</td><td>7 (4.35%)</td><td>80</td><td>44</td><td>2013-08-07</td><td>2015-03-12</td><td>582 days, 2:40:38</td><td>4</td><td>7</td></tr><tr><td>bstempi</td><td>6 (3.73%)</td><td>193</td><td>16</td><td>2014-03-04</td><td>2014-03-05</td><td>15:10:45</td><td>2</td><td>8</td></tr><tr><td>Cameron Mellor</td><td>6 (3.73%)</td><td>24</td><td>59</td><td>2016-10-19</td><td>2016-10-20</td><td>18:49:00</td><td>2</td><td>9</td></tr><tr><td>mattn</td><td>5 (3.11%)</td><td>105</td><td>0</td><td>2013-03-11</td><td>2013-03-19</td><td>7 days, 5:14:09</td><td>2</td><td>10</td></tr><tr><td>Wiktor Mociun</td><td>3 (1.86%)</td><td>3</td><td>3</td><td>2014-03-25</td><td>2014-03-25</td><td>1:02:46</td><td>1</td><td>11</td></tr><tr><td>Wes Freeman</td><td>3 (1.86%)</td><td>7</td><td>1</td><td>2014-02-18</td><td>2014-02-18</td><td>0:07:32</td><td>1</td><td>12</td></tr><tr><td>Arve Skogvold</td><td>3 (1.86%)</td><td>294</td><td>2</td><td>2015-10-30</td><td>2015-10-30</td><td>1:50:37</td><td>1</td><td>13</td></tr><tr><td>d</td><td>2 (1.24%)</td><td>21</td><td>7</td><td>2013-04-12</td><td>2013-04-12</td><td>0:07:20</td><td>1</td><td>14</td></tr><tr><td>avl93</td><td>2 (1.24%)</td><td>2</td><td>2</td><td>2013-05-07</td><td>2013-05-07</td><td>0:00:37</td><td>1</td><td>15</td></tr><tr><td>Oleg Efimov</td><td>2 (1.24%)</td><td>5</td><td>2</td><td>2014-03-12</td><td>2014-03-12</td><td>0:01:55</td><td>1</td><td>16</td></tr><tr><td>Alex Fernández</td><td>2 (1.24%)</td><td>65</td><td>65</td><td>2014-02-03</td><td>2014-03-07</td><td>31 days, 22:11:49</td><td>2</td><td>17</td></tr><tr><td>torazuka</td><td>1 (0.62%)</td><td>1</td><td>1</td><td>2013-03-11</td><td>2013-03-11</td><td>0:00:00</td><td>1</td><td>18</td></tr><tr><td>stevepeak</td><td>1 (0.62%)</td><td>23</td><td>1</td><td>2014-10-03</td><td>2014-10-03</td><td>0:00:00</td><td>1</td><td>19</td></tr><tr><td>rr-</td><td>1 (0.62%)</td><td>71</td><td>29</td><td>2016-09-01</td><td>2016-09-01</td><td>0:00:00</td><td>1</td><td>20</td></tr></table><p class="moreauthors">These didn\'t make it to the top: rheber, cmccall, Willem Mulder, Tim Kellogg, Thomas Rooney, Steve Peak, Stephen Beitzel, Sergey A. Savenko, Ryan Haining, Pete Haughie, Ollie, Kristian Perkins, Julian Wachholz, Harrison Gentry, George Kankava, Dennis Mojado</p><h2 id="cumulated_added_lines_of_code_per_author"><a href="#cumulated_added_lines_of_code_per_author">Cumulated Added Lines of Code per Author</a></h2><img src="lines_of_code_by_author.png" alt="Lines of code per Author"><p class="moreauthors">Only top 20 authors shown</p><h2 id="commits_per_author"><a href="#commits_per_author">Commits per Author</a></h2><img src="commits_by_author.png" alt="Commits per Author"><p class="moreauthors">Only top 20 authors shown</p><h2 id="author_of_month"><a href="#author_of_month">Author of Month</a></h2><table class="sortable" id="aom"><tr><th>Month</th><th>Author</th><th>Commits (%)</th><th class="unsortable">Next top 5</th><th>Number of authors</th></tr><tr><td>2017-02</td><td>Tim Kellogg</td><td>1 (50.00% of 2)</td><td>Emil Holm Nauerby</td><td>2</td></tr><tr><td>2017-01</td><td>Emil Holm Nauerby</td><td>1 (100.00% of 1)</td><td></td><td>1</td></tr><tr><td>2016-11</td><td>Emil Holm Nauerby</td><td>1 (100.00% of 1)</td><td></td><td>1</td></tr><tr><td>2016-10</td><td>Cameron Mellor</td><td>6 (100.00% of 6)</td><td></td><td>1</td></tr><tr><td>2016-09</td><td>rr-</td><td>1 (50.00% of 2)</td><td>Emil Holm Nauerby</td><td>2</td></tr><tr><td>2016-08</td><td>Emil Holm Nauerby</td><td>5 (100.00% of 5)</td><td></td><td>1</td></tr><tr><td>2016-07</td><td>Vojtech Krasa</td><td>3 (75.00% of 4)</td><td>Emil Holm Nauerby</td><td>2</td></tr><tr><td>2016-01</td><td>George Kankava</td><td>1 (100.00% of 1)</td><td></td><td>1</td></tr><tr><td>2015-11</td><td>Pete Haughie</td><td>1 (100.00% of 1)</td><td></td><td>1</td></tr><tr><td>2015-10</td><td>Arve Skogvold</td><td>3 (50.00% of 6)</td><td>Mikael Kragbæk, Kristian Perkins</td><td>3</td></tr><tr><td>2015-08</td><td>Mikael Kragbæk</td><td>1 (100.00% of 1)</td><td></td><td>1</td></tr><tr><td>2015-07</td><td>Emil Holm Nauerby</td><td>2 (66.67% of 3)</td><td>Mikael Kragbæk</td><td>2</td></tr><tr><td>2015-05</td><td>Vojtech Krasa</td><td>3 (37.50% of 8)</td><td>Emil Holm Nauerby, cmccall, Thomas Rooney, Dmitry-Me</td><td>5</td></tr><tr><td>2015-04</td><td>emiln</td><td>1 (50.00% of 2)</td><td>Vojtech Krasa</td><td>2</td></tr><tr><td>2015-03</td><td>emiln</td><td>5 (55.56% of 9)</td><td>Dmitry-Me, Joe Zeng</td><td>3</td></tr><tr><td>2014-12</td><td>rheber</td><td>1 (50.00% of 2)</td><td>Dmitry-Me</td><td>2</td></tr><tr><td>2014-10</td><td>stevepeak</td><td>1 (50.00% of 2)</td><td>Steve Peak</td><td>2</td></tr><tr><td>2014-09</td><td>Ryan Haining</td><td>1 (50.00% of 2)</td><td>Dmitry-Me</td><td>2</td></tr><tr><td>2014-08</td><td>Dmitry-Me</td><td>8 (88.89% of 9)</td><td>Ollie</td><td>2</td></tr><tr><td>2014-07</td><td>Dmitry-Me</td><td>3 (100.00% of 3)</td><td></td><td>1</td></tr><tr><td>2014-03</td><td>bstempi</td><td>6 (40.00% of 15)</td><td>emiln, Wiktor Mociun, Oleg Efimov, Alex Fernández</td><td>5</td></tr><tr><td>2014-02</td><td>Wes Freeman</td><td>3 (50.00% of 6)</td><td>emiln, Alex Fernández</td><td>3</td></tr><tr><td>2013-09</td><td>Stephen Beitzel</td><td>1 (33.33% of 3)</td><td>Mikael Kragbæk, Dennis Mojado</td><td>3</td></tr><tr><td>2013-08</td><td>Dmitry-Me</td><td>13 (48.15% of 27)</td><td>Joe Zeng, Mikael Kragbæk, emiln, Willem Mulder</td><td>5</td></tr><tr><td>2013-07</td><td>Mikael Kragbæk</td><td>1 (100.00% of 1)</td><td></td><td>1</td></tr><tr><td>2013-05</td><td>avl93</td><td>2 (66.67% of 3)</td><td>Mikael Kragbæk</td><td>2</td></tr><tr><td>2013-04</td><td>d</td><td>2 (50.00% of 4)</td><td>Mikael Kragbæk, Harrison Gentry</td><td>3</td></tr><tr><td>2013-03</td><td>mattn</td><td>5 (38.46% of 13)</td><td>Mikael Kragbæk, torazuka, Sergey A. Savenko, Julian Wachholz</td><td>5</td></tr><tr><td>2012-11</td><td>Mikael Kragbæk</td><td>12 (63.16% of 19)</td><td>Mikkel Kjeldsen</td><td>2</td></tr></table><h2 id="author_of_year"><a href="#author_of_year">Author of Year</a></h2><table class="sortable" id="aoy"><tr><th>Year</th><th>Author</th><th>Commits (%)</th><th class="unsortable">Next top 5</th><th>Number of authors</th></tr><tr><td>2017</td><td>Emil Holm Nauerby</td><td>2 (66.67% of 3)</td><td>Tim Kellogg</td><td>2</td></tr><tr><td>2016</td><td>Emil Holm Nauerby</td><td>8 (42.11% of 19)</td><td>Cameron Mellor, Vojtech Krasa, rr-, George Kankava</td><td>5</td></tr><tr><td>2015</td><td>emiln</td><td>6 (20.00% of 30)</td><td>Vojtech Krasa, Mikael Kragbæk, Emil Holm Nauerby, Dmitry-Me, Arve Skogvold</td><td>11</td></tr><tr><td>2014</td><td>Dmitry-Me</td><td>13 (33.33% of 39)</td><td>bstempi, emiln, Wiktor Mociun, Wes Freeman, Oleg Efimov</td><td>12</td></tr><tr><td>2013</td><td>Mikael Kragbæk</td><td>13 (25.49% of 51)</td><td>Dmitry-Me, Joe Zeng, mattn, emiln, d</td><td>14</td></tr><tr><td>2012</td><td>Mikael Kragbæk</td><td>12 (63.16% of 19)</td><td>Mikkel Kjeldsen</td><td>2</td></tr></table><h2 id="commits_by_domains"><a href="#commits_by_domains">Commits by Domains</a></h2><div class="vtable"><table><tr><th>Domains</th><th>Total (%)</th></tr><tr><th>gmail.com</th><td>35 (21.74%)</td></tr><tr><th>kragbaek.com</th><td>29 (18.01%)</td></tr><tr><th>nauerby.com</th><td>27 (16.77%)</td></tr><tr><th>yandex.ru</th><td>20 (12.42%)</td></tr><tr><th>users.noreply.github.com</th><td>10 (6.21%)</td></tr><tr><th>joezeng.com</th><td>7 (4.35%)</td></tr><tr><th>cameronmellor.net</th><td>6 (3.73%)</td></tr><tr><th>skeweredrook.com</th><td>3 (1.86%)</td></tr><tr><th>stevepeak.net</th><td>2 (1.24%)</td></tr><tr><th>statoil.com</th><td>2 (1.24%)</td></tr></table></div><img src="domains.png" alt="Commits by Domains"></body></html>';
const filesHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GitStats - FizzBuzzEnterpriseEdition</title><link rel="stylesheet" href="gitstats.css" type="text/css"><meta name="generator" content="GitStats 55c5c28"><script type="text/javascript" src="sortable.js"></script></head><body><h1>Files</h1><div class="nav"><ul><li><a href="index.html">General</a></li><li><a href="activity.html">Activity</a></li><li><a href="authors.html">Authors</a></li><li><a href="files.html">Files</a></li><li><a href="lines.html">Lines</a></li><li><a href="tags.html">Tags</a></li></ul></div><dl><dt>Total files</dt><dd>102</dd><dt>Total lines</dt><dd>2550</dd><dt>Average file size</dt><dd>1427.64 bytes</dd></dl><h2 id="file_count_by_date"><a href="#file_count_by_date">File count by date</a></h2><img src="files_by_date.png" alt="Files by Date"><h2 id="extensions"><a href="#extensions">Extensions</a></h2><table class="sortable" id="ext"><tr><th>Extension</th><th>Files (%)</th><th>Lines (%)</th><th>Lines/file</th></tr><tr><td></td><td>3 (2.94%)</td><td>362 (14.20%)</td><td>120</td></tr><tr><td>bat</td><td>1 (0.98%)</td><td>90 (3.53%)</td><td>90</td></tr><tr><td>gradle</td><td>2 (1.96%)</td><td>29 (1.14%)</td><td>14</td></tr><tr><td>jar</td><td>1 (0.98%)</td><td>308 (12.08%)</td><td>308</td></tr><tr><td>java</td><td>89 (87.25%)</td><td>1892 (74.20%)</td><td>21</td></tr><tr><td>md</td><td>2 (1.96%)</td><td>49 (1.92%)</td><td>24</td></tr><tr><td>properties</td><td>1 (0.98%)</td><td>6 (0.24%)</td><td>6</td></tr><tr><td>xml</td><td>2 (1.96%)</td><td>113 (4.43%)</td><td>56</td></tr><tr><td>yml</td><td>1 (0.98%)</td><td>7 (0.27%)</td><td>7</td></tr></table></body></html>';
const linesHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GitStats - FizzBuzzEnterpriseEdition</title><link rel="stylesheet" href="gitstats.css" type="text/css"><meta name="generator" content="GitStats 55c5c28"><script type="text/javascript" src="sortable.js"></script></head><body><h1>Lines</h1><div class="nav"><ul><li><a href="index.html">General</a></li><li><a href="activity.html">Activity</a></li><li><a href="authors.html">Authors</a></li><li><a href="files.html">Files</a></li><li><a href="lines.html">Lines</a></li><li><a href="tags.html">Tags</a></li></ul></div><dl><dt>Total lines</dt><dd>2550</dd></dl><h2 id="lines_of_code"><a href="#lines_of_code">Lines of Code</a></h2><img src="lines_of_code.png" alt="Lines of Code"></body></html>';
const tagsHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GitStats - FizzBuzzEnterpriseEdition</title><link rel="stylesheet" href="gitstats.css" type="text/css"><meta name="generator" content="GitStats 55c5c28"><script type="text/javascript" src="sortable.js"></script></head><body><h1>Tags</h1><div class="nav"><ul><li><a href="index.html">General</a></li><li><a href="activity.html">Activity</a></li><li><a href="authors.html">Authors</a></li><li><a href="files.html">Files</a></li><li><a href="lines.html">Lines</a></li><li><a href="tags.html">Tags</a></li></ul></div><dl><dt>Total tags</dt><dd>0</dd></dl><table class="tags"><tr><th>Name</th><th>Date</th><th>Commits</th><th>Authors</th></tr></table></body></html>';

const parseIndex = () => {
    const dom = new JSDOM(indexHtml);
    const doc = dom.window.document;

    const dtElements = doc.querySelectorAll("dt");
    const ddElements = doc.querySelectorAll("dd");

    const indexFields = [];
    const index = {};

    dtElements.forEach(dtElement => {
        indexFields.push(dtElement.textContent);
    });
    ddElements.forEach((ddElement, i) => {
        index[indexFields[i]] = ddElement.textContent;
    });

    return index;
};

const parseActivity = () => {
    const dom = new JSDOM(activityHtml);
    const doc = dom.window.document;

    const h2Elements = doc.querySelectorAll("h2");
    const tableElements = doc.querySelectorAll("table");

    const activityFields = [];
    const activity = {};

    h2Elements.forEach(h2Element => {
        activityFields.push(h2Element.textContent);
    });

    const weeklyActivityLast32Weeks = {};
    tableElements[0].querySelectorAll("td").forEach((tdElement, i) => {
        if (i < 32) {
            weeklyActivityLast32Weeks[32-i] = tdElement.textContent;
        }
    });
    activity[activityFields[0]] = weeklyActivityLast32Weeks;

    const hourlyActivity = {};
    tableElements[1].querySelectorAll("td").forEach((tdElement, i) => {
        if (i < 24) {
            hourlyActivity[i%24] = {};
            hourlyActivity[i%24].commits = tdElement.textContent;
        } else {
            hourlyActivity[i%24].percent = tdElement.textContent;
        }
    });
    activity[activityFields[1]] = hourlyActivity;

    const dailyActivity = {};
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    tableElements[2].querySelectorAll("td").forEach((tdElement, i) => {
        dailyActivity[daysOfWeek[i]] = tdElement.textContent;
    });
    activity[activityFields[2]] = dailyActivity;

    const hourOfWeek = {};
    daysOfWeek.forEach(day => {
        hourOfWeek[day] = {};
    });
    tableElements[3].querySelectorAll("td").forEach((tdElement, i) => {
        if (i < 24) {
            hourOfWeek[daysOfWeek[0]][i%24] = tdElement.textContent;
        } else if (i < 48) {
            hourOfWeek[daysOfWeek[1]][i%24] = tdElement.textContent;
        } else if (i < 72) {
            hourOfWeek[daysOfWeek[2]][i%24] = tdElement.textContent;
        } else if (i < 96) {
            hourOfWeek[daysOfWeek[3]][i%24] = tdElement.textContent;
        } else if (i < 120) {
            hourOfWeek[daysOfWeek[4]][i%24] = tdElement.textContent;
        } else if (i < 144) {
            hourOfWeek[daysOfWeek[5]][i%24] = tdElement.textContent;
        } else {
            hourOfWeek[daysOfWeek[6]][i%24] = tdElement.textContent;
        }
    });
    activity[activityFields[3]] = hourOfWeek;

    const monthOfYear = {};
    let monthNumber;
    tableElements[4].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%2 === 0) {
            monthNumber = tdElement.textContent;
        } else {
            monthOfYear[monthNumber] = tdElement.textContent;
        }
    });
    activity[activityFields[4]] = monthOfYear;

    const yearAndMonth = {};
    let month;
    tableElements[5].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%4 === 0) {
            month = tdElement.textContent;
            yearAndMonth[month] = {};
        } else if (i%4 === 1) {
            yearAndMonth[month].commits = tdElement.textContent;
        } else if (i%4 === 2) {
            yearAndMonth[month].linesAdded = tdElement.textContent;
        } else {
            yearAndMonth[month].linesRemoved = tdElement.textContent;
        }
    });
    activity[activityFields[5]] = yearAndMonth;

    const year = {};
    let currentYear;
    tableElements[6].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%4 === 0) {
            currentYear = tdElement.textContent;
            year[currentYear] = {};
        } else if (i%4 === 1) {
            year[currentYear].commitsAndPercentOfAll = tdElement.textContent;
        } else if (i%4 === 2) {
            year[currentYear].linesAdded = tdElement.textContent;
        } else {
            year[currentYear].linesRemoved = tdElement.textContent;
        }
    });
    activity[activityFields[6]] = year;

    const timezone = {};
    const timezones = [];
    tableElements[7].querySelectorAll("th").forEach((thElement, i) => {
        if (i > 1) {
            timezones.push(thElement.textContent);
        }
    });
    tableElements[7].querySelectorAll("td").forEach((tdElement, i) => {
        timezone[timezones[i]] = tdElement.textContent;
    });
    activity[activityFields[7]] = timezone;

    return activity;
};

const parseAuthors = () => {
    const dom = new JSDOM(authorsHtml);
    const doc = dom.window.document;

    const h2Elements = doc.querySelectorAll("h2");
    const tableElements = doc.querySelectorAll("table");

    const authorsFields = [];
    const authors = {};

    h2Elements.forEach((h2Element, i) => {
        if (i !== 1 && i !== 2) {
            authorsFields.push(h2Element.textContent);
        }
    });

    const authorsList = [];
    const authorsListHeadings = [];
    let currentAuthor;
    tableElements[0].querySelectorAll("th").forEach(thElement => {
        authorsListHeadings.push(thElement.textContent);
    });
    tableElements[0].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%9 === 0) {
            currentAuthor = {};
            currentAuthor[authorsListHeadings[0]] = tdElement.textContent;
        } else if (i%9 === 1) {
            currentAuthor[authorsListHeadings[1]] = tdElement.textContent;
        } else if (i%9 === 2) {
            currentAuthor[authorsListHeadings[2]] = tdElement.textContent;
        } else if (i%9 === 3) {
            currentAuthor[authorsListHeadings[3]] = tdElement.textContent;
        } else if (i%9 === 4) {
            currentAuthor[authorsListHeadings[4]] = tdElement.textContent;
        } else if (i%9 === 5) {
            currentAuthor[authorsListHeadings[5]] = tdElement.textContent;
        } else if (i%9 === 6) {
            currentAuthor[authorsListHeadings[6]] = tdElement.textContent;
        } else if (i%9 === 7) {
            currentAuthor[authorsListHeadings[7]] = tdElement.textContent;
        } else if (i%9 === 8) {
            currentAuthor[authorsListHeadings[8]] = tdElement.textContent;
            authorsList.push(currentAuthor);
        }
    });
    authors[authorsFields[0]] = authorsList;

    const authorOfMonth = [];
    const authorOfMonthHeadings = [];
    let currentMonth;
    tableElements[1].querySelectorAll("th").forEach(thElement => {
        authorOfMonthHeadings.push(thElement.textContent);
    });
    tableElements[1].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%5 === 0) {
            currentMonth = {};
            currentMonth[authorOfMonthHeadings[0]] = tdElement.textContent;
        } else if (i%5 === 1) {
            currentMonth[authorOfMonthHeadings[1]] = tdElement.textContent;
        } else if (i%5 === 2) {
            currentMonth[authorOfMonthHeadings[2]] = tdElement.textContent;
        } else if (i%5 === 3) {
            currentMonth[authorOfMonthHeadings[3]] = tdElement.textContent;
        } else if (i%5 === 4) {
            currentMonth[authorOfMonthHeadings[4]] = tdElement.textContent;
            authorOfMonth.push(currentMonth);
        }
    });
    authors[authorsFields[1]] = authorOfMonth;

    const authorOfYear = [];
    const authorOfYearHeadings = [];
    let currentYear;
    tableElements[2].querySelectorAll("th").forEach(thElement => {
        authorOfYearHeadings.push(thElement.textContent);
    });
    tableElements[2].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%5 === 0) {
            currentYear = {};
            currentYear[authorOfYearHeadings[0]] = tdElement.textContent;
        } else if (i%5 === 1) {
            currentYear[authorOfYearHeadings[1]] = tdElement.textContent;
        } else if (i%5 === 2) {
            currentYear[authorOfYearHeadings[2]] = tdElement.textContent;
        } else if (i%5 === 3) {
            currentYear[authorOfYearHeadings[3]] = tdElement.textContent;
        } else if (i%5 === 4) {
            currentYear[authorOfYearHeadings[4]] = tdElement.textContent;
            authorOfYear.push(currentYear);
        }
    });
    authors[authorsFields[2]] = authorOfYear;

    const domains = [];
    const domainsHeadings = [];
    const domainsNames = [];
    let currentDomain;
    tableElements[3].querySelectorAll("th").forEach((thElement, i) => {
        if (i < 2) {
            domainsHeadings.push(thElement.textContent);
        } else {
            domainsNames.push(thElement.textContent);
        }
    });
    tableElements[3].querySelectorAll("td").forEach((tdElement, i) => {
        currentDomain = {};
        currentDomain[domainsHeadings[0]] = domainsNames[i];
        currentDomain[domainsHeadings[1]] = tdElement.textContent;
        domains.push(currentDomain);
    });
    authors[authorsFields[3]] = domains;

    return authors;
};

const parseFiles = () => {
    const dom = new JSDOM(filesHtml);
    const doc = dom.window.document;

    const filesFields = [];
    const files = {};

    const dtElements = doc.querySelectorAll("dt");
    const ddElements = doc.querySelectorAll("dd");

    dtElements.forEach(dtElement => {
        filesFields.push(dtElement.textContent);
    });
    ddElements.forEach((ddElement, i) => {
        files[filesFields[i]] = ddElement.textContent;
    });

    const h2Elements = doc.querySelectorAll("h2");
    filesFields.push(h2Elements[1].textContent);

    const extensions = [];
    const extensionsHeadings = [];
    let currentExtension;
    const tableElements = doc.querySelectorAll("table");
    tableElements[0].querySelectorAll("th").forEach(thElement => {
        extensionsHeadings.push(thElement.textContent);
    });
    tableElements[0].querySelectorAll("td").forEach((tdElement, i) => {
       if (i%4 === 0) {
           currentExtension = {};
           currentExtension[extensionsHeadings[0]] = tdElement.textContent;
       } else if (i%4 === 1) {
           currentExtension[extensionsHeadings[1]] = tdElement.textContent;
       } else if (i%4 === 2) {
           currentExtension[extensionsHeadings[2]] = tdElement.textContent;
       } else if (i%4 === 3) {
           currentExtension[extensionsHeadings[3]] = tdElement.textContent;
           extensions.push(currentExtension);
       }
    });
    files[filesFields[3]] = extensions;

    return files;
};

const parseLines = () => {
    const dom = new JSDOM(linesHtml);
    const doc = dom.window.document;

    const linesFields = [];
    const lines = {};

    const dtElements = doc.querySelectorAll("dt");
    const ddElements = doc.querySelectorAll("dd");

    dtElements.forEach(dtElement => {
        linesFields.push(dtElement.textContent);
    });
    ddElements.forEach((ddElement, i) => {
        lines[linesFields[i]] = ddElement.textContent;
    });

    return lines;
};

const parseTags = () => {
    const dom = new JSDOM(tagsHtml);
    const doc = dom.window.document;

    const tagsFields = [];
    const tags = {};

    const dtElements = doc.querySelectorAll("dt");
    const ddElements = doc.querySelectorAll("dd");

    dtElements.forEach(dtElement => {
        tagsFields.push(dtElement.textContent);
    });
    ddElements.forEach((ddElement, i) => {
        tags[tagsFields[i]] = ddElement.textContent;
    });

    const tagsList = [];
    const tagsListHeadings = [];
    let currentTag;
    const tableElements = doc.querySelectorAll("table");
    tableElements[0].querySelectorAll("th").forEach(thElement => {
        tagsListHeadings.push(thElement.textContent);
    });
    tableElements[0].querySelectorAll("td").forEach((tdElement, i) => {
        if (i%4 === 0) {
            currentTag = {};
            currentTag[tagsListHeadings[0]] = tdElement.textContent;
        } else if (i%4 === 1) {
            currentTag[tagsListHeadings[1]] = tdElement.textContent;
        } else if (i%4 === 2) {
            currentTag[tagsListHeadings[2]] = tdElement.textContent;
        } else if (i%4 === 3) {
            currentTag[tagsListHeadings[3]] = tdElement.textContent;
            tagsList.push(currentTag);
        }
    });
    tags["tags"] = tagsList;

    return tags;
};

const parse = () => {
    const index = parseIndex();
    const activity = parseActivity();
    const authors = parseAuthors();
    const files = parseFiles();
    const lines = parseLines();
    const tags = parseTags();
    return {
        index,
        activity,
        authors,
        files,
        lines,
        tags
    };
};

fs.writeFileSync("metadata.json", JSON.stringify(parse()));
