
let listaDeNumerosGerados = [];
let jaSorteado = [];
let numeroMaximoDaLista = 10;
let numeroSecretro = gerarNumeroSecreto();
numeroTentetiva = 1;

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um Número de 1 a 10.');
    

}

function gerarNumeroSecreto() {
    let numeroGerado = parseInt(Math.random() * numeroMaximoDaLista + 1);
    let limiteDaLista = listaDeNumerosGerados.length;

    if(limiteDaLista == numeroMaximoDaLista) {
        listaDeNumerosGerados = [];

    }

    if(listaDeNumerosGerados.includes(numeroGerado)) {
        return gerarNumeroSecreto();

    } else{
        listaDeNumerosGerados.push(numeroGerado);
        return numeroGerado;

    }

}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);

}

function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciar() {
    jaSorteado.push(listaDeNumerosGerados.pop());
    numeroSecretro = gerarNumeroSecreto();
    limparInput();
    numeroTentetiva = 1;
    document.getElementById('numeros_sorteados').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
    mensagemInicial();
    
}

function numerosJaSorteados() {
    exibirTextoNaTela('p', `Números já sorteados: ${jaSorteado}`);
    document.getElementById('numeros_sorteados').setAttribute('disabled', true);

}

function verificarChute () {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecretro){
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let textoTentetiva = numeroTentetiva > 1 ? 'tentetivas' : 'tentativa';
        let mensagemTentetiva = `Você usou ${numeroTentetiva} ${textoTentetiva}`;
        exibirTextoNaTela('p', `O número secreto é: ${numeroSecretro}. ${mensagemTentetiva}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);

    } else{
        if(chute > numeroSecretro){
            exibirTextoNaTela('p', 'Dica: O número secreto é menor.');
            limparInput();

        } else{
            exibirTextoNaTela('p', 'Dica: O número secreto é maior.');
            limparInput();

        }
        numeroTentetiva ++;

    }

}

mensagemInicial();
