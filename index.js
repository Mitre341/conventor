

let input = document.getElementById("inputValue");
let length = document.getElementById("lengthValue");
let volume = document.getElementById("volumeValue");
let mass = document.getElementById("massValue");
let button = document.getElementById("btn");


function convert() {
    let value = parseFloat(input.value);
    
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    length.textContent = ` ${value} meters = ${(value * 3.28084).toFixed(3)} feet | ${value} feet = ${(value / 3.28084).toFixed(3)} meters `;// meters to feet
    volume.textContent = ` ${value} liters = ${(value * 0.264172).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264172).toFixed(3)} liters `; // liters to gallons
    mass.textContent = ` ${value} kilograms = ${(value * 2.20462).toFixed(3)} pounds |  ${value} pounds = ${(value * 2.20462).toFixed(3)} kilograms`; // kilograms to pounds
}

button.addEventListener("click", convert);