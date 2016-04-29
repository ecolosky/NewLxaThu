import os
import sys

file = sys.argv[1]
imgName = ""
print "["
for line in open(file):
    if "img" in line:
        start = line.find('"')
        start += 1
        i = start
        while line[i] != '"':
            i+=1
        imgName = line[start:i]
        print'{"img":"img/UsToday/'+ imgName + '",'
        print '"description":""},'
print "]"
