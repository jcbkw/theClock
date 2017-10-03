function onReady () {
    setInterval(updateTime, 1000);
}

function displayClock(clock, time){
    
    clock.innerHTML = updateTime(); 
    
}

function updateTime(){
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    return getCurrentTime(hours, minutes, seconds);
}

function getCurrentTime (hours, minutes, seconds) {
    
    hours   = hours   < 10? `0${hours}`  : hours; 
    minutes = minutes < 10? `0${minutes}`: minutes; 
    seconds = seconds < 10? `0${seconds}`: seconds; 
    
    return displayClock(`${hours}:${minutes}:${seconds}`);   
}

function displayClock(time) {

    let mainClock = document.getElementById("clock");
    mainClock.innerHTML = time;

}

window.onload = onReady;

//follow me at https://twitter.com/02geek
//learn more about me at http://02geek.com