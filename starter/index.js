const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const teamArray = []


const promptUser = () => {

     //Manager Questions
    const managerQuestions = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the team manager's name?"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the team manager's ID?"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the team manager's email address?"
                },
                {
                    type: "input",
                    name: "managerOfficeNo",
                    message: "What is the team manager's office number?"
                }
            ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNo)
                teamArray.push(manager)
                createTeam()
            })
        }

    managerQuestions() 

    const buildTeam = () => {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        } 
          fs.writeFileSync(outputPath, render(teamArray), "UTF-8")
    }

    const createTeam = () => {
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "options",
                    message: "Please select what you would like to do next:",
                    choices: ["Add an engineer", "Add an intern", "Finish building the team"]
                }
            ])
            .then(answers => {
                switch (answers.options) {
                    case "Add an engineer": engineerQuestions();
                        break;
                    case "Add an intern": internQuestions();
                        break;
                    case "Finish building the team": buildTeam();
                        break;

                }
            })
        }

       //Engineer Questions
        const engineerQuestions = () => {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "engineerName",
                        message: "What is the engineer's name?"
                    },
                    {
                        type: "input",
                        name: "engineerId",
                        message: "What is the engineer's ID?"
                    },
                    {
                        type: "input",
                        name: "engineerEmail",
                        message: "What is the engineer's email address?"
                    },
                    {
                        type: "input",
                        name: "engineerGithub",
                        message: "Enter the engineers GitHub username?"
                    }
                ]).then(answers => {
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
                    teamArray.push(engineer)
                    createTeam()
                });
        }

   //Intern Questions
        const internQuestions = () => {
            inquirer
                .prompt([

                    {
                        type: "input",
                        name: "internName",
                        message: "What is the intern's name?"
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "What is the intern's ID?"
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is the intern's email address?"
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "Enter the name of the interns school:"
                    }
                ]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                    teamArray.push(intern)
                    createTeam()
                });
        }
    };


promptUser()

