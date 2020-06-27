function inbutton(num){
    var result = document.getElementById("inpua")
    result.value += num
}
function cler(){
    var result = document.getElementById("inpua")
    result.value = ""
}
function result(){
    var result = document.getElementById("inpua")
    result.value = eval(result.value)
}