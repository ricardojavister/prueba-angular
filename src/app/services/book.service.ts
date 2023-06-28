import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      Id: 1,
      Name: 'Book1',
      Description: 'Book 1 Description',
    },
    {
      Id: 2,
      Name: 'Book2',
      Description: 'Book 2 Description',
    },
    {
      Id: 3,
      Name: 'Book3',
      Description: 'Book 3 Description',
    },
  ];

  private myBooks = new BehaviorSubject<Book[]>([]);
  mybooks$ = this.myBooks.asObservable();

  constructor() {
    this.myBooks.next(this.books);
  }

  public add(book: Book) {
    this.books.push(book);
    this.myBooks.next(this.books);
  }
}
