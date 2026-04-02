var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var curremtTime = new Date()

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = curremtTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM"
    }

    var clockTime = hours + ":" + minutes + ":" +  meridian;
    clock.innerHTML = clockTime;
    changeImage();
}