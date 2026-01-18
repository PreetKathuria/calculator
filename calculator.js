const button = document.querySelectorAll("button");
const monitor = document.querySelector(".monitor input");

button.addeventListner("click",() => {
    let inside = button.innerText;
    console.log(inside);
    monitor.innerText = inside;
})