import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookItemsComponent } from './book-items/book-items.component';
import { BookEffects } from './store/effects/book.effects';
import { BookReducer } from './store/reducers/books.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { BookAddItemComponent } from './book-add-item/book-add-item.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BookItemsComponent,
        HeaderComponent,
        BookAddItemComponent,
        FilterPipe,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        StoreModule.forRoot({ book: BookReducer }),
        EffectsModule.forRoot([BookEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
