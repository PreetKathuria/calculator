const buttons = document.querySelectorAll("button");
const monitor = document.querySelector(".monitor input");
let freshstart = false;

buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        let value = button.innerText;
        console.log(value);
        if(freshstart === true) {
            monitor.value = value;
            freshstart = false;
            monitor.value = monitor.value.slice(0,-1);
        }
        if(!isNaN(value) || "+-*/.".includes(value)) {
            monitor.value += value;
        }
        if(value === "=") {
            monitor.value = eval(monitor.value);
            freshstart = true;
        }
        if(value === "AC") {
            monitor.value = "";
        }
        if(value === "DEL") {
            monitor.value = monitor.value.slice(0,-1);
        }
    });
});