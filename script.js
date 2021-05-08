var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("#random");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

function createHexString() {
    hexString = Math.floor(Math.random() * 255).toString(16);
    if (hexString.length < 2) {
        hexString = "0" + hexString;
    }
    return hexString;
}

function combineStrings() {
    hexString1 = createHexString();
    hexString2 = createHexString();
    hexString3 = createHexString();

    combinedString = "#" + hexString1 + hexString2 + hexString3;
    return combinedString;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", function() {
    color1.value = combineStrings();
    color2.value = combineStrings();
    setGradient();
});