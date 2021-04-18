//inserire nome corretto oppure esce fuori un alert
var burger_choice = ["hamburger", "cheeseburger", "bacon-cheese", "veggie burger"];

var input_nameBurger = document.getElementById('name');

var ingredients = document.getElementsByClassName("ingredient-checkbox");
var price_info = document.getElementById("price");

var default_price = 10;




//esecuzione calcolo con il click
document.getElementById("button").addEventListener("click", function(){
  verryfy_input_text(input_nameBurger, burger_choice);
  
  var calc_ingridients = check_ingredients(ingredients);
  
  console.log(calc_ingridients);

  var total_price = calc_bill(default_price, calc_ingridients);

  bill_display(total_price, price_info);

});




//funzione che mostra il prezzo sull'html
function bill_display(total, target_price){
  target_price.innerHTML = total;
}

//funzione prezzo totale
function calc_bill(num1, num2){
  var tot = num1 + num2;
  return tot;
}

//funzione per il risultato e la somma totale di solo gli ingredienti
function check_ingredients(arr){
  
  var sum = 0;
  for(var i = 0; i< arr.length; i++){

    var ingredient = arr[i];

    if(ingredient.checked === true){

      sum += parseInt(ingredient.value);

    }

  }
  return sum;
}


//funzione verifica se il nome inserito é presente nell'array
function verryfy_input_text(str, arr){

  var input_value = str.value.trim();

  if(!(arr.includes(input_value))){
    alert("Non hai inserito corretamente quello ceh vuoi ordinare. scegli tra: " + arr)
  }
}
