
export interface PokemonInterface {
    pokedex_id:number,
    generation:number,
    category:string,
    name:{
        fr:string,
        jp:string;
    };

    sprites:SpritesPokemon;

    types:TypesPokemon[];
    
    talents:TalentsPokemon[];

}

export interface SpritesPokemon{
        regular:string,
        shiny:string;
}
export interface TypesPokemon {

    name:string;
    image:string;

}

export interface TalentsPokemon {
    name:string;
    tc:string;

}