import { Injectable } from '@angular/core';
import { BookItem } from '../store/models/book-item.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    private BOOK_URL =
        'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

    constructor(private http: HttpClient) {}

    getBooksItems() {
        return this.http.get(this.BOOK_URL).pipe(
            map((response: Response): BookItem[] => {
                let data = response['items'];
                // Does something on data.data
                data = data.map((item) => {
                    return {
                        id: item.id,
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors[0],
                        publisher: 'Simon and Schuster',
                        publishedDate: item.volumeInfo.publishedDate,
                    };
                });

                return data;
            })
        );
    }
    // addShoppingItem(shoppingItem: ShoppingItem) {
    //   return this.http.post(this.BOOK_URL, shoppingItem)
    //     .pipe(
    //       delay(500)
    //     )
    // }

    // deleteShoppingItem(id: string) {
    //   return this.http.delete(`${this.BOOK_URL}/${id}`)
    //     .pipe(
    //       delay(500)
    //     )
    // }
}
