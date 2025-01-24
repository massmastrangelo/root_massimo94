console.log ("JS 2 is loaded");

//Step 1 - selecting your element
const myEgg = document.getElementById("egg")

//Step 2 - adding a click event
//myEgg.addEventListener("click" , () => {

    myEgg.addEventListener("click" , () => {
    // myEgg.style.borderTop = "border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%"
    myEgg.classList.toggle("change-me");
})