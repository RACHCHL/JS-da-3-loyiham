var n= prompt("Ismingizni kiriting. masalan 'Abubakr' ko'rinishida")
var b="Rasulbek"
var h="Ruslan"
var j="Jaxongul"
var z="Zilola"
var k="Nozima"
var l="Nozimaxon"
if(n == b){
    alert("Hello BOSS!")
}
else if(n==h){
    alert("Hello Rasulbek's father")
}
else if(n==j){
    alert("Hello Rasulbek's mather")
}
else if(n==z){
    alert("salom Rasulbekning suyukli singilchasi")
    
}
else if(n==k || n==l){
      alert("Salom Rasulbekning suyukli opajonisi")
}
else if(n!=b && isNaN(n)){
    alert("Hello guest")
}
else if(!isNaN(n)){
    alert("Isim faqat harflardan iborat bolishi kerak")
}










