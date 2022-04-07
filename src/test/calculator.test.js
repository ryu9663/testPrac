import fn from "./calculator";

test("0+1은 1이야", () => {
  expect(fn.add(0, 1)).toBe(1);
});

test(`3초 후에 받아온 이름은 Mike? `, (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});
