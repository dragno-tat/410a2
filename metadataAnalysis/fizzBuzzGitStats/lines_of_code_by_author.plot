set terminal png transparent size 640,240
set size 1.0,1.0

set terminal png transparent size 640,480
set output 'lines_of_code_by_author.png'
set key left top
set yrange [0:]
set xdata time
set timefmt "%s"
set format x "%Y-%m-%d"
set grid y
set ylabel "Lines"
set xtics rotate
set bmargin 6
plot 'lines_of_code_by_author.dat' using 1:2 title "Dmitry-Me" w lines, 'lines_of_code_by_author.dat' using 1:3 title "Mikael Kragbæk" w lines, 'lines_of_code_by_author.dat' using 1:4 title "emiln" w lines, 'lines_of_code_by_author.dat' using 1:5 title "Emil Holm Nauerby" w lines, 'lines_of_code_by_author.dat' using 1:6 title "Vojtech Krasa" w lines, 'lines_of_code_by_author.dat' using 1:7 title "Mikkel Kjeldsen" w lines, 'lines_of_code_by_author.dat' using 1:8 title "Joe Zeng" w lines, 'lines_of_code_by_author.dat' using 1:9 title "bstempi" w lines, 'lines_of_code_by_author.dat' using 1:10 title "Cameron Mellor" w lines, 'lines_of_code_by_author.dat' using 1:11 title "mattn" w lines, 'lines_of_code_by_author.dat' using 1:12 title "Wiktor Mociun" w lines, 'lines_of_code_by_author.dat' using 1:13 title "Wes Freeman" w lines, 'lines_of_code_by_author.dat' using 1:14 title "Arve Skogvold" w lines, 'lines_of_code_by_author.dat' using 1:15 title "d" w lines, 'lines_of_code_by_author.dat' using 1:16 title "avl93" w lines, 'lines_of_code_by_author.dat' using 1:17 title "Oleg Efimov" w lines, 'lines_of_code_by_author.dat' using 1:18 title "Alex Fernández" w lines, 'lines_of_code_by_author.dat' using 1:19 title "torazuka" w lines, 'lines_of_code_by_author.dat' using 1:20 title "stevepeak" w lines, 'lines_of_code_by_author.dat' using 1:21 title "rr-" w lines
