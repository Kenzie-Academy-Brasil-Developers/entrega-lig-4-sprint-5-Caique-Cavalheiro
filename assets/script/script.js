const navbar = document.querySelector('.navbar')
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const jogar = document.querySelector('#play')

const section = document.createElement('section');
const resetButton = document.createElement('button');
const winDiv = document.createElement('div');
const jogadorWin = document.createElement('p');
const empateDiv = document.createElement('div');
const regra1 = document.createElement('p')
const regra2 = document.createElement('p')
const regra3 = document.createElement('p')
const regra4 = document.createElement('p')
const regra5 = document.createElement('p')

//REGRAS DO JOGO
regra1.innerHTML = 'Regras: <br><br> 1. Voce não fala sobre o clube; <br>'
regra2.innerHTML = '2. Você não fala sobre o clube;'
navbar.append(regra1, regra2, regra3, regra4, regra5)

//BOTÃO RESET
resetButton.innerText = 'Restart';

section.classList.add('footer__section')
resetButton.classList.add('footer__resetButton');
winDiv.classList.add('none');
jogadorWin.classList.add('footer__jogador');
empateDiv.classList.add('none');

footer.appendChild(section);
section.appendChild(resetButton);
footer.appendChild(winDiv);
footer.appendChild(jogadorWin);
footer.appendChild(empateDiv);

resetButton.addEventListener('click', function(){
    location.reload();

});


//BOTÃO INICIAR O JOGO

jogar.addEventListener('click', () => {
    for(let i = 0; i < 7; i++){
        const coluna = document.createElement('section')
        coluna.className = 'coluna'+(i+1);
        coluna.dataset.columns = i;
        for(let j = 0; j < 6; j++){
            const linha = document.createElement('div');
            linha.className = 'linha';
            linha.dataset.columns = i;
            linha.dataset.rows = j;
            coluna.dataset.rows = j;
            coluna.appendChild(linha);
        }
        coluna.addEventListener('click', colunaSelecionada);
        main.appendChild(coluna);
    }
    jogar.style.display = 'none'
    navbar.style.display = 'none'
})


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



//CONDIÇÕES DE VITÓRIA

//HORIZONTAL
function winHorizontal(parametro){
    const evento = parametro.dataset.rows
    const sectionMain = document.querySelector("main");

    let coluna0 = sectionMain.children[0].children[evento].firstChild
    let coluna1 = sectionMain.children[1].children[evento].firstChild
    let coluna2 = sectionMain.children[2].children[evento].firstChild
    let coluna3 = sectionMain.children[3].children[evento].firstChild
    let coluna4 = sectionMain.children[4].children[evento].firstChild
    let coluna5 = sectionMain.children[5].children[evento].firstChild
    let coluna6 = sectionMain.children[6].children[evento].firstChild

    if(coluna0 !== null && coluna1 !== null && coluna2 !== null && coluna3 !== null){

        coluna0 = coluna0.className
        coluna1 = coluna1.className
        coluna2 = coluna2.className
        coluna3 = coluna3.className

        if(coluna0 === coluna1 && coluna1 === coluna2 && coluna2 === coluna3){
            if(count === 0) {
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 2';
            }else if(count === 1){
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 1';
            }
        }
    }
    else if(coluna1 !== null && coluna2 !== null && coluna3 !== null && coluna4 !== null){
        coluna1 = coluna1.className
        coluna2 = coluna2.className
        coluna3 = coluna3.className
        coluna4 = coluna4.className

        if(coluna1 === coluna2 && coluna2 === coluna3 && coluna3 === coluna4){
            if(count === 0) {
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 2';
            }else if(count === 1){
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 1';
            }
        }
    }
    else if(coluna2 !== null && coluna3 !== null && coluna4 !== null && coluna5 !== null){
        coluna2 = coluna2.className
        coluna3 = coluna3.className
        coluna4 = coluna4.className
        coluna5 = coluna5.className

        if(coluna2 === coluna3 && coluna3 === coluna4 && coluna4 === coluna5){
            if(count === 0) {
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 2';
            }else if(count === 1){
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 1';
            }
        }
    }
    else if(coluna3 !== null && coluna4 !== null && coluna5 !== null && coluna6 !== null){
        coluna3 = coluna3.className
        coluna4 = coluna4.className
        coluna5 = coluna5.className
        coluna6 = coluna6.className

        if(coluna3 === coluna4 && coluna4 === coluna5 && coluna5 === coluna6){
            if(count === 0) {
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 2';
            }else if(count === 1){
                winDiv.classList.remove('none');
                winDiv.classList.add('footer__winner');
                jogadorWin.innerText = 'Jogador 1';
            }
        }
    }
}

//VERTICAL
function winVertical(element){
    let coluna = element.dataset.columns

    let linha5 = document.querySelector(`div[data-columns="${coluna}"][data-rows="${5}"]`);
    let linha4 = document.querySelector(`div[data-columns="${coluna}"][data-rows="${4}"]`);
    let linha3 = document.querySelector(`div[data-columns="${coluna}"][data-rows="${3}"]`);
    let linha2 = document.querySelector(`div[data-columns="${coluna}"][data-rows="${2}"]`);
    let linha1 = document.querySelector(`div[data-columns="${coluna}"][data-rows="${1}"]`);
    let linha0 = document.querySelector(`div[data-columns="${coluna}"][data-rows="${0}"]`);

    if(linha5.hasChildNodes()===true && linha4.hasChildNodes()===true && linha3.hasChildNodes()===true && linha2.hasChildNodes()===true){
        if(linha5.firstChild.classList.contains('jogador1') && linha4.firstChild.classList.contains('jogador1') 
        && linha3.firstChild.classList.contains('jogador1') && linha2.firstChild.classList.contains('jogador1')){
            winDiv.classList.remove('none');
            winDiv.classList.add('footer__winner');
            jogadorWin.innerText = 'Jogador 1';
        }else if(linha5.firstChild.classList.contains('jogador2') && linha4.firstChild.classList.contains('jogador2') 
        && linha3.firstChild.classList.contains('jogador2') && linha2.firstChild.classList.contains('jogador2')){
            winDiv.classList.remove('none');
            winDiv.classList.add('footer__winner');
            jogadorWin.innerText = 'Jogador 2';
        }
    }

    if(linha4.hasChildNodes()===true && linha3.hasChildNodes()===true && linha2.hasChildNodes()===true && linha1.hasChildNodes()===true){
        if(linha4.firstChild.classList.contains('jogador1') && linha3.firstChild.classList.contains('jogador1') 
        && linha2.firstChild.classList.contains('jogador1') && linha1.firstChild.classList.contains('jogador1')){
            winDiv.classList.remove('none');
            winDiv.classList.add('footer__winner');
            jogadorWin.innerText = 'Jogador 1';
        }else if(linha4.firstChild.classList.contains('jogador2') && linha3.firstChild.classList.contains('jogador2') 
        && linha2.firstChild.classList.contains('jogador2') && linha1.firstChild.classList.contains('jogador2')){
            winDiv.classList.remove('none');
            winDiv.classList.add('footer__winner');
            jogadorWin.innerText = 'Jogador 2';
        }
    }

    if(linha3.hasChildNodes()===true && linha2.hasChildNodes()===true && linha1.hasChildNodes()===true && linha0.hasChildNodes()===true){
        if(linha3.firstChild.classList.contains('jogador1') && linha2.firstChild.classList.contains('jogador1') 
        && linha1.firstChild.classList.contains('jogador1') && linha0.firstChild.classList.contains('jogador1')){
            winDiv.classList.remove('none');
            winDiv.classList.add('footer__winner');
            jogadorWin.innerText = 'Jogador 1';
        }else if(linha3.firstChild.classList.contains('jogador2') && linha2.firstChild.classList.contains('jogador2') 
        && linha1.firstChild.classList.contains('jogador2') && linha0.firstChild.classList.contains('jogador2')){
            winDiv.classList.remove('none');
            winDiv.classList.add('footer__winner');
            jogadorWin.innerText = 'Jogador 2';
        }
    }
}

//DIAGONAL
function winnerDiagonal() {
    const sectionMain = document.querySelector("main");
    for(let i = 0; i < sectionMain.children[i].childElementCount - 2;i++) {
        for(let j = 5; j >= 3; j--) {
            if(sectionMain.children[i].children[j].children[0] !== undefined 
                && sectionMain.children[i + 1].children[j - 1].children[0] !== undefined
                && sectionMain.children[i + 2].children[j - 2].children[0] !== undefined
                && sectionMain.children[i + 3].children[j - 3].children[0] !== undefined) {
                    const verification1 = sectionMain.children[i].children[j].children[0].className;
                    const verification2 = sectionMain.children[i + 1].children[j - 1].children[0].className;
                    const verification3 = sectionMain.children[i + 2].children[j - 2].children[0].className;
                    const verification4 = sectionMain.children[i + 3].children[j - 3].children[0].className;
                    if(verification1 === verification2 && verification2 === verification3 && verification3 === verification4) {
                        if(count === 0) {
                            winDiv.classList.remove('none');
                            winDiv.classList.add('footer__winner');
                            jogadorWin.innerText = 'Jogador 2';
                        }else if(count === 1){
                            winDiv.classList.remove('none');
                            winDiv.classList.add('footer__winner');
                            jogadorWin.innerText = 'Jogador 1';
                        }
                    }
                }
        }
    }
    for(let x = 6; x >= 3; x--) {
        for(let z = 5; z >= 3; z--) {
            if(sectionMain.children[x].children[z].children[0] !== undefined
                && sectionMain.children[x - 1].children[z - 1].children[0] !== undefined
                && sectionMain.children[x - 2].children[z - 2].children[0] !== undefined
                && sectionMain.children[x - 3].children[z - 3].children[0] !== undefined){
                    const verification1 = sectionMain.children[x].children[z].children[0].className;
                    const verification2 = sectionMain.children[x - 1].children[z - 1].children[0].className;
                    const verification3 = sectionMain.children[x - 2].children[z - 2].children[0].className;
                    const verification4 = sectionMain.children[x - 3].children[z - 3].children[0].className;
                    if(verification1 === verification2 && verification2 === verification3 && verification3 === verification4) {
                        if(count === 0) {
                            winDiv.classList.remove('none');
                            winDiv.classList.add('footer__winner');
                            jogadorWin.innerText = 'Jogador 2';
                        }else if(count === 1){
                            winDiv.classList.remove('none');
                            winDiv.classList.add('footer__winner');
                            jogadorWin.innerText = 'Jogador 1';
                        }
                    }
                }
        }
    }
}


function empate(element){
    let linha5RowValue = element.lastChild.dataset.rows;
    let linha4RowValue = linha5RowValue-1;
    let linha3RowValue = linha4RowValue-1;
    let linha2RowValue = linha3RowValue-1;
    let linha1RowValue = linha2RowValue-1;
    let linha0RowValue = linha1RowValue-1;

    let countEmpate =0;

    for(let i=0; i< 7;i++){
        let linha5 = document.querySelector(`div[data-columns="${i}"][data-rows="${linha5RowValue}"]`);
        let linha4 = document.querySelector(`div[data-columns="${i}"][data-rows="${linha4RowValue}"]`);
        let linha3 = document.querySelector(`div[data-columns="${i}"][data-rows="${linha3RowValue}"]`);
        let linha2 = document.querySelector(`div[data-columns="${i}"][data-rows="${linha2RowValue}"]`);
        let linha1 = document.querySelector(`div[data-columns="${i}"][data-rows="${linha1RowValue}"]`);
        let linha0 = document.querySelector(`div[data-columns="${i}"][data-rows="${linha0RowValue}"]`);
        if(linha5.hasChildNodes()===true && linha4.hasChildNodes()===true && linha3.hasChildNodes()===true && 
        linha2.hasChildNodes()===true && linha1.hasChildNodes()===true && linha0.hasChildNodes()===true){
            countEmpate +=1;
        }
    }
    if(countEmpate>6){
        empateDiv.classList.remove('none');
        empateDiv.classList.add('footer__empate');
        jogadorWin.innerText = 'Empatou!'
    }
}