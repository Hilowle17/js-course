// week1/02-Data Types.js

//in js we what we call Data Types and its consisits of object and primitive 

//now lets talk about primitive data types 

//there are 7 primitive Data Types in js and they are

/*
1: number
2: string
3: Boolean
4: Undefined
5: Null
6: BigInt
7: Symbol

*/

// so now let get them in details

// 1: numeber is one of the most used data types in js and it represents numbers like 2,3,4,839 etc

//example

let myAge = 23;

// so this variable's value data type is Number

// so as you see the syntax we didnot wrote the Data Type it self like saying let number myAge = 23; and the why is happening is js uses what its called dynamic typing and how it works is you write your variable give nama and value and boom js automatically know that value's data type so in this case let myAge = 23; js stores that this value is a number and that rule is happen to all of other values


// 2: String

// in js string in js can be anything letters,numbers,symbols i know its bit confusing but in js every value that have a single or double quotes wraped is a string and stored as a string 

//example

let firstName = 'mohamed';

//this value is a string and why? coz the quotes wraped

let address = '123jowhar';

// this is also a string value even if its have numbers in the value but still its a string value coz still it has quotes wraped.

// 3: Boolean

//is a type of data types and it stores a true or false value and it works with conditions/operaters 

//example

let haveExercise = true;

//so now this above variable holds a value and its data type is boolean 

// you dont wrap the value a quotes when you want it to store as boolean type coz it will consider you wanted a string

//example

let haveAccess = 'false';

//now the compiler consider that its a string even if you made a mistake so you wanted a boolean value.


// 4: Undefined

// Undefined is a type of data types and it cames when i declare a variable but did not give a value or i leave the variable empty so it says this variable's data type is undefined so leter if this variable gets a value it will change and take that value's data type

//example

let myCity;

// now we declared the variable but did not give a value so its data type automatically an undefined but if we give a value it will change to another data type

myCity = "Jowhar";

// now the data type has changed from undefined to string 


//5: Null

// is basically the same as undefined 


// Assignment

//Steps to Follow

// 1: Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// 2: Log the types of isIsland, population, country and language to the console.

//Solution

// Steps

// 1: Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

let country = "Somalia";
let continent = "Africa";
let population = 30;
let isIsland = true;
let language;

// 2: Log the types of isIsland, population, country and language to the console.

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

