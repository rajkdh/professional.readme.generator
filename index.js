// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Does the user need to install any dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name:'usage',
        message:'What instructions does the user need to use your repo?',
    },
    {
        type: 'inpt',
        name: 'credit',
        message:  'Who are the contributors of this repo?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license(s) which your project has.',
        choices: ['None', 'Apache_ 2.0', 'GPLv3', 'MIT', 'BSD_2', 'BSD_3', 'Boost_1.0', 'EPL_2.0',],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerAnswers}));
    });
}

// Function call to initialize app
init();
