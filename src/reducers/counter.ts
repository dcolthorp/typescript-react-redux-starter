import {
    LOGOUT_USER,
    Status,
    OK,
} from '../constants';

import * as c from '../constants';
import { fromJS, Record } from 'immutable';


type CounterParams = {
    value?: number,
    status?: Status,
};
export class Counter extends Record({ value: 0, status: OK }) {
    value: number;
    status: Status;

    constructor(params?: CounterParams) {
        params ? super(params) : super();
    }

    with(values: CounterParams) {
        return this.merge(values) as this;
    }
}


type CounterAction =
    c.SetStatusAction |
    c.IncrementCounterAction |
    c.DecrementCounterAction |
    c.LogoutUserAction |
    c.OtherAction

const INITIAL_STATE = new Counter();

function counterReducer(
    state = INITIAL_STATE,
    action : CounterAction = c.OtherAction)
: Counter {
    switch (action.type) {

    case 'App/SET_STATUS':
        return state.with({status: action.payload});

    case 'App/INCREMENT_COUNTER':
        return state.with({value: state.value + action.by});

    case 'App/DECREMENT_COUNTER':
        return state.with({value: state.value - action.by});

    case 'App/LOGOUT_USER':
        return INITIAL_STATE;

    default:
        return state;
    }
}


export default counterReducer;
