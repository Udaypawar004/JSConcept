function getRandomThreeDigitNumber() {
    let arr = new Array();
    for(let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }
    return arr;
}

const arr = getRandomThreeDigitNumber();
console.log(`Before sorting: ${arr}`);
arr.sort();
console.log(`After sorting: ${arr}`);
console.log(`Second Largest: ${arr[arr.length - 2]}`);
console.log(`Second Smallest: ${arr[1]}`);