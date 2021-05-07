import { ListenerCallback } from '../interfaces/ListenerCallback';
import { Reducer } from '../interfaces/Reducer';
import { Action } from '../interfaces/Action';
import { UnsubscribeCallback } from '../interfaces/UnsubscribeCallback';

export class Store<T> {
    private _state: T;
    private _listeners: ListenerCallback[] = [];

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
        this._state = initialState;
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach(listener => listener());
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => { // return an "unsubscribe" function
            this._listeners = this._listeners.filter(l => l !== listener);
        }
    }
}
