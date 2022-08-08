let counter = 0

function subtract(){
counter--
console.log(document.getElementById("zero").innerHTML = counter);
if(counter <= 10){
    document.getElementById("demo").innerHTML=""

}
else {
    document.getElementById("demo").innerHTML = "you have cross 10."

}
}
function reset(){
    counter = 0
    console.log(document.getElementById("zero").innerHTML = counter);
    if(counter = 10){
        document.getElementById("demo").innerHTML=""

    }
    else {
        document.getElementById("demo").innerHTML = ""

    }
}
function addition(){
    counter++
    console.log(document.getElementById("zero").innerHTML = counter);
    if(counter >=10){
        console.log(document.getElementById("demo").innerHTML = "you have cross 10.");
    }
    else {
        document.getElementById("demo").innerHTML=""
    }
    }

