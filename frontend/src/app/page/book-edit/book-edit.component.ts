import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Book, BookEdit } from 'src/app/model/book';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  readonly book$ = this.activatedRoute.params.pipe(
    map(params => params.id as string),
    switchMap(id => this.bookService.findById(id)),
    map(bookEntity => {
      const book: BookEdit = {
        ...bookEntity,
        author: bookEntity.author._id,
        category: bookEntity.category?._id
      }

      return book;
    })
  );

  readonly authors$ = this.authorService.getAll();
  readonly categories$ = this.categoryService.getAll();

  private _error: string|null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  get error(): string|null {
    return this._error;
  }

  onSave(book: BookEdit): void {
    this.bookService.update(book).toPromise()
      .then(() => this.router.navigate(['/books']))
      .catch((err: HttpErrorResponse) => this._error = err.error?.message || 'Failed to update book');
  }
}
