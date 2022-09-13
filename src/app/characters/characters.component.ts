import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/"+randomChars())
      .subscribe(
        result => {
          this.characters = result;
        },
        error => {
          console.log('oh no');
        }
      )
  }

}

function randomChars () {
  
  let result:string = "";
  for (let i = 0; i < 8; i++) {
    result = result + (Math.floor(Math.random()*826+1)).toString() + ",";
  }
  result = result.slice(0, result.length-1);
  return result;
}
