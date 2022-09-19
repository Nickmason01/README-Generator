// TODO: Include packages needed for this application
const inquirer =require('inquirer')
const fs = require('fs')
// const Markdown = require('./generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
 .prompt([
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Short description of project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'installation instruction?',
        name: 'installation',
      },
      {
          type :'input',
          message: 'usage information?',
          name:'usage',
      },
      {
        type :'input',
        message: 'contribution guidelines?',
        name:'contributions',
    },
    {
        type :'input',
        message: 'test instructions',
        name:'test',
    },
    {
        type: 'list',
        message:'Choose your perferred License',
        choices: ["MIT", 'GNU', 'Apache', 'none'],
        name:'license'
    },
    {
        type:'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is you Github?',
        name: 'Github'
    }
])
.then((response) => {
    console.log(response)
     fs.writeFile('ExampleREADME.md',generateMarkdown(response), err => {
        if (err) {
          console.error(err);
        }})
  }
  
 
  );

// const generateReadme = ({name, description, installation, usage, contributions, test, license, email, Github}) =>
// `# ${name}

// ## Description
// ${description}

// ## Table of Contents 

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation
// ${installation}


// ## Usage
// ${usage}

// ## Credits
// ${contributions}



// ## License
// ${license}



// ## Badges


// ## Features


// ## Tests
// ${test}

// ##Contact

// For additional information please visit my  GitHub profile at:
//   <p><a href=${Github}</a></p>
//   For additional questions, please email at 
//   <p><a href="mailto: ${email}">Send Message</a></p>


// `




   


// TODO: Create a function to initialize app
function init() {
   
   
}

// Function call to initialize app
init();
