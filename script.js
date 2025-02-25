const intro = document.getElementById("intro")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const start = document.getElementById("start button")
const end = document.getElementById("end button")

start.addEventListener("click", scene1)
function scene1(){
    intro.textContent = "You at least have the will to live. A comrade of yours raids the weapons armory and finds a collection of weapons with the powers of the elements. You can choose between 4 great elemental weapons, The Great Fire Sword Salamandra (fire), The Gauntlets of Terrah Kah (earth), The Fan that Carves Canyons (air), and The Decanter of Endless Water (water). Choose which weapon you want with the option buttons and only choose 1."
}

end.addEventListener("click", scene2Death)
function scene2Death(){
    p1.textContent = "You do not have the will to live. You got stabbed after fighting highly armored guards with no weapons. Maybe for next time you should actually try. Just a thought"
    option1.removeEventListener("click", scene3)
}

option1.addEventListener("click", scene3)
function scene3() {
    p1.textContent = "You have chosen the great Flame Sword Salamandra"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
}

option2.addEventListener("click", scene4)
function scene4() {
    p1.textContent = "You have chosen the The Gauntlets of Terrah Kah"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
}

option3.addEventListener("click", scene5)
function scene5() {
    p1.textContent = "You have chosen The Fan that Carves Canyons"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
}

option4.addEventListener("click", scene6)
function scene6() {
    p1.textContent = "You have chosen The Decanter of Endless Water"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
}







