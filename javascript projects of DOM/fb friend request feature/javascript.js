let frnds=document.querySelector(".friend");
let isfrnds=document.getElementById("strangers");
let isfriend=0;
frnds.addEventListener("click",function(){
if(isfriend==0){
isfrnds.innerHTML="Friends";
isfrnds.style.cssText="color:green"
isfriend=1;
}
else{
    isfrnds.innerHTML="Stranger";
    isfrnds.style.cssText="color:red";
    isfriend=0;  
}
})