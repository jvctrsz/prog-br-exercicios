// let lista = document.querySelector('#list')
// let num = parseInt(lista.dataset.num);

// let conteudo = ''

// for(let i = 1; i <= num; i++){
    
//     conteudo += '<li>' + i + '</li>'
// } 

// lista.innerHTML = conteudo;

let video = document.getElementById('video1');

function retroceder(){
    video.currentTime -= 15; 
}

function avancar(){
    video.currentTime += 15;
}

function volumeMais(){
    video.volume = 1;
    video.muted = false

}

function volumeMenos(){
    video.volume = 0.2;
    video.muted = false

}

function mute(){
    video.muted = true
}


function pause(){
    video.pause()

}


function play(){
    video.play()
}

let jogador1 = document.querySelector('#jogador1');
let jogador2 = document.querySelector('#jogador2');

let xInicial = 0;
let yInicial = 0;

function mudarJogadorPara(x,y){
 
    
   let posX = x + 'px';
   let posY = y + 'px';
   
   jogador1.style.top = posX
   jogador2.style.top = posX

   jogador1.style.left = posY;
   jogador2.style.left = posY; 

}


setInterval(function(){
    mudarJogadorPara(xInicial++, yInicial++);

}, 500)
