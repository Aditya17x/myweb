
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});


const roles=["Creative Developer","Anime UI Architect","Future Tech Overlord"];
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


for(let i=0;i<25;i++){
let petal=document.createElement("div");
petal.classList.add("petal");
petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(petal);
}


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