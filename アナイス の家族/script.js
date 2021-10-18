console.log("hello");

//toggle on and off for title and image+description
var mamanUn = document.querySelector(".maman1");
var mamanDeux = document.querySelector(".maman2");
mamanUn.addEventListener("click", function(){

    mamanDeux.classList.toggle("active");

})

var aureliaUn = document.querySelector(".aurelia1");
var aureliaDeux = document.querySelector(".aurelia2");
aureliaUn.addEventListener("click", function(){

    aureliaDeux.classList.toggle("active");

})

var papaUn = document.querySelector(".papa1");
var papaDeux = document.querySelector(".papa2");
papaUn.addEventListener("click", function(){

    papaDeux.classList.toggle("active");

})

var jojoUn = document.querySelector(".jojo1");
var jojoDeux = document.querySelector(".jojo2");
jojoUn.addEventListener("click", function(){

    jojoDeux.classList.toggle("active");

})

var eloiseUn = document.querySelector(".eloise1");
var eloiseDeux = document.querySelector(".eloise2");
eloiseUn.addEventListener("click", function(){

    eloiseDeux.classList.toggle("active");

})