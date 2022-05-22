import { fromEvent, merge, Observable, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import '../../assets/css/style.css';

export function getX(source$: Observable<MouseEvent | TouchEvent>) {
    return source$.pipe(
        map(event => event instanceof MouseEvent
            ? event.clientX
            : event.changedTouches[0]!.clientX,
        ),
    )
}

const up$ = merge(
    fromEvent<MouseEvent>(document, 'mouseup'),
    fromEvent<MouseEvent>(document, 'touchend'),
);
const down$ = merge(
    fromEvent<MouseEvent>(document, 'mousedown'),
    fromEvent<MouseEvent>(document, 'touchstart'),
);

export const swipe$ = zip(getX(down$), getX(up$)).pipe(
    map(([start, end]) => start - end),
    filter(diff => diff !== 0),
)

swipe$.subscribe(console.log);

// import { fromEvent, merge, Observable, zip } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
// import '../../assets/css/style.css';

// function getX(source$: Observable<MouseEvent | TouchEvent>): Observable<number> {
//     return source$.pipe(
//         map(event => event instanceof MouseEvent
//             ? event.clientX
//             : event.changedTouches[0]!.clientX,
//         ),
//     )
// }

// function getShift(source$: Observable<[number, number]>): Observable<number> {
//     return source$.pipe(
//         map(([start, end]) => start - end),
//         filter(diff => diff !== 0),
//     )
// }

// // const up$ = merge(
// const mousUp$ = fromEvent<MouseEvent>(document, 'mouseup');
// const mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
// const mousSwipe$ = getShift(zip(getX(mouseDown$), getX(mousUp$)));
// // );
// // const down$ = merge(
// const touchEnd$ = fromEvent<MouseEvent>(document, 'touchend');
// const touchStart$ = fromEvent<MouseEvent>(document, 'touchstart');
// const touchSwipe$ = getShift(zip(getX(touchStart$), getX(touchEnd$)));
// // );

// mousSwipe$.subscribe(console.log);
// touchSwipe$.subscribe(console.log);

// export const swipe$ = merge(zip(getX(touchStart$), getX(touchEnd$)), zip(getX(mouseDown$), getX(mousUp$)))

// swipe$.subscribe(console.log);