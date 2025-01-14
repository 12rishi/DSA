//it is implemented only for ordered array
//if searching is at end its the same as classic array
//double the size of array just take only one step more for searching
//insertion is quite complex that takes o(N+2) and best case is O(N+1)
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let midpoint = Math.floor((high + low) / 2);
    if (arr[midpoint] == target) {
      return midpoint;
    }
    if (arr[midpoint] > target) {
      high = midpoint - 1;
    }
    if (arr[midpoint] < target) {
      low = midpoint + 1;
    }
  }
  return -1;
}
const array = [[1, 2, 3, 4, 5, 6]].flat(1);
console.log(
  `item has been found at index`,
  binarySearch(array, 5),
  `of the array [${array.join(",")}]`
);
