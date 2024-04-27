
// window.addEventListener("scroll", () => {
//   const currentScroll = window.scrollY || window.pageYOffset;
//   if (currentScroll > lastScrollTop) {
//     // scrolling down
//     document.querySelector(".container").classList.remove("navbar-white");
//   } else {
//     // scrolling up
//     document.querySelector(".container").classList.add("navbar-white");
//   }
//   lastScrollTop = currentScroll;
// }, false);


window.addEventListener("scroll", () => {
  const container =document.querySelector ('.container');

  if (window.scrollY > 0) {
    container.classList.add('scrolled')
  } else {
    container.classList.remove('scrolled')
  }
})