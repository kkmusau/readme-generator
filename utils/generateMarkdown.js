// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GitHub") {
    return "![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)";
  } else if (license === "NPM") {
    return "![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)";
  } else if (license === "PyPI") {
    return "[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)";
  } else if (license === "MIT") {
    return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
  } else if (license === "None") {
    return "[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#constributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license})
  <br/>
  This application is covered by the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.tests}

  ## Questions
  ${data.questions} </br>
  Find me on Github: [${data.github}](https://github.com/${data.github})
  </br>
  Email me any questions at: ${data.email}
  </br>

`;
}

module.exports = generateMarkdown;
