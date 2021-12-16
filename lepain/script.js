const grillee = document.querySelector('.grillepain1')
const grillee2 = document.querySelector('.grillepain2')
const m1 = document.querySelector('.m1')
const m2 = document.querySelector('.m2')
const m3 = document.querySelector('.m3')
const m4 = document.querySelector('.m4')
const m5 = document.querySelector('.m5')


var inactivityTime = function () {
var time;
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;

function pasDeMouvement() {
    console.log('dans le grille pain')
    grillee.classList.add('aparaitre')
    grillee2.classList.add('aparaitre')
    m1.classList.add('aparaitre')
    m2.classList.add('aparaitre')
    m3.classList.add('aparaitre')
    m4.classList.add('aparaitre')
    m5.classList.add('aparaitre')
}

function resetTimer() {
    
    m1.classList.remove('aparaitre')
    m2.classList.remove('aparaitre')
    m3.classList.remove('aparaitre')
    m4.classList.remove('aparaitre')
    m5.classList.remove('aparaitre')
    time = setTimeout(pasDeMouvement, 9000)
}
}; 
window.onload = ()=>{
    inactivityTime()
}

//load text into page
let paintext1 = document.querySelector('.p1');
let paintext2 = document.querySelector('.p2');
let paintext3 = document.querySelector('.p3');
let paintext4 = document.querySelector('.p4');
let paintext5 = document.querySelector('.p5');
let paintext6 = document.querySelector('.p6');
let paintext7 = document.querySelector('.p7');
let paintext8 = document.querySelector('.p8');
let paintext9 = document.querySelector('.p9');
//la line qui montre l'analyse
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let line4 = document.querySelector('.line4')
let line5 = document.querySelector('.line5')
let line6 = document.querySelector('.line6')
let line7 = document.querySelector('.line7')
let line8 = document.querySelector('.line8')
//analyses
let painanalyse1 = document.querySelector('.a1');
let painanalyse2 = document.querySelector('.a2');
let painanalyse3 = document.querySelector('.a3');
let painanalyse4 = document.querySelector('.a4');
let painanalyse5 = document.querySelector('.a5');
let painanalyse6 = document.querySelector('.a6');
let painanalyse7 = document.querySelector('.a7');
let painanalyse8 = document.querySelector('.a8');
//page + no
let painno = document.querySelector('.No');
//english
// let painnoen = document.querySelector('.Noen');
//images
let pt1 = document.querySelector('.no1');
let pt2 = document.querySelector('.no2');
let pt3 = document.querySelector('.no3');
let pt4 = document.querySelector('.no4');
let pt5 = document.querySelector('.no5');
let pt6 = document.querySelector('.no6');
let pt7 = document.querySelector('.no7');
let pt8 = document.querySelector('.no8');
let pt9 = document.querySelector('.no9');


//si je click les tanches de pain ca montre le texte

                    //1

    pt1.addEventListener("click", function(){
    //la paragraphe
    paintext1.classList.remove('cache');
    paintext2.classList.add('cache');
    paintext3.classList.add('cache');
    paintext4.classList.add('cache');
    paintext5.classList.add('cache');
    paintext6.classList.add('cache');
    paintext7.classList.add('cache');
    paintext8.classList.add('cache');
    paintext9.classList.add('cache');
    //page + no
    painno.innerHTML = "Préface";
    //l'image du pain
    pt1.classList.add('choix');
    pt2.classList.remove('choix');
    pt3.classList.remove('choix');
    pt4.classList.remove('choix');
    pt5.classList.remove('choix');
    pt6.classList.remove('choix');
    pt7.classList.remove('choix');
    pt8.classList.remove('choix');
    pt9.classList.remove('choix');   
})

                    //2

pt2.addEventListener("click", function(){

    paintext1.classList.add('cache');
    paintext2.classList.remove('cache');
    paintext3.classList.add('cache');
    paintext4.classList.add('cache');
    paintext5.classList.add('cache');
    paintext6.classList.add('cache');
    paintext7.classList.add('cache');
    paintext8.classList.add('cache');
    paintext9.classList.add('cache');

    painno.innerHTML = "1";

    pt1.classList.remove('choix');
    pt2.classList.add('choix');
    pt3.classList.remove('choix');
    pt4.classList.remove('choix');
    pt5.classList.remove('choix');
    pt6.classList.remove('choix');
    pt7.classList.remove('choix');
    pt8.classList.remove('choix');
    pt9.classList.remove('choix');
   
})
 //l'analyse
    line1.addEventListener("click", function(){
        painanalyse1.classList.toggle('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.add('cache');
    })
//le highlighter
line1.addEventListener("mouseover", function(){
    line1.classList.add('choix2');
})
line1.addEventListener("mouseout", function(){
    line1.classList.remove('choix2');
})
                    //3

    pt3.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.remove('cache');
        paintext4.classList.add('cache');
        paintext5.classList.add('cache');
        paintext6.classList.add('cache');
        paintext7.classList.add('cache');
        paintext8.classList.add('cache');
        paintext9.classList.add('cache');
    
        painno.innerHTML = "2";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.add('choix');
        pt4.classList.remove('choix');
        pt5.classList.remove('choix');
        pt6.classList.remove('choix');
        pt7.classList.remove('choix');
        pt8.classList.remove('choix');
        pt9.classList.remove('choix');
 
       
    })

    line2.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.toggle('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.add('cache');
    })
    //le highlighter
line2.addEventListener("mouseover", function(){
    line2.classList.add('choix2');
})
line2.addEventListener("mouseout", function(){
    line2.classList.remove('choix2');
})

    line3.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.toggle('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.add('cache');
    })
    //le highlighter
line3.addEventListener("mouseover", function(){
    line3.classList.add('choix2');
})
line3.addEventListener("mouseout", function(){
    line3.classList.remove('choix2');
})

    line4.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.toggle('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.add('cache');
    })
//le highlighter
line4.addEventListener("mouseover", function(){
    line4.classList.add('choix2');
})
line4.addEventListener("mouseout", function(){
    line4.classList.remove('choix2');
})

                    //4
                    
 pt4.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.add('cache');
        paintext4.classList.remove('cache');
        paintext5.classList.add('cache');
        paintext6.classList.add('cache');
        paintext7.classList.add('cache');
        paintext8.classList.add('cache');
        paintext9.classList.add('cache');
    
        painno.innerHTML = "3";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.remove('choix');
        pt4.classList.add('choix');
        pt5.classList.remove('choix');
        pt6.classList.remove('choix');
        pt7.classList.remove('choix');
        pt8.classList.remove('choix');
        pt9.classList.remove('choix');
 
       
    })
    
     line5.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.toggle('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.add('cache');
    })
//le highlighter
line5.addEventListener("mouseover", function(){
    line5.classList.add('choix2');
})
line5.addEventListener("mouseout", function(){
    line5.classList.remove('choix2');
})

				//5
				
 pt5.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.add('cache');
        paintext4.classList.add('cache');
        paintext5.classList.remove('cache');
        paintext6.classList.add('cache');
        paintext7.classList.add('cache');
        paintext8.classList.add('cache');
        paintext9.classList.add('cache');
    
        painno.innerHTML = "4";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.remove('choix');
        pt4.classList.remove('choix');
        pt5.classList.add('choix');
        pt6.classList.remove('choix');
        pt7.classList.remove('choix');
        pt8.classList.remove('choix');
        pt9.classList.remove('choix');
 
       
    })
    
    
    			//6
    			
     pt6.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.add('cache');
        paintext4.classList.add('cache');
        paintext5.classList.add('cache');
        paintext6.classList.remove('cache');
        paintext7.classList.add('cache');
        paintext8.classList.add('cache');
        paintext9.classList.add('cache');
    
        painno.innerHTML = "5";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.remove('choix');
        pt4.classList.remove('choix');
        pt5.classList.remove('choix');
        pt6.classList.add('choix');
        pt7.classList.remove('choix');
        pt8.classList.remove('choix');
        pt9.classList.remove('choix');
 
       
    })	
    
     line6.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.toggle('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.add('cache');
    })
//le highlighter
line6.addEventListener("mouseover", function(){
    line6.classList.add('choix2');
})
line6.addEventListener("mouseout", function(){
    line6.classList.remove('choix2');
})	

				//7
				
	  pt7.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.add('cache');
        paintext4.classList.add('cache');
        paintext5.classList.add('cache');
        paintext6.classList.add('cache');
        paintext7.classList.remove('cache');
        paintext8.classList.add('cache');
        paintext9.classList.add('cache');
    
        painno.innerHTML = "6";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.remove('choix');
        pt4.classList.remove('choix');
        pt5.classList.remove('choix');
        pt6.classList.remove('choix');
        pt7.classList.add('choix');
        pt8.classList.remove('choix');
        pt9.classList.remove('choix');
 
       
    })		
    
    			//8
    				
 pt8.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.add('cache');
        paintext4.classList.add('cache');
        paintext5.classList.add('cache');
        paintext6.classList.add('cache');
        paintext7.classList.add('cache');
        paintext8.classList.remove('cache');
        paintext9.classList.add('cache');
    
        painno.innerHTML = "7";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.remove('choix');
        pt4.classList.remove('choix');
        pt5.classList.remove('choix');
        pt6.classList.remove('choix');
        pt7.classList.remove('choix');
        pt8.classList.add('choix');
        pt9.classList.remove('choix');
 
       
    })	
    
       line7.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.toggle('cache');
        painanalyse8.classList.add('cache');
    })
//le highlighter
line7.addEventListener("mouseover", function(){
    line7.classList.add('choix2');
})
line7.addEventListener("mouseout", function(){
    line7.classList.remove('choix2');
})

				//9
	 pt9.addEventListener("click", function(){

        paintext1.classList.add('cache');
        paintext2.classList.add('cache');
        paintext3.classList.add('cache');
        paintext4.classList.add('cache');
        paintext5.classList.add('cache');
        paintext6.classList.add('cache');
        paintext7.classList.add('cache');
        paintext8.classList.add('cache');
        paintext9.classList.remove('cache');
    
        painno.innerHTML = "8";
    
        pt1.classList.remove('choix');
        pt2.classList.remove('choix');
        pt3.classList.remove('choix');
        pt4.classList.remove('choix');
        pt5.classList.remove('choix');
        pt6.classList.remove('choix');
        pt7.classList.remove('choix');
        pt8.classList.remove('choix');
        pt9.classList.add('choix');
 
       
    })
    
        line8.addEventListener("click", function(){
        painanalyse1.classList.add('cache');
        painanalyse2.classList.add('cache');
        painanalyse3.classList.add('cache');
        painanalyse4.classList.add('cache');
        painanalyse5.classList.add('cache');
        painanalyse6.classList.add('cache');
        painanalyse7.classList.add('cache');
        painanalyse8.classList.toggle('cache');
    })
//le highlighter
line8.addEventListener("mouseover", function(){
    line8.classList.add('choix2');
})
line8.addEventListener("mouseout", function(){
    line8.classList.remove('choix2');
})
   

     //l'analyse
      

//les images

let carre1 = document.querySelector('.carre1');
let carre2 = document.querySelector('.carre2');
let carre3 = document.querySelector('.carre3');
let carre4 = document.querySelector('.carre4');
let carre5 = document.querySelector('.carre5');
let carre6 = document.querySelector('.carre6');

let letexte1 = document.querySelector('.float1');
let letexte2 = document.querySelector('.float2');
let letexte3 = document.querySelector('.float3');
let letexte4 = document.querySelector('.float4');
let letexte5 = document.querySelector('.float5');
let letexte6 = document.querySelector('.float6');


carre1.addEventListener("click", function(){
    letexte1.classList.toggle('orange');
})
carre2.addEventListener("click", function(){
    letexte2.classList.toggle('orange');
})
carre3.addEventListener("click", function(){
    letexte3.classList.toggle('orange');
})
carre4.addEventListener("click", function(){
    letexte4.classList.toggle('orange');
})
carre5.addEventListener("click", function(){
    letexte5.classList.toggle('orange');
})
carre6.addEventListener("click", function(){
    letexte6.classList.toggle('orange');
})

//boutons en bas

let intro = document.querySelector(".intro");
let tout = document.querySelector(".tout");
let introTxtVid = document.querySelector(".largedisplay")
let sortie = document.querySelector(".sortie")
let citations = document.querySelector(".citations")
let sortie2 = document.querySelector(".sortie2")
let bcit =document.querySelector(".cit")


intro.addEventListener("click", function(){
    tout.classList.add('cache');
    introTxtVid.classList.remove('cache');
})

sortie.addEventListener("click", function(){
    tout.classList.remove('cache');
    introTxtVid.classList.add('cache');
})

bcit.addEventListener("click", function(){
    citations.classList.remove('cache');
})

sortie2.addEventListener("click", function(){
    citations.classList.add('cache');
})

