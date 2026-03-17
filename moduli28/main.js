// var button1 = document.getElementById("btn1");

// button1.onclick = function(){
//     alert("hello")
// }

// var button2 = document.querySelector("button");

// button2.onclick = function(){
//     alert('the other button has been clicked')
// }

var button1 = document.getElementById("btn1");

button1.onclick = function(){
    alert('mouse clicked')
}

var button2 = document.getElementById("btn2");

button2.onmouseover = function(){
    alert('mouse on')
}

var button3 = document.getElementById("btn3");

button3.onmouseleave = function(){
    alert('mouse off')
}

var button4 = document.getElementById("btn4");

button4.onmousewheel = function(){
    alert('mouse')
}

 var v_button = document.getElementById("btn6");
 var v_text = document.getElementById("txt1");

 v_button.onclick = function(){
    v_text.style.color = 'red'
 }