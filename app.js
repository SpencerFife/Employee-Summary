'use strict';

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./lib/generateHTML');
const prompts = require('./prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const output = path.resolve(__dirname, 'output', 'outputTeam.html');

const 