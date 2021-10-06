const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const section = document.createElement('section');
const resetButton = document.createElement('button');
const winDiv = document.createElement('div');
const jogadorWin = document.createElement('p');

resetButton.innerText = 'Restart';

section.classList.add('footer__section')
resetButton.classList.add('footer__resetButton');
winDiv.classList.add('none');
jogadorWin.classList.add('footer__jogador');

footer.appendChild(section);
section.appendChild(resetButton);
footer.appendChild(winDiv);
footer.appendChild(jogadorWin);

resetButton.addEventListener('click', function(){
    location.reload();
});

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

function colunaSelecionada(event){
    const coluna = event.currentTarget;
    let looping = false;
    let number = 0;
    while(looping === false){
        number++;
        if(number <= coluna.childElementCount){
            if(coluna.children[coluna.childElementCount-number].hasChildNodes() ===false){
                let jogador = switchJogador();
                const pecas = document.createElement('div');
                pecas.classList.add(jogador);
                coluna.children[coluna.childElementCount-number].appendChild(pecas);
                looping = true;
                number = 0;
            }
        }
        else{
            looping = true;
        }
    }
    winHorizontal(coluna);
    winnerDiagonal();
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

function winHorizontal(element){
    let linha5RowValue = element.lastChild.dataset.rows;
    let linha4RowValue = linha5RowValue-1;
    let linha3RowValue = linha4RowValue-1;
    let linha2RowValue = linha3RowValue-1;
    let linha1RowValue = linha2RowValue-1;
    let linha0RowValue = linha1RowValue-1;

    let linha5 = document.querySelector(`div[data-rows="${linha5RowValue}"]`);
    let linha4 = document.querySelector(`div[data-rows="${linha4RowValue}"]`);
    let linha3 = document.querySelector(`div[data-rows="${linha3RowValue}"]`);
    let linha2 = document.querySelector(`div[data-rows="${linha2RowValue}"]`);
    let linha1 = document.querySelector(`div[data-rows="${linha1RowValue}"]`);
    let linha0 = document.querySelector(`div[data-rows="${linha0RowValue}"]`);

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