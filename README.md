# learn-javascript
A repo of activities for folks who are starting out with JavaScript!  These examples are meant to be a quick intro to some of the concepts you may see when working with JavaScript. 

## Usage
1) Clone this repository to your local machine
2) For best results, run all examples using Node.js

## Contents
### Functions
Functions are like recipes for our programs - they are repeatable routines that we can do over and over to get the same results! (Same thing as baking cookies: I put in my ingredients, I mix them in the same order every time, and at the end I get a nice batch of something tasty.)

* ```functions.js``` -
    An introduction to functions and function expressions
* ```callbacks.js``` -
    JavaScript runs really fast - it doesn't always know how to slow down and wait for something to finish before moving on!  Callbacks are one way to handle this problem :)

### References
Some folks may have noticed 'strange' behavior when trying to assign arrays and objects to variables. 
* ```objects-are-by-reference``` - Explains what's going on when you use the assignment operator (the = sign) to try and copy an object or array.
* ```copying-arrays``` - Looks at one (ES6) option for creating a new array (and a possible 'gotcha')

### Asynchronous Ahoy!
Callbacks are one way we can handle operations that take a variable amount of time -- "promises" are another!  "Promises" allow us to provide separate callbacks to run if the 'promise' was fulfilled successfully (or did not work as expected).

* Promises
    * ```promise.js``` - 
    Aka "those weird .then() things"! This is a peek at what is happening when you see .then() and .catch(). 
* Async / Await Keywords
    * ```async-await``` - 
    **New for ES6** -- many modern browsers (and runtime environments like Node) support new features like the 'async' and 'await' keywords for telling JavaScript when to wait for something to happen.
* Exploitable 
    * ```mysql``` folder -
    **WARNING** - do not deploy this code as-is to a publicly accessible place like Heroku.
    This example server is insecure on purpose!  Run this on your local computer and see if you can find ways to break it. Can you figure out some places where it is vulnerable to script injection and SQL injection?  What might you do to prevent this stuff?