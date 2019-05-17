const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){

    if(counter === 4){
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`;
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:600,fill:'forwards'});
}

function prevSlide(){

    if(counter === 0){
        counter = 5;
    }
    counter--;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:600,fill:'forwards'});
}


