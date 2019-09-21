function evenNumbersOnly(someNumber) {
    console.log("This will take me some time to think...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (someNumber % 2 === 0) {
                resolve("The number is even!");
            } else {
                reject(new Error("Only even numbers allowed!"));
            }
        }, 1000 + Math.floor(Math.random() * 1000));
    });
}

module.exports = evenNumbersOnly;
