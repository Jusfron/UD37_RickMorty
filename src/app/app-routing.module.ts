import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './add-character/add-character.component';

const routes: Routes = [
  {path:'characters', component: CharactersComponent},
  {path:'about', component: AboutComponent},
  {path:'character/:id', component: CharacterComponent},
  {path:'add-character', component: AddCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CharactersComponent, AboutComponent]
