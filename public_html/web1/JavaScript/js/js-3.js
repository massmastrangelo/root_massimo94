console.log("⚽️")

const circles = document.querySelectorAll(".circle")

circles.forEach(function(item, index) {
    item.addEventListener("click", function(){
        alert("circle clicked: " + index)
        if(item.classList.contains("square"))
            item.classList.toggle("make-round");
        item.classList.toggle("move-me");
    })
})

for(let i = 0; i < circles.length; i++) {
    console.log(i);
    circles[i].style.backgroundColor = "red"
}

