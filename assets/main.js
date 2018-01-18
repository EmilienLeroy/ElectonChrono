var minutes = 5;
var secondes = 0;
var i_minutes = document.querySelector('#minutes');
var i_secondes = document.querySelector('#secondes');

window.onload = function(){
    
    i_minutes.value = minutes;
    i_secondes.value = secondes;

    setTimeout(timer, 1000);
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
    setTimeout(timer, 1000);
}