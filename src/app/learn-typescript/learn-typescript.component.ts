import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

const DATA = {
  "xx-xx": {
    0: {
      key: "time",
      value: "1002"
    },
    1: {
      key: "temp",
      value: "30"
    }
  },
  "aa-aa": {
    0: {
      key: "time",
      value: "1099"
    },
    1: {
      key: "temp",
      value: "32"
    }
  },
  "yy-yy": {
    0: {
      key: "time",
      value: "1000"
    },
    1: {
      key: "temp",
      value: "32"
    }
  },
  "zz-zz": {
    0: {
      key: "time",
      value: "1001"
    },
    1: {
      key: "temp",
      value: "39"
    }
  },
  "bb-bb": {
    0: {
      key: "time",
      value: "1228"
    },
    1: {
      key: "temp",
      value: "32"
    }
  },
}

interface KeyTime {
  objectId: string;
  time: string;
}

@Component({
  selector: 'learn-typescript',
  template: `hi`,
  styles: [``]
})
export class LearnTypescriptComponent {

  constructor() {

    const a: KeyTime[] = [];

    for (let key in DATA) {
      Object.keys(key).forEach(innerKey => {
        if (DATA[key][innerKey]) { // there are some undefines inbetween
          if (JSON.stringify(DATA[key][innerKey]).indexOf('time') > -1 && DATA[key][innerKey]['value'])
            a.push({
              objectId: key,
              time: DATA[key][innerKey]['value']
            });
        }
      });
    }

    a.sort((a, b) => a.time < b.time ? 1 : (b.time < a.time ? -1 : 0));
    const slice = a.slice(0, 3);

    console.log(slice);

    const tasks = [];
    slice.forEach(e => tasks.push(Observable.of(e.time)));

    console.log(tasks);
    Observable.forkJoin(tasks).subscribe(d => console.log(d));




























    const arr = [10, 5, 4, 3, 2, 1].sort(sortDescending);
    // console.log(arr);
  }

}

// Pure functions
const add = (x: number, y: number) => x + y;
const rememberX = (x: number) => () => x;
const clamp = (min, max) => x => Math.max(min, Math.min(x, max));

// Generic compare approach
// const compare = (test) => (a, b) =>
//       test(a, b) ? -1
//     : test(b, a) ? 1
//     : 0;

// const sortAscending = compare((a, b) => b > a);
// const sortDescending = compare((a, b) => b < a);
type Comparator<A> = (a: A, b: A) => boolean;
type Comparison<A> = (a: A, b: A) => number;
type Compare = <A>(test: Comparator<A>) => Comparison<A>

const compare: Compare = (test) => (a, b) =>
  test(a, b) ? -1
    : test(b, a) ? 1
      : 0;

const gt: Comparator<number> = (a, b) => b > a;
const lt: Comparator<number> = (a, b) => b < a;

const sortAscending = compare(gt);
const sortDescending = compare(lt);
