import { Component, OnInit } from '@angular/core';
import { BookItem } from '../store/models/book-item.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddBookAction, LoadBookAction } from '../store/actions/book.actions';
import { AppState } from '../app-state.model';
@Component({
    selector: 'app-book-items',
    templateUrl: './book-items.component.html',
    styleUrls: ['./book-items.component.scss'],
})
export class BookItemsComponent implements OnInit {
    bookItems$: Observable<Array<BookItem>>;
    loading$: Observable<Boolean>;
    error$: Observable<Error>;
    searchValue: string = '';
    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.bookItems$ = this.store.select((store) => store.book.list);
        this.loading$ = this.store.select((store) => store.book.loading);
        this.error$ = this.store.select((store) => store.book.error);
        this.store.dispatch(new LoadBookAction());
    }
}
