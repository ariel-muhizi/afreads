import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from '../models/book';


@Injectable({ providedIn: 'root' })
export class BooksService {

  private BooksUrl = 'api/books';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }



  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BooksUrl)
      .pipe(tap(_ => this.log('fetched books')),
        catchError(this.handleError<Book[]>('getBooks', []))
      )
  }

  filterBooks(filterBy: string, filterValue: string): Observable<Book[]> {
    // check if filterBy is not empty
    if (filterBy !== '') {
      // if filterBy is not empty, return filtered books
      return this.http.get<Book[]>(this.BooksUrl).pipe(
        map(books => books.filter(book => {
          switch (filterBy.toLocaleLowerCase()) {
            case 'author':
              // if author contains filterValue, return book
              return book.Author.includes(filterValue);
            case 'category':
              return book.Category.includes(filterValue);
            case 'popularauthor':
              // check if filterValue is true or false and assign it to term
              const popularAuthor = filterValue === 'true' ? true : false;
              return book.PopularAuthor === popularAuthor;
            case 'popularreads':
              const popularReads = filterValue === 'true' ? true : false;
              return book.PopularReads === popularReads;
            case 'title':
              return book.Title.includes(filterValue);
            default:
              return book;
          }
        })));
    }
    return this.http.get<Book[]>(this.BooksUrl)
      .pipe(
        tap(_ => this.log('fetched books')),
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }

  getBookNo404(id: number): Observable<Book> {
    const url = `${this.BooksUrl}/?id=${id}`;
    return this.http.get<Book[]>(url)
      .pipe(
        map(books => books[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} Book id=${id}`);
        }),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`BooksService: ${message}`);
  }
}