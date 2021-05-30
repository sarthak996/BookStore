import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddBookAction } from '../store/actions/book.actions';
import { BookItem } from '../store/models/book-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state.model';
@Component({
    selector: 'app-book-add-item',
    templateUrl: './book-add-item.component.html',
    styleUrls: ['./book-add-item.component.scss'],
})
export class BookAddItemComponent implements OnInit {
    activateModal: boolean = false;
    addBookForm: FormGroup;
    submitted = false;
    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.addBookForm = this.formBuilder.group({
            title: ['', Validators.required],
            author: ['', Validators.required],
            publisher: ['', [Validators.required]],
        });
    }

    get f() {
        return this.addBookForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addBookForm.invalid) {
            return;
        }

        this.addItem(this.addBookForm.value);
        this.addBookForm.reset();
        this.toggleModal();
    }

    toggleModal() {
        this.activateModal = !this.activateModal;
        this.submitted = false;
    }

    addItem(payload: BookItem) {
        payload.publishedDate = this.getCurrentDate();
        payload.id = '123123';

        this.store.dispatch(new AddBookAction(payload));
    }

    getCurrentDate() {
        let current_datetime = new Date();
        let formatted_date =
            current_datetime.getFullYear() +
            '-' +
            (current_datetime.getMonth() + 1) +
            '-' +
            current_datetime.getDate();

        return formatted_date;
    }
}
