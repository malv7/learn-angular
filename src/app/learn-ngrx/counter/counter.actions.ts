import { AdvancedData } from './advanced-data-model';
import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET     = '[Counter] Reset';
export const ADVANCED  = '[Counter] Advanced'

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET;

    constructor(public payload: number) { }
}

export class Advanced implements Action {
    readonly type = ADVANCED;

    constructor(public payload?: AdvancedData, public num?: number) { }
}

export type All
    = Increment
    | Decrement
    | Reset
    | Advanced;