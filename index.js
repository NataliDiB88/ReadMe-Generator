// const inquirer = require('inquirer');
// const fs = require('fs');
//const generateMarkdown = require("./utils/generateMarkdown")
import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import generateMarkdown from './utils/generateMarkdown.js'



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is the application installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for usage:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Created");
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(questions);
        
        console.log(data);
        
        const readmeFile = generateMarkdown(data);
        console.log(readmeFile);
        
        writeToFile("generatedReadMe.md",readmeFile);
    })
}


// Function call to initialize app
init();