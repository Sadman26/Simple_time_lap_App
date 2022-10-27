let func=()=>document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
setInterval(func, 1000);
let fun=()=>alert('Hello');

//make a function that will laps the time when click on the button and show it in the list below the button
let lap=()=>{
    let li=document.createElement('li');
    li.innerHTML=new Date().toLocaleTimeString();
    document.getElementById('list').appendChild(li);
    //also make first li winner and last li loser
    if(document.getElementById('list').children.length==1){
        li.innerHTML+=' 👑';
    }
}