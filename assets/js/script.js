const meuNome = document.querySelector('.meu-nome');
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')

function trocarFundo () {
    const pisca = setInterval(()=>{
        node.style.fill ='blue';
        setTimeout(()=>{
            node.style.fill ='red';
        }, 1000)
    },2000)
}

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    const meuNome = nome.innerHTML.split('');
    nome.innerHTML='';
    meuNome.forEach( (letra, index) => {
        setTimeout(function (){
            nome.innerHTML += letra;
        }, 125 * index)
    })
    
}

typeWriter(meuNome);
maisHabilidades(botaoVerMais);

