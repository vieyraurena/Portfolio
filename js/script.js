//
// JS2 Project template.
//

const link = document.getElementById('link');
const collapse = document.getElementById('menu');
const equis = document.getElementById('equis');
console.log('hi')

link.addEventListener('click', (event) => {
  event.preventDefault();
  collapse.classList.add('visible');
});

equis.addEventListener('click', (event) => {
  event.preventDefault();
  collapse.classList.remove('visible');
});


