const quotes = [
    {
        quote: "Always let your conscience be your guide.",
        author: "Pinocchio",
    },
    {
        quote: "Just keep swimming!",
        author: "Dory",
    },
    {
        quote: "Think happy thoughts.",
        author: "Peter Pan",
    },
    {
        quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
        author: "Mulan",
    },
    {
        quote: "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
        author: "The Lion King",
    },
    {
        quote: "I never look back, darling! It distracts from the now.",
        author: "Edna Mode",
    },
    {
        quote: "Ohana means family, family means nobody gets left behind.",
        author: "Lilo and Stitch",
    },
    {
        quote: "Our fate lives within us, you only have to be brave enough to see it.",
        author: "Brave, Merida",
    },
    {
        quote: "Some people are worth melting for.",
        author: "Frozen’s Olaf",
    },
    {
        quote: "Success doesn’t come for free. You have to do whatever it takes to seize your moment.",
        author: "Coco",
    } // Array - not just Text
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //**

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
