const btn = document.getElementById("btn")
const inner = document.getElementById("inner")
const outer = document.getElementById("outer")
const page = document.getElementById("page")

btn.onclick = () =>{
    text = btn.innerHTML
    change(text)
}

function change(text){
    if (text ==="Dark Mode"){
        btn.style.fontWeight = "bolder"
        btn.innerText = "Light Mode"
        btn.style.borderColor = "rgb(239, 255, 211)"
        btn.style.fontWeight = "bold"
        btn.style.backgroundColor = "rgb(20 20 20)"
        btn.style.color = "white"
        outer.style.backgroundColor = "rgb(50 50 50)"
        document.getElementById("text").style.color = "white"
        page.style.backgroundColor = "black"
    }
    else{
        console.log("ererer")
        btn.style.fontWeight = "bolder"
        btn.innerText = "Dark Mode"
        btn.style.borderColor = "black"
        btn.style.fontWeight = "bold"
        btn.style.backgroundColor = "rgb(239, 255, 211)"
        btn.style.color = "rgb(20 20 20)"
        outer.style.backgroundColor = "rgb(249, 265, 221)"
        document.getElementById("text").style.color = "rgb(20 20 20)"
        page.style.backgroundColor = "rgb(239, 255, 211)" 
    }
}
//const time = setInterval(btn.onclick,100)