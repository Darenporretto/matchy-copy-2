/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    // Loop through the animals array
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animals name matches the search string
      if (animals[i].name === name) {
        return animals[i];  // Return the animal object if found
      }
    }
    // If no match is found, return null
    return null;
  }
  

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    // Loop through the animals array
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animal's name matches the search name
      if (animals[i].name === name) {
        animals[i] = replacement;  // Replace the animal's object with the replacement
        return;  // Exit the function once the replacement is made
      }
    }
    // If no animal is found, do nothing (no need to return anything)
  }
  


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}