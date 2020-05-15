"use strict";

const path = require("path");
const fs = require("fs");
const render = require("./templates/generateHTML");
const { managerPrompt, addTeamMember, teamArray } = require("./prompts");

// function generateTeam() {
//   fs.writeFile(output, render(teamArray), (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("You've successfully built your team.");
//     }
//   });
// }

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
