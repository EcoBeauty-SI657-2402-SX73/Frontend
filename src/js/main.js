/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);


  if (toggle && nav) {
    toggle.addEventListener("click", () => {

      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");
const linesMobileMenu = document.querySelector(".menu");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");

  linesMobileMenu.classList.remove("opened");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 64;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");


  scrollTop.addEventListener("click", linkAction);
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");


const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";


if (selectedTheme) {

  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}


themeButton.addEventListener("click", () => {

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true
});

sr.reveal(
  `.home_data, .home_img,
          .about_data, .about_img,
          .menu_content,
          .app_data, .app_img,
          .contact_data, .contact_button,
          .footer_content,
          .video,
          .ad_content`,
  {
    interval: 100
  }
);


// Crea una variable para almacenar la instancia del reproductor de YouTube
var player;

// Esta función crea una instancia de YT.Player
//centrar instancia de YT.Player en el div con el id youtube-video

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    height: '390',
    width: '640',
    videoId: 'EabpyWfc2vI',
    playerVars: {
      autoplay: 1,
      mute: 1
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
}


/*==================== VIDEO AUTO ====================*/

function onPlayerReady(event) {
  checkIfVideoInView();
}

function checkIfVideoInView() {
  var videoElement = document.getElementById('youtube-video');

  var rect = videoElement.getBoundingClientRect();
  var isInView = (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );

  if (isInView) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }

  setTimeout(checkIfVideoInView, 100);
}

onYouTubeIframeAPIReady();
