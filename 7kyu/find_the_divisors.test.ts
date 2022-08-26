// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer): number[] | string {}

test("Find the divisors!", () => {
  expect(divisors(15)).toBe([3, 5]);
  expect(divisors(12)).toBe([2, 3, 4, 6]);
  expect(divisors(13)).toBe("13 is prime");
});
