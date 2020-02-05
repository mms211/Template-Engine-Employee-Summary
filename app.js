var fs = require("fs");
var inquirer = require("inquirer");
const path = require("path");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/HTMLRenderer");
const teamMembers = [];
const idArray = [];

function appMenu() {

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's ID?",
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter at least one number";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    const pass = answer.match(/\S+@\S+\.\S+/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid phone number";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            console.log(manager);
            teamMembers.push(manager);
            console.log(teamMembers);
            idArray.push(answers.managerId);
            createTeam();
        })
    };

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                message: "What type of team member would you like to create?",
                name: "teamMemberType",
                choices: [
                    "Engineer",
                    "Intern",
                    "My team is complete"
                ]
            }
        ]).then(answer => {
            switch(answer.teamMemberType) {
                case "Engineer": 
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "My team is complete":
                    buildTeam();
                    break;    
            }
        })
    };

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID?",
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter at least one number";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: answer => {
                    const pass = answer.match(/\S+@\S+\.\S+/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your gitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character"
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
            console.log(engineer);
            teamMembers.push(engineer);
            console.log(teamMembers);
            idArray.push(answers.engineerId);
            createTeam();
        })
    };

    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID?",
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter at least one number";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: answer => {
                    const pass = answer.match(/\S+@\S+\.\S+/)
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character"
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            console.log(intern);
            teamMembers.push(intern);
            console.log(teamMembers);
            idArray.push(answers.internId);
            createTeam();
        })
    };

    function buildTeam() {
        //write team members to a html file
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
    }

    createManager();
}

appMenu();
