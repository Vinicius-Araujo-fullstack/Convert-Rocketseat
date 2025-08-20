const USD = 5.47;
const EUR = 6.38;
const GBP = 7.37;


const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');


// Manipulando o input para receber somente números
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, '');
})

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$');
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£');
      break;
  }
}


// Função para converter a moeda
const convertCurrency = (amount, price, symbol) => {
  try {
    // Aplica a classe que exibe o resultado
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe que exibe o resultado
    footer.classList.remove("show-result");
    alert('Erro ao converter a moeda:', error);
  }

}