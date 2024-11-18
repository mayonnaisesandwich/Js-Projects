function check(){
    value = document.getElementById("value").value
    if(value == ""){
        alert("Nothing is entered")
    }
    if(value == value.split("").reverse().join("")){
        alert("Palindrome!")
    }else{
        alert("Whomp Whomp")
    }
}