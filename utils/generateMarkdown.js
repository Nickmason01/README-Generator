//renders the badge image for the corresponding license if one was selected  
function renderLicenseBadge(license) {
 if(license === "Apache"){
  return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
 }
 if(license === 'GNU'){
  return `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`
 }
 if( license === 'MIT'){
  return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`}
 else{
  return " "
 }
 }



//creates a link to the license documentation if one is chosen 
function renderLicenseLink(license) {
  if(license === "Apache"){
    return "https://opensource.org/licenses/Apache-2.0"
   }else if(license === 'GNU'){
    return "https://www.gnu.org/licenses/gpl-3.0"
   }else if( license === 'MIT'){
    return "https://opensource.org/licenses/MIT"
   }else{
    return " "
   }
}



//creates the example readme file 
function generateMarkdown(data) {
  return `
  # ${data.name}

## Description
${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}


## Usage
${data.usage}

## Credits
${data.contributions}



## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

## Tests
${data.test}

##Questions

For additional information please visit my  GitHub profile at:
  <p><a href="https://www.Github.com/${data.Github}">Profile</a></P>
  For additional questions, please email at 
  <p><a href="mailto: ${data.email}">Send Message</a></p>


`
  
}

module.exports = generateMarkdown;
