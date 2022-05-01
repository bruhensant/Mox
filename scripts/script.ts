
const time: number = 80;

let downs:any;

function lp1_up(ids:any) {
    downs = setInterval(() =>{
    var valor = document.getElementById('lp1');
    var atual = parseInt(valor.innerHTML);
    var novo = parseInt(valor.innerHTML) + 1;

    valor.innerHTML = novo.toString();

    var fonte_atual = getComputedStyle(valor).getPropertyValue('font-weight');
    var nova_fonte = parseInt(valor.innerHTML) * 10;
    valor.style.setProperty('font-weight',nova_fonte.toString())
    
    console.log(getComputedStyle(valor).getPropertyValue('font-weight'));

    },time);
}

function lp1_down(ids:any) {
    downs = setInterval(() =>{
    var valor = document.getElementById('lp1');
    var atual = parseInt(valor.innerHTML);
    var novo = parseInt(valor.innerHTML) - 1;

    valor.innerHTML = novo.toString();

    var fonte_atual = getComputedStyle(valor).getPropertyValue('font-weight');
    var nova_fonte = parseInt(valor.innerHTML) * 10;
    valor.style.setProperty('font-weight',nova_fonte.toString())

    console.log(getComputedStyle(valor).getPropertyValue('font-weight'));
    },time);
}


function lp2_up(ids:any) {
    downs = setInterval(() =>{
    var valor = document.getElementById('lp2');
    var atual = parseInt(valor.innerHTML);
    var novo = parseInt(valor.innerHTML) + 1;

    valor.innerHTML = novo.toString();

    var fonte_atual = getComputedStyle(valor).getPropertyValue('font-weight');
    var nova_fonte = parseInt(valor.innerHTML) * 10;
    valor.style.setProperty('font-weight',nova_fonte.toString())
    
    console.log(getComputedStyle(valor).getPropertyValue('font-weight'));

    },time);
}

function lp2_down(ids:any) {
    downs = setInterval(() =>{
    var valor = document.getElementById('lp2');
    var atual = parseInt(valor.innerHTML);
    var novo = parseInt(valor.innerHTML) - 1;
    
    valor.innerHTML = novo.toString();

    var fonte_atual = getComputedStyle(valor).getPropertyValue('font-weight');
    var nova_fonte = parseInt(valor.innerHTML) * 10;
    valor.style.setProperty('font-weight',nova_fonte.toString())

    console.log(getComputedStyle(valor).getPropertyValue('font-weight'));
    },time);
}


function stop(){
    clearInterval(downs);
}
