const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
const imgArr = ['img/1.jpg', 'img/2.jpg',
    'img/3.jpg', 'img/4.jpg'];

let currentIndex = 0;

function changeIndex(index) {
    currentIndex = index;
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);
}

function slide(index) {
    img.style.display = "none";
    setTimeout(() => {
        img.style.display = "block";
    }, 0);
    
    img.src = imgArr[index];
    activeDots(index);
}

function activeDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}


