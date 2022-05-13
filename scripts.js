
function setRed() {
    var redElement = document.getElementById("redDiv");
    var yellowElement = document.getElementById("yellowDiv");
    var greenElement = document.getElementById("greenDiv");
    redElement.style.backgroundColor = "red";
    yellowElement.style.backgroundColor = "white";
    greenElement.style.backgroundColor = "white";
}

function setYellow() {
    var redElement = document.getElementById("redDiv");
    var yellowElement = document.getElementById("yellowDiv");
    var greenElement = document.getElementById("greenDiv");
    redElement.style.backgroundColor = "white";
    yellowElement.style.backgroundColor = "yellow";
    greenElement.style.backgroundColor = "white";
}

function setGreen() {
    var redElement = document.getElementById("redDiv");
    var yellowElement = document.getElementById("yellowDiv");
    var greenElement = document.getElementById("greenDiv");
    redElement.style.backgroundColor = "white";
    yellowElement.style.backgroundColor = "white";
    greenElement.style.backgroundColor = "Green";
}

function setWhite() {
    var redElement = document.getElementById("redDiv");
    var yellowElement = document.getElementById("yellowDiv");
    var greenElement = document.getElementById("greenDiv");
    redElement.style.backgroundColor = "white";
    yellowElement.style.backgroundColor = "white";
    greenElement.style.backgroundColor = "white";
}

function start() {
    setWhite();
    setTimeout(setRed, 2000);
    setTimeout(setYellow, 5000);
    setTimeout(setGreen, 8000);
}