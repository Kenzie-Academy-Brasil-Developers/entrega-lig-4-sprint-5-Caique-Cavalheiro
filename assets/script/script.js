const main = document.querySelector('.main')

let count =0;
let linha;

//cria as colunas
for(let i = 0; i < 7; i++){
    const coluna = document.createElement('section')
    coluna.className = 'coluna'+(i+1)
    coluna.dataset.columns = i

    //cria as linhas
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

//onde a magica acontece
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
            }
        }
        else{
            looping = true;
        }
    }
    let vertical =  coluna.children[coluna.childElementCount-number]
    verticalWinner(vertical)
    console.log(vertical)

    let horizontal = 'vazio'
    //horizontalWinner(horizontal)
}

//troca de jogador
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

function verticalWinner(local) {
    const row = local.dataset.rows
    const posicao = local;
    let number = ""
    if(row <= 2){
        if(row === 2){
            number = 3
        }else if(row === 1){
            number = 2
        }else if(row === 0) {
            number = 1;
        }
        const posicao1 = posicao.className;
        const posicao2 = posicao.parentElement.children[number].children[0].className;
        const posicao3 = posicao.parentElement.children[number + 1].children[0].className;
        const posicao4 = posicao.parentElement.children[number + 2].children[0].className;
        if(posicao1 === posicao2 && posicao2 === posicao3 && posicao3 === posicao4){
            alert("Ganhou X")
        }
    }
}

function horizontalWinner(local){

}