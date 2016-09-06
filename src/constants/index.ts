export type OK = { type: 'ok' };
export const OK = { type: 'ok' };

export type Warn = { type: 'warn' };
export const Warn = { type: 'warn' };

export type Status = OK | Warn;

export type SET_STATUS = 'App/SET_STATUS';
export const SET_STATUS : SET_STATUS = 'App/SET_STATUS';
export type SetStatusAction = {
    type: SET_STATUS,
    payload: Status
};

export type INCREMENT_COUNTER = 'App/INCREMENT_COUNTER';
export const INCREMENT_COUNTER : INCREMENT_COUNTER = 'App/INCREMENT_COUNTER';
export type IncrementCounterAction = {
    type: INCREMENT_COUNTER,
    by: number
};

export type DECREMENT_COUNTER = 'App/DECREMENT_COUNTER';
export const DECREMENT_COUNTER : DECREMENT_COUNTER = 'App/DECREMENT_COUNTER';
export type DecrementCounterAction = {
    type: DECREMENT_COUNTER,
    by: number
};

export type OtherAction = { type: '' };
export const OtherAction : OtherAction = { type: '' };

export const LOGIN_USER_PENDING = 'App/LOGIN_USER_PENDING';
export const LOGIN_USER_SUCCESS = 'App/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'App/LOGIN_USER_ERROR';

export type LOGOUT_USER = 'App/LOGOUT_USER';
export const LOGOUT_USER : LOGOUT_USER = 'App/LOGOUT_USER';
export type LogoutUserAction = {
    type: 'App/LOGOUT_USER',
    by: number
};

export const FORM_RESET = 'redux-form/RESET';
