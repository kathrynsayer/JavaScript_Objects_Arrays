console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum () {
    let sum = 0;

    numbers.forEach((number, index) => {
        sum += number
    })

console.log(sum)
}

arraySum ()


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};
book.title = "Liar's Club",
book.author = "Mary Carr",
book.pages = 320,
book.readCount = 2,

book.info = function() {
    console.log(`My favorite book is ${this.title}! It is by ${this.author}.`)
}

book.info();
console.log(book)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
// function to reverse a string
function reverseStr(str) {
    let reverseStr = "";

    for (let i = 0; i < str.length; i++) {
        reverseStr = str[i] + reverseStr;
}

return reverseStr;
}

// split a sentence into words
function reverseWordsFromSentence(sentence) {

    let words = sentence.split("");

// reverse each word in an array
let reverseWords = words.map(function (word) {
    return reverseStr(word);
});

return reverseWords.join ("");
}

console.log(reverseWordsFromSentence(sentence));

// // combine reversed words to a sentence again 

// // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

console.log(csvData);

function toJSON() {

    let dataArr = csvData.split("\n");
    let headers = dataArr[0];
    let records = dataArr.slice(1); 
}

toJSON(csvData)
