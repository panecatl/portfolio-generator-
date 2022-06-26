const inquirer = require('inquirer');
inquirer 
  .prompt([{
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answers => console.log(answers)); 



// // importing the tool to create the html file
// const fs = require('fs');
// // importing the page-template.js from src folder
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw (err);

//   console.log('Portfolio complete! Checkout index.html to see the output!')
// });