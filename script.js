let textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
let temp ;

btn.onclick = function () {
    temp = textBox.value;
    if(temp == null){
        result.textContent = `Enter Temperature`;
    }
    else if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`
    }
    else if (toCelsius.checked) {
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)}°C`
    }
    else {
        result.textContent = `Select a unit`
    }
}