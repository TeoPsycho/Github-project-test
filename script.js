var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector(".button");
var body = document.querySelector("body");

// display initial CSS background property
css.textContent = getComputedStyle(body).backgroundImage + ";";
// note the different name of the property, "backgroundImage", for JS inquiries
//    compared to name for CSS name "background-image"

function rand() {
    var temp = Math.floor(Math.random() * 256).toString(16);
    if (temp.length < 2) { temp = "0" + temp }
    return temp;
}

function modifyBackground() {
    /*
    var backgroundImage =
        "background-image: linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    // console.log(backgroundImage);
    body.setAttribute("style", backgroundImage);
    // console.log(backgroundImage);
    */

    // or much much simpler:
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    /*
    // write code to heading h3:
    // var node = document.createTextNode(backgroundImage);
    var node = document.createTextNode("background-image: " + backgroundImage);
    var nodes = css.childNodes;
    // console.log(css.childNodes);
    if (nodes.length > 0) { css.removeChild(css.childNodes[0]); }
    css.appendChild(node);
    */
    // or much much simpler:
    css.textContent = body.style.background + ";";
    // console.log(body.style);
}

function createRandomBackground() {
    color1.value = "#" + rand() + rand() + rand();
    color2.value = "#" + rand() + rand() + rand();
    modifyBackground();
}


color1.addEventListener("input", modifyBackground);
color2.addEventListener("input", modifyBackground);
button.addEventListener("click", createRandomBackground);

/*
It is better to change style by method style instead of method setAttribute
   because the later method will ovewrite all other styles and keep only the
   one set now, while the first method will add or modify the style to the
   existing list of styles.
   
   body.style.backgroundImage = "...";"
   instead of
   body.setAttribute("style", "background-image: ..."); */

/*
// Test code to prove that the random generator does not produce number 256,
//    only integer numbers between 0 and 255.
for (var i = 1; i < 10000; i++) {
    var temp = Math.floor(Math.random() * 256);
    // if (temp === 0 || temp === 1 || temp === 255 || temp === 256) {
    if (temp === 256) {
        console.log(i + " loops: number " + temp); break;
    }
}
console.log("end");
*/