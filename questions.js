const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'If applicable, what is the installation process for the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If applicable, who were the contributors of this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Is there a test inculded?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following licenses apply?',
        choices: ['GitHub', 'NPM', 'Conda', 'PyPI', 'MIT' ,'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address?',
    }
];

module.exports = questions;