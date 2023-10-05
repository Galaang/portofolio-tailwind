// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const arrow = document.querySelector('#arrow');

    if (window.pageYOffset > fixednav) {
        header.classList.add('nav-fixed');
        arrow.classList.remove('hidden');
        arrow.classList.add('flex');
    } else {
        header.classList.remove('nav-fixed');
        arrow.classList.add('hidden');
        arrow.classList.remove('flex');
    }
}

// klik diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode
const darkmode = document.querySelector('#dark-mode');
const html = document.querySelector('html');

darkmode.addEventListener('click', function () {
    if (darkmode.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark'
    }
    else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

// toggle dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkmode.checked = true
} else {
    document.documentElement.classList.remove('dark')
    darkmode.checked = false
}