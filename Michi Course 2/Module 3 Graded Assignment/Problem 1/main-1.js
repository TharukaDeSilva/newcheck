// ===== YOUR TASK =====
// Define searchPokemon(pokemonName): fetch the Pokemon from the PokeAPI and
// show its name and type on the page. Full details are in the problem
// description.
//
// TODO: write searchPokemon below -- fetch
//       https://pokeapi.co/api/v2/pokemon/<name> (lowercased), await the
//       JSON, and put the name in #pokemon-name and the first type in
//       #pokemon-type.

async function searchPokemon(pokemonName) {
    let lowerCaseName = pokemonName.toLowerCase();
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + lowerCaseName);
    let pokemonData = await response.json();
    console.log(pokemonData)

    document.querySelector('#pokemon-name').textContent = pokemonData.name.toUpperCase();
     document.querySelector('#pokemon-type').textContent = pokemonData.types[0].type.name

    
}

const dataIn = document.querySelector('#pokemon-input');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    searchPokemon(dataIn.value)
})