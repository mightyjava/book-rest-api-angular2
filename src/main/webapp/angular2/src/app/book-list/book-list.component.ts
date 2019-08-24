import { Component, OnInit } from '@angular/core';

import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    title = 'Book List';
    
    noBooks = "No Books Available";

    loadingMessage = "Loading Data, Please wait...";

    books : Book[];

    constructor(private bookService:BookService) { }

    ngOnInit() {
      this.getBooks();
    }

    getBooks(): void {
      this.bookService.getBooks().subscribe(books => this.books = books);
    }

}
