var fs = require("fs");
var text = fs.readFileSync("./inputs/input1.txt") + '';
var textByLine = text.split("\n");

var nums = Array.from(textByLine);

//Convert str to int
for (i in nums)
	nums[i] = +nums[i];

//Sort descending
nums.sort((a, b) => b - a)

function getComponents (nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = nums.length-1; j > i; j--) {
			for (let k = nums.length-2; k > j; k--) {
				let sum = nums[i] + nums[j] + nums[k]
				if (sum == 2020) {
			    	console.log('Found match: %i + %i + %i', nums[i], nums[j], nums[k])
			    	console.log('Product = %i', nums[i] * nums[j] * nums[k])
			    	return
				} else if (sum > 2020) {
					break
				}
			}
		}
	}

}

getComponents(nums)