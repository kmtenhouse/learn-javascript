//FUNCTIONS

//Functions are a set of instructions that we can repeat to perform the same actions over and over
//They are like following recipes in a cookbook 
//You do the same steps every time to get predictable results!

function sayHello() {  //this function will always output 'Hello!'
    console.log("Hello!");
}

//When we want to make a function happen, we 'call' it by typing its name followed by parenthesis
//(Some people use the words 'execute', 'run', or 'invoke' too -- all these are just synonyms for 'make the code happen')
console.log("This function just does one thing -- it says hello!");
sayHello();


/* ================================================= */
//Functions can have 'parameters' that will affect the result
//These are variables that you can use inside the function
//You set the value of each parameter when you call the function

function bakeACake(ingredientOne, ingredientTwo) {
    console.log("I am baking a cake!");
    console.log("My cake has: " + ingredientOne + " " + ingredientTwo);
}

//console.log("This function will have different results depending on what we put into the parameters:")
//bakeACake("milk", "eggs"); 

//The value of 'ingredientOne' will be 'milk'
//The value of 'ingredientTwo' will be 'eggs'
//(Sometimes people refer to the values in the function call as 'arguments')
//(The strings 'milk' and 'eggs' are arguments)


/* ================================================= */

//we can also store entire functions into variables!!
//(this is called a 'function expression')
var sum = function (numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    console.log("The sum of " + numberOne + " and " + numberTwo + " is " + result);
    return result;
}

//when we want to run a function expression, we invoke it with the () just as we would any other function
//console.log("This function expression works just like any other function...");
//sum(2, 2);
//console.log("...as long as you are careful to call it ONLY AFTER you first define it ;)");

/* ================================================= */

//we can also pass functions INTO other functions!
//this can be useful to keep your code readable...or to perform steps in a certain order

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function calculation(functionToRun) {
    var numberOne = 1;
    var numberTwo = 2;
    var result = functionToRun(numberOne, numberTwo);
    console.log(result);
}

//console.log("This function accepts ANOTHER FUNCTION as a parameter!");
//calculation(multiply);

//Note: when we pass a function into another function in order to run it later, we do NOT use the parenthesises - otherwise, that will 'invoke' it right away!
//calculation(multiply(1,2)); //what do you think will happen?

/* ================================================= */
// Lastly, when passing a function into something else as a parameter, we can just write that entire code directly!  

//This is called an 'anonymous' function, because it doesn't have a name anywhere else in the code!

//console.log("This function accepts an anonymous function:");
//calculation( function(numOne, numTwo) { return numOne/numTwo; } ); 