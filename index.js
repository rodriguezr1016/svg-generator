const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path')
const questions = [
{   type: "input",
    name: "shape",
    message: "What shape would you like to use?",
},
{
    type: "input",
    name: "color",
    message: "What color do you want your shape to be?",
},
{
    type: "input",
    name: "text",
    message: "Enter any text up to three characters that you would like to show up.",
},
{
    type: "input",
    name: "textColor",
    message: "What color do you want the text?",
}
]

function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log("Creating svg file...");
        writeToFile("logo.svg", responses);
    });
}
init()