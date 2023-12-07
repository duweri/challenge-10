// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatelogo = require('./generatelogo');
const {Circle, Square, Triangle} = require('./lib/shape');
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
        name: 'fillColour',
    },
];

function writeToFile(fileName, data){
    var content = generatelogo(data);
    fs.writeFile(fileName, content, function(error){
        if(error){
            return console.log(error);
        }
        console.log('Generated logo.svg');
    });
}

// to initialise app
function init() {
inquirer.prompt(questions).then(function (data) {
    const fileName = 'logo.svg';
    writeToFile(fileName, data);
    
});
};

init();