// const sequence1$ = interval(500);
// const sequence2$ = of('1', '2', '3', 4, '5', '6');
// const sequence$ = zip(sequence1$, sequence2$);

// sequence$
//     .pipe(
//         // map(([_, value]) => {
//         //     return (value as any).toUpperCase();
//         // }),
//         switchMap(([_, value]) => of(value).pipe(
//             map(str => (str as any).toUpperCase()),
//             catchError((err) => {
//                 console.log('catchError', err);
    
//                 return of('N');
//             }),
//         )),
//         tap(() => {
//             console.log('after map');
//         }),
//         // retry(3),
//         // retryWhen(obs => obs.pipe(delay(3000))),
//     )
//     .subscribe({
//         complete: () => terminalLog('COMPLETE'),
//         next: terminalLog,
//         error: err => terminalLog('ERROR - ' + err),
//     })