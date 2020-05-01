"use strict";
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");

async function managerPrompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
        //validate:
      },
      {
        type: "input",
        name: "managerID",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
      },
    ]);

    const manager = new Manager(
      answers.managerName,
      answers.managerID,
      answers.managerEmail,
      answers.managerOfficeNumber
    );

    console.log(answers, manager);
  } catch (error) {
    console.error(error);
  }
}

async function engineerPrompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is your engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's Email?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is your engineer's GitHub?",
      },
    ]);

    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGitHub
    );

    console.log(answers, engineer);
  } catch (error) {
    console.error(error);
  }
}

async function internPrompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's Name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's Email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's School?",
      },
    ]);

    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );

    console.log(answers, intern);
  } catch (error) {
    console.error(error);
  }
}
