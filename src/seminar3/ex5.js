// const dictionary = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "lazy",
//   "dog",
// ];

// const sampleText = `
//     best
//     read
//     on
//     windy
//     nights
// `;

// const checkAcrostih = (text, dictionary) => {
//   const candidate = text
//     .split("\n")
//     .filter((e) => e)
//     .map((e) => e.trim())
//     .map((e) => e[0])
//     .join("");
//   return dictionary.indexOf(candidate) !== -1;
// };

// console.log(checkAcrostih(sampleText, dictionary));

const sampleText = "javascript este minunat";

const dictionary = ["este"];

const censure = (text, dictionary) => {
  for (const element of dictionary) {
    text = text
      .split(" ")
      .map((e) => {
        if (e === element) {
          let censured = e[0];
          for (let i = 1; i < e.length - 1; i++) {
            censured += "*";
          }
          censured += e[e.length - 1];
          return censured;
        } else {
          return e;
        }
      })
      .join(" ");
  }
  return text;
};

console.log(censure(sampleText, dictionary));
