function delayedAddition(numOne, numTwo) {
    console.log("This will take me some time to calculate...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            //if we did not receive numbers...
            if(Number.isNaN(parseFloat(numOne)) || Number.isNaN(parseFloat(numTwo))) {
                reject(new Error("You can only add numbers!"));
            }
            //otherwise, we can add these!
            resolve(parseFloat(numOne) + parseFloat(numTwo));
        }, 1000 + Math.floor(Math.random() * 1000));
    });
}

module.exports = delayedAddition;
