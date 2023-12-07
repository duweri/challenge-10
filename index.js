// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatelogo = require('./generatelogo');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What 3 characters do you want on your logo?',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What colour text do you want on your logo?',
        name: 'textColour',
    },
    {
        type: 'rawlist',
        message: 'What shape do you want for your logo?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What colour shape do you want on your logo?',
        name: 'characters',
    },
];


// to initialise app
function init() {
inquirer.prompt(questions).then(answers => {
    const fileName = 'logo.svg';
    writeToFile(fileName)
    
});
};

init();