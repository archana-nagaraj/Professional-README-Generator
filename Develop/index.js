// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () =>
{
    return inquirer 
    .prompt([
        // Project-Title
        {
            type: 'input',
            name: 'project-title',
            message: 'What is the title or name of your project?'
        },
        // Project Description
        {
            type: 'input',
            name: 'project-description',
            message: 'Enter a brief description about your project:?'
        },
        // Project Installation
        {
            type: 'input',
            name: 'project-installation',
            message: "Provide the command to install the project:"
        },
        
        // Project Usage
        {
            type: 'input',
            name: 'project-usage',
            message: "Provide instructions or examples to use the project:"
        },
        // Project License
        {
            type: 'input',
            name: 'project-license',
            message: "Choose the license for the project:",
            choices: [
                "Apache",
                "Academic",
                "MIT",
                "ISC"
            ]
        },
        // Project Contributing
        {
            type: 'input',
            name: 'project-license',
            message: "How to contribute to the project?:"
        },
         // Project Tests
         {
            type: 'input',
            name: 'project-license',
            message: "Mention any tests written to test the project:"
        },
         // Project questions
         {
            type: 'input',
            name: 'project-license',
            message: "Whom to contact for any questions about the project:"
        }
]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
