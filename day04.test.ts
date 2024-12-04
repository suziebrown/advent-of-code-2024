import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { day4part1, day4part2 } from "./day04";

describe('Day 4', () => {
    it('Part 1', () => {
        assert.equal(day4part1("day04-test"), 18);        
    });

    it('Part 2', () => {
        assert.equal(day4part2("day04-test"), 0);        
    });
});
