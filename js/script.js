var discount = ['Mickey', 'Donald', 'Goofy'];
var nomeBurger = document.getElementsByClassName('name-burger')[0];
var checkIngredients = document.getElementsByClassName('container')[0].getElementsByTagName('input');
var inputDiscount = document.getElementsByClassName('discount')[0];
var btn = document.getElementsByTagName('button')[0];
var finalPrice = document.getElementsByClassName('price')[0];
var basePrice = 50;
var counterIngredients = 0;
var checkedIngredients = [];
var flag

finalPrice.innerText = basePrice;

btn.addEventListener('click', function(){ // fase 1: se non scrivo un nome per il panino non vado avanti
  if (nomeBurger.value === ''){
    alert('Inserisci il nome, per favore!')
  } else { //fase 2: se non seleziono almeno 2 checkbox si blocca
    for (var i = 0; i < checkIngredients.length; i++) {
      if (checkIngredients[i].checked) {
        checkedIngredients.push(checkIngredients[i].value);
        counterIngredients +=1;
      }
    }
    if (counterIngredients < 2) {
      alert('Seleziona almeno 2 ingredienti!')
    } else { //fase 3: calcolo il prezzo base
      for (x = 0; x < checkedIngredients.length; x++){
        basePrice += parseInt(checkedIngredients[x])
      }
      for (var y = 0; y < discount.length; y++) { //fase 4: Controlliamo lo sconto
        if(inputDiscount.value === discount[y]){
          flag = true;
        }
      }
      if(flag) {
        basePrice = basePrice - (basePrice * 0.2);
      }
      finalPrice.innerText = basePrice;
    }
  }
  //fase 5: resetto le var alla base
basePrice = 50;
counterIngredients = 0;
checkedIngredients = [];
flag = false;
})
