// Add two number //

function Add(a,b){
    let c = a + b;
    return c;
}
console.log(Add(10,15));


// Maximum of two number //

function findMax(a, b) {
    return a > b ? a : b;
}
console.log(findMax(55, 5)); 

// Even or odd //

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOdd(15); 
checkEvenOdd(12); 

// Fahrenheit to celcius //

function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(convertToFahrenheit(0));  
console.log(convertToFahrenheit(25)); 
console.log(convertToFahrenheit(100)); 


// Factorial //

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); 

// Reverse String //

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// Count Vowels in a string //

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("javascript")); 

// Check if a String is a Palindrome //

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true


// Generate a Random Number Between a Range //

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(1, 10)); 

// Capitalize the First Letter of Each Word //

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); 

// Find the Sum of All Elements in an Array //

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 


// Largest number in array //

function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([10, 20, 30, 5]));

// Remove Duplicates from an Array //

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Generate Fibonacci Sequence up to n Numbers //

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(fibonacci(5)); 

// Sort an Array in Ascending Order //

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([3, 1, 4, 1, 5, 9]));











