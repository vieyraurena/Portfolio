const URL = "https://api.github.com/users/vieyraurena/repos?per_page=10"
const list = document.querySelector('.git__list');

const listRepos = (element) => {
  element.forEach((repo) => {
    const content = `
      <div id="js__git--anim">
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
