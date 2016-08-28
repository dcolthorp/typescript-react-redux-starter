export type OK = { type: 'ok' };
export const OK = { type: 'ok' };

export type Warn = { type: 'warn' };
export const Warn = { type: 'warn' };

export type Status = OK | Warn;

export type SetStatusAction =
    { type: 'App/SET_STATUS', payload: Status };
export type IncrementCounterAction =
    { type: 'App/INCREMENT_COUNTER', by: number };
export type DecrementCounterAction =
    { type: 'App/DECREMENT_COUNTER', by: number };

export type OtherAction = { type: '' };
export const OtherAction : OtherAction = { type: '' };

export const LOGIN_USER_PENDING = 'App/LOGIN_USER_PENDING';
export const LOGIN_USER_SUCCESS = 'App/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'App/LOGIN_USER_ERROR';

export const LOGOUT_USER = 'App/LOGOUT_USER';
export const FORM_RESET = 'redux-form/RESET';
