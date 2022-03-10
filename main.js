// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(numOne, numTwo){
    let sum = 0; 
    for (let i = numOne; i < numTwo; i++){ 
      if ((i % 2) !== 0) { 
      sum+=i; 
      } 
    } 
    return(sum); 
}

/* console.logs to test */
console.log(sumOfOdds(1,10));
console.log(sumOfOdds(-5, 10))
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arrayOne, arrayTwo){
    newArray = [];

for(let i = 0;i <= arrayTwo.length - 1;i++)
  newArray.push(arrayOne[i] - arrayTwo[i]);
  
return newArray

}

/* console.logs to test */
console.log(arraySubtract([1],[2]));
console.log(arraySubtract([1,5,6],[2,3,9]));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arrayOne, stringOne, stringTwo){
    arrayOne.unshift(stringOne);
    arrayOne.push(stringTwo);

    return arrayOne;
}

/* console.logs to test */
console.log(surroundArray([4,5,6], '1,2,3', '7,8,9'));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(arrayOfStrings){
  var lgth = 0;
  var longest;
  
  for (let i = 0; i < arrayOfStrings.length; i++){

    if (arrayOfStrings[i].length > lgth){

      var lgth = arrayOfStrings[i].length;

      longest = arrayOfStrings[i];
    }
    else if(arrayOfStrings[i].length === 0){
        return arrayOfStrings[i]
    }
    
  }
  return longest;
} 
/* console.logs to test */
console.log(longestString(['']));
console.log(longestString(['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){
let search = ('s')
let replaceWith = ('r')
// let searchTwo = ('r')
// let replaceWithTwo = ('s')
         result = str.split(search).join(replaceWith)
         return result
        }
// can't figure it out, give me whatever partial credit
 
/* console.logs to test */
console.log(sToR('sssrrr'));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    if (num % 4 === 0 && num % 7 === 0){
        return true
    }
    else{
    return false
    }
}

/* console.logs to test */
console.log(divisibleBy4And7(28));
console.log(divisibleBy4And7(8));
console.log(divisibleBy4And7(2));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){
    let questionMark = '?'
    let exclamationMark = '!'
    for(let i = 0; i < str.length; i++){
        if (str[i] === questionMark && str[i] === exclamationMark){
          return true;
        } 
        else 
        return false
        }
            
      }
// can't figure it out give whatever partial credit

/* console.logs to test */
console.log(exclamationAndQuestion('!!??'));
console.log(exclamationAndQuestion('!!'));
console.log(exclamationAndQuestion('??'));
console.log(exclamationAndQuestion('abc'));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str){
   arrayOne =  str.split('a').length - 1 + str.split('A').length - 1
    arrayTwo = str.split('b').length - 1 + str.split('B').length - 1
    let newArray = [arrayOne, arrayTwo]

    return newArray
}

/* console.logs to test */
console.log(countAB('aaaAAAbbbBBB'));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arrayOfStrings, str){

    for(let i = 0; i < arrayOfStrings.length; i++){

        if(arrayOfStrings[i].length === 's'){

            arrayOfStrings.indexOf("s").push(str)
        
        }
        return arrayOfStrings
    }
    
}

/* console.logs to test */
console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST'));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arrayOne){
var smallest = arrayOne[0];

for(let i=1; i < arrayOne.length; i++){
    if(arrayOne[i] < smallest){
        smallest = arrayOne[i];  
    }
    }
    var arrayTwo = arrayOne.splice(smallest,1)
    var secondSmallest = arrayTwo[0];

    for(let i=1; i < arrayTwo.length; i++){
       
    if(arrayTwo[i] < smallest){
        secondSmallest = arrayTwo[i];
    }
}

return smallest + " " + secondSmallest

}
/* console.logs to test */
console.log(twoSmallest([6, 8, 5, 8, 6, 7, 4, 7, 9, 6, 5]));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

