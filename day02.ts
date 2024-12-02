import { report } from "node:process";
import { readFile } from "./read-file";

const readData = (filename: string): number[][] => {
    const rawData = readFile(filename);
    const lines = rawData.split('\n');
    const reports = lines.map(l => l.split(" ").map(n => Number(n.trim())));

    return reports;
}

const isSafelyIncreasing = (report: number[]): boolean => {
    for (var i = 0; i < report.length - 1; i++){
        if (report[i + 1] <= report[i] || report[i + 1] > report[i] + 3) {
            return false;
        }
    }

    return true;
}

const isSafelyDecreasing = (report: number[]): boolean => {
    for (var i = 0; i < report.length - 1; i++){
        if (report[i + 1] >= report[i] || report[i + 1] < report[i] - 3) {
            return false;
        }
    }

    return true;
}

const isSafe = (report: number[]): boolean => {
    if (report[0] < report[1]){
        return isSafelyIncreasing(report);
    }

    if (report[0] > report[1]){
        return isSafelyDecreasing(report);
    }

    return false;
}

export const day2part1 = (filename: string): number => {
    const reports = readData(filename);
    const safetyResults = reports.map(r => isSafe(r));
    const total = safetyResults.filter(r => r).length;
    console.log({safeReports: safetyResults.indexOf(true)})
    
    return total;
}

export const day2part2 = (filename: string): number => {
    const data = readData(filename);
    
    return 0;
}

console.log("Day 2 Part 1: " + day2part1("day02"));
// console.log("Day 2 Part 2: " + day2part2("day02"));
