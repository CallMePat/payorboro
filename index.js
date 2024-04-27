let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.scrollY || window.pageYOffset;
  if (currentScroll > lastScrollTop) {
    // scrolling down
    document.querySelector(".container").classList.remove("navbar-white");
  } else {
    // scrolling up
    document.querySelector(".container").classList.add("navbar-white");
  }
  lastScrollTop = currentScroll;
}, false);
