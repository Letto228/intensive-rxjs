import { interval, Observable, of } from 'rxjs';
import { concatMap, exhaustAll, exhaustMap, map, mergeAll, mergeMap, pluck, switchMap, take, tap } from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
