export type Matrix = number[][];

/**
 * Given a string of numbers, generate a 2-D matrix.
 *
 * ## Details:
 * - Input string will be multi-line and delimited with `\n`; parse each of these as a row.
 * - Individual lines will be whitespace-delimited. It's possible lines will contain more
 * than one space between elements, and not all elements will be numbers.
 * - Your generated matrix should be accessible via [y][x] indexes, where coordinates
 * visually match the original layout of the input string.
 *
 * ## Example:
 * input:
 * ```
 * "
 * 1 2 3 4 5 \n
 * 6 7 8 9 10 \n
 * "
 * ```
 *
 * In the matrix that is output correctly:
 * - Index [0][0] should be `6` – aka this is the 'origin' of the graph
 * - Index [1][2] should be `3` – aka second row, third element
 *
 */
export const generateMatrix = (input: string): Matrix => {
  // Implementation goes here
  return [[1]];
};
