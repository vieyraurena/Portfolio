const form = document.querySelector("form");
const required = document.querySelectorAll('.required');

const h4 = document.querySelector('h4');
const warning = document.createElement('h5');
const check = document.createElement('p');
check.innerHTML = '';

const formValidation = () => {
  required.forEach((input) => {
    if (input.value === '') {
      input.classList.add('red');
      warning.innerHTML = 'Ocurrio un error, verifica los siguientes campos'; 
      h4.appendChild(warning); 
    } else {
      input.classList.remove('red');
      check.innerHTML = 'Su formulario fue enviado';
      check.classList.add('green');
      form.appendChild(check);
    }
  })
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  formValidation();
  event.target.reset();
});
