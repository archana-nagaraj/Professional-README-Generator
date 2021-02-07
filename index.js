// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
     // Project-Title
     {
        type: 'input',
        name: 'title',
        message: 'What is the title or name of your project? (Required)',
        // Add validation to make sure user entered the input
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title of the project!');
              return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description about your project:? (Required)',
        //Add validation to make sure user entered the input
        validate: description => {
            if (description) {
              return true;
            } else {
              console.log('Please enter a few words about the project!');
              return false;
            }
        }
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: "Provide the command to install the project: (Required)",
         //Add validation to make sure user entered the input
         validate: installationCommands => {
            if (installationCommands) {
              return true;
            } else {
              console.log('Please enter the necessary commands for installation');
              return false;
            }
        }
    },  
    // Project Usage
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions or examples to use the project:(Required)",
         //Add validation to make sure user entered the input
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please enter the necessary instructions for usage');
                return false;
            }
        }
    }, 
    // Project License
    {
        type: 'list',
        name: 'license',
        message: "Choose the license for the project:",
        // Resource: https://choosealicense.com/licenses/
        choices: [
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
            "BSD 3-Clause"
        ]
    },
    // Project Contributing
    {
        type: 'input',
        name: 'contributing',
        message: "How can one contribute to the project?:(optional)"
        // No validation for optional inputs
        
    },
     // Project Tests
     {
        type: 'input',
        name: 'tests',
        message: "Mention any tests written to test the project:(optional)"
        // No validation for optional inputs
    },
       // github username
    {
        type: 'input',
        name: 'username',
        message: "Enter your github username:[Required]",
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('Please enter the github username');
                return false;
            }
        }
    },
       // email
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address:[Required]",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter the email address');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
console.log("Welcome! Please answer the questions you see in the prompt");
    inquirer
    .prompt(questions)
    .then(answers => {
        const readmeContent = generateMarkdown(answers);
       writeToFile('./output/README.md', readmeContent);
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else when wrong
        }
    });
}

// Function call to initialize app
init();
