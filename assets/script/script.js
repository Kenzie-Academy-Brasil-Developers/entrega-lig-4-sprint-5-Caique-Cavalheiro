// CRIAÇÃO DE ARQUIVOS NO HTML
const navbar = document.querySelector('.navbar')
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const jogar = document.querySelector('#play')

const section = document.createElement('section');
const resetButton = document.createElement('button');
const winDiv = document.createElement('div');
const jogadorWin = document.createElement('p');
const empateDiv = document.createElement('div');
const regra1 = document.createElement('h2')
const regra2 = document.createElement('p')
const regra3 = document.createElement('p')

//REGRAS DO JOGO
regra1.innerHTML = 'Regras:'
regra2.innerHTML = `1.Ganha o jogo quem conseguir colocar 4 figuras iguais em sequência na ${'VERTICAL'.bold()}, ${'HORIZONTAL'.bold()} ou ${'DIAGONAL'.bold()}`
regra3.innerHTML = '2. Podemos consertar qualquer coisa se houver espaguete envolvido!'
navbar.append(regra1, regra2, regra3)

//BOTÃO RESET
resetButton.innerText = 'Restart';

section.classList.add('footer__section')
resetButton.classList.add('footer__resetButton');
winDiv.classList.add('none');
jogadorWin.classList.add('footer__jogador');
empateDiv.classList.add('none');

footer.appendChild(section);
footer.appendChild(winDiv);
footer.appendChild(jogadorWin);
footer.appendChild(empateDiv);


//Seleciona coluna, adiciona img a ultima div vazia e executa funções de vitória.

function colunaSelecionada(event){
    const coluna = event.currentTarget;
    let looping = false;
    let number = 0;

    while(looping === false){
        number++;
        if(number <= coluna.childElementCount){
            if(coluna.children[coluna.childElementCount-number].hasChildNodes() === false){
                let jogador = switchJogador();
                const pecas = document.createElement('div');
                pecas.classList.add(jogador);
                coluna.children[coluna.childElementCount-number].appendChild(pecas);
                looping = true;

                winHorizontal(coluna.children[coluna.childElementCount-number])

            }
        }
        else{
            looping = true;
        }
    }
    winVertical(coluna);
    winnerDiagonal();
    empate(coluna);
}


//TROCA DE JOGADOR
let count =0;
function switchJogador(){
    let jogador = "";
    if(count===0){
        jogador = "jogador1";
        count++; 
    }else if(count===1){
        jogador = "jogador2"
        count =0;
    }
    return jogador
}