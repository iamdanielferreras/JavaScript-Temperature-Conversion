/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/

    const textBox = document.getElementById("textBox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");
    let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please Select a Unit!";
        result.style.color = "red";
    }

}
