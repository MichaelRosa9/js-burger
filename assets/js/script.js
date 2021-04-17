//inserire nome corretto oppure esce fuori un alert
var burger_choice = ["hamburger", "cheeseburger", "bacon-cheese", "veggie burger"];

//burger price
var hamburger = 10;
var cheeseburger = 12;
var bacon_cheese = 13;
var veggie_burger = 15;

var input_nameBurger = document.getElementById('name');



//var check_menu = verryfy_input_text(input_nameBurger, burger_choice);
document.getElementById("button").addEventListener("click", function(){
  verryfy_input_text(input_nameBurger, burger_choice);

});



//funzione verifica nome dentro un array
function verryfy_input_text(str, arr){

  var input_value = str.value.trim();

  if(!(arr.includes(input_value))){
    alert("Non hai inserito corretamente quello ceh vuoi ordinare. scegli tra: " + arr)
  }else{
    alert("coretct!")
  }
}

//funzione prezzo