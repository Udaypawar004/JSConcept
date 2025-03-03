function findTriplets(arr) {
    let ans = [];
    arr.sort();
    let found = false;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                ans.push([arr[i], arr[left], arr[right]]);
                found = true;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return found ? ans : "No triplets found";
}

const arr = [-1, 0, 1, 2, -1, -4];
console.log(findTriplets(arr));