import { interval, Observable, Subscriber } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

// function doNothing<T>(source$: Observable<T>): Observable<T> {
//     return source$;
// }

// function toStub(_: Observable<unknown>): Observable<string> {
//     return new Observable(subscriber => {
//         subscriber.next('Stub');
//         subscriber.complete();
//     });
// }

// function customMap(cb: any): (source$: Observable<any>) => Observable<any> {
//     return function (source$: Observable<number>): Observable<number> {
//         return new Observable(subscriber => {
//             const sub = source$.subscribe({
//                 next: value => subscriber.next(cb(value)),
//                 error: err => subscriber.error(err),
//                 complete: () => subscriber.complete(),
//             })

//             return () => {
//                 sub.unsubscribe();
//             }
//         })
//     }
// }

// function doublePipe(source$: Observable<number>): Observable<number> {
//     return source$.pipe(
//         map(value => value * 2),
//     )
// }

// function double(source$: Observable<number>): Observable<number> {
//     return new Observable(subscriber => {
//         const sub = source$.subscribe({
//             next: value => subscriber.next(value * 2),
//             error: err => subscriber.error(err),
//             complete: () => subscriber.complete(),
//         })

//         return () => {
//             sub.unsubscribe();
//         }
//     })
// }

// const doublePipe: (source$: Observable<any>) => Observable<any> = pipe(
//     double,
//     filter(value => !!value),
// ) // operator rxjs

// function pipe(...operators: Function[]): (source$: Observable<any>) => Observable<any> {
//     return (source$: Observable<any>) => operators.reduce(
//         (sour$, operator) => operator(sour$),
//         source$,
//     )
// }

// class DoubleSubscriber extends Subscriber<number> {
//     next(value: number): void {
//         super.next(value * 2);
//     }
// }

// function double(source$: Observable<number>): Observable<number> {
//     return new Observable(subscriber => {
//         const sub = source$.subscribe(new DoubleSubscriber(subscriber))

//         return () => {
//             sub.unsubscribe();
//         }
//     })
// }

// const sub = interval(1000)
//     .pipe(
//         tap(value => {
//             console.log(value);
//         }),
//         doNothing,
//         double, // interval(1000) -> new Observble(...)
//     )
//     .subscribe({
//         next: value => terminalLog(value),
//         complete: () => terminalLog('COMPLETE'),
//     });

// setTimeout(() => {
//     sub.unsubscribe();
// }, 3000)