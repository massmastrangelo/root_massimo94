console.log("⚽️ loaded!")

const stage = document.querySelector("body");
const myDilorenzo = document.getElementById("dilorenzo");

const heJumps = new Audio("sound/cartoon_boing-92413.mp3")

myDilorenzo.onclick = function() {
    this.classList.toggle("move");
}
stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);
    
    // var coords = "translateX(" + event.clientX + "px) translateY(" + event.clientY + "px)";
    var coords = `translateX(${(event.clientX-150)}px) translateY(${(event.clientY-264.735)}px)`;
    myDilorenzo.style.transform = coords;
})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(myDilorenzo);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        myDilorenzo.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        myDilorenzo.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        myDilorenzo.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        myDilorenzo.style.transform = coords;
    }



}
function addMyObject() {


/* Custom Object */
let myObject = document.createElement("img");
myObject.src = "img/soccerball.svg";
myObject.style.width = "70px";
stage.append(myObject);
let w = window.innerWidth;
let h = window.innerWidth;
// randomize new X & Y numbers within space limits
let randomX = Math.floor((Math.random() * w) + 1);
let randomY = Math.floor((Math.random() * h) + 1);

myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`

setTimeout(() => { myObject.remove(); }, 5000);
}

addMyObject();