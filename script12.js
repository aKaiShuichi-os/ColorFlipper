const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('b');
const t = document.querySelector('span');

btn.addEventListener('click',function(){
console.log("clicked");
    let h = "#";
    for(let i =0;i<6;i++){

            var randomNumber = getrandumno();
            h += hex[randomNumber];
            console.log(hex.length);

        }
    document.body.style.backgroundColor = h; 
    btn.style.backgroundColor = h;
    t.textContent = "background Color:" + " " + h; 
    
})
function getrandumno(){

    return Math.floor(Math.random()*hex.length);
}