// importing the tool to create the html file
const fs = require('fs');
// importing the page-template.js from src folder
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Checkout index.html to see the output!')
});