const years = [1999, 1988, 2003, 2004, 2006];

const filterYears = (years) => {
  const result = years.filter((year) => {
    if (2021 - year >= 18) {
      return true;
    }
    return false;
  });
  return result.map((year) => 2021 - year);
};

console.log(filterYears(years));