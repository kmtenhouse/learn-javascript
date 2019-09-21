/* ================================================= */
// One problem: what if a function takes a variable amount of time?
// Ex: AJAX calls connecting to APIs over the internet -- that could go very fast, or very slow, depending on connectivity


// You can run into problems like this, where SOMETIMES you might get a result right away...or sometimes, you wind up with undefined
// What??
for (let i = 0; i < 10; i++) {
    let result = takesVariableAmountOfTime(i + ": " + "Hello");
    console.log(result);
}

function takesVariableAmountOfTime(message) {
    //This mockup function either 
    //1) immediately returns the message 
    //or 2) waits for a second, then return a message
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip) {
        return message + " to you";
    } else {
        setTimeout(() => message + " to you", 1000);
    }
}

/* ================================================= */
// One common way of getting around this issue is designing code with 'callback' functions -- ie, letting people pass in a function they want to run once the operation is actually done!

console.log("Now trying it with callbacks...");

//Notice how the results always log the expected results...but clearly not all of them are finishing at the same time
for (let j = 0; j < 10; j++) {
    variableTimeWithCallback(j + ": " + "Goodbye", 
    function (result) {
        console.log(result);
    });
}

function variableTimeWithCallback(message, callbackFn) {
    //This mockup function either 
    //1) immediately calls the callback function
    //or 2) waits for a second, then runs the callback function
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip) {
        callbackFn(message + " to you");
    } else {
        setTimeout(() => callbackFn(message + " to you"), 1000);
    }
}