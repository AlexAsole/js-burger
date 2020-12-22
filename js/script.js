var discount = ['Mickey', 'Donald', 'Goofy'];
var basePrice = 50;
var minIng = 2;
var disValue = 0.2;
var nomeBurger = document.getElementsByClassName('name-burger')[0];
var checkIngredients = document.getElementsByClassName('container')[0].getElementsByTagName('input');
var inputDiscount = document.getElementsByClassName('discount')[0];
var btn = document.getElementsByTagName('button')[0];
var finalPrice = document.getElementsByClassName('price')[0];
var counterIngredients = 0;
var addPrice = basePrice;

finalPrice.innerText = '$ ' + addPrice;

btn.addEventListener('click', function(){ // fase 1: se non scrivo un nome per il panino non vado avanti
  if (nomeBurger.value.length === 0){
    alert('Inserisci il nome, per favore!')
    finalPrice.innerText = '$ ' + addPrice;
  } else { //fase 2: se non seleziono almeno 2 checkbox si blocca*
    for (var i = 0; i < checkIngredients.length; i++) {
      if (checkIngredients[i].checked) {
        addPrice += parseInt(checkIngredients[i].value); //fase 3: calcolo prezzo base
        counterIngredients++;
      }
    }
    if (counterIngredients < minIng) { //*se non hai selezionato 2 check, si blocca
      alert('Seleziona almeno 2 ingredienti!')
      finalPrice.innerText = '$ ' + addPrice;
    } else {
      if(discount.indexOf(inputDiscount.value) !== -1){
        addPrice -= addPrice*disValue;
      }
    }
    finalPrice.innerText = '$ ' + addPrice;
}
counterIngredients = 0;
addPrice = basePrice;
})
