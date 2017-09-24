import { Component } from "@angular/core";

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './counter.actions';

interface AppState {
  counter: number;
}

@Component({
    selector: 'ngrx-counter',
    template: `
        <h1 class="subtitle">Current Count: {{ (counter | async).counter }}</h1>
        <button class="button" (click)="increment()">Increment</button>
        <button class="button" (click)="decrement()">Decrement</button>
        <button class="button" (click)="reset()">Reset Counter</button>
    `,
    styles: [``]
})
export class CounterComponent {
    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    increment() {
        this.store.dispatch(new Counter.Increment());
    }

    decrement() {
        this.store.dispatch(new Counter.Decrement());
    }

    reset() {
        this.store.dispatch(new Counter.Reset(0));
    }
}