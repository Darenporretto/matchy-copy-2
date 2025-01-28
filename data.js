/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
/*
I: The input is an animal species. 
O: The output will print the animal objefct using the console. 
C: Use dot notation and bracket notation. 
E: N/A
*/
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create an empty array for your for your animal
var animal = {};

// With dot notation give the animal a species
animal.species = 'bird';

// With bracket notation give the animal a name 
animal['name'] = 'Sam';

// With dot notation give the animal a noise property starting with an empty array
animal.noises = []

// Print object to the log
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Initialize an empty array called noises
var noises = [];

// Add a noise using bracket notation
noises[0] = 'chirp';

// Add a noise using .push() method
noises.push('squawk');

// Add a noise to the front using the .unshift() method
noises.unshift('whistle');

// Add a noise to the end using bracket and length 
noises[noises.length] = 'sing';

// Print the noises array length
console.log(noises,length);

// Print last noises element without hard coding th index
console.log(noises[noises.length -1]);

// Print the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Use bracket syntax and add anothe property to 'noises'
animal['noises'] = noises;

// Add another property to noise using .push() method
animal.noises.push('flap');

// Print the entire object
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named animals assigned to an empty array
var animals = []

// Push our animal created to anumals
var bird = {
  species: 'bird',
  name: 'Sam',
  noises: ['whistle', 'chirp', 'squawk', 'sing']
};

// Push bird into animals then loog
animals.push(bird);
console.log(bird);

// Create a variabdle caled duck and assign it the given data

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};


// Push duck to animals and log
animals.push(duck);
console.log(duck);


// First additional animal object
var bear = {
  species: 'bear',
  name: 'Winnie',
  noises: ['roar', 'growl']
};

// Create second additional animal object
var cat = {
  species: 'cat',
  name: 'Garfield',
  noises: ['meow', 'purr']
};

// Push both animals to the animals array then log
animals.push(bear);
animals.push(cat);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Initialize empty array for the friends
var friends = [];

// Function created to get random animal index
function getRandom(animals) {
  var randomIndex = Math.floor(Math.random() * animals.length);
  return randomIndex;
};

var randomIndex = getRandom(animals);  // Get a random index
var randomAnimal = animals[randomIndex];  // Get the animal at the random index

// Add the random animal's name to the friends array
friends.push(randomAnimal.name);  // Add the random animal's name to the list of friends

// Log the friends list
console.log(friends);  // This should show the name of the random animal added to the friends list

// Add the friends list to the first animal in the animals array
animals[0]['friends'] = friends;  // Add the friends list as a property to the first animal (bird)

// Log the animals array to see the updated information
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}