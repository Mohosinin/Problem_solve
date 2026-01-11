function reverseString(str){
    let reversed = '';
    for(let i = str.length - 1; i >=0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}
const input = "Hello, World!";
const output = reverseString(input);
console.log(output);