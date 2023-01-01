var add_button = document.getElementsByClassName('add');
var minus_button = document.getElementsByClassName('minus');
var inputs = document.getElementsByClassName('num');
var summariesTT = document.getElementsByClassName('summaryTT');
var summariesIG = document.getElementsByClassName('summaryIG');

for(let i=0; i<add_button.length; i++){
    add_button[i].addEventListener('click', ()=>{
        var num =  parseInt(inputs[i].value);
        inputs[i].value = num+1;
        if(i > 2){
            summariesIG[i-summariesIG.length].innerHTML = inputs[i].value;
            
        }else{
            summariesTT[i].innerHTML = inputs[i].value;
        }
    });

    minus_button[i].addEventListener('click', ()=>{
        var num =  parseInt(inputs[i].value);
        if(num <= 0){
            inputs[i].value = 0;
        }else{
            inputs[i].value = num-1;
        }

        if(i >2){
            summariesIG[i-summariesIG.length].innerHTML = inputs[i].value;
        }else{
            summariesTT[i].innerHTML = inputs[i].value;
        }
        
    });
}