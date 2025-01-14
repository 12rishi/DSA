function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log("j is", j);
      if (arr[j] < arr[lowIndex]) {
        lowIndex = j;
      }
    }
    if (lowIndex !== i) {
      let temp = arr[lowIndex];
      console.log("temp is", temp);
      arr[lowIndex] = arr[i];

      arr[i] = temp;
      console.log("arr[i]" + "is" + arr[i]);
    }
  }
  return arr;
}
console.log(selectionSort([4, 1, 2, 8]));
