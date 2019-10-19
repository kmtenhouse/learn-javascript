///////////////
// CALLBACKS // 
// What is a callback function? At its core, it is a function we want to run *after* another function has finished executing. A common use for callbacks is when you make an apiCall(). Say you have Bootstrap cards you want to create using jQuery, but you don't want them to be created on the page before you have the data back from your apiCall. Using a callback, you can make an apiCall and run a function *as soon as the apiCall is fulfilled!*.

// In this example, let's pretend we're making a function that takes in data for use in an API call, and then we want to do something once we're done with our api call. 
// Before we even add our callback, let's make our function.
function apiCall(data){
    $.ajax(data).then(function(response){
        console.log("This console.log is a placeholder for what we do with our response object.")
    })
}
// Since this is our function definition, and we know we want to run a function after our apiCall is successful, we have to add two things to our function definition: a *second parameter that will act as a placeholder for our callback function*, and *a call to our callback function*.
function apiCall(data, callbackFunction){
    $.ajax(data).then(function(response){
        console.log("Bring bring hello API, may I please have a response object?")
    }).then(function(error, response){
        if (err) throw err;
        console.log("Let's do something with our " + response + "!");
        callbackFunction(response.data);
    })
}
// As you can see, we only added two things: callbackFunction as a *placeholder variable* in our parameters, and a callbackFunction() invocation as the last line of code in our apiCall() function. callbackFunction() is very important, as it is what references our callbackFunction *placeholder variable* and runs the callback function *we will feed to apiCall() as its second parameter*.

// Now we need to invoke our apiCall() function! What's great about this is that we can *DEFINE* our callback function *AS WE CALL* this function!
apiCall(data, function(){
    console.log("This console.log is placeholder code for our *unnamed function*. Notice that we are doing two things at the same time: (1) defining it (2) in our apiCall() invocation.")
})
// The first argument is our 'data' variable, and the second argument is our unnamed callback function! Something very key to remember: our second argument *here* will fill in for our second argument *in our apiCall() definition*! The naming conventions are important from a clean coding standpoint, but as far as JavaScript is concerned, the position of our *placeholder parameters* and our *function call's arguments* are the only things that matter.
// You might be thinking "hey, this looks a little messy." And... you're essentially correct. Callback functions are very useful, but they are messy to code - especially if you have several layers of callbacks that are depending on each other to finish. One way to put a band-aid on the messy code problem is to use named functions:
apiCall(data, myFunction);

function myFunction(){
    console.log("This code is *equivalent* to our first api call. Here, myFunction is fed to apiCall() as we invoke it and it will take the place of callbackFunction in apiCall()'s *function definition*.")
};

//////////////
// PROMISES //
// When you create a promise, you are creating an object that represents a future result. When it is created, it is set as "unfilled". Once the code finishes executing, it will change to "success" or "failure".

// Example of a promise:
// A conditional variable to check inside of our promise.
var isMomHappy = false;
// This is our promise object: willIGetNewPhone is becoming a COPY of a Promise, with all of its predefined methods, PLUS everything else that we add below. Remember how we made our Player constructor? A Promise is a constructor just like that, except it already exists in JavaScript so we just need to make copies of it, like this, when we create our own.
// We're just setting our Promise to a variable here - we're not actually firing this code just yet.
var willIGetNewPhone = new Promise(
    // At this point, our promise has been created and set to "unfilled". There is a single if / else statement in our function below, and our Promise will be set to "resolved" or "rejected" based on if resolve() or reject() gets fired. Since they are both in different parts of our if / else, there can be no conflict and only one will fire.
    function(resolve, reject){
        if (isMomHappy === true) {
            var phone = {
                brand: 'samsung',
                color: 'green'
            }
            // resolve() is a METHOD of a Promise: we can call 'resolve' and 'reject' whatever we want, but if the resolve() statement gets fired, whatever you feed resolve(in these parenthesis) BECOMES the first argument of our function above, and the promise is set to fulfilled.
            resolve(phone); // fulfilled
        } else {
            // Remember: you can feed a method just about whatever you want! We could uncomment our reason variable below and feed it to reject() rather than directly feeding it a string below if we wanted to. 
            // No matter how we do it, whatever we feed to reject(here) will fill in for our second parameter, reject, in our function above, and this Promise will be set to "failed".
            // var reason = new Error('mom was not happy');
            reject('mom was not happy');
        }
        
    }
)

// This is our function that will check to see if Mom is happy. Hopefully she is - new phones are fun!
// Storing our function definition in a variable:
var askMom = function () {
    // Now we're running willIGetNewPhone's promise!
    willIGetNewPhone
    // Once it finishes running, it will have been resolve()-ed or reject()-ed. If it was resolve-ed, the .then will fire. If it was reject()-ed, the .catch() will fire. If there was no .catch() defined, you'll get an error!
    .then(function (){
        console.log('yay I got a new phone!')
    })
    .catch(function (){
        console.log('there was an error');
    })
}

// Execution:
askMom();

////////////////////
// FINAL THOUGHTS // 
// What's the difference? 
// CALLBACKS: You tell the executing function what to do when the task is completed
// PROMISES: Promises return a Promise object, and you tell the Promise what to do once the task is completed. FURTHER: A Promise *represents a future result*. When you create a promise, it is immediately set as "unfilled". Once it's "filled", then it will be set to "success" or "failure" and will run the corresponding code.

// Using a Promise or a callback is just another way to say "this code should not run until another function executes."

// Using a callback or a Promise does *not* mean that you are writing asynchronous code, it simply means you have code that you want to execute *AFTER* another function has run. If you have a Bootstrap card you want to fill in with Book information from an api call, for example, you would not want to use jQuery to create the card *before* you get the information back from the api.

// Asynchronous function examples: 
// timer functions setTimeout, setInterval
// special functions nextTick, setImmediate
// querying a database, listening to network (we'll go over this more VERY soon in class!)
// reading or writing, generally I/O from a resource (using fileSystem to read or write from a file, for example)
// subscribing to an event

// PROMISES ARE SUPER COOL AND FANCY!
// You can use Promise.all to run multiple functions at once, and run a function *ONLY AFTER ALL OF THEM COMPLETE*
Promise.all([async1, async2, async3]).then(function(returnedData){
    console.log("All three tasks completed!")
})
// The .then will not run until all 3 async functions are "filled". Can you imagine trying to do this with three chained callbacks? Better yet - read this article that shows you what Callback Hell looks like! https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8

// Links for more reading
// https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
// https://softwareengineering.stackexchange.com/questions/286529/js-async-can-i-forget-callbacks-all-together-and-replace-with-promises-and-or
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://scotch.io/tutorials/javascript-promises-for-dummies
