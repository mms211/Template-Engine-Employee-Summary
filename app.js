var fs = require("fs");
var inquirer = require("inquirer");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        message: "What is your title?",
        name: "title",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ]
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
];

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Where do you go to school?"
    },

];

const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    },

];


