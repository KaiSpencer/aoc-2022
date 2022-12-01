import { expect, describe, test } from "vitest";
import {
  calorieCount,
  elvesToSums,
  parseInputFileIntoElves,
  solve,
  solve2,
} from "./01";

describe("01", () => {
  test("example", () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
    const output = calorieCount(input);
    expect(output).toBe(24000);
  });

  test("parseInputFileIntoElves", () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
    const output = parseInputFileIntoElves(input);
    expect(output).toStrictEqual([
      [1000, 2000, 3000],
      [4000],
      [5000, 6000],
      [7000, 8000, 9000],
      [10000],
    ]);
  });

  test("elvesToSum", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const output = elvesToSums(input);
    expect(output).toStrictEqual([3, 7]);
  });
});

test("solve", () => {
  expect(solve()).toBe(0);
});

test("solve2", () => {
  expect(solve2()).toBe(0);
});
