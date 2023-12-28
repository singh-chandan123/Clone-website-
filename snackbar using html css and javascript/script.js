let but1=document.getElementById('but1');
let but2=document.getElementById('but2');
let but3=document.getElementById('but3');
let toastbox=document.getElementById('toastbox');
let successmsg= '<i class="fa-solid fa-circle-check"></i> sucsessfully success';
let errormsg=' <i class="fa-solid fa-circle-xmark"></i> error please fix it';
let invalidmsg=' <i class="fa-solid fa-circle-exclamation"></i>invalid please try again';


but1.addEventListener('click',function( ){
    let toastclass=document.createElement('div');   //here class name and div element name should same 
    toastclass.classList.add('toastclass');
   
    toastclass.innerHTML=successmsg;
    toastbox.appendChild(toastclass);
    setTimeout(()=>{
toastclass.remove();
    },5000)
 
})
but2.addEventListener('click',function(){
    let toastclass=document.createElement('div');   //here class name and div element name should same 
    toastclass.classList.add('toastclass');
    toastclass.innerHTML=errormsg;
    toastbox.appendChild(toastclass);
    if(toastclass.innerHTML===errormsg){
        toastclass.classList.add('errorclass')   
    }
    setTimeout(()=>{
        toastclass.remove();
            },5000)
})
but3.addEventListener('click',function(){
    let toastclass=document.createElement('div');   //here class name and div element name should same 
    toastclass.classList.add('toastclass');
    toastclass.innerHTML=invalidmsg;
    toastbox.appendChild(toastclass);
    if(toastclass.innerHTML===invalidmsg){
        toastclass.classList.add('invalidclass') ; 
    }
    setTimeout(()=>{
        toastclass.remove();
            },5000)
})
