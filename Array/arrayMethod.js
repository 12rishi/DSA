//of method is used to create instance of array
// const array1 = Array.of("a", "b", "c", 1);
// //flat is a method that take number as a parameter the number decide the number for removing array boxes of that array
// const array2 = [...array1, [[2, 3]], { name: "rishi" }];
// const array3 = array2.flat(2);
// const array4 = array3.map((x) => {
//   return x + 3;
// });
// console.log(array4);
// const iterator = array4.values();
// for (let i = 0; i < array4.length; i++) {
//   console.log(iterator.next().value);
// }
const originalArray = [12, 10, 8, 55, 99];

// Splitting the array into two halves
const originalArrayLength = originalArray.length;
const midArrayLength = Math.round(originalArrayLength / 2);

let array1 = [];
let array2 = [];
for (let i = 0; i < midArrayLength; i++) {
  array1[i] = originalArray[i];
}
for (let j = midArrayLength; j < originalArrayLength; j++) {
  array2[j - midArrayLength] = originalArray[j];
}

console.log("Array 1:", array1);
console.log("Array 2:", array2);

function checkNumberInArray(target, array) {
  return new Promise((resolve, reject) => {
    const index = array.findIndex((x) => x === target);
    if (index !== -1) {
      resolve(`Found ${target} at index ${index} in [${array.join(", ")}]`);
    } else {
      reject(`Number ${target} not found in [${array.join(", ")}]`);
    }
  });
}

const targetNumber = 55;

Promise.any([
  checkNumberInArray(targetNumber, array1),
  checkNumberInArray(targetNumber, array2),
])
  .then((result) => {
    console.log(result); // Logs the first successful result
  })
  .catch((error) => {
    console.log("None of the arrays contain the target number.");
  });
