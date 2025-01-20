function Queue() {
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.rare = rare;
  this.toString = toString;
  this.dataStore = [];
  this.empty = empty;
}
function enqueue(element) {
  if (this.dataStore.length > 10) {
    return "cannot be added,overflow condition occured";
  } else {
    this.dataStore.push(element);
    return "elemnt has been pushed";
  }
}
function dequeue() {
  if (this.empty()) {
    console.log("underflow condition");
  } else {
    this.dataStore.shift();
  }
}
function front() {
  return this.dataStore[0];
}
function rare() {
  return this.dataStore[this.dataStore.length - 1];
}
function empty() {
  if (this.dataStore.length <= 0) {
    return true;
  } else {
    return false;
  }
}
function toString() {
  let str = "";
  for (let i = 0; i < this.dataStore.length; i++) {
    str += this.dataStore[i] + "\n";
  }
  return str;
}
const q = new Queue();
q.enqueue("hello");
q.enqueue("hi");
q.enqueue("wassup");
q.dequeue();
console.log(q.empty());
console.log(q.front());
console.log(q.rare());
console.log("string are", q.toString());
