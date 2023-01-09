let pid = document.getElementById('p1')

let paragrafos = document.getElementsByClassName('paragrafo')

let allpara = document.getElementsByTagName('p')

let visible = document.getElementById('invisible').style.display = 'inline'


function h2Click(){
    document.getElementById('click').style.display = 'none'
}

function h2back(){
    document.getElementById('click').style.display = 'block'
}

function changeH1(i){
    let h2 = document.getElementById('click')
    h2.innerText = i.value
}


function onOver(elemento){
    elemento.style.backgroundColor = 'red';
    elemento.style.transition = '1.5s'
    elemento.style.transform = 'translate(50px , 110px)'
    document.getElementById('bodi').style.backgroundColor = '#000'
}


function onOut(elemento){
    elemento.style.backgroundColor = 'aquamarine'
    elemento.style.padding = '20px'
    elemento.style.transition = '0.3s'
    elemento.style.transform = 'translate(0 , 0)'
    document.getElementById('bodi').style.backgroundColor = '#fff'
}

let newBtn = document.getElementById('newbtn')

newBtn.addEventListener('mouseover', mudarCor)
newBtn.addEventListener('mouseout', voltarCor)


function mudarCor(){
    newBtn.style.backgroundColor = 'blue' 
    newBtn.style.color = '#fff' 
}

function voltarCor(){
    newBtn.style.backgroundColor = 'aquamarine'
    newBtn.style.color = '#000'
}