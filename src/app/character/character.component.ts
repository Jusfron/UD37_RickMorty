import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character:any = null;
  id : any;
  message = '';
  constructor(private characterServicio: CharacterService, private route: ActivatedRoute, private router: Router, private charactersService: CharactersService) {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")||"[]");
   }

  ngOnInit(): void {
    this.message = '';
    this.charactersService.get(this.id)
      .subscribe(
        data => {
          this.character = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateCharacter(): void {
    this.message = '';

    this.charactersService.update(this.character.id, this.character)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : "Updated successfully!";
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteCharacter(): void {
    this.charactersService.delete(this.character.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
