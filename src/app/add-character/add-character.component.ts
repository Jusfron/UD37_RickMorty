import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character.model';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };
  submitted = false;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image,
    };

  this.charactersService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    };
  }

}
