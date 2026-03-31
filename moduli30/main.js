// var mosha = 7

// if(mosha<8){
//     document.write('Your child is to young to start programing');
// }
// else{
//     document.write('We will find the groups');
// }

// var age =  20

// if(age<8){
//     document.write('Your child is to young to start programing');
// }
// else if(age>18){
//     document.write('Your child is to old brooo');
// }
// else{
//     document.write('We will find the groups');
// }

// var ages = 20

// if(8>ages<18){
//     document.write('We will find the groups');
// }

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function(){
    text.innerHTML = input.value;
}

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
var mbledhje = document.getElementById('mbledhje');
var result = document.getElementById('result_id');
var text2 = document.getElementById('text2_id');


mbledhje.onclick = function(){
    var result2 = result.innerHTML = parseInt(input1.value) + parseInt(input2.value);



    if(result2 > 10){
        text2.innetHTML = "greater than 10"
    }
    else if(result2 < 10){
        text2.innerHTML = "less than 10"
    }
    else{
        text2.innerHTML = "equal to 10"
    }
}








