const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navs = document.querySelectorAll('[id^="nav-"]');

function toggleNav() {
  // toggle menu bars open/closed
  menuBars.classList.toggle('change');
  // toggle menu to be active or not
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate in - overlay
    overlay.classList.remove('overlay-slide-left');
    overlay.classList.add('overlay-slide-right');
    // Animiate in nav items
    navs.forEach((nav, index) => {
      nav.classList.remove(`slide-out-${index + 1}`);
      nav.classList.add(`slide-in-${index + 1}`);
    });
  } else {
    // Animate out - overlay
    overlay.classList.remove('overlay-slide-right');
    overlay.classList.add('overlay-slide-left');
    // Animate out nav items
    navs.forEach((nav, index) => {
      nav.classList.remove(`slide-in-${index + 1}`);
      nav.classList.add(`slide-out-${index + 1}`);
    });
  }
}

menuBars.addEventListener('click', toggleNav);
navs.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});