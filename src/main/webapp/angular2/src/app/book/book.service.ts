import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookServiceURL = "http://localhost:8081/rest/books";

  constructor( private http:HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookServiceURL);
  }

  getBook(id): Observable<Book> {
    return this.http.get<Book>(this.bookServiceURL + "/" + id);
  }

  deleteBook(id): Observable<any> {
    return this.http.delete<any>(this.bookServiceURL + "/" + id);
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookServiceURL, book);
  }
}
