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
};

const addEmployee = () => {
    console.log('Add your first employee!')
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'title',
            message: 'Choose the title of your employee: ',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?'
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log ('Please enter the employee name!')
                    return false;
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
                    console.log('Please enter employee ID for the employee!');
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
                    console.log('Please enter an email address for the employee!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Github Username: ',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log ('Please enter the employee Github username!')
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school: ",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                    return false;
                }
            }  
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Do you need to add another employee?',
            default: false,
        },
    ])
    .then(employeeInput => {
        let {name, id, email, title, github, school, confirmEmployee } = employeeInput;
        let employee;

        if (title === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        } else if (title === 'Intern') {
            employee = new Intern (name, id, email, school);
        }

        team.push(employee);

        if (confirmEmployee) {
            return addEmployee(team);
        } else {
            return team;
        }
    })
}