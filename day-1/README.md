# Day 1

## Problem Statement:

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2  
pqr3stu8vwx  
a1b2c3d4e5f  
treb7uchet  

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

## Gotchas and watch-outs
1. A line can have 1 or more digits, and we only need the last digit.
1. Since it's possible that a line can have only 1 number, we need to be able to accomodate taking first and last digit 
1. We need to concatenate (not add) the first and last numbers together to form a number, THEN add that to the total. 