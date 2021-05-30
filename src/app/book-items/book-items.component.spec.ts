import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from '../store/reducers/books.reducers';
import { BookItemsComponent } from './book-items.component';
import { FilterPipe } from '../pipes/filter.pipe';

describe('BookItemsComponent', () => {
    let component: BookItemsComponent;
    let fixture: ComponentFixture<BookItemsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({ book: BookReducer })],
            declarations: [BookItemsComponent, FilterPipe],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BookItemsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
