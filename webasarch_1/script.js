console.log("bienvenue a ma maison")

var particles = document.querySelector(".part")
var materialUn = document.querySelector(".material1");
var materialDeux = document.querySelector(".material2");
materialUn.addEventListener("mouseover", function(){

    materialDeux.classList.add("active");
    idkDeux.classList.remove("active");
    immaterialDeux.classList.remove("active");
    particles.classList.add("flip")

})

var idkUn = document.querySelector(".idk1");
var idkDeux = document.querySelector(".idk2");
idkUn.addEventListener("mouseover", function(){

    idkDeux.classList.add("active");
    immaterialDeux.classList.remove("active");
    materialDeux.classList.remove("active");

})
var immaterialUn = document.querySelector(".immaterial1");
var immaterialDeux = document.querySelector(".immaterial2");
immaterialUn.addEventListener("mouseover", function(){

    immaterialDeux.classList.add("active");
    idkDeux.classList.remove("active");
    materialDeux.classList.remove("active");
})

