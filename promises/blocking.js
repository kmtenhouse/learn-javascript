/* ================================================= */
// Sometimes, we want to wait until some operation completes before we go on to the next part of our program
// Ex: first I do Step A, then I do Step B
// However, we don't want to keep users waiting forever!
// What if something takes a really long time?

function getInventoryNumbers() {
    console.log("I am starting to count the inventory!");
    let count = 0;
    for(let i = 0; i<9007199541; i++) {
        count++;
    }
    console.log("I am finally done!");
    return count;
}

// YIKES -- this takes A REALLY LONG TIME!
// How would you feel if you had to sit there and wait that whole time? 
// ( When one operation takes a long time and prevents anything else from happening in the meantime, we say it is a 'blocking' process )
console.log("Hi, welcome to my store!");
let numberOfThings = getInventoryNumbers();
console.log("We have " + numberOfThings + " items for sale!");


