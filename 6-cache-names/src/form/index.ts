import { combineLatest, EMPTY, fromEvent, Observable, of } from 'rxjs';
import { debounceTime, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import  './styles.css';
import { userService } from './user.service';

export class FormComponent {
    private input!: HTMLInputElement;
    private button!: HTMLButtonElement;
    private namesSequence$!: Observable<string>;

    constructor(private formContainer: HTMLElement) {
        this.input = formContainer.querySelector('input') as HTMLInputElement;
        this.button = formContainer.querySelector('button') as HTMLButtonElement;

        this.namesSequence$ = combineLatest([
            fromEvent(this.input, 'input').pipe(map(({target}) => (target as HTMLInputElement).value)),
            userService.uniqueNameSequence$,
        ]).pipe(
            debounceTime(300),
            switchMap(([text, names]: [string, string[]]) => {
                console.log(text, names);
                const isNotValid = names.some(name => name === text);

                if (isNotValid) {
                    this.input.classList.add('error');
                    this.button.disabled = true;

                    return EMPTY;
                }

                this.input.classList.remove('error');
                this.button.disabled = false;

                return of(text);
            }),
        );

        fromEvent(this.button, 'click')
            .pipe(
                withLatestFrom(this.namesSequence$),
                map(([_, text]) => text),
            )
            .subscribe(value => {
                console.log(value);
            })
    }
}