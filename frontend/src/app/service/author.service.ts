import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private readonly baseUrl = `${this.config.apiUrl}/authors`;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {}

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseUrl);
  }
}
