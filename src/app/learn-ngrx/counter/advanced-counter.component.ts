import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import * as Counter from './counter.actions';
import { AdvancedData } from './advanced-data-model';

interface AppState {
    counter: any
}

@Component({
    selector: 'ngrx-advanced-counter',
    template: `<h1 class="subtitle">advanced: {{ (counter | async).advanced | json }}</h1>`,
    styles: [``]
})
export class AdvancedCounterComponent {
    
    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
        Observable.timer(6000).subscribe(() => this.advanced());
    }
    
    advanced() {
        const advancedData = new AdvancedData("#1", "malv", 100);
        this.store.dispatch(new Counter.Advanced(advancedData));
        // this.store.dispatch(new Counter.Advanced());
    }
}