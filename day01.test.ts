import { describe, it } from "node:test";
import { readFile } from './read-file';
import * as assert from "node:assert/strict";

describe('Day 1', () => {
    it('solves with test input', () => {
        const input = readFile('day01-test');

        const result = 1;
        
        assert.equal(result, 11);        
    });
});
