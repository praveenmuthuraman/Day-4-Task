//1 . The below programs in anonymous function

//1.a)Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("odd Number are");

const odd = function () {
  for (i = 0; i < arr.length; i++) // console.log("odd Number are")

  {
    if (arr[i] % 2 !== 0) console.log(arr[i]);
  }
};
return odd();

//1.b Convert all the strings to title caps in a string array

// Given strings array

let strings = ["hello every one", "this is a praveen", "web developer"];

const titleCasedStrings = function (strings) {
    return strings.map(s => s.charAt().toUpperCase() + s.slice(1));
};

console.log(titleCasedStrings(strings));


//1.C .Sum of all numbers in an array

let numbers = [10,20,30,30,10];

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sum(numbers));

//1.D.Return all the prime numbers in an array
 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


const getPrimes = function (arr) {
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

console.log(getPrimes(numbers));

console.log(sum(numbers));
    

//1.E.Return all the palindromes in an array
let words = ["level", "hello", "radar", "world", "madam"];

const getPalindromes = function (arr) {
  return arr.filter((word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  });
};
console.log(getPalindromes(words));


//1.F.Return median of two sorted arrays of the same size.
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = mergedArray.length;

  if (length % 2 === 0) {
    const mid = length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    const mid = Math.floor(length / 2);
    return mergedArray[mid];
  }
};

console.log(findMedianSortedArrays(arr1, arr2));
//1.G.Remove duplicates from an array
let numbers = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = function (arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

console.log(removeDuplicates(numbers));

//1.H .Rotate an array by k times

let numbers = [1, 2, 3, 4, 5];
let k = 3; // Number of times to rotate the array

const rotateArray = function (arr, k) {
  const len = arr.length;
  k = k % len; // To handle cases where k > length of array

  const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
};

console.log(rotateArray(numbers, k));