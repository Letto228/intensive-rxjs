// Subjects = Observable + Observer ++ hot

// const sequence$ = new AsyncSubject<number>();

// sequence$.subscribe(value => terminalLog('Sub 1 - ' + value));

// sequence$.next(1);
// sequence$.next(2);
// sequence$.next(3);

// setTimeout(() => {
//     sequence$.next(4);
//     sequence$.next(5);
//     sequence$.next(6);
// }, 4000)

// setTimeout(() => {
//     sequence$.subscribe(value => terminalLog('Sub 2 - ' + value));

//     sequence$.next(7);
//     sequence$.next(8);
//     sequence$.next(9);

//     sequence$.complete();
// }, 5000)

// function getItems<T>(url: string): Observable<T> {
//     let asyncSubject: AsyncSubject<T>;

//     return new Observable(subscriber => {
//         if (!asyncSubject) {
//             asyncSubject = new AsyncSubject<T>();

//             ajax({
//                 url,
//                 crossDomain: true,
//             })
//                 .pipe(map(res => res.response as T))
//                 .subscribe(asyncSubject);
//         }

//         return asyncSubject.subscribe(subscriber);
//     })
// }

// const sequence$ = getItems('https://learn.javascript.ru/courses/groups/api/participants?key=r2hgmb');

// sequence$.subscribe(console.log);
// sequence$.subscribe(console.log);
// sequence$.subscribe(console.log);
