const inquirer = require("inquirer");
const fs = require("fs");

//array to hold team member profiles
const team = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type:'input', 
            name: 'name',
            message: 'Who is the manger of the team?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager to continue!');
                }
            }
        },
        {
            type:'input', 
            name: 'id',
            message: 'Employee ID: ',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID for manager!');
                }
            }
        },
        {
            type:'input', 
            name: 'email',
            message: 'Email: ',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                }
            }
        },
        {
            type:'input', 
            name: 'office',
            message: 'Office Number: ',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter the manger office number!');
                }
            }
        },
        {
            type:'', 
            name: '',
            message: '',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('');
                }
            }
        },
    ])
    .then (managerInput => {
        const {name, id, email, office} = managerInput;
        const manager = new manager (name, id, email, office);

        team.push(manager);
    })
}