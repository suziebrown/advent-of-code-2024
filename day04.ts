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

const isBlockACrossMas = (blockRows: string[]): boolean => {
    const centre = blockRows[1][1];
    const corners = [blockRows[0][0], blockRows[0][2], blockRows[2][2], blockRows[2][0]].join("");

    return centre === 'A' && (corners === 'MMSS' || corners === 'MSSM' || corners === 'SSMM' || corners === 'SMMS');
}

const checkBlocks = (rawData: string): boolean[] => {
    let blockResults: boolean[] = [];
    const rows = rawData.split("\n");

    for (var col = 0; col < rows[0].length - 2; col++) {
        for (var row = 0; row < rows.length - 2; row++) {
            const blockRows = [rows[row].slice(col, col + 3), rows[row + 1].slice(col, col + 3), rows[row + 2].slice(col, col + 3)];
            
            blockResults.push(isBlockACrossMas(blockRows));
        }
    }

    return blockResults;
}

export const day4part1 = (filename: string): number => {
    const rawData = readData(filename);
    
    return countHorizontal(rawData) + countVertical(rawData) + countDiagonalDown(rawData) + countDiagonalUp(rawData);
}

export const day4part2 = (filename: string): number => {
    const rawData = readData(filename);
    const blockResults = checkBlocks(rawData);
    
    return blockResults.filter(r => r === true).length;
}

console.log("Day 4 Part 1: " + day4part1("day04"));
console.log("Day 4 Part 2: " + day4part2("day04"));
