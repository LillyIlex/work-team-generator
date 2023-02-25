const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.



const promptUser = () => {

inquirer
  .prompt([
    //Questions
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
},
{
  type: "rawlist",
  name: "options",
  message: "Please select what you would like to do next:",
  choices: ["Add an engineer", "Add an intern", "Finish building the team"]
},
  ])
  .then(answers => {
    // Answers
// conditionals for options
if (answers.options == "Add an engineer") {
  inquirer
  .prompt([
    //Engineer Questions
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
},
{
  type: "rawlist",
  name: "options",
  message: "Please select what you would like to do next:",
  choices: ["Add an engineer", "Add an intern", "Finish building the team"] // need to link back to menu
}
])
 } else if (answers.options == "Add an intern" ) {
    inquirer
    .prompt([
      //Intern Questions
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
  },
  {
    type: "rawlist",
    name: "options",
    message: "Please select what you would like to do next:",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"] // need to link back to menu
  }
])
 }  else {
 //need to render
 }

    //fs.writeFile(path.join(process.cwd() + "/sample/", 'team.HTML') generateTeam(team) )  {

    //}
  }); 
}
promptUser()