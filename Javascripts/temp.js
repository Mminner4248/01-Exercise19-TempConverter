var temp = document.getElementById("tempEnt");
var tempF = document.getElementById("tempFah");
var tempC = document.getElementById("tempCel");
var tempConv = document.getElementById("convTemp");

function eraseText() {
    document.getElementById("tempEnt").value = "";
}

function toCelsius (temp) {
  let toCel = Math.floor((temp - 32) * 5 / 9);
  console.log(toCel);
  if (toCel > 32){
    var str = "The temperature is " + toCel + " degrees Celsius."
    var result = str.fontcolor("red");
    tempConv.innerHTML = result;
  }else if (toCel < 0){
    var str = "The temperature is " + toCel + " degrees Celsius."
    var result = str.fontcolor("blue");
    tempConv.innerHTML = result;
  }else {
     var str = "The temperature is " + toCel + " degrees Celsius."
    var result = str.fontcolor("green");
    tempConv.innerHTML = result;
  }
}

function toFahrenheit (temp) {
  let toFah = Math.floor((temp * 9) / 5 + 32);
  console.log(toFah);
    if (toFah > 92){
    var str = "The temperature is " + toFah + " degrees Fahrenheit."
    var result = str.fontcolor("red");
    tempConv.innerHTML = result;
  }else if (toFah < 32){
    var str = "The temperature is " + toFah + " degrees Fahrenheit."
    var result = str.fontcolor("blue");
    tempConv.innerHTML = result;
  }else {
     var str = "The temperature is " + toFah + " degrees Fahrenheit."
    var result = str.fontcolor("green");
    tempConv.innerHTML = result;
  }
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if (tempF.checked){
    console.log("tempFah selected");
    toFahrenheit (temp.value);
  }else if (tempC.checked){
    console.log("tempCel selected");
    toCelsius (temp.value);
  }
  
}


// Assign a function to be executed when the button is clicked
button.addEventListener("click", function(){
  console.log(temp.value);
  determineConverter();
});

document.addEventListener("keyup", function(event){
  if (event.which === 13){
    console.log(temp.value);
    determineConverter();
  }
});