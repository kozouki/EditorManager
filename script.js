var add_button = document.getElementsByClassName('add');
var minus_button = document.getElementsByClassName('minus');
var inputs = document.getElementsByClassName('num');

for(let i=0; i<add_button.length; i++){
    add_button[i].addEventListener('click', ()=>{
        var num =  parseInt(inputs[i].value);
        inputs[i].value = num+1;
    });

    minus_button[i].addEventListener('click', ()=>{
        var num =  parseInt(inputs[i].value);
        if(num <= 0){
            inputs[i].value = 0;
        }else{
            inputs[i].value = num-1;
        }
        
    });
}