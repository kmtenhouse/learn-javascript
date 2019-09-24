//Step 1: Require a function that uses promises
const delayedAddition = require("./example-promise");

//Step 2:
//v--- The async keyword goes on the function that HAS AWAITS IN IT
async function someFunc() {
    //"Try/catch" blocks are how we handle the errors
    try {
        const result = await delayedAddition(2, 3);
        console.log(result); 
    }
    catch(err) {
        console.log("Whoops, we had an error! " + err.message);
    }
    //THIS BLOCK WILL JUMP TO THE CATCH BC THERE IS AN ERROR
    //(The delayedAddition function only wants numbers)
    try {
        const resultTwo = await delayedAddition("two", "three");
        console.log(resultTwo);
    }
    catch(err) {
        console.log(err);
    }
}


//let's try it!
someFunc();