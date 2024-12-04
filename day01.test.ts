import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { day1part1, day1part2 } from "./day01";

describe('Day 1', () => {
    it('Part 1', () => {
        assert.equal(day1part1("day01-test"), 11);        
    });

    it('Part 2', () => {
        assert.equal(day1part2("day01-test"), 31);        
    });
});
