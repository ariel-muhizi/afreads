import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  authors: string[] = [];
  titles: string[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getPopularAuthors();
    this.getPopularReads();
  }

  // Get popular authors names from the books service
  getPopularAuthors(): void {
    this.booksService.getBooks().subscribe(books => {
      // Get unique authors
      this.authors = books.filter(book => book.PopularAuthor).map(book => book.Author).filter((author, index, self) => self.indexOf(author) === index);
    });
  }

  // Get popular authors names from the books service
  getPopularReads(): void {
    this.booksService.getBooks().subscribe(books => {
      // Get unique authors
      this.titles = books.filter(book => book.PopularReads).map(book => book.Title);
    });
  }
}
