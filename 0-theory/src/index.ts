import { asapScheduler, asyncScheduler, AsyncSubject, BehaviorSubject, combineLatest, ConnectableObservable, EMPTY, from, interval, NEVER, Observable, Observer, of, queueScheduler, ReplaySubject, SchedulerLike, Subject, throwError, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, delay, map, multicast, observeOn, publish, publishReplay, refCount, retry, retryWhen, share, shareReplay, single, subscribeOn, switchMap, take, tap } from 'rxjs/operators';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

const firstScrolledElement = document.querySelector('.scrolled-element') as HTMLElement;

function intersectionToObservable(element: HTMLElement): Observable<IntersectionObserverEntry> {
    return new Observable<IntersectionObserverEntry>(subscriber => {
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            subscriber.next(entries[0]);
        });


        intersectionObserver.observe(element);

        return () => {
            intersectionObserver.disconnect();
        }
    })
}

intersectionToObservable(firstScrolledElement)
    .pipe(
        map(event => event.isIntersecting)
    )
    .subscribe(console.log);