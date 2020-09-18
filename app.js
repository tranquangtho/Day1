const $time = document.getElementById("time");
const $red = document.getElementById("red");
const $green = document.getElementById("green");
const $yellow = document.getElementById("yellow");
function colorYellow() {
    $time.style.color = "";
    $yellow.classList.add("yellow");
    $green.classList.remove("green");
    yellow = setTimeout(() => {
        $time.innerText = 10;
        colorRed();
    }, 2900);
}
function colorGreen() {
    $time.style.color = "";
    $green.classList.add("green");
    $red.classList.remove("red");
    green = setTimeout(() => {
        $time.innerText = 3;
        colorYellow();
    }, 14900);
}
function colorRed() {
    $time.style.color = "";
    $red.classList.add("red");
    $yellow.classList.remove("yellow");
    red = setTimeout(() => {
        $time.innerText = 15;
        colorGreen();
    }, 9900);
}
function mySet() {
    let mySet = setInterval(() => {
        --$time.innerText;
    }, 1000);
    colorGreen();
}
mySet();