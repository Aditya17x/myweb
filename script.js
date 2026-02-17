// Remove Loader
window.addEventListener("load", ()=>{
    gsap.to("#loader",{opacity:0,duration:1,onComplete:()=>{
        document.getElementById("loader").style.display="none";
    }});
});

// AOS Init
AOS.init();

// Typing Animation
const roles = ["Creative Developer","UI Architect","Future Tech Overlord"];
let i=0,j=0,current="",isDeleting=false;
function type(){
    if(i<roles.length){
        if(!isDeleting && j<=roles[i].length){
            current=roles[i].substring(0,j++);
        }else if(isDeleting && j>=0){
            current=roles[i].substring(0,j--);
        }
        document.querySelector(".typing").textContent=current;

        if(j===roles[i].length) isDeleting=true;
        if(j===0 && isDeleting){
            isDeleting=false;
            i++;
        }
    }
    setTimeout(type,100);
}
type();

// Tilt Effect
document.querySelectorAll(".tilt").forEach(card=>{
    card.addEventListener("mousemove",e=>{
        let x=e.offsetX;
        let y=e.offsetY;
        let rotateX=(y/200)*15;
        let rotateY=(x/200)*-15;
        card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="rotateX(0) rotateY(0)";
    });
});

// Particles
particlesJS("particles-js",{
    particles:{
        number:{value:80},
        size:{value:3},
        move:{speed:2},
        line_linked:{enable:true}
    }
});