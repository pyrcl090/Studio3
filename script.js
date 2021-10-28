console.log("bienvenue a l'espace");

var bag1 = document.querySelector(".bag1");
var bag2 = document.querySelector(".bag2");
bag1.addEventListener("mouseover", function(){

    bag2.classList.add("active");
    bag1.classList.add("inactive");

})

var bag2 = document.querySelector(".bag2");
var bag1 = document.querySelector(".bag1");
bag2.addEventListener("mouseout", function(){

    bag2.classList.remove("active");
    bag1.classList.remove("inactive");

})

var light1 = document.querySelector(".light1");
var light2 = document.querySelector(".light2");
light1.addEventListener("mouseover", function(){

    light2.classList.add("active");
    light1.classList.add("inactive");

})

var light2 = document.querySelector(".light2");
var light1 = document.querySelector(".light1");
light2.addEventListener("mouseout", function(){

    light2.classList.remove("active");
    light1.classList.remove("inactive");

})

var think1 = document.querySelector(".think1");
var think2 = document.querySelector(".think2");
think1.addEventListener("mouseover", function(){

    think2.classList.add("active");
    think1.classList.add("inactive");

})

var think2 = document.querySelector(".think2");
var think1 = document.querySelector(".think1");
think2.addEventListener("mouseout", function(){

    think2.classList.remove("active");
    think1.classList.remove("inactive");

})

//clock//
function startTime() {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById('time').innerHTML =  hr + ":" + min + ":" + sec;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  