// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if(license === "Apache"){
  return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
 }else if(license === 'GNU'){
  return `https://img.shields.io/badge/License-GPLv3-blue.svg`
 }else if( license === 'MIT'){
  return `https://img.shields.io/badge/License-MIT-yellow.svg`
 }else{
  return ""
 }
 }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache"){
    return "https://opensource.org/licenses/Apache-2.0"
   }else if(license === 'GNU'){
    return "https://www.gnu.org/licenses/gpl-3.0"
   }else if( license === 'MIT'){
    return "https://opensource.org/licenses/MIT"
   }else{
    return ""
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === " "){
    return ""
  }else {
    return `## License ${license}`
  }
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`
}

module.exports = generateMarkdown;
