var minutes = 1;
var secondes = 0;
var i_minutes = document.querySelector('#minutes');
var i_secondes = document.querySelector('#secondes');
var start = document.querySelector('#start');
var body = document.querySelector('body');

window.onload = function(){
    start.addEventListener("click",begin);
    console.log(start);
}


function begin(){
    i_minutes.value = minutes;
    i_secondes.value = secondes;
    start.style.display ='none';
    setTimeout(timer, 1000);
}

function end(){
    body.style.backgroundColor = "red";
    minutes = 1;
    secondes = 0;
    setTimeout(function(){
        start.style.display ='inline-block';
        body.style.backgroundColor = 'white';
    },1000)
}

function timer(){
    if(secondes == 0){
        minutes--;
        secondes = 59;
        i_minutes.value = minutes;
        i_secondes.value = secondes;
    }else{
        secondes--;
        i_secondes.value = secondes;
    }
    if(minutes==0 && secondes == 0){
        end()
    }else{
    setTimeout(timer, 1000);
    }
}