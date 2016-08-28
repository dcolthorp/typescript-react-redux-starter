import {
    IncrementCounterAction,
    DecrementCounterAction
} from '../constants';

export function increment(by: number = 1) : IncrementCounterAction {
  return {
    type: 'App/INCREMENT_COUNTER',
    by: by
  };
}

export function decrement(by: number = 1) : DecrementCounterAction {
  return {
    type: 'App/DECREMENT_COUNTER',
    by: by
  };
}
