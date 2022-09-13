import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'characters', component: CharactersComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CharactersComponent, AboutComponent]
