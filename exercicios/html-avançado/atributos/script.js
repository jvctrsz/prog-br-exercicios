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