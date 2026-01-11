function vowelCount(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let i = 0; i< str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    } 
    return count;
}
const input = "Hello, World!";
const output = vowelCount(input);
console.log(output);