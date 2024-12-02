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
    return isSafelyIncreasing(report) || isSafelyDecreasing(report);
}

const isSafeWithDampener = (report: number[]): boolean => {
    if (isSafe(report)) {
        return true;
    }

    for (var j = 0; j < report.length; j++){
        const splice = report.slice();
        splice.splice(j, 1);
        
        if (isSafe(splice)){
            return true;
        }
    }

    return false;
}

export const day2part1 = (filename: string): number => {
    const reports = readData(filename);
    const safetyResults = reports.map(r => isSafe(r));
    const total = safetyResults.filter(r => r).length;
    
    return total;
}

export const day2part2 = (filename: string): number => {
    const reports = readData(filename);
    const safetyResults = reports.map(r => isSafeWithDampener(r));
    const total = safetyResults.filter(r => r).length;
    
    return total;
}

console.log("Day 2 Part 1: " + day2part1("day02"));
console.log("Day 2 Part 2: " + day2part2("day02"));
