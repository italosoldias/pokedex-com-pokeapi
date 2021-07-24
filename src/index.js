function fazGet (url){
    let request =  new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
};
var pok = -1;

function chamandoNomePokemon(  numero ) {
  //primeira requisicao para selecionar o pokemon

  let data = fazGet("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
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


 // evento de click para modificar imagem e tipos
 function proximo(){
  console.log( pok++)
  //console.log(chamandoUrlPokemon(  ).infomacaoPokemon)
  console.log(pegaTipoPokemon())
  alteraCor()
  document.getElementById("imagens").src=pegaImagemPokemom()
  //document.getElementById("tipo1").style.backgroundColor = alteraCor().dragon.cor
    return pok
};


function anterior(){
  // evemto de click pra voltar o pokemon anteriror com os atributos
  console.log( pok--)
 
  document.getElementById("imagens").src=pegaImagemPokemom()
  
    return pok
}


function chamandoUrlPokemon(  ) {
  // essa função recebe os dados do pokemon
    
    let urlPokemonSelec = chamandoNomePokemon(pok ).urlPokemon
    let pokemonGet = fazGet(urlPokemonSelec)
    
    let infomacaoPokemon = JSON.parse(pokemonGet)
   
    return obj2 = {
      
      infomacaoPokemon
    }
      
}


function pegaImagemPokemom () {

// funcao para buscar a imagem svg retornada do json

//console.log(chamandoUrlPokemon(  ).infomacaoPokemon)

  let chamandoUrlInformacao = chamandoUrlPokemon().infomacaoPokemon
  let imagemPokemon = chamandoUrlInformacao.sprites["other"]

  let svgPokemon = imagemPokemon['dream_world']
  let imagem = svgPokemon.front_default
  //console.log(imagema)
  return imagem
}

function pegaTipoPokemon(){

// funcao para selecionar o tipo do pokemon

  let chamandoUrlInformacao = chamandoUrlPokemon().infomacaoPokemon
  
  let quantidadeTipoPokemon =   chamandoUrlInformacao.types.length
  let arryTipos = []
  let tipos = chamandoUrlInformacao.types
  
  
  switch (quantidadeTipoPokemon) {
    case  2 :
      for (let index = 0; index < tipos.length; index++) {
        const element = tipos[index];
        const elementos = element.type["name"];
       // console.log(elementos);
        arryTipos.push(elementos);
        
        
      } 
      break;
  
    default : arryTipos.push(tipos["0"].type["name"])

      break;
  }


  
  return arryTipos
  //console.log(tipoPokemon)
}

function alteraCor (){
  
  let TiposCores = {
    fire: { tipo: "fire",
        cor :"#FF0000"},
    grass :{ tipo: "grass",
        cor: "#00FF00"},
    walter : { tipo: "walter",
      cor: "#00BFFF"},
    ice : { tipo: "ice",
      cor: "#58FAF4"},
    bug : { tipo: "bug",
      cor: "#BFFF00"},
    normal : { tipo: "normal",
      cor: "#848484"},
    sheel : { tipo: "sheel",
      cor: "#6E6E6E"},
    poison : { tipo: "poison",
      cor:"#8904B1"},
    dragon : { tipo: "dragon",
      cor: "#DF013A"},
    eletric : { tipo: "eletric",
      cor: "#FFFF00"},
    ground : { tipo: "ground",
      cor: "#FACC2E"},
    rock : { tipo: "rock",
      cor: "#61380B"},
    ghost : { tipo: "ghost",
      cor: "#380B61"},
    flying: { tipo: "flying",
      cor: "#E0F2F7"},
    fighting : { tipo: "fighting",
      cor: "#FF4000"},
    psychic : { tipo: "psychic",
      cor: "#FE2EF7"},
    dark : { tipo: "dark",
      cor: "#000000"},
    fairy : { tipo: "fairy",
      cor: "#FA58F4"}

  }

  console.log(TiposCores)
   let arry = [];
  let arryTiposPKSelec = pegaTipoPokemon()
  
  switch (arryTiposPKSelec.length) {
    case 2:
      for (let index = 0; index < arryTiposPKSelec.length; index++) {
        const element = arryTiposPKSelec[index];
        

      }
      
      break;
  
    default: console.log("tem algo errado")
      break;
  }
   return TiposCores

  // criar um switch para mandar a informação da cor para o botão
}


pegaImagemPokemom()
pegaTipoPokemon()








 

chamandoNomePokemon()

