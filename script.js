// const quotes = [
//     {
//         author: "Albert Einstein",
//         quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
//     },
//     {
//         author: "Albert Einstein",
//         quote: "Imagination is more important than knowledge."
//     },
//     {
//         author: "Albert Einstein",
//         quote: "If you can't explain it simply, you don't understand it well enough."
//     },
//     {
//         author: "Albert Einstein",
//         quote: "A person who never made a mistake never tried anything new."
//     },
//     {
//         author: "Albert Einstein",
//         quote: "Try not to become a man of success, but rather try to become a man of value."
//     },
// ]

// const authorName = document.getElementById("author");
// const quoteText = document.getElementById("quote");
// const button = document.getElementById("btn");

// function getRandomQuote() {
//     const randomNum = Math.floor(Math.random() *8);
//     const randomQuote = quotes[randomNum];

// authorName.textContent = randomQuote.author;
// quoteText.textContent = randomQuote.quote;

// }

// getRandomQuote();

// button.addEventListener("click", getRandomQuote);


// const authorName = document.getElementById("author");
// const quoteText = document.getElementById("quote");
// const button = document.getElementById("btn");

// function getRandomQuote() {
//     const randomNum = Math.floor(Math.random() *8);
//     const randomQuote = quotes[randomNum];

//     authorName.innerText = randomQuote.author;
//     quoteText.textContent = randomQuote.quote;
// }

// //
// getRandomQuote();

// // add event-listener
// button.addEventListener("click", getRandomQuote);


//trying again


// const authorName = document.getElementById("author");
// const quoteText = document.getElementById("quote");
// const button = document.getElementById("btn");

// function getNewQuote() {
//     const randomNum = Math.floor(Math.random()*5);
//     const newQuote = quotes[randomNum];

//     authorName.textContent = newQuote.author;
//     quoteText.textContent = newQuote.quote;
// }

// //
// getNewQuote();

// // adding event-listener
// button.addEventListener("click", getNewQuote);


//

const quotes = [
    {
        author: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
        author: "Rohit Thapa",
        quote: "Imagination is more important than knowledge."
    },
    {
        author: "Neil Arm Strong",
        quote: "If you can't explain it simply, you don't understand it well enough."
    },
    {
        author: "Mahatma Gandhi",
        quote: "A person who never made a mistake never tried anything new."
    },
    {
        author: "Bhagat Singh",
        quote: "Try not to become a man of success, but rather try to become a man of value."
    },
]
const authorName = document.getElementById("author");
const quoteText = document.getElementById("quote");
const button = document.getElementById("btn");

function newQuote() {
    const randomNewNumber = Math.floor(Math.random() *quotes.length);

    authorName.textContent = quotes[randomNewNumber].author;
    quoteText.textContent = quotes[randomNewNumber].quote;
}
newQuote();

button.addEventListener("click", newQuote);