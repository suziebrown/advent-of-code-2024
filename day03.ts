import { readFile } from "./read-file";

const readData = (filename: string): string => {
    const rawData = readFile(filename);

    return rawData;
}

const instructionRegex = /mul\(\d{1,3},\d{1,3}\)/g;

const findInstructions = (rawData: string): string[] => {
    const matches = rawData.matchAll(instructionRegex);
    return [...matches].map(m => String(m));
}

const executeInstruction = (instruction: string): number => {
    const numbers = instruction.replace("mul(", ""). replace(")", "").split(",");
    const leftNumber = Number(numbers[0]);
    const rightNumber = Number(numbers[1]);

    return leftNumber * rightNumber;
}


export const day3part1 = (filename: string): number => {
    const rawData = readData(filename);
    const instructions = findInstructions(rawData);
    const results = instructions.map(i => executeInstruction(i));
    
    return results.reduce((a, b) => a + b);
}

export const day3part2 = (filename: string): number => {
    const reports = readData(filename);
    
    return 0;
}

console.log("Day 3 Part 1: " + day3part1("day03"));
// console.log("Day 3 Part 2: " + day3part2("day03"));
