import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../shared/interface/books';

@Injectable({
  providedIn: 'root',
})
export class LibraryManagementService {
  constructor(private http: HttpClient) {}

  public getBooks(): Promise<any[]> {
    return this.http
      .get<any>('assets/data.json')
      .toPromise()
      .then((res) => <Book[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
