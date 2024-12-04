import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { day2part1, day2part2 } from "./day02";

describe('Day 2', () => {
    it('Part 1', () => {
        assert.equal(day2part1("day02-test"), 2);        
    });

    it('Part 2', () => {
        assert.equal(day2part2("day02-test"), 4);        
    });
});
