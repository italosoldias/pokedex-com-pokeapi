function fazGet (url){
    let request =  new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
};


function chamandoNomePokemon(numero = 2  ) {
  let data = fazGet("https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150")
  let pokemon = JSON.parse(data)
    //console.log(pokemon)

    // to pegndoa lista de pokemons
  
  let numeroPokemon = 5
  
  let pokemonsArry = pokemon.results
   // console.log(pokemonsArry)
  //to separando o nome
  let nomePokemons = pokemonsArry[numeroPokemon].name
  //console.log (numeroPokemon)
  let urlPokemon = pokemonsArry[numeroPokemon].url
  let incrementar = false
  //let setNumeroSelec ;
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }
  return obj = {
    urlPokemon,
    numeroPokemon
  }
 

};
//console.log (chamandoNomePokemon().numeroPokemon)
function chamandoUrlPokemon( ) {

    //let numeroSelec = numeroPK
    //numeroSelec = 20
    
    let urlPokemonSelec = chamandoNomePokemon().urlPokemon
    let pokemonGet = fazGet(urlPokemonSelec)
    
    let infomacaoPokemon = JSON.parse(pokemonGet)
    //console.log(infomacaoPokemon)
    let imagemPokemon = infomacaoPokemon.sprites["other"]

    let svgPokemon = imagemPokemon['dream_world']
    let imagem = svgPokemon.front_default
   
    //console.log(imagem)
    return obj2 = {
      imagem,
     // numeroSelec,
      //setNumeroSelec
    }
      
}


let numero = 1
//chamandoUrlPokemon(1)

function opa(){
  let numero =1
  return numero
  
}
//let botao = document.getElementById("btnEsquerda1")
//console.log(botao)
  //botao.addEventListener("click", function(){
 // console.log( chamandoUrlPokemon()  )
   
   
   
   //let incrementa = chamandoNomePokemon(0++)
  //document.getElementById("imagens").src=chamandoUrlPokemon() 
//})
 function proximo(){
   //console.log( chamandoUrlPokemon()  )
   
//    let opa = chamandoUrlPokemon()

    
  document.getElementById("imagens").src=chamandoUrlPokemon().imagem 
    chamandoNomePokemon().setNumeroSelec
}

// preciso incrementar e decrementar o GET do endpoint pokemon
chamandoNomePokemon()

//proximo()