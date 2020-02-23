//Challenge: Define and use a function in a new file
// 1. Create a new file called notes.app
// 2. Create getNotes function that returns "Your notes app..."
// 3. Export getNotes function
// 4. From app.js load in and call the function printing the message to console

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note");
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function() {
    console.log("Listing out all notes");
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note");
  }
});

yargs.parse();
