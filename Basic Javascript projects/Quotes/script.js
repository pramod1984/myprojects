const quotes = [
    {
        name: 'Author 1',
        quote: '1 Lorem ipsum dolar sit'
    },
    {
        name: 'Author 2',
        quote: '2 Lorem ipsum dolar sit amet'
    },
    {
        name: 'Author 3',
        quote: '3 Lorem ipsum dolar sit'
    },
    {
        name: 'Author 4',
        quote: '4 Lorem ipsum dolar sit....'
    },
    {
        name: 'Author 5',
        quote: '5 Lorem ipsum dolar sit2124'
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
