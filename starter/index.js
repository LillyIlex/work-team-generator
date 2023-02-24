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

// Employee

//Manager extends Employee  constructor function

//Engineer extends Employee  constructor function

//Intern extends Employee  constructor function



/*
inquirer
  .prompt([
    // Pass your questions in here 
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  }); 
   */