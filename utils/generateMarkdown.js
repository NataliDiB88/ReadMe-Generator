// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None'){
    return `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None'){
    return `- [License](#license)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None'){
    return `## License
    - ${license}`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
- ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
${renderLicenseLink (data.license)}
- [Tests](#tests)
- [Contact](#contact)

## Installation
- ${data.installation}

## Usage
- ${data.usage}

## Contribution
- ${data.contribution}
${renderLicenseSection(data.license)}

## Tests
- ${data.tests}

## Contact
- ${data.email}

- ${data.github}

`;
}

export default generateMarkdown;
