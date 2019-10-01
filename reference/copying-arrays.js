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

/* 
========================================================
But!  If that new array contains OBJECTS, those OBJECTS will still be references in the brand new array.
========================================================
*/

