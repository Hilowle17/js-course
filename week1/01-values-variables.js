// week1/01-values-variables.js

// value is the smallest unit in the JavaScript

//Example

'Mohamed'//this is a text value

18 // this is a number value

// so we can use values to store in box called a variable
// variable is a container/box that we use to store a value to reuse that value again and again in the project

//example 

let firstname = "Mohamed";

// now we declared the variable and assigned a value

//so to reuse it we can do like to print it

console.log(firstname)

//now we are trying to print the value we stored in the variable firstname and you can see we did not type the value again we only called the container that we stored it.

//so without using variable and want to print that name in the console we must rewrite it as long as times we want 

//example

console.log("mohamed")

//now we wrote the value directly at printing state

// but what if we want to print it 5 times what to do

// without variable it will be to rewrite the value 5 times 

//example

console.log("Mohamed");
console.log("mohamed");
console.log("mohamed");
console.log("mohamed");
console.log("mohamed");

//now we got our goal to print the value 5 times but as you can see it took too much time to write but note: now our value is only mohamed it short so the value it can be too long to write so it can take too much time

//so to solve that problem where the variable gets on the stage 

// so now if we want to write the value mohamed we can store it in a variable and then we call it again and again as much as we want like we mentioned it above

//example 

let fulltname = "mohamed Hilowle Ahmed";

console.log(firstname);
console.log(firstname);
console.log(firstname);
console.log(firstname);
console.log(firstname);

//now we save too much time we only call the variable name that holds our fullname value so using variable to store your values is the best option you have  

// now lets talk about naming variables

//in JavaScript the common way to write a variable name is the camel case format

//how camel case is working is to write the first part of variable small case and the other part with upper case in the first letter

// example

let fullName = "Mohamed Hilowle Ahmed";

let oldestPersonInClass = "Mohamed Hilowle Ahmed";

//as you can see in the above 2 examples i wrote to names of variables and its the camel case format so this is the professional way in js to write variable name

//there is another ways to write variable name that is legal and they are to use _ in b/w parts in the variable name

//example

let full_name = "Mohamed Hilowle Ahmed";

// or

let oldest_person_in_class = "Mohamed Hilowle Ahmed";

// so as you can see we used the _ in b/w every part of the variable but this way is not common in js


//now lets talk about rules of naming a variable

//first we cant start number for variable names

//example

// ❌ ILLEGAL — & is not allowed
// let 6yearsProject = "Computer Repair Shop";

//this format is illegal to name a variable 

//in variables it can only contain numbers,letters,underscore and the dollar sign anythin else will not accept 

// example

//illegal variable name

// let me&MyGirlfriend = "Love";

// in the above example it shows error for the sake of & sign and its not only the & but for all of except letters,numbers,$ and _

//also we cant use JavaScript keywords for naming a variable its illegal and it shows error

//example

// ❌ ILLEGAL — & is not allowed
// let function = "mohamed"

// so this is not allowed but if we want to fix we can make it like

let $function = "Mohamed" 
// or
let _function = "Mohamed"

//these 2 way is eccaptable

//there is only 1 js keywoard that allowed to use in variable naming and its name we can use it with no error but some cases it can create problems for the sake its a js keywoard 

// and also we dont make the variable name upper case 

//example

let Person = "Mohamed"
//or
let PERSON = "Mohamed";

//we can use upper case letters in constant values like 

let PI = 3.1415;

//we now that this value will not change so we make the variable name upper case

// another thing i want to tell is how to make your variable name discriptive/meaningfull 

//example 

let adminDashboard;

let userDashboard;

// or

let dashboard1;

let dashboard2;

//which way is the meaningfull way ofcourse the first way coz you can understand the purpose with only reading the variable name



// assinment

// Values and Variables

// 1: Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// 2: Log their values to the console.

// solution

// 1: Declarin variables called country, continent and population and assigning their values according to my own country (population in millions).

let country = "Somalia";
let continent = "Africa";
let population = 30;

// 2: Log their values to the console.

console.log(country);
console.log(continent);
console.log(population);
