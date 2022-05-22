// ---0---1---2---3---4---5---6---7---8---9---
// skipLimit(2, 2);
// -----------2---3-----------6---7-----------

import { TestScheduler } from "rxjs/testing"
import {skipLimit} from './skip-limit'

describe('Test exaple', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Map test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const sequence$ = cold(
                '-a--b----c----d---e-|',
                {
                    a: 1,
                    b: 2,
                    c: 100,
                    d: 10,
                    e: 50,
                }
            );

            const expected = '----b----c--------e-|'
            const expectedValue = {
                b: 2,
                c: 100,
                e: 50,
            }

            expectObservable(sequence$.pipe(skipLimit(1, 2))).toBe(expected, expectedValue);
        });
    });
})