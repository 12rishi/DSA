//bubble sort takes O(Nsqr)
//to overcome this linear solution can be used
function duplicateValue(array) {
  let uniqueArray = [];
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (uniqueArray[array[i]] === 1) {
        sorted = true;
        return array[i];
      } else {
        uniqueArray[array[i]] = 1;
        sorted = false;
      }
    }
    return false;
  }
}
const checkDuplicacy = duplicateValue([2, 3, 4, 2]);
console.log(checkDuplicacy);
