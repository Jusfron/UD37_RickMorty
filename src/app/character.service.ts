import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  retornar(id:number) {
    return this.http.get("https://rickandmortyapi.com/api/character/"+id);
  }
}
