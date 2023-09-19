const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");
const questions = [
{   type: "list",
    name: "shape",
    message: "What shape would you like to use?",
    choices: ["Square", "Circle", "Triangle"]
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

function writeToFile(fileName, responses) {
  console.log(responses.shape)
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${responses.shape}`;
    let shapeChoice;
  if (responses.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${responses.color}"/>`;
  } else if (responses.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${responses.color}"/>`;
  } else if(responses.shape === "Circle"){
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${responses.color}"/>`;
  }else{
    console.log("lol")
  }
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responses.textColor}">${responses.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";
     fs.writeFile(fileName, svgString, (err) =>
    err ? console.error(err) : console.log('Success! Checkout new svg file.'))
}
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log("Creating svg file...");
        writeToFile("logo.svg", responses);
    });
}
init()