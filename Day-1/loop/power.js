const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid positive integer.");
} else {
    let power = 1;
    while (power <= 256 && power <= Math.pow(2, n)) {
        console.log(power);
        power *= 2;
    }
}
