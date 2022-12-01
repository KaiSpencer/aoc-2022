import { readFileSync } from "fs";

export function calorieCount(input: string) {
  const inputAsElves = parseInputFileIntoElves(input);
  const sums = elvesToSums(inputAsElves);
  const sortedSums = sums.sort((a, b) => a - b);
  return sortedSums[sortedSums.length - 1];
}

export function calorieCount2(input: string) {
  const inputAsElves = parseInputFileIntoElves(input);
  const sums = elvesToSums(inputAsElves);
  const sortedSums = sums.sort((a, b) => a - b);
  return (
    sortedSums[sortedSums.length - 1] +
    sortedSums[sortedSums.length - 2] +
    sortedSums[sortedSums.length - 3]
  );
}

export function parseInputFileIntoElves(input: string): number[][] {
  const elves = input.split("\n\n");
  return elves.map((e) => e.split("\n").map((x) => Number(x)));
}

export function elvesToSums(elves: number[][]): number[] {
  return elves.map((e) => {
    let total = 0;
    e.forEach((x) => {
      total += x;
    });
    return total;
  });
}

export function solve() {
  const f = readFileSync("./01/input.txt", "utf-8");
  return calorieCount(f);
}

export function solve2() {
  const f = readFileSync("./01/input.txt", "utf-8");
  return calorieCount2(f);
}
