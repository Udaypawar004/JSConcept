const map = new Map();

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function storeInMap() {
    let max = 0, min = 0;
    while (true) {
        const num = rollDie();
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
        if (map.get(num) === 10) {
            break;
        }
    }
    return map;
}

function findMaxMin() {
    let max = 0, min = 0, maxNum, minNum;
    for (let [key, value] of map) {
        if (value > max) {
            max = value;
            maxNum = key;
        }
        if (value < min || min === 0) {
            min = value;
            minNum = key;
        }
    }
    return { maxNum, minNum };
}

storeInMap();
console.log(map);
console.log(findMaxMin());