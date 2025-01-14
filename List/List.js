function length() {
  return this.listSize;
}
function insertAtPos(element, pos) {
  if (pos < 0 || pos > this.listSize) {
    console.log("Invalid position");
    return false;
  }
  for (let i = this.listSize; i > pos; i--) {
    this.dataStore[i] = this.dataStore[i - 1];
  }
  this.dataStore[pos] = element;
  this.listSize++;
}
function append(element) {
  this.dataStore[this.listSize++] = element;
}
function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (element == this.dataStore[i]) {
      return i;
    }
  }
  return -1;
}
function remove(element) {
  const foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
}
function toString() {
  return this.dataStore;
}
function List() {
  this.listSize = 0;
  this.find = find;

  this.remove = remove;
  this.append = append;
  this.dataStore = [];
  this.toString = toString;
  this.insertAtPos = insertAtPos;
}

const names = new List();

names.append("hi");
names.append("hello");
names.append("hero");
names.insertAtPos("ok", 1);
console.log(names.toString());
