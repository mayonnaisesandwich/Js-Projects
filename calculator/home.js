result = false
function append(value){
    if (value == "="){
        try{
            document.getElementById("display").value = eval(document.getElementById("display").value)
        }
        catch(error){
            document.getElementById("display").value = "Error"
        }
        result = true
    }else{
        if (result){
            document.getElementById("display").value = value
            result = false
        }else{
            document.getElementById("display").value += value
        }
}}
