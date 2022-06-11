const fs = require('fs');
// Function that renders the lincense badge
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

// A function to generate markdown for README
function generateMarkdown(data) {
  let output = `
  
# ${data.title}

## Description
  ${data.description}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license})
  <br/>
  This application is covered by the ${data.license} license.
  

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Constributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

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
  // returns the data inputs into the README unless there is an error
  return fs.writeFile('./README.md', output, err => { if (err) throw err });
}
//Exports generateMardown file
module.exports = generateMarkdown;
