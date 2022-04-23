// get the local time to add in the footer
const dt = new Date();

//get the year from the date variable
const year = dt.getFullYear(); 

//DOM to manipulate the span tag at the footer
document.querySelector("#year").textContent = year;

//last modified date 
document.querySelector("#lmodified").textContent = document.lastModified