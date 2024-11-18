const array = ['red','yellow','orange']
function randomise(){
    digit = Math.floor(Math.random() * 3)
    document.getElementById("whole").style.backgroundColor = array[digit]
}

function setColor(value){
    document.getElementById("whole").style.backgroundColor = value
}