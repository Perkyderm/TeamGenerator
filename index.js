const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./JS/Manager");
const Employee = require("./JS/Employee");
const Intern = require("./JS/Intern");
const Engineer = require("./JS/Engineer");

const teamMember = [];

const id = [];

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
        console.log(userInput);
        const manager = new Manager(
          userInput.managerName,
          userInput.managerId,
          userInput.managerEmail,
          userInput.managerNumber
        );
        teamMember.push(manager);
        id.push(userInput.managerId);
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
    console.log("In engineer");
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the egineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a value for managers name";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id number?",
          //todo validate- needs to be a number
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
          message: "What is the enigeer's Github?",
          //validate: answer => {

          //if(answer !== ""){
          //    return true
          //}
          // return "Please enter a value for managers name"
          //}
        },
      ])
      .then((userInput) => {
        console.log(userInput);
        const engineer = new Engineer(
          userInput.engineerName,
          userInput.engineerId,
          userInput.engineerEmail,
          userInput.engineerGithub
        );
        teamMember.push(engineer);
        id.push(userInput.engineerId);
        addTeamMember();
      });
  }

  //todo add this
  function addIntern() {
    console.log("in intern");
  }

  function buildHTML() {
    console.log(teamMember);
    fs.writeFile("index.html", teamMember);
  }

  createManager();
}

menu();
