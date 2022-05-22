import { map } from "rxjs/operators";
import { TestScheduler } from "rxjs/testing"

// describe('Test exaple', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         });
//     });

//     it('Map test', () => {
//         testScheduler.run(({cold, expectObservable}) => {

//         });
//     });
// })
describe('Test exaple', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Map test cold', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const sequence$ = cold(
                '-a--b---c---|',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                }
            );
            const finalSequence$ = sequence$.pipe(map(value => value * 2));
            
            const expected = '-a--b---c---|';
            const expectedValue = {
                a: 2,
                b: 12,
                c: 20,
            };

            expectObservable(finalSequence$).toBe(expected, expectedValue);
        });
    });

    it('Map test hot', () => {
        testScheduler.run(({hot, expectObservable}) => {
            const sequence$ = hot(
                '-a--b---c------d',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                    d: 100,
                }
            );
                          // '-a-- b---c------d|',
            const sub =      '----^--------!';
            const expected = '---- b---c---';
            const expectedValue = {
                a: 2,
                b: 12,
                c: 20,
            };

            expectObservable(sequence$.pipe(map(value => value * 2)), sub).toBe(expected, expectedValue);
        });
    });
})
