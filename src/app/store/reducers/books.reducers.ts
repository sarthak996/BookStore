import { BookActionTypes, BookAction } from '../actions/book.actions';
import { BookItem } from '../models/book-item.model';

export interface BookState {
    list: BookItem[];
    loading: boolean;
    error: Error;
}

const initialState: BookState = {
    list: [],
    loading: false,
    error: undefined,
};

// const initialState: Array<BookItem> = [
//     {
//         id: '1775935f-36fd-467e-a667-09f95b917f6d',
//         title: 'Sarthak Books',
//         author: 'Sarthak Sethi',
//         publishedDate: new Date(),
//     },
// ];

export function BookReducer(
    state: BookState = initialState,
    action: BookAction
) {
    switch (action.type) {
        case BookActionTypes.LOAD_BOOKS:
            return {
                ...state,
                loading: true,
            };
        case BookActionTypes.LOAD_BOOKS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false,
            };

        case BookActionTypes.LOAD_BOOKS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
