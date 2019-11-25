#!/bin/bash
# takes as argument the path to the local repo directory
# creates file_authors.txt which has filename followed by lines of the authors of the current code file
wd=$(pwd)
cd "$1"
array=()
readarray -d '' array < <(find . -name "*.java")
{
  for file in $array
  do
    echo $file
    git blame --line-porcelain $file | sed -n 's/^author //p' | sort | uniq
  done
} > file_authors.txt
cp file_authors.txt "$wd/file_authors.txt"
rm file_authors.txt
cd $pwd