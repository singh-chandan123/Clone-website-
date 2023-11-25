
let inputbox=document.getElementById("Password");
let password_box=document.querySelector(".generatepassword");

const num="1234567890";
const alphabet="QWERTUYIOPADSFGHJKLZXCVBNM";
const lowercase="qwertyuipozxmncvbalsdfghlh";
const other="!@#$%^&*()[]{}|/;~";
const remain=num+alphabet+lowercase+other;
password_box.addEventListener('click',function(){
    let pass_word="";
    pass_word+=num[Math.floor(Math.random()*num.length)];
    pass_word+=alphabet[Math.floor(Math.random()*alphabet.length)];
    pass_word+=lowercase[Math.floor(Math.random()*lowercase.length)];
    pass_word+=other[Math.floor(Math.random()*other.length)];
   
 while(pass_word.length<=12){
    pass_word+=remain[Math.floor(Math.random()*remain.length)];
 }
 inputbox.value=pass_word;
})
//now write down the function to copy text in inputbox
function copyfun(){
  //select the field
  inputbox.select();
  navigator.clipboard.writeText(inputbox.value);

}


