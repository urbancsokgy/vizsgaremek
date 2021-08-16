import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly backendUrl: string = 'http://127.0.0.1:3000';
  public readonly apiUrl: string = `${this.backendUrl}/api`;

  constructor() { }
}
