
function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";
    
    if(hour == 0){
        hour = 24;
    }
    
    if(hour>=12){
        session = "PM"
    }
    
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    var display = hour + ":" + min + ":" + sec + " "+ session;
    document.getElementById("MyClockDisplay").textContent = display;
    setTimeout(showTime, 1000);
}


showTime();