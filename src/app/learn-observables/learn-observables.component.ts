import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// observable
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

// operators
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
    selector: 'learn-observables',
    styles: [` .text { padding: 10px; } `],
    template: `
        <div class="text" [highlight]="color">{{message}}</div>
        <input class="input" [(ngModel)]="input">
        <button class="button" (click)="submit()">Append</button>
    `
})
export class LearnObservableComponent implements OnInit {

    // Properties
    message = "";
    color = null;
    input: string;

    constructor(
        // services   
    ) { }

    ngOnInit(): void {
        this.observables();
    }

    observables(): void {

        // simple data
        let string = "some text";
        let numArray = [12, 21, 3, -4, 52, 16];

        // spawn
        let off = Observable.of(1, 2, 3);
        let from = Observable.from(numArray);
        let timer = Observable.timer(3000);
        let interval = Observable.interval(1000);
        let fromEvent = Observable.fromEvent(document, 'scroll');

        // ???
        let forkJoin = Observable.forkJoin(off, from);
        let concat = Observable.concat(off, from);

        // operators
        let map = off.map(x => x + 10);
        let filter = from.filter(x => x > 14);
        let take = from.take(1);
        let mapTo = off.mapTo('mapped to any constant value');

        // subscribe
        mapTo.subscribe(x => this.message += ' ' + x);
        
    }

    submit() {
        this.message += ' ' + this.input;
        this.input = '';
    }

}
