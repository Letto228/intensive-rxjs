import { combineLatest, fromEvent, Observable, of } from "rxjs";
import { map, pluck, startWith, switchMap, take, tap, withLatestFrom } from "rxjs/operators";

const qualitySlider = $('#quality').slider();
const ratingSlider = $('#rating').slider();
const actualSlider = $('#actual').slider();

interface IMapValue {
    element: HTMLElement,
    value: number,
}

function getValue(source$: Observable<any>, element: JQuery<HTMLElement>) {
    return source$.pipe(
        map(({delegateTarget, value: {newValue}}) => ({
            element: delegateTarget.previousElementSibling.querySelector('.slider-track'),
            value: newValue * 10,
        })),
        startWith(
            {
                element: element.prev().get(0)!.querySelector('.slider-track'),
                value: 50,
            } as IMapValue,
        ),
        tap(val => colorizeSlider(val)),
        pluck('value'),
    )
}

function colorizeSlider({element, value}: IMapValue) {
    element.classList.remove('bad', 'warn', 'good');
    
    if (value < 40) {
        element.classList.add('bad');

        return;
    }

    if (value <= 70) {
        element.classList.add('warn');

        return;
    }

    element.classList.add('good');
}

// First
fromEvent(document.querySelector('button') as HTMLElement, 'click').pipe(
    withLatestFrom(
        getValue(fromEvent(qualitySlider, 'change'), qualitySlider),
        getValue(fromEvent(ratingSlider, 'change'), ratingSlider),
        getValue(fromEvent(actualSlider, 'change'), actualSlider),
    ),
    map(([_, qualitySliderValue, ratingSliderValue, actualSliderValue]) => (qualitySliderValue + actualSliderValue + ratingSliderValue) / 3)
).subscribe(console.log);

// Last
// const buttonClick = fromEvent(document.querySelector('button') as HTMLElement, 'click');

// combineLatest([
//     getValue(fromEvent(qualitySlider, 'change'), qualitySlider),
//     getValue(fromEvent(ratingSlider, 'change'), ratingSlider),
//     getValue(fromEvent(actualSlider, 'change'), actualSlider),
// ]).pipe( // Observable<[number, number, number]>
//     switchMap(([qualitySlider, ratingSlider, actualSlider]) => buttonClick.pipe(
//         map(() => (qualitySlider + ratingSlider + actualSlider) / 3),
//     )),
// ).subscribe(console.log);