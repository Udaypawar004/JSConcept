function findDuplicate() {
    const arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 11 === 0) {
            arr.push(i);
        }
    }
    return arr; 
}

const arr = findDuplicate();
console.log(`Duplicates: ${arr}`);