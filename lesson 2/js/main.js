//get the local time and store it in a variable
const dt = new Date();

//get the full year from dt constant
const year = dt.getFullYear();

//use DOM to manipulate span tag on the footer
document.querySelector("#year").textContent = year;

//use DOM  to manipulate span tag last updated on the footer
document.querySelector("#lmodified").textContent = document.lastModified;
