//EMPATE
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
        main.classList.add('main__opacity');
        jogadorWin.innerText = 'Empatou!'
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
                            sectionMain.children[i].children[j].children[0].classList.add("luigiTransition")
                            sectionMain.children[i + 1].children[j - 1].children[0].classList.add("luigiTransition")
                            sectionMain.children[i + 2].children[j - 2].children[0].classList.add("luigiTransition")
                            sectionMain.children[i + 3].children[j - 3].children[0].classList.add("luigiTransition")
                            setTimeout(timeOut1,2.0 * 1000)
                        }else if(count === 1){
                            sectionMain.children[i].children[j].children[0].classList.add("marioTransition")
                            sectionMain.children[i + 1].children[j - 1].children[0].classList.add("marioTransition")
                            sectionMain.children[i + 2].children[j - 2].children[0].classList.add("marioTransition")
                            sectionMain.children[i + 3].children[j - 3].children[0].classList.add("marioTransition")
                            setTimeout(timeOut2,2.0 * 1000)
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
                            sectionMain.children[x].children[z].children[0].classList.add("luigiTransition")
                            sectionMain.children[x - 1].children[z - 1].children[0].classList.add("luigiTransition")
                            sectionMain.children[x - 2].children[z - 2].children[0].classList.add("luigiTransition")
                            sectionMain.children[x - 3].children[z - 3].children[0].classList.add("luigiTransition")
                            setTimeout(timeOut1,2.0 * 1000)
                        }else if(count === 1){
                            sectionMain.children[x].children[z].children[0].classList.add("marioTransition")
                            sectionMain.children[x - 1].children[z - 1].children[0].classList.add("marioTransition")
                            sectionMain.children[x - 2].children[z - 2].children[0].classList.add("marioTransition")
                            sectionMain.children[x - 3].children[z - 3].children[0].classList.add("marioTransition")
                            setTimeout(timeOut2,2.0 * 1000)
                        }
                    }
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
            linha5.firstChild.classList.add("marioTransition")
            linha4.firstChild.classList.add("marioTransition")
            linha3.firstChild.classList.add("marioTransition")
            linha2.firstChild.classList.add("marioTransition")
            setTimeout(timeOut2,2.0 * 1000)
        }else if(linha5.firstChild.classList.contains('jogador2') && linha4.firstChild.classList.contains('jogador2') 
        && linha3.firstChild.classList.contains('jogador2') && linha2.firstChild.classList.contains('jogador2')){
            linha5.firstChild.classList.add("luigiTransition")
            linha4.firstChild.classList.add("luigiTransition")
            linha3.firstChild.classList.add("luigiTransition")
            linha2.firstChild.classList.add("luigiTransition")
            setTimeout(timeOut1,2.0 * 1000)
        }
    }

    if(linha4.hasChildNodes()===true && linha3.hasChildNodes()===true && linha2.hasChildNodes()===true && linha1.hasChildNodes()===true){
        if(linha4.firstChild.classList.contains('jogador1') && linha3.firstChild.classList.contains('jogador1') 
        && linha2.firstChild.classList.contains('jogador1') && linha1.firstChild.classList.contains('jogador1')){
            linha4.firstChild.classList.add("marioTransition")
            linha3.firstChild.classList.add("marioTransition")
            linha2.firstChild.classList.add("marioTransition")
            linha1.firstChild.classList.add("marioTransition")
            setTimeout(timeOut2,2.0 * 1000)
        }else if(linha4.firstChild.classList.contains('jogador2') && linha3.firstChild.classList.contains('jogador2') 
        && linha2.firstChild.classList.contains('jogador2') && linha1.firstChild.classList.contains('jogador2')){
            linha4.firstChild.classList.add("luigiTransition")
            linha3.firstChild.classList.add("luigiTransition")
            linha2.firstChild.classList.add("luigiTransition")
            linha1.firstChild.classList.add("luigiTransition")
            setTimeout(timeOut1,2.0 * 1000)
        }
    }

    if(linha3.hasChildNodes()===true && linha2.hasChildNodes()===true && linha1.hasChildNodes()===true && linha0.hasChildNodes()===true){
        if(linha3.firstChild.classList.contains('jogador1') && linha2.firstChild.classList.contains('jogador1') 
        && linha1.firstChild.classList.contains('jogador1') && linha0.firstChild.classList.contains('jogador1')){
            linha3.firstChild.classList.add("marioTransition")
            linha2.firstChild.classList.add("marioTransition")
            linha1.firstChild.classList.add("marioTransition")
            linha0.firstChild.classList.add("marioTransition")
            setTimeout(timeOut2,2.0 * 1000)
        }else if(linha3.firstChild.classList.contains('jogador2') && linha2.firstChild.classList.contains('jogador2') 
        && linha1.firstChild.classList.contains('jogador2') && linha0.firstChild.classList.contains('jogador2')){
            linha3.firstChild.classList.add("luigiTransition")
            linha2.firstChild.classList.add("luigiTransition")
            linha1.firstChild.classList.add("luigiTransition")
            linha0.firstChild.classList.add("luigiTransition")
            setTimeout(timeOut1,2.0 * 1000)
        }
    }
}

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

        coluna0 = sectionMain.children[0].children[evento].firstChild.className
        coluna1 = sectionMain.children[1].children[evento].firstChild.className
        coluna2 = sectionMain.children[2].children[evento].firstChild.className
        coluna3 = sectionMain.children[3].children[evento].firstChild.className


        if(coluna0 === coluna1 && coluna1 === coluna2 && coluna2 === coluna3 && coluna0 === coluna3){
            if(count === 0) {
                sectionMain.children[0].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[1].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[2].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[3].children[evento].firstChild.classList.add("luigiTransition")
                setTimeout(timeOut1,2.0 * 1000)
            }else if(count === 1){
                sectionMain.children[0].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[1].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[2].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[3].children[evento].firstChild.classList.add("marioTransition")
                setTimeout(timeOut2,2.0 * 1000)
            }
        }
    }
    if(coluna1 !== null && coluna2 !== null && coluna3 !== null && coluna4 !== null){
        coluna1 = sectionMain.children[1].children[evento].firstChild.className
        coluna2 = sectionMain.children[2].children[evento].firstChild.className
        coluna3 = sectionMain.children[3].children[evento].firstChild.className
        coluna4 = sectionMain.children[4].children[evento].firstChild.className


        if(coluna1 === coluna2 && coluna2 === coluna3 && coluna3 === coluna4 && coluna1 === coluna4){
            if(count === 0) {
                sectionMain.children[1].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[2].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[3].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[4].children[evento].firstChild.classList.add("luigiTransition")
                setTimeout(timeOut1,2.0 * 1000)
            }else if(count === 1){
                sectionMain.children[1].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[2].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[3].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[4].children[evento].firstChild.classList.add("marioTransition")
                setTimeout(timeOut2,2.0 * 1000)
            }
        }
    }
    if(coluna2 !== null && coluna3 !== null && coluna4 !== null && coluna5 !== null){
        coluna2 = sectionMain.children[2].children[evento].firstChild.className
        coluna3 = sectionMain.children[3].children[evento].firstChild.className
        coluna4 = sectionMain.children[4].children[evento].firstChild.className
        coluna5 = sectionMain.children[5].children[evento].firstChild.className


        if(coluna2 === coluna3 && coluna3 === coluna4 && coluna4 === coluna5 && coluna2 === coluna5){
            if(count === 0) {
                sectionMain.children[2].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[3].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[4].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[5].children[evento].firstChild.classList.add("luigiTransition")
                setTimeout(timeOut1,2.0 * 1000)
            }else if(count === 1){
                sectionMain.children[2].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[3].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[4].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[5].children[evento].firstChild.classList.add("marioTransition")
                setTimeout(timeOut2,2.0 * 1000)
            }
        }
    }
    if(coluna3 !== null && coluna4 !== null && coluna5 !== null && coluna6 !== null){
        coluna3 = sectionMain.children[3].children[evento].firstChild.className
        coluna4 = sectionMain.children[4].children[evento].firstChild.className
        coluna5 = sectionMain.children[5].children[evento].firstChild.className
        coluna6 = sectionMain.children[6].children[evento].firstChild.className


        if(coluna3 === coluna4 && coluna4 === coluna5 && coluna5 === coluna6 && coluna3 === coluna6){
            if(count === 0) {
                sectionMain.children[3].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[4].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[5].children[evento].firstChild.classList.add("luigiTransition")
                sectionMain.children[6].children[evento].firstChild.classList.add("luigiTransition")
                setTimeout(timeOut1,2.0 * 1000)
            }else if(count === 1){
                sectionMain.children[3].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[4].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[5].children[evento].firstChild.classList.add("marioTransition")
                sectionMain.children[6].children[evento].firstChild.classList.add("marioTransition")
                setTimeout(timeOut2,2.0 * 1000)
            }
        }
    }
}