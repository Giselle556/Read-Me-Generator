console.clear();
const inquirer = require("inquirer");
const fs = require("fs");



inquirer
  .prompt([
    {
      name: "title",
      message: "what is the title of your project",
    },
    {
      name: "description",
      message: "describe your project",
    },
    {
      name: "technology",
      message: "what technology did you use for this project",
    },
    {
      name: "usage",
      message: "How do you navigate through the project",
    },
    {
      name: "license",
      message: "What is the license for this project",
      type: "list",
      choices: ["MIT", "Apache", "GNU"],
    },
    {
      name: "Contributing",
      message: "Who contributed to this project",
    },
    {
      name: "Tests",
      message: "What tests were performed for this project",
    },
    {
      name: "Contact",
      message: "What is an email a user can contact you regarding a question",
    },
    {
        name: "user",
        message: "Copy your github repo https link here",
    },
  ])

  .then(function (data) {
    console.log(data);

    fs.writeFile(
      `./data/${data.title}.md`,
      generateMarkdown(data),
      function (err) {
        if (err) return console.log(err);
        console.log("Done!");
      }
    );
  });
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description
${data.description}
  
  ## Table of Contents
  * [Technology](#technology)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)  
  * [Tests](#tests)
  * [Contact](#contact)


## Technology
${data.technology}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license.

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.Tests}

## Contact
Find me on GitHub: [${data.user}](https://github.com/${data.user})<br />
<br />
✉️ Email me with any questions: ${data.Contact}<br /><br />


 `;
}
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
