import { forInStatement } from "@babel/types";
import { readFile } from "./read-file";

const readData = (filename: string): string => {
    const rawData = readFile(filename);

    return rawData;
}

const forwardsRegex = /XMAS/g;
const backwardsRegex = /SAMX/g;

const countOccurrencesInLine = (line: string): number => {
    const forwardsCount = [...line.matchAll(forwardsRegex)].length;
    const backwardsCount = [...line.matchAll(backwardsRegex)].length;

    return forwardsCount + backwardsCount;
}

const countHorizontal = (rawData: string): number => {
    const rows = rawData.split("\n");

    const countsPerRow = rows.map(r => countOccurrencesInLine(r));
    return countsPerRow.reduce((a, b) => a + b);
}

const countVertical = (rawData: string): number => {
    const rows = rawData.split("\n");
    const columns: string[] = [];

    for (var i = 0; i < rows[0].length; i++) {
        columns[i] = rows.map(r => r[i]).join("");
    }

    const countsPerColumn = columns.map(r => countOccurrencesInLine(r));
    return countsPerColumn.reduce((a, b) => a + b);
}

const countDiagonalDown = (rawData: string): number => {
    const rows = rawData.split("\n");
    const diagonals: string[] = [];

    for (var i = 0; i < rows[0].length + rows.length - 1; i++) {
        diagonals[i] = rows.map((r, index) => r[i - rows.length + 1 + index]).join("");
    }

    const countsPerColumn = diagonals.map(r => countOccurrencesInLine(r));
    return countsPerColumn.reduce((a, b) => a + b);
}

const countDiagonalUp = (rawData: string): number => {
    const rows = rawData.split("\n");
    const diagonals: string[] = [];

    for (var i = 0; i < rows[0].length + rows.length - 1; i++) {
        diagonals[i] = rows.map((r, index) => r[i - index]).join("");
    }

    const countsPerColumn = diagonals.map(r => countOccurrencesInLine(r));
    return countsPerColumn.reduce((a, b) => a + b);
}

export const day4part1 = (filename: string): number => {
    const rawData = readData(filename);
    
    return countHorizontal(rawData) + countVertical(rawData) + countDiagonalDown(rawData) + countDiagonalUp(rawData);
}

export const day4part2 = (filename: string): number => {
    const rawData = readData(filename);
    
    return 0;
}

console.log("Day 4 Part 1: " + day4part1("day04"));
console.log("Day 4 Part 2: " + day4part2("day04"));
