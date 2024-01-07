
// 2.a.Print odd numbers in an array
(function () {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Odd numbers in the array:");
  numbers.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})();

//2.b.onvert all the strings to title caps in a string array IIFE
(function () {
  let strings = ["hello world", "this is a test", "programming is fun"];

  const titleCaseStrings = strings.map((s) =>
    s
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );

  console.log("Strings in title caps:", titleCaseStrings);
})();
//2.C. the sum of all numbers in an array
(function () {
    let numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    console.log("Sum of all numbers:", sum);
})();
//2.d returning all the prime numbers in an array
(function () {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getPrimes = arr => {
        const isPrime = num => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        };
        return arr.filter(num => isPrime(num));
    };

    let primeNumbers = getPrimes(numbers);
    console.log("Prime numbers in the array:", primeNumbers);
})();


//2.E. returning all the palindromes in an array
(function () {
    let words = ["level", "hello", "radar", "world", "madam"];

    const getPalindromes = arr => {
        return arr.filter(word => {
            const reversed = word.split('').reverse().join('');
            return word === reversed;
        });
    };

    let palindromes = getPalindromes(words);
    console.log("Palindromes in the array:", palindromes);
})();
//2.F.calculating the median of two sorted arrays of the same size
(function () {
    const findMedianSortedArrays = (nums1, nums2) => {
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

    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];

    let median = findMedianSortedArrays(arr1, arr2);
    console.log("Median of two sorted arrays:", median);
})();

//2.G. removing duplicates from an array
(function () {
    let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

    const removeDuplicates = arr => {
        return arr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
    };

    let uniqueNumbers = removeDuplicates(duplicateNumbers);
    console.log("Array after removing duplicates:", uniqueNumbers);
})();
//2.H.rotating an array by k times
(function () {
    let numbers = [1, 2, 3, 4, 5];
    let k = 3; // Number of times to rotate the array

    const rotateArray = (arr, k) => {
        const len = arr.length;
        k = k % len; // To handle cases where k > length of array

        const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
        return rotatedArray;
    };

    let rotatedNumbers = rotateArray(numbers, k);
    console.log(`Array rotated ${k} times:`, rotatedNumbers);
})();
