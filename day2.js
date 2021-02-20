var fs = require("fs");
var text = fs.readFileSync("./inputs/input2.txt") + '';
var textByLine = text.split("\n");

var passwordLines = Array.from(textByLine);

//	16-18 h: hhhhhhhhhhhhhhhhhh

let regexpRanges = /(?<min>[0-9]*)-(?<max>[0-9]*) (?<letter>[a-zA-Z]*): (?<password>[a-zA-Z^\\]*)/

var counter = 0;

// for (let i =0; i < passwordLines.length; i++){
// 	let match = regexpRanges.exec(passwordLines[i])
// 	console.log(match)

// 	let reqs = new RegExp(`[${match.groups.letter}]{${match.groups.min},${match.groups.max}}`,'g')

// 	if (reqs.test(match.groups.password)) {
// 		counter++
// 		console.log(`Found match!`)
// 	}
// }

for (let i =0; i < passwordLines.length; i++){
	let match = regexpRanges.exec(passwordLines[i])
	let currentPassword = match.groups.password
	letterCounter = 0
	for (let j = 0; j < currentPassword.length; j++) {
		if (currentPassword.letterAt(j) == match.groups.letter)
			letterCounter++
	}
	if (letterCounter > match.groups.min && letterCounter < match.groups.max)
		counter++
} 

console.log(counter)