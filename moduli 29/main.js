var languages = ["javascript" , "php" , "python"];

console.log(languages);

var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers);

console.log(languages[1]);

languages.push("Java");

numbers.push(11);

document.write(languages);

document.write(numbers);

numbers.pop();

console.log(numbers);

languages.unshift("C#");

console.log(languages);

languages.shift();

console.log(languages);

languages.splice(1,2,'Ruby');

console.log(languages);

var students = ['Drini' , 'Rigoni' , 'Edlira' , 'Omeri' , 'Enes'];

var [s1,s2,s3,s4,s5] = students

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

console.log('');



var qytete = ['Prishtina ','Peja','Gjakova','Prizreni','Mitrovica','Ferizaji','Gjilani','Danbury','New york city','Lisbon','Madrid','Barcelona','Dagestan','Chernaboyl','Tirana','Oslo','Washington','Berlin','Paris','Rome' ]

var [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,,q17,q18,q19,q20,] = qytete

console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);
console.log(q5);
console.log(q6);
console.log(q7);
console.log(q8);
console.log(q9);
console.log(q10);
console.log(q11);
console.log(q12);
console.log(q13);
console.log(q14);
console.log(q15);
console.log(q16);
console.log(q17);
console.log(q18);
console.log(q19);
console.log(q20);