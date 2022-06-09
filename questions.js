const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the application\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who is contribuiting?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following apply?',
        choices: ['GitHub', 'NPM', 'Conda', 'PyPI', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address?'
    }
];

module.exports = questions;