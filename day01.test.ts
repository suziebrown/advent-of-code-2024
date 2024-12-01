import { describe, it } from "node:test";
import { readFile } from './read-file';
import * as assert from "node:assert/strict";
import { day1part1 } from "./day01";

describe('Day 1', () => {
    it('solves with test input', () => {
        const result = day1part1("day01-test");

        assert.equal(result, 11);        
    });
});
