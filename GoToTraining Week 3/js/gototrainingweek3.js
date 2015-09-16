/*
Zach Wilson
SDI Section #2
GoTo Week #3
9/16/2015
 */

alert("Testing to see if connected.");

//Create an array of fruit names and then sort it

//Array - variale that holds multiple variables
//Index # of an array always starts with 0!!

var bowlOfFruit = ["apple", "banana", "pear","peach"];

//See whole array
console.log(bowlOfFruit);

//Console.log the banana
console.log(bowlOfFruit[1]);

//Console.log the pear
console.log(bowlOfFruit[2]);

//How many items are in an array?
//length property - access this by using dot syntax
// Fancy term for us a period
console.log(bowlOfFruit.length);

//Count the number of pears in our fruit bowl

//Create a variable that will keep track of how many pears there are.
var totalNumPears = 0;

//Test each item in the array and check if it is a pear.

//Basic structure of a conditional?
//if(condition to test){code that will run if true}

// "7" == 7 - true
// "7" ===7 - false
//prompts always returh strings!!

if(bowlOfFruit[0]==="pear"){
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This item is a pear! ");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
} else {
    console.log("This fruit is not a pear!")
}
