// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
  if(!error){
    functionToRunWhenThingsAreDone(data);
  } 
  else if(error){
    functionToRunWhenThingsAreDone(data);
  }
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// breedDetailsFromFile('Bombay', printOutCatBreed);
module.exports = breedDetailsFromFile;


// if(!error){
//   functionToRunWhenThingsAreDone(data);
// } 
// else if{
//   functionToRunWhenThingsAreDone(data);

//   can be written without if 

//   functionToRunWhenThingsAreDone(data);

