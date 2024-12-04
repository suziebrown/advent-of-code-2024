import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { day3part1, day3part2 } from "./day03";

describe('Day 3', () => {
    it('Part 1', () => {
        assert.equal(day3part1("day03-test"), 161);        
    });

    it('Part 2', () => {
        assert.equal(day3part2("day03-test"), 48);        
    });
});
