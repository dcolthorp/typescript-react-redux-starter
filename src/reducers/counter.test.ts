import { Map } from 'immutable';

import fireAction from '../../test-utils/fire-action';

import counterReducer from './counter';
import {Counter} from './counter';

let state = counterReducer();

describe('counter reducer', () => {
    describe('inital state', () => {
        it('should be a Map', () => {
            expect(state instanceof Counter).toBe(true);
        });
    });

    describe('on INCREMENT_COUNTER', () => {
        it('should increment state.count', () => {
            const previousValue = state.value;
            const s2 = counterReducer(state, {
                type: 'App/INCREMENT_COUNTER', by: 1 });
            expect(s2.value).toBe(previousValue + 1);
        });

        it('should increment state.count', () => {
            const previousValue = state.value;
            const s2 = counterReducer(state, {
                type: 'App/INCREMENT_COUNTER', by: 5 });
            expect(s2.value).toBe(previousValue + 5);
        });
    });

    describe('on DECREMENT_COUNTER', () => {
        it('should decrement state.count', () => {
            const previousValue = state.value;
            const s2 = counterReducer(state, {
                type: 'App/DECREMENT_COUNTER', by: 1 });
            expect(s2.value).toBe(previousValue - 1);
        });
    });
});

