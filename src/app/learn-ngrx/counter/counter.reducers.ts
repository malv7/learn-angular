import { AdvancedData } from './advanced-data-model';
import * as CounterActions from './counter.actions';

export type Action = CounterActions.All;

interface NumberFunc {
  (num?: number): State;
}

interface State {
    counter: number,
    resets: number,
    advanced?: AdvancedData
}

const initialState: State = {
    counter: 0,
    resets: 0,
}

export function counterReducer(state = initialState, action: Action): State {

  // Pure increment function
  const increment: NumberFunc = () => ({ ...state, counter: state.counter + 1 });

  switch(action.type) {

    case CounterActions.INCREMENT: { 
      return increment(); 
    }

    case CounterActions.DECREMENT: {
      return {
          ...state,
          counter: state.counter - 1,
      }
    }

    case CounterActions.RESET: {
      return {
          ...state,
          counter: action.payload,
          resets: state.resets + 1,
      }
    }    

    case CounterActions.ADVANCED: {
      return {
        ...state,
        advanced: action.payload
      }
    }

    default: {
      return state;
    }
  }

}