function Stack() {
  this.push = push;
  this.pop = pop;
  this.clear = clear;
  this.length = length;
  this.dataStore = [];
  this.top = 0;
}

function push(elem) {
  return (this.dataStore[this.top++] = elem);
}

function pop() {
  if (this.top > 0) {
    return this.dataStore[--this.top];
  } else {
    return undefined;
  }
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
  this.dataStore = [];
}
function checkPalindrome(words) {
  let s = new Stack();
  let reverseWord = "";
  for (let i = 0; i < words.length; i++) {
    s.push(words[i]);
    console.log("pushed word is ", words[i]);
  }

  while (s.top > 0) {
    reverseWord += s.pop();
  }
  if (words === reverseWord) {
    return true;
  } else {
    return false;
  }
}

const word1 = checkPalindrome("madam");
if (word1) {
  console.log("madam is palindrome");
} else {
  console.log("madam is not palindrome");
}
