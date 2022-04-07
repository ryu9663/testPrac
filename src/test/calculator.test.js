import fn, { makeUser } from "./calculator";

// it("add correctly", () => {
//   expect(add(3, 5)).toEqual(8);
// });

test("truthy한지 아닌지 검사하자", () => {
  expect("hi").toBeTruthy();
});

test("ID는 10자 이내여야한다.", () => {
  const ID = "hi";
  expect(ID.length).toBeLessThan(10);
});

test("0.1 더하기 0.2 는 0.3이다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("helloWorld에 a가 있는가?", () => {
  const str = "HelloWorld";
  expect(str).toMatch(/h/i);
});

test("유저리스트에 Mike가 있는가", () => {
  const user = "Mike";
  const users = ["Mike", "June", "Seung"];
  expect(users).toContain(user);
});

test("언제 에러가 날까요", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
