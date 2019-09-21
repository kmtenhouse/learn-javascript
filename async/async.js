const promiseExample = require("./promise");
//Async keyword goes on the function that HAS AWAITS IN IT
//Try / catch blocks are how we handle errors
async function someFunc() {
    //THIS ONE WILL WORK
    try {
        const result = await promiseExample(2);
        console.log(result); 
    }
    catch(err) {
        console.log("Whoops, we had an error! " + err.message);
    }
    //THIS BLOCK WILL JUMP TO THE CATCH BC THERE IS AN ERROR
    try {
        const resultTwo = await promiseExample(3);
        console.log(resultTwo);
    }
    catch(err) {
        console.log(err.message);
    }
}

someFunc();

/* promiseExample.notAsync(2)
    .then(result => console.log(result))
    .catch(err => console.log(err.message));
 */