import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character:any = null;
  id : any;
  constructor(private characterServicio: CharacterService, private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")||"[]");
   }

  ngOnInit(): void {
    this.characterServicio.retornar(this.id)
    .subscribe(
      result => {
        this.character = result;
      },
      error => {
        console.log('oh no');
      }
    )
  }

}
