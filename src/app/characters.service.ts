import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://ud31-rickmorty-backend.herokuapp.com/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(baseUrl);
  }

  get(id: any): Observable<Character>  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Character[]> {
    return this.http.get<Character[]>(`${baseUrl}?name=${name}`);
  }
}
