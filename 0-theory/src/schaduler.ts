// console.log('start');

// of(1,2,3,4,5,6,7,8,9)
//     .pipe(
//         tap(() => {
//             console.log('of operator');
//         }),
//         // observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before');
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(value => {
//         console.log(value);
//     })

// console.log('end');

// interval(1000).pipe(delay(10000))

// const sequence1$ = of(1, 2, asyncScheduler);
// const sequence2$ = of(10);

// const sequence$ = combineLatest([
//     sequence1$,
//     sequence2$,
// ])

// sequence$.subscribe(value => {
//     console.log(value);
// })

// const signal = new Subject<number>();

// let count = 0;

// const calc = (counter: number) => console.log('calc' + counter);

// console.log('start');

// signal.pipe(take(1600), observeOn(queueScheduler)).subscribe(() => {
//     calc(count);
//     signal.next(count++);
// });

// signal.next(count++);

// console.log('stop');