// factorial.js
const num = parseInt(process.argv[2]);

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(`${num}! = ${factorial(num)}`);
