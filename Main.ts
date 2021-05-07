import { Reducer } from './interfaces/Reducer';
import { AppState } from './interfaces/AppState';
import { AddMessageAction } from './interfaces/AddMessageAction';
import { DeleteMessageAction } from './interfaces/DeleteMessageAction';

export let reducer: Reducer<AppState> = (state, action): AppState => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                messages: state.messages.concat(
                    (<AddMessageAction>action).message
                )
            };
        case 'DELETE_MESSAGE':
            return {
                messages: state.messages.filter(
                    (message, index) => index !== (<DeleteMessageAction>action).index
                )
            };
        default:
            return state;
    }
}

