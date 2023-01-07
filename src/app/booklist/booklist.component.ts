import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';



@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {

  books: Book[] = [];
  filterBy: string = "";
  filterValue: string = "";

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.filterBy = window.location.search.split('=')[0].replace('?', '');
    this.filterValue = decodeURIComponent(window.location.search.split('=')[1]);
    this.getBooks(this.filterBy, this.filterValue);
  }

  getBooks(filterBy: string, filterValue: string): void {
    this.booksService.filterBooks(filterBy, filterValue).subscribe(books => this.books = books);
  }
}
