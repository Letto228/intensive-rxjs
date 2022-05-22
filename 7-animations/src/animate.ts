import { animationFrameScheduler, asapScheduler, asyncScheduler, interval, Observable, of } from "rxjs";
import { map, takeWhile, tap } from "rxjs/operators";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time(shaduler = animationFrameScheduler): Observable<number> {
    const startTime = shaduler.now();

    return interval(0, shaduler).pipe(
        map(() => shaduler.now() - startTime),
    );
}

function duration(allMs: number, shaduler = animationFrameScheduler) {
    return time(shaduler).pipe(
        map(time => time / allMs),
        takeWhile(procentage => procentage <= 1),
        tap(console.log),
    );
}

export function animationDown(element: HTMLElement) {
    return duration(20000).pipe(
        map(animationFn),
        map(procentage => procentage * 100),
        tap(frame => {
            element.style.transform = `translateY(${frame}px)`;
        }),
    )
}