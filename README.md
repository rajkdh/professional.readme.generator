 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h3 align="center">Professional README Generator</h3>

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
The focus behind this project was to create an application which made it easier for the users to produce a README document for different projects quickly. As the structure almost always stays the same, this application allows users to answer simple questions and returns a well structured README.md.

## Installation
Following dependecies are required:
```
npm i
```

## Usage
Clone this repository

## Credit
N/A

## License
    
    This project is licensed under the MITlicense.
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return ''
  }
}
