// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s: string): string {}

test("Printer Errors", () => {
  expect(
    printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
  ).toBe("3/56");
  expect(printerError("aaabbbbhaijjjm")).toBe("0/14");
  expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toBe("8/22");
});
