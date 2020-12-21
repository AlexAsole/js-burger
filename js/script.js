// fase 1: se non scrivo un nome per il panino non vado avanti
var discount = ['Mickey', 'Donald', 'Goofy'];
var nomeBurger = document.getElementsByClassName('name-burger')[0];
var checkIngredients = document.getElementsByClassName('container')[0].getElementsByTagName('input');
var counterIngredients = 0;
var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function(){
  if (nomeBurger.value === ''){
    alert('Inserisci il nome, per favore!')
  } else { //fase 2: se non seleziono almeno 2 checkbox si blocca
    for (var i = 0; i < checkIngredients.length; i++) {
      if (checkIngredients[i].checked) {
        counterIngredients +=1;
      }
    }
    if (counterIngredients < 2) {
      alert('Seleziona almeno 2 ingredienti!')
    } else {
      alert('Vai avanti!')
    }
  }

})
