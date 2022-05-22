import { zip } from "rxjs";
import { TestScheduler } from "rxjs/testing"
import { getX } from "./swipe"

function createEvent(x: number): TouchEvent {
    return new TouchEvent('event', {
        changedTouches: [new Touch({clientX: x, identifier: 1, target: new EventTarget()})],
    })
}

describe('Test exaple', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('getX should', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const sequence$ = cold(
                '-a--b---c---|',
                {
                    a: createEvent(2),
                    b: createEvent(3),
                    c: createEvent(10),
                }
            )
            const expected = '-a--b---c---|';
            const expectedValue = {
                a: 2,
                b: 3,
                c: 10,
            };

            expectObservable(getX(sequence$)).toBe(expected, expectedValue);
        });
    });

    it('swipe should', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const sequence1$ = cold(
                '-a----b----------|',
                {
                    a: createEvent(2),
                    b: createEvent(30),
                }
            )
            const sequence2$ = cold(
                '---a-----b----c--|',
                {
                    a: createEvent(20),
                    b: createEvent(3),
                    c: createEvent(10),
                }
            )
            const swipe$ = zip(getX(sequence1$), getX(sequence2$));

            const expected = '---a-----b-------|';
            const expectedValue = {
                a: [2, 20],
                b: [30, 3],
            };

            expectObservable(swipe$).toBe(expected, expectedValue);
        });
    });
})