const btn = document.getElementById("btn-add")
let array = []
const display = document.getElementById("display_list")

btn.onclick = () => {
    add()
    render()
}

function render(){
    display.innerHTML = null
    for (i=0;i<array.length;i++){
        const div = document.createElement("div")
        div.className = "item"
        const text = document.createElement("p")
        const button = document.createElement("button")
        text.innerText = array[i].item
        button.className = "remove"
        button.innerText = "Remove"
        div.style.display = "flex"
        div.style.flexWrap = "wrap"
        div.style.width = "98.45%"
        div.style.padding = "7px"
        if (i % 2 === 1){
            div.style.backgroundColor= "#B3C8CF"
            button.style.border
        }else{
            div.style.backgroundColor = "#F1F0E8"
        }
        text.style.fontSize = "x-large"
        text.style.fontWeight = "bold"
        button.style.marginLeft = "auto"
        button.style.fontSize = "x-large"
        button.style.backgroundColor = "#F1F0E8"
        button.style.borderRadius = "7px"
        button.id = i
        button.onclick = () =>{
            remove(button)
        }
        div.appendChild(text)
        div.append(button)
        display.appendChild(div)
    }
}

function add(){
    let Todo = {
        item  : "",
        priority : ""
    }
    Todo.item = document.getElementById("item-add").value.toLowerCase()
    Todo.priority = document.getElementById("selector").value
    array.push(Todo)
    delete Todo
}

function remove(btn){
    array.splice(btn.id,1)
    render()
}

document.getElementById("sort").onclick = () =>{
    let swaps = true
    while (swaps){
        swaps = false
        for (let i = 1; i<array.length; i++){
            if(parseInt(array[i].priority) < parseInt(array[i-1].priority)){
                [array[i],array[i-1]] = [array[i-1],array[i]]
                swaps = true 
            }
        }
    }
    render()
}

