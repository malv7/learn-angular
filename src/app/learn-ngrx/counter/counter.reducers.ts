import * as CounterActions from './counter.actions';

export type Action = CounterActions.All;

export interface State {
    counter: number
}

const initialState: State = {
    counter: 0
}

// export function reducer(state: number = 0, action: CounterActions.All): State {
export function counterReducer(state = initialState, action: Action): State {
  switch(action.type) {
    case CounterActions.INCREMENT: {
      return {
          ...state,
          counter: state.counter + 1
      };
    }

    case CounterActions.DECREMENT: {
      return {
          ...state,
          counter: state.counter - 1
      }
    }

    case CounterActions.RESET: {
      return {
          ...state,
          counter: action.payload
      }
    }    

    default: {
      return state;
    }
  }
}