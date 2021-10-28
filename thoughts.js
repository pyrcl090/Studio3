console.log("bienvenue a mes pensees");

var thought1 = document.getElementById("text1");
var thought2 = document.getElementById("text2");
var thought3 = document.getElementById("text3");
var thought4 = document.getElementById("text4");
var thought5 = document.getElementById("text5");


thought1.onmousedown = function(event) {

    let shiftX = event.clientX - thought1.getBoundingClientRect().left;
    let shiftY = event.clientY - thought1.getBoundingClientRect().top;
  
    thought1.style.position = 'absolute';
    thought1.style.zIndex = 1000;
    document.body.append(thought1);
  
    moveAt(event.pageX, event.pageY);
  
    //move
    function moveAt(pageX, pageY) {
        thought1.style.left = pageX - shiftX + 'px';
        thought1.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop 
      thought1.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thought1.onmouseup = null;
    };
  
  };
  
  thought1.ondragstart = function() {
    return false;
  };



  thought2.onmousedown = function(event) {

    let shiftX = event.clientX - thought2.getBoundingClientRect().left;
    let shiftY = event.clientY - thought2.getBoundingClientRect().top;
  
    thought2.style.position = 'absolute';
    thought2.style.zIndex = 1000;
    document.body.append(thought2);
  
    moveAt(event.pageX, event.pageY);
  
   //move
    function moveAt(pageX, pageY) {
        thought2.style.left = pageX - shiftX + 'px';
        thought2.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
     // move on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop 
      thought2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thought2.onmouseup = null;
    };
  
  };
  
  thought2.ondragstart = function() {
    return false;
  };


  thought3.onmousedown = function(event) {

    let shiftX = event.clientX - thought3.getBoundingClientRect().left;
    let shiftY = event.clientY - thought3.getBoundingClientRect().top;
  
    thought3.style.position = 'absolute';
    thought3.style.zIndex = 1000;
    document.body.append(thought3);
  
    moveAt(event.pageX, event.pageY);
  
   //move
    function moveAt(pageX, pageY) {
        thought3.style.left = pageX - shiftX + 'px';
        thought3.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
     // move on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop 
      thought3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thought3.onmouseup = null;
    };
  
  };
  
  thought3.ondragstart = function() {
    return false;
  };

  thought4.onmousedown = function(event) {

    let shiftX = event.clientX - thought4.getBoundingClientRect().left;
    let shiftY = event.clientY - thought4.getBoundingClientRect().top;
  
    thought4.style.position = 'absolute';
    thought4.style.zIndex = 1000;
    document.body.append(thought4);
  
    moveAt(event.pageX, event.pageY);
  
   //move
    function moveAt(pageX, pageY) {
        thought4.style.left = pageX - shiftX + 'px';
        thought4.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
     // move on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop 
      thought4.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thought4.onmouseup = null;
    };
  
  };
  
  thought4.ondragstart = function() {
    return false;
  };

  thought5.onmousedown = function(event) {

    let shiftX = event.clientX - thought5.getBoundingClientRect().left;
    let shiftY = event.clientY - thought5.getBoundingClientRect().top;
  
    thought5.style.position = 'absolute';
    thought5.style.zIndex = 1000;
    document.body.append(thought5);
  
    moveAt(event.pageX, event.pageY);
  
   //move
    function moveAt(pageX, pageY) {
        thought5.style.left = pageX - shiftX + 'px';
        thought5.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
     // move on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop 
      thought5.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thought5.onmouseup = null;
    };
  
  };
  
  thought5.ondragstart = function() {
    return false;
  };

  let directory = document.querySelector(".home");

 
directory.addEventListener("mouseover",function() {
    
    directory.innerHTML = "[Digital Directory]";
})

directory.addEventListener("mouseout",function() {
    
    directory.innerHTML = "[]";
})



