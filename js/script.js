let langRu = document.querySelector('.lang-ru');

langRu.addEventListener('click', function (event) {
  if (this.classList.contains('lang--inactive')) {
    event.preventDefault(); // Предотвращаем переход по ссылке
  }
});
