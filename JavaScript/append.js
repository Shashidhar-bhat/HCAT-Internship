const { JSDOM } = require("jsdom");

// Create a simulated DOM
const dom = new JSDOM(`<!DOCTYPE html><div id="container">Original Text</div>`);
const document = dom.window.document;

// Select the container element
let parent = document.getElementById("container");

// Create a new paragraph element
let newElement = document.createElement("p");
newElement.textContent = "Appended Text!";

// Append the new element to the container
parent.append(newElement);

// Output the updated HTML
console.log(document.body.innerHTML);
