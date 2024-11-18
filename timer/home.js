const minutes = document.getElementById("min")
const seconds = document.getElementById("sec")
let secondsElapsed = 0
let interval = null

function setTimer(){
    secondsElapsed ++;
    if (secondsElapsed % 60 < 10){
        seconds.innerText = "0" + (secondsElapsed % 60)
    }else{
        seconds.innerText = (secondsElapsed % 60)
    }
    if(Math.floor(secondsElapsed / 60) < 10){
        minutes.innerText = "0" + Math.floor(secondsElapsed / 60)
    }else{
        minutes.innerText = Math.floor(secondsElapsed / 60)
    }
}

function Start(){
    if(interval)Stop()
    interval = setInterval(setTimer,1000)
}

function Stop(){
    clearInterval(interval)
}

function Reset(){
    Stop()
    secondsElapsed = -1
    setTimer()
}