/*  
Most of the time, when we work with variables, we don't have trouble making copies of the data that they store -- as long as the contents are a 'simple type' like a String, Boolean, or Number:
*/

//EXAMPLE:
//I create a variable and store the number 1 inside
let firstNumber = 1;
//Now I create a second variable and set its value to be the same as the first one
let secondNumber = firstNumber;

console.log(firstNumber); // this will say 1
console.log(secondNumber); // this will say 1

console.log("Updating secondNumber:");
secondNumber = 2;
console.log(firstNumber); // this will still say 1
console.log(secondNumber); // this is now 2!


/* ==================================
However, for OBJECTS / ARRAYS...the behavior is a little different!   */

const objectOne = {
    firstName: "Teddy",
    lastName: "Ruxpin"
};

const objectTwo = objectOne;
console.log(objectOne); // outputs { firstName: "Teddy", lastName: "Ruxpin" }
console.log(objectTwo); // exact same as above --^

console.log("Updating Object One:");
objectOne.firstName = "Sister";
objectOne.lastName = "Bear";
console.log(objectOne); // outputs { firstName: "Sister", lastName: "Bear" }
console.log(objectTwo); // WAIT?  WHAT?  it's the exact same as above! --^

console.log("Well poot!  Let's try updating Object Two instead then:");
objectOne.firstName = "Brother";
console.log(objectOne); // OH NO!  the same thing happened -- both objects changed!!
console.log(objectTwo); // BOTH output { firstName: "Brother", lastName: "Bear" }


//Similarly, look what happens when we do the same thing with an array:
const theBeatles = ["Paul", "Ringo"];
const coverBand = theBeatles;
coverBand.push("Bubba"); //I tried to add "Bubba" to just the 'coverBand' array
console.log(theBeatles); //...but now BOTH variables log:
console.log(coverBand); // ["Paul", "Ringo", "Bubba"]

/* 
========================================================
KEY POINT: 
In JavaScript, the CONTENTS of an object / array are not truly copied when we assign them to a variable...instead that variable will contain a REFERENCE to the original!

That means if you want to make truly separate, brand new objects that don't impact each other, you have to be careful!

(Look up 'shallow copying' and 'deep copying' objects in JavaScript for more ideas)
========================================================
 */


/* 
========================================================
One way to create a brand new ARRAY with the contents of the original is to use the new ES6 array function Map...
========================================================
*/
const fleetwoodMac = ["Mick Fleetwood", "John McVie", "Stevie Nicks"];
const sideProject = fleetwoodMac.map(member => member);
sideProject.push("Christine McVie");
//this one logs [ 'Mick Fleetwood', 'John McVie', 'Stevie Nicks' ]
console.log(fleetwoodMac); 
//this one logs [ 'Mick Fleetwood', 'John McVie', 'Stevie Nicks', 'Christine McVie' ]
console.log(sideProject); 