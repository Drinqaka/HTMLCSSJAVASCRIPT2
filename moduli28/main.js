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
    v_text.style.backgroundColor = 'gray'
    v_text.style.textAlign = 'center'
    v_text.style.fontSize = '100px'
 }

 var button5 = document.getElementById("btn7");
 var text2 = document.getElementById("txt2");

  button5.onclick = function(){
    text2.style.cssText = "color:red; font-size:100px; background-color:green; font-family:fantasy; text-align: center;" 
 }

 var ifundit = document.getElementById('ifundit')
 var pgg = document.getElementById('pg')

 ifundit.onclick = function(){
    pgg.setAttribute("class" , "paragraph")
 }


 var circlebutton = document.getElementById('press')
 var circletext = document.getElementById('circle')

    circlebutton.onclick = function(){
    circletext.style.csstext = "background-color:red; color:red; visibility: visible;"
}