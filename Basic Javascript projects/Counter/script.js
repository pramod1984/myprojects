const counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter(){
    count++;
    counter.innerHTML = count;

    if(counter.innerHTML > '0'){
        counter.style.color = 'green';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'black'; 
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:600,fill:'forwards'});
}

function decrementCounter(){
    count--;
    counter.innerHTML = count;

    if(counter.innerHTML < '0'){
        counter.style.color = 'red';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'black'; 
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:600,fill:'forwards'});
}
