const inside = document.getElementById("in")
const display = document.getElementById("display")

let arr = [] 
document.getElementById("btn").onclick = () => {
    arr.push(inside.value)
    display.innerHTML = arr
}

