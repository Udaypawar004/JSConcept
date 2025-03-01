// Function to check if a number is a palindrome
function isPalindrome(num) {
    let strNum = num.toString();
    return strNum === strNum.split("").reverse().join("");
}

// Example
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false