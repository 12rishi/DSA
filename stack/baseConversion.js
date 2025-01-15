function Stack() {
  this.dataStore = [];
  this.push = push;
  this.pop = pop;
  this.lengths = lengths;
  this.top = 0;
}
function push(rem) {
  this.dataStore[this.top++] = rem;
}
function lengths() {
  return this.top;
}
function pop() {
  return this.dataStore[--this.top];
}
function baseConversion(elem, obj, base) {
  let n = elem;
  while (n > 0) {
    console.log("n is", n);
    let r = n % base;

    obj.push(r);
    n = Math.floor(n / base);
  }
  let popelem = "";
  while (obj.lengths() >= 0) {
    popelem += obj.pop();
  }
  return popelem;
}
const st = new Stack();
console.log(baseConversion(20, st, 2));
