import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

    private jokeSubject: BehaviorSubject<string>;
    joke$: Observable<string>;

    constructor(private http: Http) { 
        this.jokeSubject = new BehaviorSubject<string>('There is no joke yet. Click button above and get one!');
        this.joke$ = this.jokeSubject.asObservable();
    }

    getJoke() {
        const apiUrl = 'http://api.icndb.com/jokes/random';
        this.http.get(apiUrl)
          .map(res => res.json())
          .subscribe(data => this.jokeSubject.next(data.value.joke));
    }

}