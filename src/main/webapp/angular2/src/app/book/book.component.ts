import { Component, OnInit } from '@angular/core';

import { Book } from './book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    book: Book;

    constructor() { }

    ngOnInit() {
        this.book = new Book(0, "", "", "", "", "", "");
    }

    saveBook(): void {
        console.log(this.book);
    }
}
