import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { bufferCount, concatAll, debounceTime, distinctUntilChanged, filter, map, pluck, reduce, switchMap } from "rxjs/operators";

interface ICard {
    name: string;
    description: string;
    owner: {
        avatar_url: string;
    }
}

// fromEvent<InputEvent>(inputElement, 'input').pipe(
//     debounceTime(300),
//     map(event => (event.target as HTMLInputElement).value),
//     filter(inputValue => inputValue.length > 3),
//     distinctUntilChanged(),
//     switchMap(text => ajax({
//         url: `https://api.github.com/search/repositories?q=${text}`,
//         crossDomain: true,
//     }).pipe(pluck('response', 'items'))),
// ).subscribe(console.log);

export function liveSearch(
    source$: Observable<InputEvent>,
): Observable<string> {
    return source$.pipe(
        debounceTime(300),
        map(event => (event.target as HTMLInputElement).value),
        filter(inputValue => inputValue.length > 3),
        distinctUntilChanged(),
        switchMap(text => 
            requestToHtmlString(
                ajax<{items: ICard[]}>({
                    url: `https://api.github.com/search/repositories?q=${text}`,
                    crossDomain: true,
                }).pipe(
                    map(res => res.response.items)
                )
            )
        ),
    )
}

export function requestToHtmlString(
    source$: Observable<ICard[]>
): Observable<string> {
    return source$.pipe(
        concatAll(), // Observable<ICard[]> -> Observable<ICard>
        map(createCard), // Observable<ICard> -> Observable<string>
        bufferCount(3),// Observable<string> -> Observable<[string, string, string]>
        reduce((resultString: string, htmlStrings: string[]) => {
            return resultString + createRow(htmlStrings);
        }, '')
    )
}

export function createCard({name, description, owner: {avatar_url}}: ICard) {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <img class="card-img-top" src=${avatar_url} alt=${name}>
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p class="card-text">${description}</p>
            </div>
        </div>
    </div>
    `;
}

export function createRow(htmlString: string[]): string {
    return `<div class="row">${htmlString.join(' ')}</div>`;
}