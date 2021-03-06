import { Action } from '@ngrx/store';
import { BookItem } from '../models/book-item.model';

export enum BookActionTypes {
    LOAD_BOOKS = '[BOOKS] Load Shopping',
    LOAD_BOOKS_SUCCESS = '[BOOKS] Load Shopping Success',
    LOAD_BOOKS_FAILURE = '[BOOKS] Load Shopping Failure',
    ADD_BOOKS = '[BOOKS] Add Item',
}

export class LoadBookAction implements Action {
    readonly type = BookActionTypes.LOAD_BOOKS;
}
export class LoadBookSuccessAction implements Action {
    readonly type = BookActionTypes.LOAD_BOOKS_SUCCESS;

    constructor(public payload: Array<BookItem>) {}
}
export class LoadBookFailureAction implements Action {
    readonly type = BookActionTypes.LOAD_BOOKS_FAILURE;

    constructor(public payload: Error) {}
}

export class AddBookAction implements Action {
    readonly type = BookActionTypes.ADD_BOOKS;

    constructor(public payload: BookItem) {}
}

export type BookAction =
    | LoadBookAction
    | LoadBookSuccessAction
    | LoadBookFailureAction
    | AddBookAction;
