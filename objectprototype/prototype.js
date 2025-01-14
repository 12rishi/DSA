Array.prototype.sum = function () {
  return this.map((x) => x + 2);
};
const array1 = [1, 2, 3, 4];
console.log(array1.sum());
