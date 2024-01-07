//3.a.Print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = arr => {
    console.log("Odd numbers in the array:");
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(numbers);



//3.b.Convert all the strings to title caps in a string array
let strings = ["hello world", "this is a test", "programming is fun"];

const convertToTitleCase = (arr) => {
  return arr.map((string) =>
    string.replace(/\b\w/g, (char) => char.toUpperCase())
  );
};

let titleCaseStrings = convertToTitleCase(strings);
console.log("Strings in title caps:", titleCaseStrings);
//3.c.Sum of all numbers in an array
let num1 = [1, 2, 3, 4, 5];

const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

let sum = sumArray(num1);
console.log("Sum of all numbers:", sum);
//3.d.Return all the prime numbers in an array
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPrimes = (arr) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
};

let primeNumbers = getPrimes(number);
console.log("Prime numbers in the array:", primeNumbers);

//3.e.Return all the palindromes in an array
let words = ["level", "hello", "radar", "world", "madam"];

const getPalindromes = (arr) => {
  return arr.filter((word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  });
};

let palindromes = getPalindromes(words);
console.log("Palindromes in the array:", palindromes);

