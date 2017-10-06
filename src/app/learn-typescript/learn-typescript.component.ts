import { Component } from '@angular/core';

@Component({
    selector: 'learn-typescript',
    template: ``,
    styles: [``]
})
export class LearnTypescriptComponent {

    constructor() {
        const arr = [10, 5, 4, 3, 2, 1].sort(sortAscending);
        console.log(arr);
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
