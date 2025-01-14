var Stack = /** @class */ (function () {
  function Stack() {
    this.top = 0;
    this.size = 12;
    this.datastore = [];
  }
  Stack.prototype.push = function (element) {
    console.log((this.datastore[this.top++] = element));
  };
  Stack.prototype.pop = function () {
    console.log(this.datastore[--this.top]);
  };
  Stack.prototype.peek = function () {
    return this.datastore[this.top - 1];
  };
  Stack.prototype.clear = function () {
    this.top = 0;
  };
  Stack.prototype.length = function () {
    return this.top;
  };
  return Stack;
})();
var s = new Stack();
s.push(21);
console.log(s.peek());
