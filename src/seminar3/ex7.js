const array = [2, 8, 5];

const reducer = (accumulator, currentValue, currentIndex, array) => {
  if (currentIndex + 1 === array.length) {
    return (accumulator + currentValue) / array.length;
  } else {
    return accumulator + currentValue;
  }
};

console.log(array.reduce(reducer));
