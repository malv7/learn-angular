import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
// operators
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';

@Component({
    selector: 'promise',
    template: ``,
    styles: [``]
})
export class LearnPromisesComponent {
    
    constructor() { 
        
        // sync
        let x = this.getValue();

        // async
        this.getValueAsync()
            .then(x => console.log(x))
            .catch(reason => console.log(reason));

        // observable
        let o = Observable.interval()
            .map(x => x + 10)
            .delay(3000)
            .map(x => x * 2)
            .filter(x => x < 100);
    
        o.subscribe(x => {
            console.log(x);
        });

    }

    // sync
    getValue(): number {
        return 1;
    }

    // async
    getValueAsync(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            if(0.1 < Math.random()) {
                resolve(10);
            } else {
                reject("da stimmt die nasdasd");
            }
        });
    }

}