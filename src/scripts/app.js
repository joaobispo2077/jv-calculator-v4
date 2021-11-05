const $ = document.querySelector.bind(document);

$('.result').addEventListener('click', function () {
  const input = $('.input-numbers');

  input.value = 'Você tentou fazer uma conta!';
});