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
    const projectsdetails = document.querySelectorAll('.projects-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectsdetails.forEach(detail => {
        detail.classList.remove('active');
    });
    projectsdetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 2) { //index yang ada di else -1
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 3; //jumlah berapa gambar -1
        arrowRight.classList.add('disabled');
    }

    activePortofolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortofolio();
});

    // animation footer on scroll
}

