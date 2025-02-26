//Declaring variables that correspond with each of my paragraph elements p1, p2, p3, and p4
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")

//Declaring variables that correspond with each of my button elements
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const continueon = document.getElementById("continue button")
const end = document.getElementById("end button")

//Variables that correspond with each of the images
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")

//This makes sure that none of the images show up until I make them show up
img2.style.display = "none"
img3.style.display = "none"
img4.style.display = "none"
img5.style.display = "none"

//This makes sure that the option buttons don't show up until I make them show up.
option1.style.visibility = "hidden"
option2.style.visibility = "hidden"
option3.style.visibility = "hidden"
option4.style.visibility = "hidden"

//This is the first event listener that is triggered by the continue button
continueon.addEventListener("click", scene1)
//this first function is the 2nd node and needs to be activated for the rest of the sequence to continue
function scene1(){
    //change the text content
    p1.textContent = "You at least have the will to live. You manage to sneakily steal the keys of a drunken guard and escape from your cell. You go to the weapons armory and find a collection of weapons with the powers of the elements. You can choose between 4 great elemental weapons,\n The Great Fire Sword Salamandra (fire), The Gauntlets of Terrah Kah (earth), The Fan that Carves Canyons (air), and The Decanter of Endless Water (water).\nChoose 1 to be your weapon"
    //giving the image a source
    img2.src = "guy-with-key.jpg"
    //have the image appear
    img2.style.display = "block"
    //makes it so that you can't trigger the death scene
    end.removeEventListener("click", scene2Death)
    //makes it so the next event listener can trigger
    continueon.removeEventListener("click", scene1)
    continueon.style.visibility = "hidden"
    end.style.visibility = "hidden"
    //makes the option buttons appear so you can choose your weapon
    option1.style.visibility = "visible"
    option2.style.visibility = "visible"
    option3.style.visibility = "visible"
    option4.style.visibility = "visible"
    option1.textContent = "The Great Fire Sword Salamandra"
    option2.textContent = "The Gauntlets of Terrah Kah"
    option3.textContent = "The Fan that Carves Canyons"
    option4.textContent = "The Decanter of Endless Water"
}

//event listener that triggers off of the end button
end.addEventListener("click", scene2Death)
//third node function and it's a quick end because you gave up. nothing can be done after clicking this one
function scene2Death(){
    //change the text content
    p1.textContent = "You do not have the will to live. You got stabbed after fighting highly armored guards with no weapons. Maybe for next time you should actually try. Just a thought."
    //giving the image a source
    img2.src = "dead guy.jpg"
    //have the image appear
    img2.style.display = "block"
    //removes the living event listener so that you stay dead
    continueon.removeEventListener("click", scene1)
    //removes all the option event listeners also so that you stay dead
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
    //hides the buttons also cause Mr. Gardner likes it more when they dissapear
    continueon.style.visibility = "hidden"
    end.style.visibility = "hidden"
    
}

//first button event listener let's go
option1.addEventListener("click", scene3)
//fourth node function that triggers if you choose the sword
function scene3() {
    //change the text content
    p2.textContent = "You have chosen the great Flame Sword Salamandra. This sword seems to ignite the very air around you exuding a brilliant scarlett glow. You are sure that you can take down as many guards as you need to with this great weapon. But what is this? (click the continue button)"
    //giving the image a source
    img3.src = "sword.jpg"
    //have the image appear
    img3.style.display = "block"
    //removes all the option event listeners so that you stay locked into the sword choice
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
    continueon.addEventListener("click", scene7)
    //
    continueon.style.visibility = "visible"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    option4.style.visibility = "hidden"
}

option2.addEventListener("click", scene4)
function scene4() {
    p2.textContent = "You have chosen the The Gauntlets of Terrah Kah. They are suprisingly light for gauntlets made out of earth. When you smash the knuckles of the gauntlets together and move your arms around you can control the earth around you, even the metal bars trapping people in their cells. You use this power to liberate as many of the prisoners as you can and have them follow you towards where you think the exit is. But what is this? (click the continue button)"
    img3.src = "guantlets.jpg"
    img3.style.display = "block"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
    continueon.addEventListener("click", scene8)
    continueon.style.visibility = "visible"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    option4.style.visibility = "hidden"
}

option3.addEventListener("click", scene5)
function scene5() {
    p2.textContent = "You have chosen The Fan that Carves Canyons. You give the fan a single swing and it generates a massive gust of air that rips through the halls of the prison and almost makes you fall over from the force. You can also close the fan and use it like a wand to have precise control over the air around you and where it goes. But what is this? (click the continue button)"
    img3.src = "fan.jpg"
    img3.style.display = "block"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
    continueon.addEventListener("click", scene9)
    continueon.style.visibility = "visible"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    option4.style.visibility = "hidden"
}

option4.addEventListener("click", scene6)
function scene6() {
    p2.textContent = "You have chosen The Decanter of Endless Water. It is a simple glass bottle full of water. But once you remove the cork from the top of the bottle a serpent made entirely of water forms in front of you. It tells you it represents the evermoving cycle of water all around the earth and it is an infinite amount of water. It has allowed you to become its master after deeming your heart to be true and just. But what is this? (click the continue button)"
    img3.src = "decanter.jpg"
    img3.style.display = "block"
    option1.removeEventListener("click", scene3)
    option2.removeEventListener("click", scene4)
    option3.removeEventListener("click", scene5)
    option4.removeEventListener("click", scene6)
    continueon.addEventListener("click", scene10)
    continueon.style.visibility = "visible"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    option4.style.visibility = "hidden"
}

function scene7() {
    p3.textContent = "You see a thick, purple, poisonous fog has been released into the air through the decrepit airways of the prison. You swing Salamandra widly, suddenly the sword ignites the poisonous air causing an explosion so large that the entire jail is blown to smithereens. You die instantly and so does everyone else in the jail. No man, woman, child, or thing is spared in the aftermath of your decision. But do not be sad, you took down hundreds of Sinshoattan soldiers. The government is sent into a tizzy. Weakened by your efforts the rebel army is able to overthrow the corrupt government and Sinshoatt is transformed into a beautiful republic. It becomes a prosperous nation and you look down upon it from an ethereal land and shed a single tear. Your country has truly become great even if you weren't there to see it."
    p4.textContent = "Just to be clear you died. lol."
    img4.src = "explosion.jpg"
    img4.style.display = "block"
    option1.removeEventListener("click", scene7)
    option2.removeEventListener("click", scene8)
    option3.removeEventListener("click", scene9)
    option4.removeEventListener("click", scene10)
    continueon.style.visibility = "hidden"
}

function scene8() {
    p3.textContent = "You see a thick, purple, poisonous fog has been released into the air through the decrepit airways of the prison. You know that you must find a way to save everyone. You smash your gloves together and use your gauntlets to open a hole in the earth, get everyone into the hole, and snatch a torch before before closing the hole. You aren't sure exacly where to go but you remember the general direction of the side of the mountain that the prison is on. You make sure not to go to the exit seeing as there are guards likely waiting for you there. You use your gloves to move aside the earth creating a tunnel till you reach the outside world. Thankfully it is night time so you and all the people you saved are able to escape under the cover of night."
    p4.textContent = "Just to be clear you escaped. Let's go dude."
    img4.src = "hole.jpg"
    img4.style.display = "block"
    option1.removeEventListener("click", scene7)
    option2.removeEventListener("click", scene8)
    option3.removeEventListener("click", scene9)
    option4.removeEventListener("click", scene10)
    continueon.style.visibility = "hidden"
}

function scene9() {
    p3.textContent = "You see a thick, purple, poisonous fog approaching from one side of the corridor. At the same time some 50 guards appear from the other side of the corridor. You have two options send the poison fog away and simply knock the guards out (option 1), OR you could direct the poison fog towards the guards and kill them (option 2). If it was me I would kill them. No good person would do what they've done. They've killed the people of your nation and thought nothing of it, and they've locked up even more of them and left them to rot in these jail cells. They showed you no mercy, why should you show them any?"
    img4.src = "smoke.jpg"
    img4.style.display = "block"
    option1.removeEventListener("click", scene7)
    option2.removeEventListener("click", scene8)
    option3.removeEventListener("click", scene9)
    option4.removeEventListener("click", scene10)
    option1.addEventListener("click", scene11)
    option2.addEventListener("click", scene12)
    continueon.style.visibility = "hidden"
    option1.style.visibility = "visible"
    option2.style.visibility = "visible"
}

function scene10 (){
    p3.textContent = "You see a thick, purple, poisonous fog has been released into the air through the decrepit airways of the prison. You summon the spirit of the decanter and ask it to create a bubble around your body and turn the water to ice to prevent the poison from reaching you. It swirls around you before freezing some of its body around you. You then ask it to create a river that extends all the way to the exit of the prison. You get bounced around the inside of this ice ball on the way to the exit. You then finally reach the exit and command the spirit to keep the river flowing but remove the ice ball so you can ride the river as far away from the prison as possible. You finally allow the river to stop once you reach a secluded forest far away from civilization. You want to be able to live in this forest forever. You make a deal with the spirit. \"If you cause a river to spring up and flow through this forest I will free you\" you say. The sprit obliges. A river wide enough for a boat and a dock and deep enough for someone to swim in it easily emerges from the earth in an instant. At that moment the spirit bids you goodbye stating that it will always watch over you."
    p4.textContent = "You build yourself a log cabin in the forest, a small farm, and a mill so that you can make bread. You've always loved making and eating bread. You didn't come from a very wealthy family, but your mother always made you a fresh loaf of bread every Saturday. You wish she could see all that you've accomplished now. She would love the life you've built and the person you've become."
    img4.src = "dragon.jpg"
    img4.style.display = "block"
    option1.removeEventListener("click", scene7)
    option2.removeEventListener("click", scene8)
    option3.removeEventListener("click", scene9)
    option4.removeEventListener("click", scene10)
    continueon.style.visibility = "hidden"
}

function scene11(){
    p4.textContent = "You have chosen a path of peace. You knock out the guards and force the poison fog back. You use the air control ability of the fan to surf on the air so to speak and ride all the way to the exit of the prison. After escaping the prison you ride the air current all the way up into the clouds never to be seen again. A few citizens see you flying up into the clouds and can't believe what they've seen. After a few years you become somewhat of a national legend and a symbol of peace known as \"The Cloud Man\"."
    img5.src = "cloud-guy.jpg"
    img5.style.display = "block"
    option1.removeEventListener("click", scene11)
    option2.removeEventListener("click", scene12)
    continueon.style.visibility = "hidden"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
}

function scene12(){
    p4.textContent = "You use the powers of the fan to condense the poison and send it over to the guards. You surround them in it and you make sure they can't escape. You suffocate them in the very weapon they were going to use to kill you. You start to wonder if what you did makes you just as bad of a person as they are. That thought quickly vanishes and your mind goes back to focusing on escaping. You don't think that there are any more guards on the way to exit. You finally reach the exit of the prison. After 4 long years your skin finally feels the warmth of the sun and the cool breeze. You use the fan to try to fly off. Because you murdered all of those guards a nationwide manhunt is created to try and kill you. For a while you believe that they wont be able to catch you especially with your new fan. Suddenly you are shot in the back and the arrow jutts out of the front of your chest. You can't move and you can't breathe. Arrows continue to rain down upon you pinning the rest of your body to the ground. Quickly everything fades to black. In your last fleeting moments you wonder if you did the right thing and if you're a good person. You come to the conclusion that not all people who do good are good people. You're not okay with that but there's not really anything else you can do now."
    img5.src = "guy-with-arrows.jpg"
    img5.style.display = "block"
    option1.removeEventListener("click", scene11)
    option2.removeEventListener("click", scene12)
    continueon.style.visibility = "hidden"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
}
