var cars = ['Volvo','BMW','Audi','Ford','Madzda','Toyota'];

var text = '';

// text += cars[0] + '<br>';
// text += cars[1] + '<br>';
// text += cars[2] + '<br>';
// text += cars[3] + '<br>';
// text += cars[4] + '<br>';
// text += cars[5] + '<br>';

document.getElementById('forLoop1').innerHTML = text;
console.log(text);

for(i=0; i < cars.length; i++) {
    text += cars[i] + '<br>';
}

document.getElementById('forLoop1').innerHTML = text;
console.log(text);

var text1 = '';

for(x = 0; x < 5; x++) {
    text1 += "The number is" + x + "<br>"
}

document.getElementById('forLoop1').innerHTML = text;
console.log(text);

var person = {firstName: "John", lastName: "Doc" , age: 25};

var text = "";
var x;

for(x in person){
    text += person[x] + "<br>";
}

document.getElementById("forinloop").innerHTML = text;
console.log(text);