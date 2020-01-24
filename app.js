
function dis(val) {
    document.getElementById("result").value += val
}

function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//Clear function
function clr() {
    document.getElementById("result").value = ""
} 