"use strict";
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const teamArray = [];

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

    teamArray.push(manager);
  } catch (error) {
    console.error(error);
  }
}

async function addTeamMember() {
  try {
    const { teamMember } = await inquirer.prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Which team member would you like to add?",
        choices: ["Engineer", "Intern", "I'm done"],
      },
    ]);

    if (teamMember === "Engineer") {
      await engineerPrompt();
    } else if (teamMember === "Intern") {
      await internPrompt();
    } else {
      console.log("I'm done");
      //create generated HTML, writefile
    }
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

    teamArray.push(engineer);

    await addTeamMember();
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

    teamArray.push(intern);

    await addTeamMember();
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  managerPrompt,
  engineerPrompt,
  internPrompt,
  addTeamMember,
  teamArray,
};
