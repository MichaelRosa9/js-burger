//inserire nome oppure esce fuori un alert
var burger_choice = ["hamburger", "cheeseburger", "bacon-cheese", "veggie burger"];

var input_nameBurger = document.getElementById('name').value;


document.getElementById("btn").addEventListener(function() {
  button_calculate;
});

var button_calculate = verryfy_input_text(input_nameBurger, burger_choice);

function verryfy_input_text(str, arr){

  if(!str.includes(arr)){
    alert("We're sorry but that choice isn;t available in the Menu.\n Please chooese an item from the Menu.")
  }
    
  console.log(input_nameBurger);
}
//se 