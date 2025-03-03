function getRandomThreeDigitNumber() {
    let arr = new Array();
    for(let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }
    return arr;
}

function getLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity, smallest = Infinity, secondSmallest = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
        if(arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if(arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    return [secondLargest, secondSmallest];
}

let arr = getRandomThreeDigitNumber();
console.log(`Array: ${arr}`);
let [secondLargest, secondSmallest] = getLargestSmallest(arr);
console.log(`Second Largest: ${secondLargest}`);
console.log(`Second Smallest: ${secondSmallest}`);