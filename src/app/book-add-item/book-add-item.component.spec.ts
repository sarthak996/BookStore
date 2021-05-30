import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookAddItemComponent } from './book-add-item.component';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from '../store/reducers/books.reducers';

describe('BookAddItemComponent', () => {
    let component: BookAddItemComponent;
    let fixture: ComponentFixture<BookAddItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                StoreModule.forRoot({ book: BookReducer }),
            ],
            declarations: [BookAddItemComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookAddItemComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.addBookForm.valid).toBeFalsy();
    });

    it('title field validity', () => {
        let title = component.addBookForm.controls['title'];
        expect(title.valid).toBeFalsy();

        title.setValue('');
        expect(title.hasError('required')).toBeTruthy();
    });

    it('author field validity', () => {
        let author = component.addBookForm.controls['author'];
        expect(author.valid).toBeFalsy();

        author.setValue('');
        expect(author.hasError('required')).toBeTruthy();
    });

    it('publisher field validity', () => {
        let publisher = component.addBookForm.controls['publisher'];
        expect(publisher.valid).toBeFalsy();

        publisher.setValue('');
        expect(publisher.hasError('required')).toBeTruthy();
    });
});
