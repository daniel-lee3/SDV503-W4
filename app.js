// Build a Book Organizer - FreeCodeCamp

const books = [
    {
        title: "a",
        authorName: "b",
        releaseYear: 2000
    },
    {
        title: "c",
        authorName: "d",
        releaseYear: 2008
    },
    {
        title: "e",
        authorName: "f",
        releaseYear: 1948
    }
]

function sortByYear(book1, book2) {
    const difference = book1.releaseYear - book2.releaseYear
    return difference / Math.abs(difference) || 0
}

const filteredBooks = books.filter(book => book.releaseYear < 1950)
filteredBooks.sort(sortByYear);

// Implement a Sorted Index Finder

function getIndexToIns(arr, num) {
    arr.sort((acc, cur) => acc-cur)
    let index = arr.findIndex(x => x >= num)
    if (index === -1) {
        index = arr.length
    }
    return index
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([3, 10, 5], 11)); // 3
console.log(getIndexToIns([], 5)); // 0

// if statement practice (in-class)

const username = "user";
const password = "admin";

const nameInput = "user";
const passwordInput = "admin123";

// Check if credentials match
if (username === nameInput && password === passwordInput) {
    console.log("Logged in successfully");
} else {
    console.log("Incorrect credentials");
}

// Commenting practice (Code is by Logan, Prikshit and siddh)

let age = 15; // Declaring a variable named age

// Declare a function that will check the age and give an output
function checkAge(){
    if(age >= 18){ // If age is higher or equal to 18
        console.log("You can buy alcohol and cigarettes.");
    } else if(age >= 16){ // If age is higher or equal to 16
        console.log("You can buy vapes, but not cigarettes or alcohol.");
    } else{ // If age is lower than 16
        console.log("You cannot buy alcohol or cigarettes. :(");
    }
};

console.log("Your age is " + age); // Outputs the persons age
checkAge();  // Runs the checkAge function

// Function practice (in-class)
//function addNumbers(a, b) {
//    return a+b;
//}

const addNumbers = (a, b) => a + b;
const multiplyNumbers = (a, b) => a * b;

console.log(addNumbers(3, 6));

// Arrow function practice
const welcomeMessage = (student) => `Welcome to SDV503, ${student}!`;

// Declaration, Expression, ES6 Arrow function

function operations(a, b) {
    console.log(`The outcome of ${a} + ${b} is ${a+b}`);
    console.log(`The outcome of ${a} - ${b} is ${a-b}`);
    console.log(`The outcome of ${a} * ${b} is ${a*b}`);
    console.log(`The outcome of ${a} / ${b} is ${a/b}`);
}

operations(10, 5)

// Build a Symmetric Difference Function - FreeCodeCamp

function diffArray(arr1, arr2) {
  const result1 = arr1.filter(item => !arr2.includes(item))
  const result2 = arr2.filter(item => !arr1.includes(item))
  return [...result1, ...result2];
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))

// Value Remover Function - FreeCodeCamp

function destroyer(arr, ...numbers) {
  return arr.filter(item => !numbers.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// Matching Object Filter - FreeCodeCamp

function compareObjects(obj1, obj2) {
  let truthy = true;
  for (const key in obj2) {
    if(obj1[key] !== obj2[key]) {
      truthy = false;
    }
  }
  return truthy;
}

function whatIsInAName(arr, source) {
  return arr.filter(item => compareObjects(item, source));
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
// [{"apple": 1, "bat": 2, "cookie": 2}]

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimes(number) {
  let numbers = [];
  for(let i = 1; i <= number; i++) {
    if(isPrime(i)) {
      numbers.push(i)
    }
  }

  return numbers.reduce((a,b) => a+b, 0)
}

console.log(sumPrimes(10)) // 17
console.log(sumPrimes(5)) // 10
console.log(sumPrimes(2)) // 2
console.log(sumPrimes(0)) // 0
console.log(sumPrimes(977)) // 73156

// Add numbers function (playground)
function SumAll(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr)
}

console.log(SumAll(10,4,7,3))

// Create a Deep Flattening Tool - FreeCodeCamp
function steamrollArray(arr) {
  const result = [];
  
  for(const value of arr) {
    if(Array.isArray(value)) {
      result.push(...steamrollArray(value))
    } else {
      result.push(value)
    }
  }

  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))