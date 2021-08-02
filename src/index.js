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
  pegaTipoPokemon()
  let quantidadeCores = alteraCor().length
  
 
  console.log("essa é a quantidade de cores" + quantidadeCores)
  
  if(quantidadeCores < 2) {
    document.getElementById("tipo2").style.display = 'none';
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0]
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
    
     
  } else 
  document.getElementById("tipo2").style.display = 'inline-table';
  document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0]
  document.querySelector("#tipo2").innerHTML = pegaTipoPokemon()[1]
  document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
  document.getElementById("tipo2").style.backgroundColor = alteraCor()[1];

  document.getElementById("imagens").src=pegaImagemPokemom()
  
    return pok
};


function anterior(){
  // evemto de click pra voltar o pokemon anteriror com os atributos
  console.log( pok--)
 
  document.getElementById("imagens").src=pegaImagemPokemom()
  pegaTipoPokemon()
  let quantidadeCores = alteraCor().length
  console.log("essa é a quantidade de cores" + quantidadeCores)
  
  if(quantidadeCores < 2) {
    document.getElementById("tipo2").style.display = 'none';
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0]
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
    
     
  } else 
    document.getElementById("tipo2").style.display = 'inline-table';
    document.querySelector("#tipo1").innerHTML = pegaTipoPokemon()[0]
    document.querySelector("#tipo2").innerHTML = pegaTipoPokemon()[1]
    document.getElementById("tipo1").style.backgroundColor = alteraCor()[0];
    document.getElementById("tipo2").style.backgroundColor = alteraCor()[1];

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
  
  console.log(arryTiposPKSelec)
  switch (arryTiposPKSelec.length) {
    case 2:

    // procurar uma forma melhor de fazer essa validação
      switch (arryTiposPKSelec[0]) {
        case "grass":
            corColocar.push(tiposCores.grass)
          break;
        case "fire":
            corColocar.push(tiposCores.fire)
          break;
        case "water":
            corColocar.push(tiposCores.water)
          break;
        case "ice":
            corColocar.push(tiposCores.ice)
          break;
        case "bug":
            corColocar.push(tiposCores.bug)
          break;          
        case "normal":
            corColocar.push(tiposCores.normal)
          break;     
        case "sheel":
            corColocar.push(tiposCores.sheel)
          break;
        case "poison":
            corColocar.push(tiposCores.poison)
          break;
        case "dragon":
            corColocar.push(tiposCores.dragon)
          break;
        case "electric":
           corColocar.push(tiposCores.electric)
          break;
        case "ground":
           corColocar.push(tiposCores.ground)
          break;
        case "rock":
           corColocar.push(tiposCores.rock)
          break;  
        case "ghost":
           corColocar.push(tiposCores.ghost)
          break;   
        case "flying":
           corColocar.push(tiposCores.flying)
          break;   
        case "fighting":
           corColocar.push(tiposCores.fighting)
          break;   
        case "psychic":
           corColocar.push(tiposCores.psychic)
          break;   
        case "dark":
           corColocar.push(tiposCores.dark)
          break;   
        case "fairy":
           corColocar.push(tiposCores.fairy)
          break;                                     
        default: console.log("deu ruim")
          break;
      };
      
      switch (arryTiposPKSelec[1]) {
        case "grass":
            corColocar.push(tiposCores.grass)
          break;
        case "fire":
            corColocar.push(tiposCores.fire)
          break;
        case "water":
            corColocar.push(tiposCores.water)
          break;
        case "ice":
            corColocar.push(tiposCores.ice)
          break;
        case "bug":
            corColocar.push(tiposCores.bug)
          break;          
        case "normal":
            corColocar.push(tiposCores.normal)
          break;     
        case "sheel":
            corColocar.push(tiposCores.sheel)
          break;
        case "poison":
            corColocar.push(tiposCores.poison)
          break;
        case "dragon":
            corColocar.push(tiposCores.dragon)
          break;
        case "electric":
           corColocar.push(tiposCores.electric)
          break;
        case "electric":
           corColocar.push(tiposCores.electric)
          break;
        case "ground":
           corColocar.push(tiposCores.ground)
          break;
        case "rock":
           corColocar.push(tiposCores.rock)
          break;  
        case "ghost":
           corColocar.push(tiposCores.ghost)
          break;   
        case "flying":
           corColocar.push(tiposCores.flying)
          break;   
        case "fighting":
           corColocar.push(tiposCores.fighting)
          break;   
        case "psychic":
           corColocar.push(tiposCores.psychic)
          break;   
        case "dark":
           corColocar.push(tiposCores.dark)
          break;   
        case "fairy":
           corColocar.push(tiposCores.fairy)
          break;                                     
        default: console.log("deu ruim")
          break;
      };

      break;
  
    default:  switch (arryTiposPKSelec[0]) {
      case "grass":
          corColocar.push(tiposCores.grass)
        break;
      case "fire":
          corColocar.push(tiposCores.fire)
        break;
      case "water":
          corColocar.push(tiposCores.water)
        break;
      case "ice":
          corColocar.push(tiposCores.ice)
        break;
      case "bug":
          corColocar.push(tiposCores.bug)
        break;          
      case "normal":
          corColocar.push(tiposCores.normal)
        break;     
      case "sheel":
          corColocar.push(tiposCores.sheel)
        break;
      case "poison":
          corColocar.push(tiposCores.poison)
        break;
      case "dragon":
          corColocar.push(tiposCores.dragon)
        break;
      case "electric":
         corColocar.push(tiposCores.electric)
        break;
      case "electric":
         corColocar.push(tiposCores.electric)
        break;
      case "ground":
         corColocar.push(tiposCores.ground)
        break;
      case "rock":
         corColocar.push(tiposCores.rock)
        break;  
      case "ghost":
         corColocar.push(tiposCores.ghost)
        break;   
      case "flying":
         corColocar.push(tiposCores.flying)
        break;   
      case "fighting":
         corColocar.push(tiposCores.fighting)
        break;   
      case "psychic":
         corColocar.push(tiposCores.psychic)
        break;   
      case "dark":
         corColocar.push(tiposCores.dark)
        break;   
      case "fairy":
         corColocar.push(tiposCores.fairy)
        break;                                     
      default: console.log("deu ruim")
        break;
    };

      break;
  }
  console.log(corColocar)
  return corColocar

  // criar um switch para mandar a informação da cor para o botão
}


//pegaImagemPokemom()
//pegaTipoPokemon()








 

chamandoNomePokemon()

