import { Component, Input } from '@angular/core';
import { PokemonInterface } from '../../shared/entities';



@Component({
  selector: 'app-fiche-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './fiche-pokemon.component.html',
  styleUrl: './fiche-pokemon.component.css'
})
export class FichePokemonComponent {

  @Input() pokemonEnfant:PokemonInterface | undefined;
}
