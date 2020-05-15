"use strict";
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const render = require("./templates/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const open = require("open");

const output = path.resolve(__dirname, "output", "outputTeam.html");

const teamArray = [];

async function managerPrompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "You must enter a name.";
        },
      },
      {
        type: "input",
        name: "managerID",
        message: "What is your manager's ID?",
        validate: (answer) => {
          const validId = answer.match(/^[1-9]\d*$/);
          if (validId) {
            return true;
          }
          return "You must enter a number.";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
        validate: (answer) => {
          const validEmail = answer.match(/\S+@\S+\.\S+/);
          if (validEmail) {
            return true;
          }
          return "Enter a valid email.";
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
        validate: (answer) => {
          const validOfficeNumber = answer.match(/^[1-9]\d*$/);
          if (validOfficeNumber) {
            return true;
          }
          return "You must enter an Office number.";
        },
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
      generateTeam();
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
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "You must enter a name.";
        },
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is your engineer's ID?",
        validate: (answer) => {
          const validId = answer.match(/^[1-9]\d*$/);
          if (validId) {
            return true;
          }
          return "You must enter a number.";
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's Email?",
        validate: (answer) => {
          const validEmail = answer.match(/\S+@\S+\.\S+/);
          if (validEmail) {
            return true;
          }
          return "Enter a valid email.";
        },
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is your engineer's GitHub?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "You must enter a GitHub User.";
        },
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
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "You must enter a name.";
        },
      },
      {
        type: "input",
        name: "internID",
        message: "What is your intern's ID?",
        validate: (answer) => {
          const validId = answer.match(/^[1-9]\d*$/);
          if (validId) {
            return true;
          }
          return "You must enter a number.";
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's Email?",
        validate: (answer) => {
          const validEmail = answer.match(/\S+@\S+\.\S+/);
          if (validEmail) {
            return true;
          }
          return "Enter a valid email.";
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's School?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "You must enter a school.";
        },
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

function generateTeam() {
  fs.writeFile(output, render(teamArray), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("You've successfully built your team.");
    }
  });
  (async () => {
    await open("./output/outputTeam.html", { wait: true });
  })();
}

module.exports = {
  managerPrompt,
  engineerPrompt,
  internPrompt,
  addTeamMember,
  generateTeam,
  teamArray,
};
