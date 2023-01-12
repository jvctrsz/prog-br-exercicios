// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtpCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtpCerveja = CervejaPP(duracao) * adultos;
    let qtpbebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    document.getElementById('carne').innerText 
    += `${qtpCarne / 1000} Kg de Carne.`

    document.getElementById('cerveja').innerText 
    += `${Math.ceil(qtpCerveja / 355)} Latas de cerveja.`

    document.getElementById('bebida').innerText 
    += `${Math.ceil(qtpbebidas / 2000)} Pet's de 2l de bebidas.`

}


function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function CervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
         return 1500;
    } else {
        return 1000;
    }
}