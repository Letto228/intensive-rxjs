import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import {skipLimit} from './skip-limit';

const sub = interval(1000).pipe(
    tap(console.log),
    skipLimit(2, 2),
).subscribe(terminalLog);

setTimeout(() => {
    sub.unsubscribe();
}, 9000);