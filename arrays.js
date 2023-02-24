//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorcopy = faveColors
let colorCopy =faveColors.slice(0,colorcopy.length)
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push("yellow")
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
let middlenums = numbers
middlenums.splice(0,4);{
  console.log ("middle numbers")
}
//or
 middlenums.push()
 middlenums.shift ()

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
let pullingnumbers = answers 

for (let i = 0; i < bigOrSmallArray.length; i++)
if (bigOrSmallArray.length > 100 ){
  console.log("is greater then 100")
} for (let key in bigOrSmallArray){
answers.push(key <=== 100)
return answers 
}




