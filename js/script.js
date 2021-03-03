//
// JS2 Project template.
// //

// const link = document.getElementById('link');
// const collapse = document.getElementById('menu');
// const equis = document.getElementById('equis');
// console.log('hi')

// link.addEventListener('click', (event) => {
//   event.preventDefault();
//   collapse.classList.add('visible');
// });

// equis.addEventListener('click', (event) => {
//   event.preventDefault();
//   collapse.classList.remove('visible');
// });
const URL = "https://api.github.com/users/vieyraurena/repos?per_page=10"
const list = document.querySelector('.git-list');

const listRepos = (element) => {
  element.forEach((repo) => {
    const content = `
      <div id="git-anim">
        <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
      </div>
      `;
    list.innerHTML += content;
    // content.classList.add('#js')
  });
 
}

fetch(URL, {
  method: "GET"
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    listRepos(data);
  })
  .catch((err) => {
    console.error(err);
  });
