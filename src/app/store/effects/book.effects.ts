import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
    LoadBookAction,
    BookActionTypes,
    LoadBookSuccessAction,
    LoadBookFailureAction,
} from '../actions/book.actions';
import { of } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Injectable()
export class BookEffects {
    @Effect() loadBook$ = this.actions$.pipe(
        ofType<LoadBookAction>(BookActionTypes.LOAD_BOOKS),
        mergeMap(() =>
            this.bookService.getBooksItems().pipe(
                map((data) => {
                    return new LoadBookSuccessAction(data);
                }),
                catchError((error) => of(new LoadBookFailureAction(error)))
            )
        )
    );

    constructor(private actions$: Actions, private bookService: BookService) {}
}
