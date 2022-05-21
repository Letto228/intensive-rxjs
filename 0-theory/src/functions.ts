// of(1, 2, [3, 2], {count: 4}).subscribe(console.log);

// from(
//     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=r2hgmb').then(res => res.json())
// ).subscribe(console.log);

// ajax({
//     url: 'https://learn.javascript.ru/courses/groups/api/participants?key=r2hgmb',
//     crossDomain: true,
//     method: 'GET',
// })
//     .pipe(
//         // map(res => res.response),
//         pluck('response'),
//         // filter(() => ),
//     )
//     .subscribe(console.log);

// timer(5000).subscribe(console.log);
// const random = Math.round(Math.random() * 10);
// console.log(random);

// iif(
//     () => random > 5,
//     of('True'),
//     of('False'),
// ).subscribe(console.log);

// defer(
//     () => random > 8
//         ? of('True 8')
//         : random > 5
//             ? of('True 5')
//             : of('False'),
// ).subscribe(console.log);

// queryParams url - userId

// user$ = iif(
//     () => userId,
//     ajax(...),
//     of(null),
// )

// method - user$.subscribe(console.log);

// const sequence$ = of(0,1,2,3,4,5,6,7,8,9); // 1000 = ---

// ---0---1---2---3---4---5---6---7---8---9---
// map(x => x * 2)
// ---0---2---4---6---8---10---12---14---16---18---
// filter(x => x % 3 === 0)
// ---0---------6---------12---------18---
// skip(2)
// ---------------------12---------18---
// take(1)
// ---------------------12|

// sequence$
//     .pipe(
//         map(x => x * 2),
//         filter(x => x % 3 === 0),
//         skip(2),
//         take(1),
//     )
//     .subscribe(terminalLog);