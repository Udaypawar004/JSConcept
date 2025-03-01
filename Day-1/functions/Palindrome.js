// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Function to check if number is prime and its palindrome is also prime
function checkPrimePalindrome(num) {
    if (!isPrime(num)) {
        return `${num} is not a prime number.`;
    }
    
    let palindrome = getPalindrome(num);
    if (isPrime(palindrome)) {
        return `${num} is prime, and its palindrome ${palindrome} is also prime.`;
    } else {
        return `${num} is prime, but its palindrome ${palindrome} is not prime.`;
    }
}

console.log(checkPrimePalindrome(13)); // 13 is prime, and its palindrome 31 is also prime.
console.log(checkPrimePalindrome(17)); // 17 is prime, but its palindrome 71 is also prime.
console.log(checkPrimePalindrome(20)); // 20 is not a prime number.
