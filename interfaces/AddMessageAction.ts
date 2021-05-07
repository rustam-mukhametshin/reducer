import { Action } from './Action';

export interface AddMessageAction extends Action {
    message: string;
}
