import * as fs from 'fs';

export const readFile = (filename: string): string => {
    return fs.readFileSync(`data/${filename}.txt`,'utf8');
};
