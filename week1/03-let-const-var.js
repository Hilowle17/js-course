// week1/03-let-const-var.js

// in this lesson i will talk about variables

/*in js there are 3 ways to declare a variable and they are

1: let
2: const
3: var
*/

// 1: let: is a type of declaring a variable in js and its works like you declare the variable and assign it a value at the declaring state or you leave it as a empty variable and then in you assign a value later

// example

let firstName;

// now i only declared a variable called firstName and i did not assigned a value so to give a value we call the variable name and give a value that is it

//example

firstName = "Mohamed";

// so now we give the firstName variable value so let can reassign a value later in the program 

// let is a modern way of declaring a variable and its came with ES6


// 2: const: is one of the ways in js to declare a variable and as you can see in the name is constant it means something that will not change so trying to reassign a value to constant variable it will show an error  and you cant leave a constant variable empty its illegal you must assign a value to it

//example

const fullName = "Mohamed Hilowle Ahmed";

//this above way is the legal way of using constant variable

fullName = "Omar Nor Ali";

//and this is also illegal coz reassignin in constant value is totally illegal.

// const fistName;
// fistName = "Mohamed Hilowle Ahmed";

//but this way is not legal you must assign a value to the constant variable at the state of declarin no declaring and assign value later 

// const is a modern way to declare a variable and its came with ES6 as well as the let variable


// 3: var: is a old way of declaring a variable and it was using before ES6 or before let and const 

// it shares most of the functionalities with the let variable 

var age = 24;
// i can declare and assign at the same time

age = 23;
// i can reassign it accepts like let and its not rejecting like const

var currentLocation;
// i can leave it with only declaring/empty variable without giving a value

currentLocation = "Somalia";
// and i can assign a value to the empty variable

// the differ b/w assign and reassign value to a variable is assigning is used to and empty variable either at the declaring state or after declaring and reassigning is used for a variable that already has a value so we reassign/change the previous value to a new one and in js this can apply on only let and var variables not const


// Assignment

// Steps to follow:

// 1: Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// 2: Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// 3: Try to change one of the changed variables now, and observe what happens.


// Solution 

let country = "Somalia";
let continent = "Africa";
let population = 30;
let isIsland = true;
let language;

// Steps

// 1: Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

language = "Arabic";

// 2: Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

const country = "Somalia";
const continent = "Africa";
let population = 30;
const isIsland = true;
let language;

// 3: Try to change one of the changed variables now, and observe what happens.

// country = "Yemen";