import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FichePokemonComponent } from './fiche-pokemon/fiche-pokemon.component';
import { Error404Component } from './error404/error404.component';
import { PokemonRedirectComponent } from './pokemon-redirect/pokemon-redirect.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'pokemon',component:PokedexComponent},
    {path:'fiche',component:FichePokemonComponent},
    {path:"fiche/:id", component:PokemonRedirectComponent},
    {path:'**', component: Error404Component}
    
];
