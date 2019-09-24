/* ================================================= */
// One problem: what if a function takes a variable amount of time?
// Ex: AJAX calls connecting to APIs over the internet -- that could go very fast, or very slow, depending on connectivity


// You can run into problems like this, where SOMETIMES you might get a result right away...or sometimes, you wind up with undefined
// What??
console.log("Here's what happens if we don't watch out for asynchronous stuff...");
for (let i = 0; i < 10; i++) {
    let result = takesVariableAmountOfTime(i + ": " + "Hello");
    console.log(result);
}

//..and here's the reason why!
// this function SOMETIMES does its work immediately 
// sometimes it takes longer
function takesVariableAmountOfTime(message) {
    let newMessage;
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip) {
        newMessage = message + " to you";
    } else {
        //javascript doesn't know how to 'wait' for this 'setTimeout' to finish...
       setTimeout(function(message) {
           newMessage = message + " to you";
       }, 1000);
    }
    //...so it tries to return 'newMessage' before we ever get to set it!
    return newMessage;
}

/* ================================================= */
// One common way of getting around this issue is designing code with 'callback' functions -- ie, letting people pass in a function they want to run once the operation is actually done!

console.log("Now trying it with callbacks...");

//Notice how the results always log the expected results...but clearly not all of them are finishing at the same time
for (let j = 0; j < 10; j++) {
    variableTimeWithCallback(j + ": " + "Goodbye", 
    function (res) {
        console.log(res);
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
