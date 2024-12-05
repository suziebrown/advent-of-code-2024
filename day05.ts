import { readFile } from "./read-file";

const readData = (filename: string): string => {
    const rawData = readFile(filename);

    return rawData;
}

export const day5part1 = (filename: string): number => {
    const rawData = readData(filename);
    
    return 0;
}

export const day5part2 = (filename: string): number => {
    const rawData = readData(filename);

    return 0;
}

// console.log("Day 5 Part 1: " + day5part1("day05"));
// console.log("Day 5 Part 2: " + day5part2("day05"));
