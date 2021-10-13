console.log('Hello world!');

let sayHello = (name) => `Hello, ${name}!`;

let array = ['Ana', 'are', 'mere'];
let concatString = (array) => array.join(' ');

console.log(sayHello(process.argv[2]));
console.log(concatString(array));
