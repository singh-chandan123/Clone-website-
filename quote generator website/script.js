
const author_content=document.querySelector('.quote');
const author=document.querySelector('#authorname');

const url=fetch('https://api.quotable.io/random');
url.then(function(response){
    return response.json();
})
.then((data)=>{
   author_content.innerHTML=data.content;
   author.innerHTML=data.author;
})
const newquotebutton=document.querySelector('#newquote');
newquotebutton.addEventListener('click',function(){
    const url=fetch('https://api.quotable.io/random');
    url.then(function(response){
        return response.json();
    })
    .then((data)=>{
       author_content.innerHTML=data.content;
       author.innerHTML=data.author;
    }) 
})

//function of tweet on twitter
function tweet(){
    window.open('https://twitter.com/intent/tweet?text='+ author_content.innerHTML+" by ---  "+ author.innerHTML,"width=600px,height=550px");
}
const twittertweet=document.querySelector('#tweet');
twittertweet.addEventListener('click',function(){
    tweet();
})