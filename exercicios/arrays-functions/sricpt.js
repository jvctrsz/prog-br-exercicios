var alunos = ['Jose','fernanda','ketlyn','francisco','antonio','julia','joao','paulo'];

for(let aluno of alunos){
    console.log(aluno);
}

// for(var i = 0; i < alunos.length; i++){
//     console.log(alunos[i]);
// }


// function media(n1,n2){
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2)/2
//     return media
// }

// var resultado = media(8,7);
// console.log(resultado);

// var media = (n1,n2) => {
//     return (n1 + n2) / 2;
// }

// var resultado = media(7,9);
// console.log(resultado);


var nomes = ['Igor','Maria','Vitoria'];
var notasA = [7, 9 ,6.5];
var notasB = [7.5, 8.7 ,7];

function media(n1,n2){
    return(n1+n2)/2
}


function passou(media){
    
    var resultado = 'Reprovado'
    if(media > 7){
        resultado = 'Aprovado'
    }
    return resultado
}


for(let index in nomes){

        var notas1 = notasA[index]
        var notas2 = notasB[index]
        var m = media(notas1,notas2)

        console.log(nomes[index] +
        ' - ' +
        notas1 +
        ' - ' +
        notas2 +
        ' - ' +
        m +
        ' - ' +
        passou(m));
}   




