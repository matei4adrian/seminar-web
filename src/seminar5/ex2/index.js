import crypto from "crypto-js";
import fs from "fs";
import rimraf from "rimraf";

let word1 = "word1";
let word2 = "word2";

let crypt = crypto.AES.encrypt(
  JSON.stringify(word1),
  "secret key 123"
).toString();

console.log(crypt);

let bytes = crypto.AES.decrypt(crypt, "secret key 123");
let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

fs.mkdirSync("someDir");
fs.writeFile("./someDir/someFile.txt", "", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
rimraf("someDir", function (err) {
  if (err) throw err;
  console.log("Dir is deleted successfully.");
});

console.log(decrypt);
