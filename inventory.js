console.log("this is the class inventory of items");

let nextRoom = document.querySelector(".title");

var light1 = document.querySelector(".light1");
var light2 = document.querySelector(".light2");
light1.addEventListener("mouseover", function(){

    light2.classList.add("active");
    light1.classList.add("inactive");
    nextRoom.innerHTML = "space";

})

var light2 = document.querySelector(".light2");
var light1 = document.querySelector(".light1");
light2.addEventListener("mouseout", function(){

    light2.classList.remove("active");
    light1.classList.remove("inactive");
    nextRoom.innerHTML = "inventory";

})


let item = document.querySelector(".item");
let dimension = document.querySelector(".dimension");
let use = document.querySelector(".use");


let item1 = document.querySelector(".item1");
item1.addEventListener("click",function() {
    
    item1.classList.add("select");
    item2.classList.remove("select");
    item3.classList.remove("select");
    item4.classList.remove("select");
    item.innerHTML = "[notebook]";
    dimension.innerHTML = "10cm x 24cm x 1cm";
    use.innerHTML = "uses include drawing sketches, writing ideas, and serveing as an extra surface to write upon, deffinately doesn't hold any miraculous insights on life";

})
let item2 = document.querySelector(".item2");
item2.addEventListener("click",function() {
    
    item2.classList.add("select");
    item3.classList.remove("select");
    item4.classList.remove("select");
    item1.classList.remove("select");
    item.innerHTML = "[eraser]";
    dimension.innerHTML = "10cm";
    use.innerHTML = "removes certain marks with friction, wish it could erase my brain pain from codeing this";

})

let item3 = document.querySelector(".item3");
item3.addEventListener("click",function() {
    
    item3.classList.add("select");
    item4.classList.remove("select");
    item1.classList.remove("select");
    item2.classList.remove("select");
    item.innerHTML = "[calligraphy marker]";
    dimension.innerHTML = "10cm";
    use.innerHTML = "creates colorful underlines and marks upon use, also a good tattoo marker";

})

let item4 = document.querySelector(".item4");
item4.addEventListener("click",function() {
    
    item4.classList.add("select");
    item1.classList.remove("select");
    item2.classList.remove("select");
    item3.classList.remove("select");
    item.innerHTML = "[calligraphy pen]";
    dimension.innerHTML = "12cm";
    use.innerHTML = "writes with thick and thin lines, used to make drawings, sketches, write nicely, it makes me feel ooh soo fanci ";

})







