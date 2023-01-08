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
   alert('valor errado')
}

//escolha do usuario

if(userChoice == 'especializar'){
   var interesse = prompt('Continue estudando para você aprender mais e mais da sua linguagem escolhida!\nTem mais alguma linguagem que você tem interesse em aprender?')
}

else if(userChoice == 'full-stack'){
   var interesse = prompt('Estude sua linguagem escolhida e estude outras linguagens para você se tornar FullStack!\n Tem mais alguma linguagem que você tem interesse em aprender?')
}
else {
   alert('Escolha entre "especializar" ou "full-stack"')
}





 //user choose your future

// if (learnFront == 'react' || learnFront == 'vue'){
//    var espcStudies = prompt('Você deseja se especializar em ' + learnFront + ' ou quer se tornar um desenvolvedor Full-Stack')
// } 

// if (learnBack == 'C#' || learnBack == 'Java'){
//    var fullStudies = prompt('Você deseja se especializar em ' + learnBack + ' ou quer se tornar um desenvolvedor Full-Stack')
// }

// if (espcStudies == 'especializar'){
//    alert('Continue estudando e você consiguira se especializar!!')
// }

// if (fullStudies == 'full-stack'){
//    alert('Continue estudando sobre as duas áreas de linguagem!!')
// }