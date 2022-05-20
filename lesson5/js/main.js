//create three variables to hold references to input,
//button, and list elements
const input = document.querySelector("#favchap");
const addButton = document.querySelector("#add-chap");
const list = document.querySelector(".list");

//attach an event listener to the add chapter button
addButton.addEventListener("click", function (){
    //make sure the input has some text in it
    let inputValue = input.value;
    
    if (inputValue.length > 0){
        //create a li and button elements
        //then, add values to them 
        let liElem = document.createElement("li");
        liElem.textContent = inputValue;
        let btn = document.createElement("button");
        btn.textContent = "❌";

        //append the elements
        liElem.appendChild(btn);
        list.appendChild(liElem);

        //attach event listener to delete li element when clicked
        btn.addEventListener("click", () => {
            //delete the li element
            list.removeChild(liElem);
        });

        //send the focus to the input element
        input.focus();

        //empty the input element
        input.value = "";
    }
});