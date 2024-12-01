import { readFile } from "./read-file"

const readData = (filename: string): { leftNumbers: number[], rightNumbers: number[] } => {
    const rawData = readFile(filename);
    const lines = rawData.split('\n');

    const leftNumbers = lines.map(l => Number(l.split('  ')[0].trim()));
    const rightNumbers = lines.map(l => Number(l.split('  ')[1].trim()));

    return { leftNumbers, rightNumbers };
}

const calculateDifferences = (leftNumbers: number[], rightNumbers: number[]): number[] => {
    leftNumbers.sort();
    rightNumbers.sort();

    let differences = [];

    for (var i = 0; i < leftNumbers.length; i++) {
        differences[i] = Math.abs(rightNumbers[i] - leftNumbers[i]);
    }

    return differences;
}

const calculateSimilarities = (leftNumbers: number[], rightNumbers: number[]): number[] => {
    const similarities = leftNumbers.map(l => l * rightNumbers.filter(r => r === l).length);
    
    return similarities;
}

export const day1part1 = (filename: string): number => {
    const data = readData(filename);
    const differences = calculateDifferences(data.leftNumbers, data.rightNumbers);

    const sum = differences.reduce((a,b) => a + b);
    return sum;
}

export const day1part2 = (filename: string): number => {
    const data = readData(filename);
    const similarities = calculateSimilarities(data.leftNumbers, data.rightNumbers);

    const sum = similarities.reduce((a,b) => a + b);
    return sum;
}

console.log("Part 1: " + day1part1("day01"));
console.log("Part 2: " + day1part2("day01"));
