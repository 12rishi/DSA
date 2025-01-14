//finding greatest single number
function greatestSingleNumber(array) {
  let greatestSingleNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > greatestSingleNumber) {
      greatestSingleNumber = array[i];
    }
  }
  return greatestSingleNumber;
}
const greatestSingleNumberArray = greatestSingleNumber([4, 1, 2, 88, 9, 23]);
console.log(greatestSingleNumberArray);
