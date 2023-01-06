//DESAFIO PRIMEIRO DIA!!!!!!

// let numeroUm = 1
// let stringUm = '1'
// let numeroTrinta = 30
// let stringTrinta = '30'
// let numeroDez = 10
// let stringDez = '10'

// if (numeroUm == stringUm){
//     console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
// } else {
//     console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
// }

// if (numeroDez == stringDez){
//     console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
// } else {
//     console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
// }

// if (numeroTrinta == stringTrinta){
//     console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
// } else {
//     console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
// }


//DESAFIO SEGUNDO DIA!!!!!!!!!!!!!!!!!!!!!!!!!
 
var nome = prompt('Qual o seu nome?');
var idade = parseInt(prompt('Qual a sua idade?'));
var progLanguage = prompt('Qual a sua linguagem de programação?');

alert('Olá ' + nome +', você tem ' + idade + ' anos e já esta aprendendo ' + progLanguage + '!!'  )

 var resposta = prompt('Você gosta de estudar ' + progLanguage +'? Responda com o número 1 para SIM ou 2 para NÂO')

 if (resposta == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
 } else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
 }