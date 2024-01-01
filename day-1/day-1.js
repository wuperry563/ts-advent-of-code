"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var readline = require("readline");
var total = 0;
function readLinesFromFile(filePath) {
    var fileStream = fs.createReadStream(filePath);
    var rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    rl.on('line', function (line) {
        // Process each line here
        var regex = /\d/g;
        var numArr = line.match(regex);
        var numString = "";
        if (numArr.length == 1) {
            numString = numArr[0] + "" + numArr[0];
        }
        else {
            numString = numArr[0] + "" + numArr[numArr.length - 1];
        }
        total += parseInt(numString);
        console.log(line);
    });
    rl.on('close', function () {
        // Handle the end of the file
        console.log('File reading complete.');
        console.log("total = ".concat(total));
    });
}
// Replace 'path/to/your/file.txt' with the actual path to your file
var filePath = './day1.txt';
readLinesFromFile(filePath);
