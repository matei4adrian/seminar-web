const fs = require("fs");

function readFromTextFile(fileName) {
  const message = fs.readFileSync(fileName, "utf-8");
  return message;
}

function writeToTextFile(fileName, message) {
  fs.writeFile(fileName, message, function (err) {
    if (err) return console.log(err);
    console.log(`${fileName} was compressed successfully`);
  });
}

function encodeMessage(fileName) {
  const message = readFromTextFile(fileName);
  let encodedString = "";
  let i = 0;
  while (i <= message.length - 1) {
    let count = 1;
    let char = message[i];
    let j = i;
    while (j < message.length - 1) {
      if (message[j] === message[j + 1]) {
        count = count + 1;
        j = j + 1;
      } else {
        break;
      }
    }
    if (count === 1) {
      encodedString += char;
    } else {
      encodedString += count.toString() + char;
    }
    i = j + 1;
  }
  writeToTextFile(fileName, encodedString);
  return encodedString;
}

console.log(encodeMessage("Input.txt"));
