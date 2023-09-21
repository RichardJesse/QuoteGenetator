

let quote = document.querySelector('.quote');
let newQuoteBtn = document.querySelector('#new-quote');
let person = document.querySelector('.person');

//quotes array that houses all the quotes to be used
const quotes = [
    {
        quote: "Don't be a chass nigga",
        person: 'wingabire arnold'
    },
    {
        quote: "regardless we move",
        person: 'tonny wanjala'
    },
    {
        quote: "hiyo imeenda ",
        person: 'alex rono'
    }
]

/**
 * this is a methos allows for the a quote to be displayed
 * to the user every five seconds thus it does not remain 
 * to be a static site  
 *
 */

document.addEventListener('DOMContentLoaded', setInterval(() => {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[randomQuote].quote;
    person.innerHTML = quotes[randomQuote].person;
}, 10000));


