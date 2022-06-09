const { prompt } = require('inquirer');
const questions = require('./questions');

prompt(questions).then(ans => {

    function handleBadge(license) {
        
    }
    return `
    # ${ans.title}

    ## Description
    ${ans.description}


    
    
    `
});
