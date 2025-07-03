const imagePaths = ['./assets/first.png', './assets/two.jpg', './assets/three.jpg', './assets/four.jpg'];
const img1 = document.querySelector('#sec-one-image1');
const img2 = document.querySelector('#sec-one-image2');
const fills = document.querySelectorAll('.fill');
const slideDuration = 5000;
const burger = document.getElementById('burger');
const nav = document.querySelector('.header-navbar');
const overlay = document.getElementById('overlay');
const secOne = document.querySelector('.sec-one');
let current = 0;
let showingFirst = true;

function startProgress(index) {
    fills.forEach((fill, i) => {
        fill.style.transition = 'none';
        fill.style.width = i < index ? '100%' : '0%';
    });

    setTimeout(() => {
        fills[index].style.transition = `width ${slideDuration}ms linear`;
        fills[index].style.width = '100%';
  }, 50);
}

function showSlide(index) {
    const newImg = imagePaths[index];

    if (showingFirst) {
        img2.src = newImg;
        img2.style.opacity = 1;
        img1.style.opacity = 0;
    } else {
        img1.src = newImg;
        img1.style.opacity = 1;
        img2.style.opacity = 0;
    }

    showingFirst = !showingFirst;
    startProgress(index);
}

function nextSlide() {
    current = (current + 1) % imagePaths.length;
    showSlide(current);
}

function toggleMenu() {
    const isActive = nav.classList.toggle('active');
    
    burger.classList.toggle('active', isActive);
    overlay.classList.toggle('active', isActive);
    
    if (isActive) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

showSlide(current);
setInterval(nextSlide, slideDuration);

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);