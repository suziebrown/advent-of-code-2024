import { readFile } from "./read-file";

const readData = (filename: string): string => {
    const rawData = readFile(filename);

    return rawData;
}

export const day4part1 = (filename: string): number => {
    const rawData = readData(filename);
    
    return 0;
}

export const day4part2 = (filename: string): number => {
    const rawData = readData(filename);
    
    return 0;
}

console.log("Day 4 Part 1: " + day4part1("day03"));
console.log("Day 4 Part 2: " + day4part2("day03"));
