// const sequence$ = interval(1000).pipe(
//     // map(value => of(value)), //Observable<Observable<number>>
//     // mergeAll(), //Observable<number>
//     mergeMap(value => Promise.resolve(value)),
// )

const sequence$ = interval(100).pipe(
    take(8),
    tap(console.log),
    exhaustMap(() => ajax({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=r2hgmb',
        crossDomain: true,
        method: 'GET',
    }).pipe(pluck('response'))),

)

sequence$.subscribe(number => {
    console.log(number)
});