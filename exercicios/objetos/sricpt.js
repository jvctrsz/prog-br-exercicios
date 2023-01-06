// var aluno = {
//     nome:'Igor',
//     notas:[7.0,8.0]
// }

// var novaProp = "sobrenome";

// aluno[novaProp] = 'Oliveira';

// console.log(aluno);


// var calcMedia = function(n1,n2){
//     return (this.notas[0] + this.notas[1])/2
// }


// var estudante = {
//     nome:'Joao',
//     notas:[9,9],
//     media: calcMedia
// }

// console.log(estudante.nome)
// console.log(estudante.media())

// var estudante2 = {
//     nome:'Pedro',
//     notas:[6,8],
//     media: calcMedia
// }

// console.log(estudante2.nome)
// console.log(estudante2.media());


function criarAluno(nome,n1,n2,n3,n4) {
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        nota4: n4,
        media: function(){
            return (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
        }
    }
}



var turma = [
   criarAluno('João',8,8,9,8),
   criarAluno('Igor',7,8,7,8)

]

var aluno = turma[0];

for(var aluno of turma){
    console.log(aluno.nome + ' - '+ aluno.media())
}


