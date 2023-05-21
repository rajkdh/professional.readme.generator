// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//.each for each license selected?
function renderLicenseBadge(license) {
if (license !== 'None') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else {
   return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license}license.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}

<h3 align="center">${data.title}</h3>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#credit">Credit</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project
${data.description}

## Installation
Following dependecies are required:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Credit
${data.credit}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
