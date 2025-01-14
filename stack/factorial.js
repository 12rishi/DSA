function Stack() {
  this.dataStore = [];
  this.push = push;
  this.pop = pop;
  this.lengths = lengths;
  this.top = 0;
}
function push(elem) {
  console.log(elem);
  for (let i = 0; i < elem.length; i++) {
    this.dataStore[this.top++] = elem[i];
  }
  return this.dataStore;
}
function pop() {
  return this.dataStore[--this.top];
}
function lengths() {
  return this.top;
}
function factorial(obj) {
  let factorial = 1;
  while (obj.top > 0) {
    const popElem = obj.pop();
    factorial *= popElem;
  }
  return factorial;
}
const st = new Stack();
st.push([5, 4, 3, 2, 9]);
const factorialResult = factorial(st);

console.log(factorialResult);
