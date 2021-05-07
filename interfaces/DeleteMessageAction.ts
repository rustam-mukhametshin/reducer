import { Action } from './Action';

export interface DeleteMessageAction extends Action {
    index: number;
}
