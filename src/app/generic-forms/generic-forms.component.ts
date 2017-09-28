import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';

import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

class GenericForm {
    constructor(public msg: string) { }
}

@Component({
    selector: 'generic-forms',
    styleUrls: ['./generic-forms.component.scss'],
    template: `
    <div class="all">
        <promise></promise>
        <div class="parent">
            <div class="message"><span [highlight]="color">{{message}}</span></div>
            <input [(ngModel)]="input" class="input"/>
            <button id="malv" class="button" (click)="send()">Send</button>
        </div>
    </div>
    `
})
export class GenericFormsComponent implements OnInit {

    message = "";
    input: string;
    color = null;

    buttonS: Subject<any>;
    button$: Observable<any>;

    behaviorSubject: BehaviorSubject<GenericForm>;

    constructor() {

        console.log("------ Observable.from ------");
        let a = [1, 2, 3, 4, 5, 6];
        Observable.from(a)
            .map(x => x + 1)
            .filter(x => x % 2 === 0)
            .subscribe(d => console.log(d));

        console.log("------ Observable.of ------");
        Observable.of(1, 2, 3)
            .map(x => x + '! ')
            .map(x => {
                this.message += x;
                return x;
            })
            .subscribe(x => console.log(x));

        console.log("-------------------------");
        this.initForm();
        console.log("-------------------------");

        this.buttonS = new Subject();
        this.button$ = this.buttonS.asObservable();
        this.button$.subscribe(button => console.log(button));

        console.log("-------------------------");
        let x = Observable.timer(3000).mapTo({id: 1});
        let y = Observable.timer(3000).mapTo({id: 2});
        Observable.concat(x, y).subscribe(x => console.log(x));
        Observable.forkJoin(x,y).subscribe(x => console.log(x));

        Observable.fromEvent(document, 'scroll')
            .subscribe(d => console.log("scroll"));

        Observable.interval(1000)
            .take(3)
            .subscribe(d => console.log("#" + d+10));
            
    }

    private initForm() {

        let initialForm = new GenericForm("Message");
        this.behaviorSubject = new BehaviorSubject<GenericForm>(initialForm);

        this.behaviorSubject
            .asObservable()
            .map(data => data.msg = "mapped " + data.msg)
            .subscribe(data => {
                console.log(data);
            });
    }

    ngOnInit(): void {

    }

    send() {
        this.message = this.input;
        this.input = '';
        this.buttonS.next(Math.random());
    }



}
