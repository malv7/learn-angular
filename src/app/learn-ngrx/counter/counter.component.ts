import { AdvancedData } from './advanced-data-model';
import { Component } from "@angular/core";

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './counter.actions';

interface AppState {
    counter: any,
    other: any
}

@Component({
    selector: 'ngrx-counter',
    template: `
        <h1 class="subtitle">counter: {{ (counter | async).counter }}</h1>
        <h1 class="subtitle">resets: {{ (counter | async).resets }}</h1>
        <button class="button" (click)="increment()">Increment</button>
        <button class="button" (click)="decrement()">Decrement</button>
        <button class="button" (click)="reset()">Reset Counter</button>
    `,
    styles: [``]
})
export class CounterComponent {
    counter: Observable<number>;
    other: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
        this.other = store.select('other');
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