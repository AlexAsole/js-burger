// fase 1: se non scrivo un nome per il panino non vado avanti
var nomeBurger = document.getElementsByClassName('name-burger')[0];
var checkIngredients = document.getElementsByClassName('container')[0].getElementsByTagName('input');
var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function(){
  if (nomeBurger.value === ''){
    alert('Inserisci il nome, per favore!')
  } else {
    alert('Vai Avanti')
  }

})
