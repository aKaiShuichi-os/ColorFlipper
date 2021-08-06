var count = ["red","Blue","green","purple","orange","grey" ,"black"];

var btn = document.getElementById('b');
var t = document.querySelector('span');

btn.addEventListener('click',function(){
    const randomNumber = getrandumno();
    document.body.style.backgroundColor = count[randomNumber]; 


    t.textContent=count[randomNumber]; 

})
function getrandumno(){

    return Math.floor(Math.random()*7);
}