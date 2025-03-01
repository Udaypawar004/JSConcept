let dog = [], min = 1000, max = 0;

for(let i = 0; i < 5; i++) {
    dog[i] = Math.floor(Math.random() * 900) + 100;
    if (dog[i] < min) {
        min = dog[i];
    } else if (dog[i] > max) {
        max = dog[i];
    }
}

console.log(dog);
console.log(min, " ", max);
