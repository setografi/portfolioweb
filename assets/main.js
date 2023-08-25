/*==================== BUTTON ====================*/

const buttonA = document.getElementById("button_a")
const buttonB = document.getElementById("button_b")
const buttonC = document.getElementById("button_c")

const contentA = document.getElementById("content_a")
const contentB = document.getElementById("content_b")
const contentC = document.getElementById("content_c")

buttonA.addEventListener("click", function (){
    contentA.style.display = "block";
    contentB.style.display = "none";
    contentC.style.display = "none";
})

buttonB.addEventListener("click", function (){
    contentA.style.display = "none";
    contentB.style.display = "block";
    contentC.style.display = "none";
})

buttonC.addEventListener("click", function (){
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "block";
})