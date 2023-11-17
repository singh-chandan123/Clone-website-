//select element for card class
let caard=document.querySelector(".card");
//select element for icon
let love=document.querySelector("i")
caard.addEventListener("dblclick",function(){
    love.style.transform= "translate(-50%,-50%) scale(1)";
    setTimeout(function(){
        // love.style.opacity=0; 
        love.style.transform= "translate(-50%,-50%) scale(0)"; 
  
    },1000);
})