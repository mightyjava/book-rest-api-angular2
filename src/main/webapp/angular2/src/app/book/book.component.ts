import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    book: Book;

    constructor(
      private bookService:BookService,
      private route:ActivatedRoute, private router:Router) { }

    ngOnInit() {
      this.getBook();
    }

    getBook(): void {
      const id = +this.route.snapshot.paramMap.get("id");
      if(id != 0) {
        this.bookService.getBook(id).subscribe(book => this.book = book);
      } else {
        this.book = new Book(0, "", "", "", "", "", "");
      }
    }

    saveBook(): void {
        console.log(this.book);
        this.bookService.saveBook(this.book).subscribe(book => this.book = book);
        console.log(this.book.title+" saved successfully");
        this.router.navigate(["/list"]);
    }
}
