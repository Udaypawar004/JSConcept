let map = new Map();

function generateBirthMonth() {
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        if (map.has(month)) {
            map.set(month, map.get(month) + 1);
        } else {
            map.set(month, 1);
        }
    }
    return map;
}

generateBirthMonth();
console.log(map);