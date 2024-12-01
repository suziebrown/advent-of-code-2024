import { describe, it } from "node:test";
import { readFile } from './read-file';
import * as assert from "node:assert/strict";
import { day1part1, day1part2 } from "./day01";

describe('Day 1', () => {
    it('Part 1', () => {
        const result = day1part1("day01-test");

        assert.equal(result, 11);        
    });

    it('Part 2', () => {
        const result = day1part2("day01-test");

        assert.equal(result, 31);        
    });
});
