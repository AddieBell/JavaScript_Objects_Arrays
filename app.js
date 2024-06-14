console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log
const numbers = [2, 22, 12, 17, 18, 39, 129];
//239

function arraySum(numbs) {
    let sum = 0;
    for (let i = 0; i < numbs.length; i++) {
        sum += numbs[i];
    }
    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};
    book.title = `Mistborn`;
    book.author = `Brandon Sanderson`;
    book.pages = 541;
    book.readCount = 2;
    book.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, read ${this.readCount} times.`;
    }
console.log(book.info());

//console.log(`This book is ${favBook.bookTitle} by ${favBook.author}, ${favBook.pages} pages, read ${favBook.readCount} times`);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

const arrayofString = sentence.split(" ");
let reversedSentence = new Array(9);
    for (let i = 0; i <= 8; i++){
        let word = arrayofString[i];
        const arrayofLetter = word.split('');
        const reverseArray = arrayofLetter.reverse();
        let reversedWord = reverseArray.join("");
        reversedSentence[i] = reversedWord;

        //console.log(arrayofLetter);
        //console.log(reverseArray);
        //console.log(reversedWord);
    }
let switchedSentence = reversedSentence.join(" ");
console.log(switchedSentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csv) {
    const rows = csv.split("\n");
    const headers = rows[0].split(",");
    const result = [];

    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(",");
        const obj = {};

        for(let j =0; j < headers.length; j++) {
            obj[headers[j]] = values[j];
        }
        result.push(obj);
    }
    return result;
}
console.log(parseCSV(csvData));

