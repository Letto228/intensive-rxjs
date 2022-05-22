
// const subject = new ReplaySubject<number>(1);

// const sequence$ = interval(1000).pipe(
//     // multicast(subject), // ConnectableObservable
//     // publish(), // publish = multicast + subject
//     // refCount(),
//     shareReplay(1), // publish + refCount
// );

// const sub = sequence$.subscribe(value => {
//     terminalLog('Sub 1 - ' + (value + 1));
// })
//@ts-ignore
// sequence$.connect();

// setTimeout(() => {
//     sub.add(sequence$.subscribe(value => {
//         terminalLog('Sub 2 - ' + (value + 1));
//     }));
// }, 5000)

// setTimeout(() => {
//     sub.unsubscribe();
// }, 6000)

// setTimeout(() => {
//     sequence$.subscribe(value => {
//         terminalLog('Sub 2 - ' + (value + 1));
//     });

// }, 8000)