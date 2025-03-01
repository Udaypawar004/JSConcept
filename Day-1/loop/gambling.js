let money = 100; 
const goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betOutcome = Math.random() < 0.5;

    if (betOutcome) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);