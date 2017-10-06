import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

class TrailerParkBoy {
    constructor(
        public name: string,
        public drink: string,
        public stars: number) { }
}

type Malv = {
    name: string,
    ding: number
}

@Injectable()
export class FirebaseService {
    
    o: Observable<TrailerParkBoy>;

    constructor(db: AngularFireDatabase) {
        db.object("boy").set(new TrailerParkBoy("Randy Bobanders", "Vine", 10));
        this.o = db.object("boy")
            .map((x: TrailerParkBoy) => {
                x.stars = 100;
                return x;
            });

        this.o.subscribe(x => console.log(x));
    }


}