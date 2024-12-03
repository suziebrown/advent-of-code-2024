import { readFile } from "./read-file";

const readData = (filename: string): string => {
    const rawData = readFile(filename);

    return rawData;
}

const multiplicationInstructionRegex = /mul\(\d{1,3},\d{1,3}\)/g;

const findMultiplicationInstructions = (rawData: string): string[] => {
    const matches = rawData.matchAll(multiplicationInstructionRegex);
    return [...matches].map(m => String(m));
}

const executeMultiplicationInstruction = (instruction: string): number => {
    const numbers = instruction.replace("mul(", ""). replace(")", "").split(",");
    const leftNumber = Number(numbers[0]);
    const rightNumber = Number(numbers[1]);

    return leftNumber * rightNumber;
}

const multiplicationOrConditionalRegex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

const findMultiplicationAndConditionalInstructions = (rawData: string): string[] => {
    const matches = rawData.matchAll(multiplicationOrConditionalRegex);
    return [...matches].map(m => String(m));
}

const conditionallyExecuteMultiplications = (allInstructions: string[]): number[] => {
    const results: number[] = [];
    let multiplicationEnabled = true;

    for (var i = 0; i < allInstructions.length; i++) {
        const instruction = allInstructions[i];
        if (instruction === "do()") {
            multiplicationEnabled = true;
        } else if (instruction === "don't()") {
            multiplicationEnabled = false;
        } else if (multiplicationEnabled) {
            results.push(executeMultiplicationInstruction(instruction));
        }
    }

    return results;
}

export const day3part1 = (filename: string): number => {
    const rawData = readData(filename);
    const instructions = findMultiplicationInstructions(rawData);
    const results = instructions.map(i => executeMultiplicationInstruction(i));
    
    return results.reduce((a, b) => a + b);
}

export const day3part2 = (filename: string): number => {
    const rawData = readData(filename);
    const allInstructions = findMultiplicationAndConditionalInstructions(rawData);
    const results = conditionallyExecuteMultiplications(allInstructions);

    return results.reduce((a, b) => a + b);
}

console.log("Day 3 Part 1: " + day3part1("day03"));
console.log("Day 3 Part 2: " + day3part2("day03"));
