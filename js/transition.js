window.onload = () => {
  const transition = document.querySelector(".transition");
  const links = document.querySelectorAll('.header__nav--links');

  transition.classList.remove("js__active");
  
  
  links.forEach((anchor) => {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target.href;
      console.log(target);
      transition.classList.add('js__active');
      
     // transition.classList.add('right');
      setTimeout(() => {
        window.location.href = target;

        }, 500);
      })
    })
  }