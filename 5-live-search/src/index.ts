import 'bootstrap';
import '../../assets/css/style.css';
import  './styles.css';
import {liveSearch} from './live-search';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

const inputElement = document.querySelector('input') as HTMLInputElement;
const containerElement = document.querySelector('.container') as HTMLDivElement;

fromEvent<InputEvent>(inputElement, 'input')
    .pipe(
        liveSearch,
        tap(console.log),
    )
    .subscribe(htmlString => {
        containerElement.innerHTML = htmlString;
    })