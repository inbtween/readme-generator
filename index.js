// DEPENDENCIES ===============================
// built in node packages
const fs = require("fs");
// npm packages
const inquirer = require("inquirer");

// DATA =======================================

// FUNCTIONS ==================================
// GIVE a command-line application that accepts user input
const writeUserInput = (res) => {
  console.log(res.username);
  // build a string with user responses
  const md = `# ${res.title}

  ## Description
  \`\`\`
  ${res.description}
  \`\`\`
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  \`\`\`
  ${res.installations}
  \`\`\`

  ## Usage
  \`\`\`
  ${res.usage}
  \`\`\`

  ## License
  \`\`\`
  ${res.license}
  \`\`\`

  ## Contributing
  \`\`\`
  ${res.contributing}
  \`\`\`

  ## Tests
  \`\`\`
  ${res.tests}
  \`\`\`

  ## Questions
  \`\`\`
  ${res.questions}
  \`\`\`
  `;
  // write it to a file
  fs.writeFile("output.md", md, (err) =>
    err ? console.error(err) : console.log("success")
  );
};

// USER INTERACTIONS ==========================
var questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "installations",
    message: "Please describe your installations.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how to use them.",
  },
  {
    type: "input",
    name: "license",
    message: "Please list the licenses used in this project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please list your contributors.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe your tests ran.",
  },
  {
    type: "input",
    name: "questions",
    message: "Please input your email and github information.",
  },
];

function initial() {
  inquirer.prompt(questions).then((res) => {
    console.log("generating markdown");
    writeUserInput(res);
    console.log(res);
  });
}
initial();
