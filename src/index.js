function fazGet (url){
    let request =  new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
};
var pok = 0;

function chamandoNomePokemon(  numero = 0 ) {
  let data = fazGet("https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150")
  let pokemon = JSON.parse(data)
    
   
  let numeroPokemon = numero
  
  let pokemonsArry = pokemon.results
  
  let nomePokemons = pokemonsArry[numeroPokemon].name
  
  let urlPokemon = pokemonsArry[numeroPokemon].url
  
  return obj = {
    urlPokemon,
    numeroPokemon
  }
 

};


 
 function proximo(){
  console.log( pok++)
 
  document.getElementById("imagens").src=chamandoUrlPokemon().imagem 
    return pok
}
function anterior(){
  console.log( pok--)
 //let numero = 1++
   //console.log(chamandoNomePokemon( numero ))
   //chamandoNomePokemon( numero )
  document.getElementById("imagens").src=chamandoUrlPokemon().imagem 
    return pok
}

//console.log (chamandoNomePokemon().numeroPokemon)
function chamandoUrlPokemon(  ) {

    
    let urlPokemonSelec = chamandoNomePokemon(pok).urlPokemon
    let pokemonGet = fazGet(urlPokemonSelec)
    
    let infomacaoPokemon = JSON.parse(pokemonGet)
    //console.log(infomacaoPokemon)
    let imagemPokemon = infomacaoPokemon.sprites["other"]

    let svgPokemon = imagemPokemon['dream_world']
    let imagem = svgPokemon.front_default
   
    console.log(imagem)
    return obj2 = {
      imagem,
     
    }
      
}








 

chamandoNomePokemon()

