var element = document.querySelector(".form-signup"); // devuelve el elemento que buscas en este caso una clase.
element.addEventListener("submit", function(event) { //
  event.preventDefault();
  validacion();
});
