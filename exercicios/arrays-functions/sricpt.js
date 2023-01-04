var idade = 18;

if(idade >= 22){
    console.log('Pode Entrar');
}

else if (idade >= 18){
    console.log('Mostre a identidade')
}

else{
    console.log('Não pode entrar')
}

var aniversario = 19;

var entrada = aniversario >= 18 ? 'Pode entrar' : 'Não pode entrar'

console.log(entrada);

var nota1 = 10.0;
var nota2 = 8.5;

var conceito = '';

var media = (nota1 + nota2) / 2

// if(media > 6.5){
//     console.log('Você passou com uma media de ' + media);
// } else {
//     console.log('Sua media de ' + media + ' não foi o suficente:(')
// }

console.log('Média:',media)

if (media >= 8){
    conceito = 'Ótimo';
}

else if (media > 6){
    conceito = 'Regular';
}

else {
    conceito ='Abaixo';
}

switch(conceito){

    case 'Ótimo':
    console.log('Parabéns');
    break;

    case 'Regular':
    console.log('Você está na média');
    break;

    case 'Abaixo':
    console.log('Estude mais');
    break;

    default: 
    console.log('Houve algum erro');
}

var numero = 5;


for(var i = 1; i <= 5; i++){
    console.log(numero)
}

console.log('')

var comendoPizza = 7;

while(comendoPizza <=8){
    console.log('comendo pizza');
    comendoPizza++;
}

console.log('acabou a pizza');

var aleatorio = Math.random() * 100;

while(aleatorio < 90){

    console.log(aleatorio);
    var aleatorio = Math.random() * 100;

}

console.log(aleatorio);
console.log('O numero foi gerado')