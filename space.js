console.log("welcome to a crossroads, now choose :)")

let nextRoom = document.querySelector(".title");

var think1 = document.querySelector(".think1");
var think2 = document.querySelector(".think2");
think1.addEventListener("mouseover", function(){

    think2.classList.add("active");
    think1.classList.add("inactive");
    nextRoom.innerHTML = "thoughts";

})

var think2 = document.querySelector(".think2");
var think1 = document.querySelector(".think1");
think2.addEventListener("mouseout", function(){

    think2.classList.remove("active");
    think1.classList.remove("inactive");
    nextRoom.innerHTML = "space";

})