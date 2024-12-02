import { readFile } from "./read-file";

type Data = {
    leftNumbers: number[];
    rightNumbers: number[];
}

const readData = (filename: string): Data => {
    const rawData = readFile(filename);
    const lines = rawData.split('\n');

    const leftNumbers = lines.map(l => Number(l.split('  ')[0].trim()));
    const rightNumbers = lines.map(l => Number(l.split('  ')[1].trim()));

    return { leftNumbers, rightNumbers };
}

const calculateDifferences = ({ leftNumbers, rightNumbers }: Data): number[] => {
    leftNumbers.sort();
    rightNumbers.sort();

    let differences = [];

    for (var i = 0; i < leftNumbers.length; i++) {
        differences[i] = Math.abs(rightNumbers[i] - leftNumbers[i]);
    }

    return differences;
}

const calculateSimilarities = ({ leftNumbers, rightNumbers }: Data): number[] => {
    const similarities = leftNumbers.map(l => l * rightNumbers.filter(r => r === l).length);
    
    return similarities;
}

export const day1part1 = (filename: string): number => {
    const data = readData(filename);
    const differences = calculateDifferences(data);

    const sum = differences.reduce((a,b) => a + b);
    return sum;
}

export const day1part2 = (filename: string): number => {
    const data = readData(filename);
    const similarities = calculateSimilarities(data);

    const sum = similarities.reduce((a,b) => a + b);
    return sum;
}

console.log("Day 1 Part 1: " + day1part1("day01"));
console.log("Day 1 Part 2: " + day1part2("day01"));
