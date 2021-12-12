const sampleArray = [1, 2, 3];

const map = (array, transformation) => {
  const result = [];
  for (const element of array) {
    result.push(transformation(element));
  }
  return result;
};

console.log(map(sampleArray, (x) => x * 2));

const reduce = (array, reducer) => {
  let result = 0;
  for (const element of array) {
    result = reducer(result, element);
  }
  return result;
};

console.log(reduce(sampleArray, (prev, curr) => prev + curr));
