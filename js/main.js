let start=document.getElementById("start");
let restart=document.getElementById("restart");
let a=document.getElementById("a");
let b=document.getElementById("b");
let c=document.getElementById("c");
let answar=document.getElementById("answar");
start.onclick=function(){
 input=document.getElementById("arr").value;
answar.style.backgroundColor="#0f0"
answar.style.display="block";
answar.innerHTML=`${input}`;``
    restart.style.display="inline";
    a.style.display="inline";
    b.style.display="inline";
    c.style.display="inline";
    start.style.display="inline";
    console.log(input.split(","));
}
restart.onclick=function(){
    
    restart.style.display="none";
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    answar.style.display="none";
    start.style.display="block";
    location.reload();
}