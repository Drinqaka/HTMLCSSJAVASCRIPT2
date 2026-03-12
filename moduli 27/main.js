function displayAlert(){
    alert('This text is inside the function')
}

displayAlert();

function mbledhja(numri1,numri2){
     return numri1+numri2;
}

document.write(mbledhja(8,5));

function toCelsius(f){
    return 5/9*(f-32);
}

console.log('5 fahreineit is equal to' + ' ' + toCelsius(5) + ' ' + 'celsius')

var arrayfunction = () => alert("hello");

arrayfunction ();

function dsfunction(){
    var localvar = "Digital School"
    alert(localvar);
}

dsfunction ();

function toSeconds(m){
    return 60*(m);
}

console.log('5 minutes is equal to' + ' ' + toSeconds(5) + ' ' + 'seconds')

function perimeter(a,b,c){
    return a+b+c;
}

console.log('p eshte e barabarte me ' + perimeter(10,15,20));

var pcmonitor = { color:"black" , year: 2012 , monitorsize:"50cm" , capacity:"1TB" }

alert(pcmonitor.capacity);

function Computer(name,CPU,RAM,GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var c1 = new Computer("Macbook","8-core","bla")
var c2 = new Computer("no1","N02" ,"N04")