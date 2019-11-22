set terminal png transparent size 640,240
set size 1.0,1.0

set terminal png transparent size 640,480
set output 'commits_by_author.png'
set key left top
set yrange [0:]
set xdata time
set timefmt "%s"
set format x "%Y-%m-%d"
set grid y
set ylabel "Commits"
set xtics rotate
set bmargin 6
plot 'commits_by_author.dat' using 1:2 title "Dmitry-Me" w lines, 'commits_by_author.dat' using 1:3 title "Mikael Kragbæk" w lines, 'commits_by_author.dat' using 1:4 title "emiln" w lines, 'commits_by_author.dat' using 1:5 title "Emil Holm Nauerby" w lines, 'commits_by_author.dat' using 1:6 title "Vojtech Krasa" w lines, 'commits_by_author.dat' using 1:7 title "Mikkel Kjeldsen" w lines, 'commits_by_author.dat' using 1:8 title "Joe Zeng" w lines, 'commits_by_author.dat' using 1:9 title "bstempi" w lines, 'commits_by_author.dat' using 1:10 title "Cameron Mellor" w lines, 'commits_by_author.dat' using 1:11 title "mattn" w lines, 'commits_by_author.dat' using 1:12 title "Wiktor Mociun" w lines, 'commits_by_author.dat' using 1:13 title "Wes Freeman" w lines, 'commits_by_author.dat' using 1:14 title "Arve Skogvold" w lines, 'commits_by_author.dat' using 1:15 title "d" w lines, 'commits_by_author.dat' using 1:16 title "avl93" w lines, 'commits_by_author.dat' using 1:17 title "Oleg Efimov" w lines, 'commits_by_author.dat' using 1:18 title "Alex Fernández" w lines, 'commits_by_author.dat' using 1:19 title "torazuka" w lines, 'commits_by_author.dat' using 1:20 title "stevepeak" w lines, 'commits_by_author.dat' using 1:21 title "rr-" w lines
