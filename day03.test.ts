import { describe, it } from "node:test";
import { readFile } from './read-file';
import * as assert from "node:assert/strict";
import { day1part1, day1part2 } from "./day01";
import { day3part1, day3part2 } from "./day03";

describe('Day 3', () => {
    it('Part 1', () => {
        assert.equal(day3part1("day03-test"), 161);        
    });

    it('Part 2', () => {
        assert.equal(day3part2("day03-test"), 48);        
    });
});
