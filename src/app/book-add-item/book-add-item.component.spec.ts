import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddItemComponent } from './book-add-item.component';

describe('BookAddItemComponent', () => {
  let component: BookAddItemComponent;
  let fixture: ComponentFixture<BookAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
