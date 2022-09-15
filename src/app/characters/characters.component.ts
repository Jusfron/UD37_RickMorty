import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.charactersService.getAll()
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character, index: number): void {
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  removeAllCharacters(): void {
    this.charactersService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        }, error => {
          console.log(error);
        });
      
  }

  searchName(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.charactersService.findByName(this.name)
      .subscribe (
      data => {
        this.characters = data;
        console.log(data);
      }, 
      error => {
        console.log(error);
      });
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
