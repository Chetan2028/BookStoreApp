import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit {

  @Input() booksArray: Array<any> = [];
  constructor(
    private bookService : BookService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBook().subscribe((response) => {
      console.log(response);
      this.booksArray = response['data'];
      console.log(' books array ', this.booksArray);
    });
  }

  addcart(book) {
    book.added = false;
    for (let b of this.booksArray) {
      if (book.product_id == b.product_id) {
        book.added = true;
      }
    }
    this.bookService.addcart(book).subscribe((res) => {
      console.log('data in cart', res);
    });
  }
}
