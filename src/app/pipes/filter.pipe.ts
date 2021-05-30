import { Pipe, PipeTransform } from '@angular/core';
import { BookItem } from '../store/models/book-item.model';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(value: Array<BookItem>, searchTerm: string): any {
        return value.filter((search) => {
            return (
                search.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                search.author
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                search.publisher
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                search.publishedDate
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
        });
    }
}
