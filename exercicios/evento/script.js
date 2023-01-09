// // function f(e){
// //     console.log('teste f')
// //     e.style.color = 'red'
// // }

// // function f1(event){
// //     this.style.color = '#fff'
// //     this.style.backgroundColor = '#000'
// //     this.style.borderRadius = '10px'
// //     this.style.padding = '10px'
// //     this.style.display = 'inline'
// // }

// //     let h1 = document.querySelector('h1');
// //     h1.addEventListener('click', f1);

// let h1 = document.getElementsByTagName('h1')
// for(let h of h1){
//     console.log(h)
//     h.addEventListener('click', qop)
// }

// function qop(e){
//     let t = e.target;
//     console.log(t.parentElement)
// }

// let pi = Math.floor(Math.random() * 10)
// console.log(pi)


// let a = {
//     nome:'Igor',
//     nota:7.8
// }

// let a2 = JSON.stringify(a);

// let b = '{"nome":"fabio","nota":7.8}'

// let b2 = JSON.parse(b);

// console.log(a)
// console.log(a2)
// console.log(b)
// console.log(b2)


window.onload = function(){
    let listaItens = localStorage.getItem('lista')
    console.log(listaItens)
}


function armazenar(e){
    let itens = [e.value];
    localStorage.setItem('lista',itens);
}

