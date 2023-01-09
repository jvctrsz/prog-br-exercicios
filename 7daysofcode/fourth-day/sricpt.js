//criar um programa que gera um numero aleatorio entre 1 e 10 e compara com o chute do usuario, caso acerto exiba na tela vc acertou, caso erre de mais 2 tentativas para acertar

//random number 
var ranNumber = Math.floor(Math.random() * (10 - 1 + 1 + 1))
console.log(ranNumber);

//user number

let acertou = false

for(let contador = 0; contador < 3; contador++){
   let userNumber = prompt('Chute um número de 0 a 10');
      if (userNumber == ranNumber){
         alert('parabens vc acertou!!');
         acertou = true;
         break;
      } else{
         alert('errado')
      }
      
}

if(!acertou){
   alert(`Infelizmente você não acertou. O número era ${ranNumber}`)
};
