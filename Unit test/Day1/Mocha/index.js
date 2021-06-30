// first problem
const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

// second problem
const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};
module.exports = { capitalizeText, createArray };
