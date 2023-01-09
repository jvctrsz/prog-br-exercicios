//1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.


//answer whith user
let choice = prompt('Você quer ser da área de Front-End ou Back-End?');

//logica

if (choice == 'front-end' || choice == 'Front-End'){
   var valorUsuario = prompt('Você deseja aprender React ou aprender Vue?');
   var userChoice = prompt('Você deseja se especializar em ' + valorUsuario + ' ou quer se tornar um desenvolvedor Full-Stack');
}
else if(choice == 'back-end' || choice == 'Back-End'){
   var valorUsuario = prompt('Você deseja aprender C# ou aprender Java?');
   var userChoice = prompt('Você deseja se especializar em ' + valorUsuario + ' ou quer se tornar um desenvolvedor Full-Stack');
} 
else{
   alert('valor errado');
}

//escolha do usuario

if(userChoice == 'especializar'){
   var interesse = prompt('Continue estudando para você aprender mais e mais da sua linguagem escolhida!\nTem mais alguma linguagem que você tem interesse em aprender?');
}

else if(userChoice == 'full-stack'){
   var interesse = prompt('Estude sua linguagem escolhida e estude outras linguagens para você se tornar FullStack!\n Tem mais alguma linguagem que você tem interesse em aprender?');
};




//nao consegui chegar num resultado :(

// function validar(){
//    //logica para verificar o valor do prompt
//    if(interesse == 'n'){
//       return interesse
//    }

//    return false

// }

// var validation = validar();

// // Enquanto a resposta estiver inválida, execute o bloco de código
// while(validation === false){
//    alert('Tente de novo...');
//   // Note que devemos atribuir à resposta uma outra "tentativa",
//   // já que após cada iteração (incorreta), o usuário deve tentar novamente.
//   resp = validar();
// }
