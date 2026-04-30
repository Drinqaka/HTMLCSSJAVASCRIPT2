// function printName(){
//     document.write("Edlira");
//     document.write("<br>")
//     document.write("Drin");
//     setTimeout(
//         function(){
//             document.write("Detjon");
//         }, 3000
//     );
// }

// printName();

var color = ['red','green','purple'];

var names = ['Omer','Rigon','Ernes'];

function changeColor(){
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)];
}

function changeName(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
}

setInterval(changeColor , 1000);
setInterval(changeName , 1000);