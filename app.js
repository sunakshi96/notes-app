//Challenge: Define and use a function in a new file
// 1. Create a new file called notes.app
// 2. Create getNotes function that returns "Your notes app..."
// 3. Export getNotes function
// 4. From app.js load in and call the function printing the message to console

const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);
console.log(validator.isEmail("pinkranger@gmail.com"));