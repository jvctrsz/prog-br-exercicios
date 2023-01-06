
function naoBtn(elemento){
    
    let = btn = document.getElementById('nao')
    btn.style.display = 'none'
    
}

function onOut(elemento){
    elemento.style.display = 'inline'
}

function yesBtn(){
    document.getElementById('main').style.display = 'none'
    document.getElementById('hide').style.display = 'flex'
    // document.getElementById('bodi').style.backgroundImage = 'url(./imagens/coracao-certo.png)'
    document.getElementById('hideHeart').style.display = 'flex'
}