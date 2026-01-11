function capitalizeWords(str) {
    let words = str.split("");

    for(let i = 0; i< words.length; i++) {
      if( i === 0 || words[i-1] === " ") {
        words[i] = words[i].toUpperCase();
      }
    }
    return words.join("");

}
console.log(capitalizeWords("hello world"));