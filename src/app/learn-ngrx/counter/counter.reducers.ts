import { AdvancedData } from './advanced-data-model';
import * as CounterActions from './counter.actions';

interface FixState {
    counter: number,
    resets: number,
    advanced?: AdvancedData
}

class Malv {
  public name: string;

  constructor(name?: string) {
    if(name) this.name = name;
  }
}

const initialState: FixState = {
    counter: 0,
    resets: 0,
}

// TODO: alternatively introduce a Action type for the reducer function argument action
// export type Action = CounterActions.All;
// export function counterReducer(state = initialState, action: Action): State {
export function counterReducer(state = initialState, action: CounterActions.All): FixState {

  const increment = () => {
    const x = 1;
    return { ...state, counter: state.counter + 1 + x };
  };

  switch(action.type) {

    case CounterActions.INCREMENT:{ 
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