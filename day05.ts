import { readFile } from "./read-file";

type Data = {
    rules: Map<number, number[]>;
    updates: number[][];
}

const readData = (filename: string): Data => {
    const rawData = readFile(filename);
    const [rawRules, rawUpdates] = rawData.split("\n\n");

    const updates = rawUpdates.split("\n").map(l => l.split(",").map(n => Number(n)));
    const rules = rawRules.split("\n").map(l => l.split("|").map(n => Number(n)));

    const rulesDictionary: Map<number, number[]> = new Map();
    for (var i = 0; i < rules.length; i++) {
        const rule = rules[i];

        let values = rulesDictionary.get(rule[0]);
        if (values) {
            values.push(rule[1]);
        }
        else {
            values = [rule[1]];
        }

        rulesDictionary.set(rule[0], values);
    }

    return { rules: rulesDictionary, updates };
}

const isInValidOrder = (update: number[], rules: Map<number, number[]>): boolean => {
    for (var i = 0; i < update.length; i ++){
        const currentPage = update[i];
        const pastPages = update.slice(0, i);
        const relevantRules = rules.get(currentPage);
        
        if (relevantRules) {
            for (var j = 0; j < relevantRules.length; j++){
                if (pastPages.includes(relevantRules[j])) return false;
            }
        }
    }

    return true;
}

const putInValidOrder = (update: number[], rules: Map<number, number[]>): number[] => {
    for (var i = 0; i < update.length; i ++){
        const currentPage = update[i];
        const pastPages = update.slice(0, i);
        const relevantRules = rules.get(currentPage);
        
        if (relevantRules) {
            for (var j = 0; j < relevantRules.length; j++){
                if (!pastPages.includes(relevantRules[j])) continue;

                const badIndex = pastPages.findIndex(p => p === relevantRules[j]);

                update.splice(badIndex, 1);
                update.splice(i, 0, relevantRules[j]);
                i--;
            }
        }
    }

    return update;
}

const getMiddleValue = (update: number[]): number => {
    return update[Math.floor(update.length / 2)];
}

export const day5part1 = (filename: string): number => {
    const { rules, updates } = readData(filename);
    const validMiddleValues = updates.filter(u => isInValidOrder(u, rules)).map(u => getMiddleValue(u));

    return validMiddleValues.reduce((a, b) => a + b);
}

export const day5part2 = (filename: string): number => {
    const { rules, updates } = readData(filename);
    const invalidUpdates = updates.filter(u => !isInValidOrder(u, rules));
    const correctedUpdates = invalidUpdates.map(u => putInValidOrder(u, rules));

    const newMiddleValues = correctedUpdates.map(u => getMiddleValue(u));

    return newMiddleValues.reduce((a, b) => a + b);
}

console.log("Day 5 Part 1: " + day5part1("day05"));
console.log("Day 5 Part 2: " + day5part2("day05"));
