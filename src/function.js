function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

function diffChar(string1, string2) {
  if (string1.length === string2.length) {
    let count = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        count++;
      }
    }
    return count;
  } else {
    return -1;
  }
}

console.log(diffChar('Maria', 'Marian'));
console.log(diffChar('Maria', 'Madea'));
console.log(diffChar('Maria', 'Maria'));
