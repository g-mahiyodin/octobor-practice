alert("this is js")
var hint = "please read it"
alert(hint)
var a = prompt("put your id","here")
if( a === "Ali"){
    alert("this is your name")
}
else{
    alert("Enter correct name")
}
var percent = +prompt("Enter your %","Enter here")
if( percent >= 80 && percent <= 100){
    alert("Your Grade is A+")
}
else if( percent >= 70 && percent <= 80){
    alert("Your Grade is A")
}
else if( percent >= 60 && percent <= 70){
    alert("Your Grade is B")
}
else if( percent < 60){
    alert("You are Fail!!!")
}
else{
    alert("invalid percent")
}
var weight = +prompt("Enter weight")
var age = +prompt("Enter age")
var gardes = prompt("Enter grades")
var qualification = prompt("Enter qualification")
if( weight >= 60 && age >= 20 && (gardes === "A" || qualification === "graduation")){
    alert("Recommemded")

}
else{
    alert("Not Recommended")
}