// ---0---1---2---3---4---5---6---7---8---9---
// skipLimit(2, 2);
// -----------2---3-----------6---7-----------

import { Observable, Subscriber } from "rxjs";

class SkipLimitSubscriber<T> extends Subscriber<T> {
    private interval = 1;
    private count = 1;

    constructor(
        subscriber: Subscriber<T>,
        private readonly skip: number,
        private readonly limit: number,
    ) {
        super(subscriber);
    }

    next(value: T): void {
        const borderRight = this.interval * (this.skip + this.limit);
        const borderLeft = borderRight - this.limit;

        if (borderLeft < this.count && this.count <= borderRight) {
            super.next(value);

            this.count += 1;

            if (borderRight < this.count) {
                this.interval += 1;
            }

            return;
        }

        this.count += 1;
    }
}

export function skipLimit<T>(skip: number, limit: number) {
    return function(source$: Observable<T>): Observable<T> {
        return new Observable<T>(subscriber => {
            const sub = source$.subscribe(new SkipLimitSubscriber(subscriber, skip, limit));

            return () => {
                sub.unsubscribe();
            }
        })
    }
}