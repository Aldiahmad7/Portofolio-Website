let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate')
        }
        else {
            sec.classList.remove('show-animate')
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

const arrowRight = document.querySelector('.projects-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.projects-box .navigation .arrow-left');

let index = 0;

const activePortofolio = () => {
    const imgSlide = document.querySelector('.projects-aldi .img-slide');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
}

    // animation footer on scroll
}
