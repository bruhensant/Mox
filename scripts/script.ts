
const time: number = 80;

let downs:any;

function lp1_up(ids:any) { //TODO: adicionar a possibilidade de clicar em todas as funções
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

// Replica um nó.
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) { 
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
        console.log(node);
    }
}

multiplyNode(document.querySelector('.player_1'), 3, true);