document.getElementById("blue").onclick = switchBlue;
document.getElementById("green").onclick = switchGreen;
document.getElementById("yellow").onclick = switchYellow;
document.getElementById("pink").onclick = switchPink;
document.getElementById("white").onclick = switchWhite;

function switchBlue() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";
}

function switchGreen() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
}

function switchYellow() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightyellow";
}

function switchPink() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightpink";
}

function switchWhite() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
}