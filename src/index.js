function fazGet (url){
    let request =  new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
};
var pok = -1;
var nomeTipoCaiaalta = pegaTipoPokemon()


function chamandoNomePokemon(  numero ) {
  //primeira requisicao para selecionar o pokemon

  let data = fazGet("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
  let pokemon = JSON.parse(data)
       
  let numeroPokemon = numero
  
  let pokemonsArry = pokemon.results
  
  let nomePokemons = pokemonsArry[numeroPokemon].name
   
  let urlPokemon = pokemonsArry[numeroPokemon].url
  
  return obj = {
    urlPokemon,
    numeroPokemon,
    nomePokemons
  }
 
};


 // evento de click para modificar imagem e tipos
 function proximo(){
  console.log( pok++)
  //console.log(chamandoUrlPokemon(  ).infomacaoPokemon)
  
  
  pegaTipoPokemon()
  let quantidadeTipos = alteraCor().length
  let nomePKCaixaBaixa = chamandoNomePokemon(pok).nomePokemons
  let nomePKCaixaAlta = nomePKCaixaBaixa.toUpperCase();
  
  
  if(quantidadeTipos == 2) {
    // foi alterada a validacao onde antes era verificado se o tamanho do arry era menor que 2 essa validacao 
    document.getElementById("tipo1").style.display = 'inline-table';
    document.getElementById("tipo2").style.display = 'inline-table';
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0];
    document.querySelector("#tipo2").innerHTML = pegaTipoPokemon()[1];
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
    document.getElementById("tipo2").style.backgroundColor = alteraCor()[1];
    document.querySelector("#nomePK").innerHTML = nomePKCaixaAlta;
     
  } else {
    document.getElementById("tipo1").style.display = 'inline-table';
    document.getElementById("tipo2").style.display = 'none';
    document.querySelector("#nomePK").innerHTML = nomePKCaixaAlta;
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0];
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
  };
    document.getElementById("imagens").src=pegaImagemPokemom()
  
    return pok
};


function anterior(){
  // evemto de click pra voltar o pokemon anteriror com os atributos
   pok--
 
  document.getElementById("imagens").src=pegaImagemPokemom()
  pegaTipoPokemon()
  let quantidadeTipos = alteraCor().length
  let nomePKCaixaBaixa = chamandoNomePokemon(pok).nomePokemons
  let nomePKCaixaAlta = nomePKCaixaBaixa.toUpperCase();
  

  if(quantidadeTipos == 2) {
    document.getElementById("tipo1").style.display = 'inline-table';
    document.getElementById("tipo2").style.display = 'inline-table';
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0];
    document.querySelector("#tipo2").innerHTML = pegaTipoPokemon()[1];
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
    document.getElementById("tipo2").style.backgroundColor = alteraCor()[1];
    document.querySelector("#nomePK").innerHTML = nomePKCaixaAlta;
    
     
  } else {
    document.getElementById("tipo1").style.display = 'inline-table';
    document.getElementById("tipo2").style.display = 'none';
    document.querySelector("#nomePK").innerHTML = nomePKCaixaAlta;
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0];
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
  };

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
        const elementos = element.type["name"].toUpperCase();
       // console.log(elementos);
        
        arryTipos.push(elementos);
        
        
      } 
      break;
  
    default : arryTipos.push(tipos["0"].type["name"].toUpperCase())

      break;
  }


  
  return arryTipos
  //console.log(tipoPokemon)
}

function alteraCor (){
  
  let tiposCores = {
    fire :"#FF0000",
    grass : "#00FF00",
    water : "#00BFFF",
    ice :  "#58FAF4",
    bug :  "#BFFF00",
    normal :  "#848484",
    sheel : "#6E6E6E",
    poison : "#8904B1",
    dragon :  "#DF013A",
    electric : "#FFFF00",
    ground :  "#FACC2E",
    rock :  "#61380B",
    ghost : "#380B61",
    flying: "#E0F2F7",
    fighting : "#FF4000",
    psychic :  "#FE2EF7",
    dark : "#000000",
    fairy :  "#FA58F4"

  }

  let corColocar= [];

  //console.log(tiposCores)
   
  let arryTiposPKSelec = pegaTipoPokemon()
  
  
  switch (arryTiposPKSelec.length) {
    case 2:

    // procurar uma forma melhor de fazer essa validação
      switch (arryTiposPKSelec[0]) {
        case "GRASS":
            corColocar.push(tiposCores.grass)
          break;
        case "FIRE":
            corColocar.push(tiposCores.fire)
          break;
        case "WATER":
            corColocar.push(tiposCores.water)
          break;
        case "ICE":
            corColocar.push(tiposCores.ice)
          break;
        case "BUG":
            corColocar.push(tiposCores.bug)
          break;          
        case "NORMAL":
            corColocar.push(tiposCores.normal)
          break;     
        case "SHEEL":
            corColocar.push(tiposCores.sheel)
          break;
        case "POISON":
            corColocar.push(tiposCores.poison)
          break;
        case "DRAGON":
            corColocar.push(tiposCores.dragon)
          break;
        case "ELECTRIC":
           corColocar.push(tiposCores.electric)
          break;
        case "GROUND":
           corColocar.push(tiposCores.ground)
          break;
        case "ROCK":
           corColocar.push(tiposCores.rock)
          break;  
        case "GHOST":
           corColocar.push(tiposCores.ghost)
          break;   
        case "FLYING":
           corColocar.push(tiposCores.flying)
          break;   
        case "FIGHTING":
           corColocar.push(tiposCores.fighting)
          break;   
        case "PSYCHIC":
           corColocar.push(tiposCores.psychic)
          break;   
        case "DARK":
           corColocar.push(tiposCores.dark)
          break;   
        case "FAIRY":
           corColocar.push(tiposCores.fairy)
          break;                                     
        default: console.log("deu ruim")
          break;
      };
      
      switch (arryTiposPKSelec[1]) {
        case "GRASS":
            corColocar.push(tiposCores.grass)
          break;
        case "FIRE":
            corColocar.push(tiposCores.fire)
          break;
        case "WATER":
            corColocar.push(tiposCores.water)
          break;
        case "ICE":
            corColocar.push(tiposCores.ice)
          break;
        case "BUG":
            corColocar.push(tiposCores.bug)
          break;          
        case "NORMAL":
            corColocar.push(tiposCores.normal)
          break;     
        case "SHEEL":
            corColocar.push(tiposCores.sheel)
          break;
        case "POISON":
            corColocar.push(tiposCores.poison)
          break;
        case "DRAGON":
            corColocar.push(tiposCores.dragon)
          break;
        case "ELECTRIC":
           corColocar.push(tiposCores.electric)
          break;
        case "GROUND":
           corColocar.push(tiposCores.ground)
          break;
        case "ROCK":
           corColocar.push(tiposCores.rock)
          break;  
        case "GHOST":
           corColocar.push(tiposCores.ghost)
          break;   
        case "FLYING":
           corColocar.push(tiposCores.flying)
          break;   
        case "FIGHTING":
           corColocar.push(tiposCores.fighting)
          break;   
        case "PSYCHIC":
           corColocar.push(tiposCores.psychic)
          break;   
        case "DARK":
           corColocar.push(tiposCores.dark)
          break;   
        case "FAIRY":
           corColocar.push(tiposCores.fairy)
          break;                                     
        default: console.log("deu ruim")
          break;
      };

      break;
  
    default:  switch (arryTiposPKSelec[0]) {
      case "GRASS":
            corColocar.push(tiposCores.grass)
          break;
        case "FIRE":
            corColocar.push(tiposCores.fire)
          break;
        case "WATER":
            corColocar.push(tiposCores.water)
          break;
        case "ICE":
            corColocar.push(tiposCores.ice)
          break;
        case "BUG":
            corColocar.push(tiposCores.bug)
          break;          
        case "NORMAL":
            corColocar.push(tiposCores.normal)
          break;     
        case "SHEEL":
            corColocar.push(tiposCores.sheel)
          break;
        case "POISON":
            corColocar.push(tiposCores.poison)
          break;
        case "DRAGON":
            corColocar.push(tiposCores.dragon)
          break;
        case "ELECTRIC":
           corColocar.push(tiposCores.electric)
          break;
        case "GROUND":
           corColocar.push(tiposCores.ground)
          break;
        case "ROCK":
           corColocar.push(tiposCores.rock)
          break;  
        case "GHOST":
           corColocar.push(tiposCores.ghost)
          break;   
        case "FLYING":
           corColocar.push(tiposCores.flying)
          break;   
        case "FIGHTING":
           corColocar.push(tiposCores.fighting)
          break;   
        case "PSYCHIC":
           corColocar.push(tiposCores.psychic)
          break;   
        case "DARK":
           corColocar.push(tiposCores.dark)
          break;   
        case "FAIRY":
           corColocar.push(tiposCores.fairy)
          break;                                     
      default: console.log("deu ruim")
        break;
    };

      break;
  }
  
  return corColocar

  // criar um switch para mandar a informação da cor para o botão
}


//pegaImagemPokemom()
//pegaTipoPokemon()








 



