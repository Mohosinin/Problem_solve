function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

const input = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(input)); // Output: [1, 2, 3, 4]