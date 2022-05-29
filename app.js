const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.version('1.1.0')
// add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: 'Title of the note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    const title = chalk.bgBlue('Title: ' + argv.title);
    const body = chalk.greenBright('Body: ' + argv.body);
    console.log(title)
    console.log(body)
  }
})

// remove commmand
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: () => {
    console.log("note removed!")
  }
})

//read
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => {
    console.log("reading a note")
  }
})

// list
yargs.command({
  command: "list",
  describe: "list your note",
  handler: () => {
    console.log("listing out all your notes")
  }
})

yargs.parse()
// console.log(yargs.argv)

