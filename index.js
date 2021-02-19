const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./JS/Manager");
const Intern = require("./JS/Intern");
const Engineer = require("./JS/Engineer");
const templete = require("./Src/templete");

const teamMember = [];

function menu() {
  function createManager() {
    console.log("Please start by creating a manager!");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team managers name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a value for managers name";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the team managers id number?",
          //todo validate- needs to be a number
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team managers email?",
          //validate: answer => {
          //todo email has to be email- regex
          //if(answer !== ""){
          //return true
          //}
          //return "Please enter a value for managers name"
          // }
        },
        {
          type: "input",
          name: "managerNumber",
          message: "What is the team managers office number?",
          //validate: answer => {
          //todo needs to be a number
          //if(answer !== ""){
          //    return true
          //}
          // return "Please enter a value for managers name"
          //}
        },
      ])
      .then((userInput) => {
        const manager = new Manager(
          userInput.managerName,
          userInput.managerId,
          userInput.managerEmail,
          userInput.managerNumber
        );
        teamMember.push(manager);
        addTeamMember();
      });
  }

  function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Done adding"],
        },
      ])
      .then((userInput) => {
        switch (userInput.memberChoice) {
          case "Engineer":
            addEngineer();

            break;
          case "Intern":
            addIntern();
            break;

          default:
            buildHTML();
            break;
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a value for engineer's name";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id number?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          //validate: answer => {
          //todo email has to be email- regex
          //if(answer !== ""){
          //return true
          //}
          //return "Please enter a value for managers name"
          // }
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's Github?",
          //validate: answer => {

          //if(answer !== ""){
          //    return true
          //}
          // return "Please enter a value for managers name"
          //}
        },
      ])
      .then((userInput) => {
        const engineer = new Engineer(
          userInput.engineerName,
          userInput.engineerId,
          userInput.engineerEmail,
          userInput.engineerGithub
        );
        teamMember.push(engineer);

        addTeamMember();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a value for intern's name";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id number?",
          //todo validate- needs to be a number
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
          //validate: answer => {
          //todo email has to be email- regex
          //if(answer !== ""){
          //return true
          //}
          //return "Please enter a value for managers name"
          // }
        },
        {
          type: "input",
          name: "internGithub",
          message: "What school does the intern go to?",
          //validate: answer => {

          //if(answer !== ""){
          //    return true
          //}
          // return "Please enter a value for managers name"
          //}
        },
      ])
      .then((userInput) => {
        const intern = new Intern(
          userInput.internName,
          userInput.internId,
          userInput.internEmail,
          userInput.internGithub
        );
        teamMember.push(intern);

        addTeamMember();
      });
  }
  //todo add this
  function buildHTML() {
    fs.writeFile("index.html", templete.generateTeam(teamMember), (err) => {
      if (err) {
        throw err;
      }
    });
  }

  createManager();
}

menu();
