import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { day5part1, day5part2 } from "./day05";

describe('Day 5', () => {
    it('Part 1', () => {
        assert.equal(day5part1("day05-test"), 143);        
    });

    it('Part 2', () => {
        assert.equal(day5part2("day05-test"), 0);        
    });
});
