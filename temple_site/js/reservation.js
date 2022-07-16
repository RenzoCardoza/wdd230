//get the select element to append childs
const templeLocation = document.querySelector("#temple-location");
//get the element holding the room desc
const roomDesc = document.querySelector("#r-desc");
//asynchronous function
async function getTemples(){
    //fetch the data from the json file
    const response = await fetch("json/temples.json");
    if (response.ok){
        const data = await response.json();
        console.log(data.temples);
        addTemples(data.temples);
    }
}
//function to add temple options to the select element
function addTemples(temples){
    temples.forEach(temple => {
        let templeName = document.createElement("option");
        templeName.setAttribute("value", `${temple.name}`);
        templeName.textContent = temple.name;

        templeLocation.appendChild(templeName);
    });
}
//chnage the span tag according the radio button selected
const rooms = document.querySelectorAll(".radio"); 
rooms[0].onchange = () => {
    roomDesc.textContent = `A single room has one single bed for single 
    occupancy. An additional bed (called an extra bed) may be added 
    to this room at the request of a guest and charged accordingly. Includes
    a small tv`;
}   
rooms[1].onchange = () => {
    roomDesc.textContent = `A twin room has two single beds for double occupancy. 
    An extra bed may be added to this room at the request of a guest and 
    charged accordingly. Includes a minibar at the main room`;
} 
rooms[2].onchange = () => {
    roomDesc.textContent = `A quad room has four separate single beds and can accommodate 
    four persons together in the same room. Includes minibar, 2 large televisions and 2 
    separate bathrooms.`;
} 
rooms[3].onchange = () => {
    roomDesc.textContent = `A Suite room is comprised of more than one room. Includes living
    room, direct view to the temple nearby. Room service 24 hours available. The decor of such units 
    is of very high standards`;
}
rooms[4].onchange = () => {
    roomDesc.textContent = `The duplex suite comprises two rooms situated on different floors, which are 
    connected by an internal staircase. This suite is generally used by business guests who wish to use the 
    lower level as an office and meeting place and the upper-level room as a bedroom.`; 
}
getTemples();