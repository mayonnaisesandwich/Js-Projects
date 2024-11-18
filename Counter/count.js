const btn = document.getElementById("btn")
const digit = document.getElementById("digit")
count = 0
btn.onclick = () => {
    count += 1
    digit.innerText = count
}