// isPrime.js
const num = parseInt(process.argv[2]);

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(`${num} is ${isPrime(num) ? "a prime number" : "not a prime number"}`);
