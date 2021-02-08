const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');
const licences = require('./util/licences');

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project? (Required)',
            validate: desInput => {
                if (desInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmImg',
            message: "Do you have an image you'd like to add to the README?",
            default: true
        },
        {
            type: 'input',
            name: 'imageAddress',
            message: 'Provide an address for the image:',
            when: ({
                confirmImg
            }) => {
                if (confirmImg) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'install',
            message: 'Please provide installation instructions for your project:',
        }, {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project:',
        }, {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution instructions for your project:',
        }, {
            type: 'input',
            name: 'testing',
            message: 'Please provide testing instructions for your project:',
        }, {
            type: 'list',
            name: 'licences',
            message: 'Which licences is your project covered under? (Check all that apply)',
            choices: [licences[0].name, licences[1].name, licences[2].name],
        }, {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username:',
        }, {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address:',
        },
    ]);
};


promptUser()
    .then(readmeData => {
        return generatePage(readmeData);
    })
    .then(readmeContent => {
        return fs.writeFile('./dist/README.md', readmeContent, err => {
           if (err) {
                reject(err);
                return;
            }
        })
    })
    .catch(err => {
        console.log(err);
    });