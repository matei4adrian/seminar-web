let occurences = (text, character) => text.split(character).length - 1;

let sample = '1,2,3,4,5,6';
const makeList = (s) => s.split(',').map((e) => parseInt(e));

console.log(occurences('sample text', 'e'));
console.log(makeList(sample));
