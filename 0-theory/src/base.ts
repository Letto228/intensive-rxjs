// const sequence = new Promise(resolve => {
    // let count = 0;

    // setInterval(() => {
    //     console.log(count);
    //     resolve(++count)
    // }, 1000);
// })

// sequence.then(value => terminalLog(value));
// sequence.then(value => terminalLog(value));
// sequence.then(value => terminalLog(value));
// sequence.then(value => terminalLog(value));

// setTimeout(() => {
//     sequence.then(value => terminalLog(value));
// }, 2000);

// const sequence = function* iteratorFn() {
//     let count = 0;

//     while (true) {
//         yield ++count;
//     }
// }()

// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);

// const sequence$: Observable<number> = interval(1000).pipe(
//     tap(value => {
//         console.log(value);
//     })
// );

// setTimeout(() => {
//     sequence$.subscribe(value => {
//         terminalLog(value);
//     })
// }, 5000);

// sequence$.subscribe(value => {
//     terminalLog('Observable 1 - ' + value);
// })

// sequence$.subscribe(value => {
//     terminalLog('Observable 2 - ' + value);
// })

// const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     let count = 0;

//     console.log('START');

//     const intervalId = setInterval(() => {
//         // if (count === 5) {
//         //     subscriber.error('is Error');

//         //     return;
//         // }

//         count += 1;

//         console.log(count);
//         subscriber.next(count);
//     }, 1000);

//     return () => {
//         clearInterval(intervalId);
//         console.log('Destroy');
//     }
// });

// const allSubscription = new Subscription();

// allSubscription.add(
//     sequence$.subscribe(value => terminalLog('A - ' + value))
// );

// setTimeout(() => {
//     allSubscription.add(
//         sequence$.subscribe(value => terminalLog('B - ' + value))
//     );
// }, 3000);

// setTimeout(() => {
//     console.log(allSubscription.closed);
//     allSubscription.unsubscribe();
//     console.log(allSubscription.closed);
// }, 10000);

// const sequence$ = new Observable<void>(subscriber => {
//     terminalLog('START');

//     document.querySelector('.terminal')?.addEventListener('click', () => {
//         subscriber.next();
//     })

//     // setInterval(() => {
//     //     subscriber.next(undefined);
//     //     console.log('push');
//     // }, 1000);
// })

// sequence$.subscribe(() => terminalLog('reset input'));

// const ws = new WebSocket('ws://localhost:8081');

// ws.onopen = () => {
//     ws.send('on');
// }

// const wsMessage$ = new Observable<MessageEvent>(subscriber => {
//     console.log('START');

//     function listener(message: MessageEvent) {
//         subscriber.next(message.data);
//     }

//     function listenerClose() {
//         subscriber.complete();
//     }
    
//     ws.addEventListener('message', listener);
//     ws.addEventListener('close', listenerClose);

//     return () => { // Нет подписчиков, complete(), error()
//         ws.removeEventListener('message', listener);
//         ws.removeEventListener('close', listenerClose);
//         console.log('DESTROY');
//     }
// });

// const sub = wsMessage$.subscribe({
//     next: terminalLog,
//     // complete: () => terminalLog('complete'),
//     // error: () => terminalLog('error'),
// });

// setTimeout(() => {
//     wsMessage$.subscribe({
//         next: value => terminalLog('Timout - ' + value),
//     })
// }, 2000)

// setTimeout(() => {
//     sub.unsubscribe();
//     // ws.close();
// }, 4000)

// Shared Module
// export ws

// Module 1
// import ws
// const fn = sherCB(myCB);
// ws.addEventListener(...., fn);

// ws.removeEventListener(...., fn);

// Module 2
// const fn = sherCB(myCB);
// ws.addEventListener(...., fn);

// ws.removeEventListener(...., fn);


// Shared Module
// export wsMessage$

// Module 1
// import wsMessage$
// const sub = wsMessage$.pipe(...).subscibe(myCB);

// sub.unsubscribe()

// Module 2
// import wsMessage$
// const sub = wsMessage$.subscibe(myCB);

// sub.unsubscribe()
