"use strict";

const render = require("./templates/generateHTML");
const { managerPrompt, addTeamMember } = require("./prompts");

async function createTeam() {
  try {
    console.log("Start building your team...");
    await managerPrompt();
    await addTeamMember();
  } catch (error) {
    console.error("Something went wrong while building your team...", error);
  }
}
createTeam();
