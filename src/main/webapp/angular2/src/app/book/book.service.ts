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
}
