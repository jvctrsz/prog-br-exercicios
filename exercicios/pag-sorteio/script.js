let pessoas = ['joana', 'vitoria', 'marcela','fernanda','carlos','fransciso','jamelao','vitor','jessica','francieli']

function sortear(e){
    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);
    document.querySelector('h1').innerText = pessoas[ns];
}


let numero = 0;
var interval;

function contagem(){
    let h = document.querySelector('h2');
    h.innerText += '' + numero;
    numero++
}

function iniciar(){
    interval = setInterval(contagem,1000)
}

function parar(){
    clearInterval(interval);
}
