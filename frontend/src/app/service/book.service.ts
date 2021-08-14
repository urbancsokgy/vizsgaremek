import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookEdit } from '../model/book';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl = `${this.config.apiUrl}/books`;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  findById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  update(book: BookEdit): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${book._id}`, book);
  }
}
