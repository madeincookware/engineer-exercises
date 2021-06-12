import { generateMatrix } from "./exercise";

describe("generateMatrix", () => {
  it("correctly generates a 1-line matrix", () => {
    const input = "1 2 3";
    const expected = [[1, 2, 3]];

    const output = generateMatrix(input);
    expect(output).toEqual(expected);

    expect(output[0][1]).toEqual(2);
  });

  it("correctly generates a 2-line matrix", () => {
    const input = `1 2 3 \n
                   4 5 6`;

    const output = generateMatrix(input);
    expect(output[0][0]).toEqual(4);
    expect(output[1][1]).toEqual(2);
  });

  it("ignores inconsistent whitespace", () => {
    const input = `
    
      1 2 3      4
        5 6       7 8
    `;

    const output = generateMatrix(input);
    expect(output[0][0]).toEqual(5);
    expect(output[1][3]).toEqual(4);
  });

  it("ignores non-numeric elements", () => {
    const input = `
      foo bar baz
      1 2 3
      5 wow 6 hey 7 qux
    `;

    const output = generateMatrix(input);
    expect(output[0][0]).toEqual(5);
    expect(output[1][2]).toEqual(3);
  });
});
