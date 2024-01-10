const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn)
// const pkmnIds = pokémon.map(p => p.id);
// console.log(pkmnIds);


// **1**
// const pkmnid = pokémon.filter(p => p.id %3 == 0);
// console.log(pkmnid);

// **2**
// const pkmnfire = pokémon.filter(p => p.types.includes("fire");
// console.log(pkmnfire);

// **3**
// const pokemonWithMultipleTypes = pokémon.filter(pokemon => pokemon.types.length > 1);
// console.log(pokemonWithMultipleTypes);

// **4**
// const namePkmn = pokémon.map(p => p.name );
// console.log(namePkmn);

//  **5**
// const namePkmnId = pokémon.filter (p => p.id >= 99).map(p => p.name );
// console.log(namePkmnId);

// **5**
// const pkmnPoison = pokémon.filter(p => p.types.includes("poison")).map(p => p.name );
// console.log(pkmnPoison);

// **6**
// const firstTypeOfPokemonWithFlyingSecondType = pokémon
//   .filter(pokemon => pokemon.types.length > 1 && pokemon.types[1] === "flying")
//   .map(pokemon => pokemon.types[0]);
// console.log(firstTypeOfPokemonWithFlyingSecondType);

// **7**
// const pkmnNormal = pokémon.filter(p => p.types.includes("normal").length);
// console.log(pkmnNormal);