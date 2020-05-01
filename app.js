"use strict";

const path = require("path");
const fs = require("fs");
const render = require("./lib/generateHTML");
const { managerPrompt, addTeamMember } = require("./prompts");

const output = path.resolve(__dirname, "output", "outputTeam.html");

async function createTeam() {
  try {
    console.log("Start building your team...");
    await managerPrompt();
    await addTeamMember();
  } catch (error) {
    console.error(error);
  }
}

createTeam();
