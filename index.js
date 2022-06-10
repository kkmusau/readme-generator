const { prompt } = require('inquirer');
const questions = require('./questions');
const utlil = require('util');

const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisfy(fs.writeFile);

prompt(questions).then(data => {

    function handleBadge(license) {
        
    }

});
