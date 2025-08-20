const amount = document.getElementById('amount');

// Manipulando o input para receber somente números
amount.addEventListener('input', () => {
  const characterRegex = /\D+/g;

  amount.value = amount.value.replace(characterRegex, '');
})