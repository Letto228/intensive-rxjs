import { fromEvent, Observable } from "rxjs";
import { map, switchMap, takeUntil, tap } from "rxjs/operators";

export const box = document.querySelector('.draggable') as HTMLElement;

const mousedown$ = fromEvent<MouseEvent>(box, 'mousedown');
const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
const mouseup$ = fromEvent<MouseEvent>(box, 'mouseup');

export function drag(
    sourceMousedown$: Observable<MouseEvent>,
    sourceMousemove$: Observable<MouseEvent>,
    sourceMouseup$: Observable<MouseEvent>,
): Observable<{top: number, left: number}> {
    return sourceMousedown$.pipe(
        tap(mousedownEvent => {
            mousedownEvent.preventDefault();
        }),
        switchMap((mousedownEvent: MouseEvent) => sourceMousemove$.pipe(
            tap(mousemoveEvent => {
                mousemoveEvent.preventDefault();
            }),
            map((mousemoveEvent: MouseEvent) => ({
                left: mousemoveEvent.clientX - mousedownEvent.offsetX,
                top: mousemoveEvent.clientY - mousedownEvent.offsetY,
            })),
            takeUntil(sourceMouseup$),
        )),
    )
}

export const boxDrag$ = drag(
    mousedown$,
    mousemove$,
    mouseup$,
)