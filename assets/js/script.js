//inserire nome corretto oppure esce fuori un alert
var burger_choice = ["hamburger", "cheeseburger", "bacon-cheese", "veggie burger"];

var coupons = ["sconto-bool", "sconto2021"];

var input_nameBurger = document.getElementById('name');

var ingredients = document.getElementsByClassName("ingredient-checkbox");

var discount_coupon = document.getElementById('coupon');

var price_info = document.getElementById("price");

var default_price = 10;

var discoun_percentage = 0.2;

//esecuzione calcolo con il click sul bottone
document.getElementById("button").addEventListener("click", function(){

  verryfy_input_text(input_nameBurger, burger_choice);
  
  var calc_ingridients = check_ingredients(ingredients);

  
  var total_price = calc_bill(default_price, calc_ingridients);

  var real_price = verify_discount(discount_coupon, coupons, total_price, discoun_percentage);
  
  
  bill_display(real_price, price_info);

});


// verifica codice sconto
function verify_discount(str, arr, price, discount){  
  var input_value = str.value.trim();

  if((arr.includes(input_value))){
       return (price - (price * discount)).toFixed(2);
  }else{
    return (price - 0).toFixed(2);
  }
}


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
