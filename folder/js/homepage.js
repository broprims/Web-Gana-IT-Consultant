window.addEventListener('scroll', function () {
  const header = document.querySelector('.page');
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggelMenu() {
  const toggle_page = document.querySelector('.toggle_page');
  const menu = document.querySelector('.menu')
  toggle_page.classList.toggle('active');
  menu.classList.toggle('active');
}

window.addEventListener(
  "scroll",
  () => {
      document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
  },
);
