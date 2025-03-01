let money = 100;
let wins = 0, bets = 0;
const goal = 200;

while (money > 0 && money < goal) {
    bets++;
    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Number of bets made: ${bets}`);
console.log(`Number of times won: ${wins}`);
console.log(money === 0 ? "The gambler went broke!" : "The gambler reached the goal!");
