// const getTotalArea = (squareDimensions) =>
//   squareDimensions
//     .map((side) => side * side)
//     .reduce((prev, current) => prev + current, 0);

// const squareDimensions = [3, 5, 12, 3, 5, 3];

// const result = getTotalArea(squareDimensions);
// console.log("result: ", result);

const getSum = (numberArr, nr) =>
  numberArr
    .filter((e) => e % nr === 0)
    .reduce((prev, current) => prev + current, 0);

const numberArr = [2, 5, 7, 8];
const nr = 2;

console.log(getSum(numberArr, nr));
