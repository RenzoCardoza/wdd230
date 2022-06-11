//get the element related to benefits label and the label for costs
let benefitLabel = document.querySelector("#benefit");
let costsLabel = document.querySelector("#costs");
//get the options of radio
let memberships = document.querySelectorAll(".radio");
//compare it to the selection made
memberships[0].onchange = () => {
    benefitLabel.textContent = "There are no benefits associated to this membership";
    costsLabel.innerHTML = "Free";
}
memberships[1].onchange = () => {
    benefitLabel.innerHTML = `- Access to partner services<br>- Business Trainings every 3 Months`;
    costsLabel.innerHTML = "- 30$ per Month<br>- 250$ Annual Plan";
}
memberships[2].onchange = () => {
    benefitLabel.innerHTML = `-Access to special events by the company<br>- Business Trips 2 times during the year`;
    costsLabel.innerHTML = "- 50$ per Month<br>- 450$ Annual Plan";
}
memberships[3].onchange = () => {
    benefitLabel.innerHTML = `- Access every business trip<br>- Monthly Random Gifts<br>- Personalized Meetings<br>
    - VIP Access to every event`;
    costsLabel.innerHTML = "- 80$ per Month<br>- 700$ Annual Plan";
}
//add the value of the date to the hidden input element
const hiddenInput = document.querySelector("#datetime");
hiddenInput.value = `${new Date()}`;
