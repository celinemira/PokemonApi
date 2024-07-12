import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PokemonInterface } from '../../shared/entities';
import { FichePokemonComponent } from '../fiche-pokemon/fiche-pokemon.component';
import { PokemonService } from '../../shared/services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [NgFor, FichePokemonComponent, RouterLink],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit{

  pokemons:PokemonInterface[]=[];
  pokemonParent:PokemonInterface | undefined;

  constructor(private service:PokemonService){}

  ngOnInit(): void {
    this.getPokemons();

  }

  getPokemons(){
    this.service.fetchAll().subscribe(data =>{
      this.pokemons = data.slice(1,152);
      console.log(data);
    })
  }

  selectedPokemon(pokemon:PokemonInterface){
    this.pokemonParent = pokemon;
    console.log(this.getPokemons)
  }
}
