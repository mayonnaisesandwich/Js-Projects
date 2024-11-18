const inpuI = document.getElementById("intake")
let list = [12,34,56,78,90,1,3,5,7,9,2,4,6,8,0]
document.getElementById("static_arr").innerText = list

document.onclick = () =>{
    let found = false
    for(i=0;i< 15;i++){
        if(list[i] == parseInt(inpuI.value)){
            console.log("found it")
            found = true
        } 
    }
    document.getElementById("display").innerText = eval("5+2+2")
}