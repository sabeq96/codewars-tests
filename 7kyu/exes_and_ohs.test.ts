// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function sameXO(s: string): boolean {}

it("test", () => {
  expect(sameXO("xo")).toBe(true);
  expect(sameXO("xxOo")).toBe(true);
  expect(sameXO("xxxm")).toBe(false);
  expect(sameXO("Oo")).toBe(false);
  expect(sameXO("ooom")).toBe(false);
});
