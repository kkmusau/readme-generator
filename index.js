const { prompt } = require('inquirer');
const questions = require('./questions');
const mkGen = require('./utils/generateMarkdown');

prompt(questions).then(mkGen);
