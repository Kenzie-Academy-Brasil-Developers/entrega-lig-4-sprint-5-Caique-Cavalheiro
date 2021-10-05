const main = document.querySelector('.main')

let count =0;
let linha;
for(let i = 0; i < 7; i++){
    const coluna = document.createElement('section')
    coluna.className = 'coluna'+(i+1)
    coluna.dataset.columns = i
    for(let j = 0; j < 6; j++){
        linha = document.createElement('div')
        linha.className = 'linha'
        linha.dataset.columns = i
        linha.dataset.rows = j
        coluna.dataset.rows = j
        coluna.appendChild(linha)
    }
    coluna.addEventListener('click', colunaSelecionada)
    main.appendChild(coluna)
}

function colunaSelecionada(event){
    let jogador = switchJogador();
    const coluna = event.currentTarget;
    let looping = false;
    let number = 0;
    while(looping === false){
        number++;
        if(number <= coluna.childElementCount){
            if(coluna.children[coluna.childElementCount-number].hasChildNodes() ===false){
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
}

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