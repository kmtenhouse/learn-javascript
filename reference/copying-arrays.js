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

const people = [
  { firstName: "Fatimah", lastName: "Brown"},
  { firstName: "Joanna", lastName: "Miller"}
];

const newPeopleList = people.map(person=> person);
// As we might expect, both output { firstName: "Fatimah", lastName: "Brown"}, { firstName: "Joanna", lastName: "Miller"}
newPeopleList.push({ firstName: "Jim", lastName: "Bobbert"})
console.log("We expect People and newPeopleList to be DIFFERENT:");
console.log("People:", people);  //this one contains Fatima and Joanna
console.log("List:",newPeopleList); //this one contains Fatima, Joanna, and the new person, Jim

//But what happens if we then try to modify the objects inside one of those arrays?
for(let i = 0; i < newPeopleList.length; i++) {
    newPeopleList[i].fullName = `${newPeopleList[i].firstName} ${newPeopleList[i].lastName}`;
}

//OH NO!  Once again, because objects are 'by reference', the array 'newPeopleList' just has a list of references to the objects that are inside the original 'people' array!
//This means that we just modified Fatima and Joanna in BOTH 'people' and in 'newPeople'!
console.log("==========");
console.log("People:", people);  
console.log("List:",newPeopleList); 

//This is why we often talk about special methods to 'shallow' or 'deeply' copy object key/value pairs :)

//(One possible solution to this problem:)
const groceryStore = [
    { ingredient: "milk", type: "dairy"},
    { ingredient: "apple", type: "fruit"}
];

const myFridge = groceryStore.map(food=> {
    return { ingredient: food.ingredient, type: food.type }; 
    // we are returning a BRAND NEW OBJECT that is an exact copy of the 'food' object
});

//As a result: modifying the objects in 'pantry' does NOT affect any of the objects in 'fridge'!
myFridge.forEach(food=> food.status = "Bought today!");
console.log("At the Grocery Store:", groceryStore); 
console.log("In my Fridge:", myFridge);
