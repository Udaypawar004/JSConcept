// harmonicNumber.js
const n = parseInt(process.argv[2]);

function harmonicNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum;
}

console.log(`Harmonic number H(${n}) = ${harmonicNumber(n)}`);
