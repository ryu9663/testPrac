// calculator.js

const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  id: "hello",
  throwErr: () => {
    throw new Error("xx");
  },
};

module.exports = fn;
