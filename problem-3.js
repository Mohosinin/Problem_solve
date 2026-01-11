function checkPalindrome(str) {
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if(str === reversed) {
        return true;
    } else {
        return false;
    }
}
const input = "madam";
const output = checkPalindrome(input);
console.log(output);
const input2 = "Hello";
const output2 = checkPalindrome(input2);
console.log(output2);