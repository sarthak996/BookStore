import { BookState } from './store/reducers/books.reducers';

export interface AppState {
    readonly book: BookState;
}
