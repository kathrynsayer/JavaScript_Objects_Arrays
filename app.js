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
book.title = "Liar's Club"
book.pages = 320
book.readCount = 2

book.info = function() {
    console.log(`My favorite book is ${this.title}!`)
}

book.info();
console.log(book)


