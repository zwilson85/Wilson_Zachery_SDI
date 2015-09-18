 /*
Zach Wilson
SDI Section #2
Conditionals Assignment
9/16/2015
 */

alert("Test to see if connected.");

//Create an array of US Currency. Question: You worked a side job for one week and earned $276.00, how many bills are in your digital wallet?

//Ask the user for their name
var name = prompt("Please type in your name.");

//Use the variable and say hello
alert("Hey There "+name+"!");

//Ask the user the question
alert("OK, here is your question "+name+"! You worked a side job for one week and earned $276.00 dollars, how many different bills are in your wallet?")

var digitalWallet = ["Hundred Dollar Bill","Fifty Dollar Bill","Fifty Dollar Bill", "Twenty Dollar Bill","Twenty Dollar Bill","Twenty Dollar Bill","Ten Dollar Bill","Five Dollar Bill","One Dollar Bill"];

//See Complete Array
console.log(digitalWallet);

//Console.log the Hundred Dollar Bill(s).
console.log(digitalWallet[1]);

//Console.log the Fifty Dollar Bill(s).
console.log(digitalWallet[2]);

//Console.log the Twenty Dollar Bill(s).
console.log(digitalWallet[3]);

//Console.log the Ten Dollar Bill(s).
console.log(digitalWallet[1]);

//Console.log the Five Dollar Bill(s).
console.log(digitalWallet[1]);

//Console.log the One Dollar Bill(s).
console.log(digitalWallet[1]);

//How many bills are in your wallet?
console.log(digitalWallet.length);

//Tell the user how many bills are in the digital wallet
alert("Hey "+name+" You have 9 bills in your wallet.");

//Ask user to count how many different bills they have in those nine bills.
var name = prompt("How many Hundred Dollar Bills do you have in your Digital Wallet?");

var name = prompt("How many Fifty Dollar Bills do you have in your Digital Wallet?");

var name = prompt("How many Twenty Dollar Bills do you have in your Digital Wallet?");

var name = prompt("How many Ten Dollar Bills do you have in your Digital Wallet?");

var name = prompt("How many Five Dollar Bills do you have in your Digital Wallet?");

var name = prompt("How many Onoe Dollar Bills do you have in your Digital Wallet");

//Count the number of Hundred Dollar Bills
var totalNumHundredDollarBill = 1;

//Count the number of Fifty Dollar Bills
var totalNumFiftyDollarBill = 2;

//Count the number of Twenty Dollar Bills
var totalNumTwentyDollarBill = 3;

//Count the Number of Ten Dollar Bills
var totalNumTenDollarBill = 1;

//Count the Number of Five Dollar Bills
var totalNumFiveDollarBill = 1;

//Count the Number of One Dollar Bills
var totalNumOneDollarBill = 1;

 if(digitalWallet[1]=="Hundred Dollar Bill"){
     //This code will run if true
     //Add 1 to the total numbers of Hundred Dollar Bills
     console.log("There is 1 Hundred Dollar Bill! ");
     totalNumHundredDollarBill++; //totalNumHundredDollarBill = totalNumHundredDollarBill + 1;
 } else {
     console.log("This is not a One Hundred Dollar bill")
 }

 if(digitalWallet[2]=="Fifty Dollar Bill"){
     //This code will run if true
     //Add 2 to the total numbers of Fifty Dollar Bills
     console.log("There is 2 Fifty Dollar Bills! ");
     totalNumFiftyDollarBill++; //totalNumFiftyDollarBill = totalNumFiftyDollarBill + 2;
 } else {
     console.log("This is a not a Fifty Dollar Bill!")
 }

 if(digitalWallet[3]=="Twenty Dollar Bill"){
     //This code will run if true
     //Add 3 to the total numbers of Twenty Dollar Bills
     console.log("There is 3 Twenty Dollar Bills! ");
     totalNumTwentyDollarBill++; //totalNumTwentyDollarBill = totalNumTwentyDollarBill + 3;
 } else {
     console.log("This is a not a Twenty Dollar Bill!")
 }

 if(digitalWallet[1]=="Ten Dollar Bill"){
     //This code will run if true
     //Add 1 to the total numbers of Ten Dollar Bills
     console.log("There is 1 Ten Dollar Bill! ");
     totalNumTenDollarBill++; //totalNumTenDollarBill = totalNumTenDollarBill + 1;
 } else {
     console.log("This is a not a Ten Dollar Bill!")
 }

 if(digitalWallet[1]=="Five Dollar Bill"){
     //This code will run if true
     //Add 1 to the total numbers of Five Dollar Bills
     console.log("There is 1 Five Dollar Bill! ");
     totalNumFiveDollarBill++; //totalNumFiveDollarBill = totalNumFiveDollarBill + 1;
 } else {
     console.log("This is a not a Five Dollar Bill!")
 }

 if(digitalWallet[0]=="One Dollar Bill"){
     //This code will run if true
     //Add 1 to the total numbers of One Dollar Bills
     console.log("There is 1 One Dollar Bill! ");
     totalNumOneDollarBill++; //totalNumOneDollarBill = totalNumOneDollarBill + 1;
 } else {
     console.log("This is a not a One Dollar Bill!")
 }

 console.log("There are "+totalNumHundredDollarBill+" Bill(s) in the Digital Wallet.");

