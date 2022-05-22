import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { concatAll, map, shareReplay, toArray } from "rxjs/operators";

interface IUser {
    firstName: string;
    surname: string;
    profileName: string;
}

class UserService {
    uniqueNameSequence$: Observable<string[]> = ajax<IUser[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=r2hgmb',
        crossDomain: true,
        method: 'GET',
    })
        .pipe(
            map(res => res.response.map(({profileName}) => profileName)),
            // concatAll(),
            // map(user => user.profilename),
            // toArray()
            shareReplay(),
        )
}

export const userService = new UserService();