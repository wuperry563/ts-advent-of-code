import * as fs from 'fs-extra'
import * as readline from 'readline'

let total : number = 0

function readLinesFromFile(filePath: string): void {

	const fileStream = fs.createReadStream(filePath);
	const rl = readline.createInterface({
	  input: fileStream,
	  crlfDelay: Infinity,
	});
  
	rl.on('line', (line) => {
	  // Process each line here
	  const regex = /\d/g
	  const numArr = line.match(regex)
	  let numString : string = ""
	  if(numArr.length == 1){
		numString =  numArr[0]+""+numArr[0]
	  }
	  else{
		numString =  numArr[0]+""+numArr[numArr.length-1]
	  }
	  total += parseInt(numString)

	  console.log(line);
	});
  
	rl.on('close', () => {
	  // Handle the end of the file
	  console.log('File reading complete.');
	  console.log(`total = ${total}`)
	});
  }
  
  // Replace 'path/to/your/file.txt' with the actual path to your file
  const filePath = './day1.txt';
  readLinesFromFile(filePath);