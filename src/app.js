function sum() {
  return Object.values(arguments).reduce((res, summand) => res + summand, 0);
}

module.exports = { sum };
