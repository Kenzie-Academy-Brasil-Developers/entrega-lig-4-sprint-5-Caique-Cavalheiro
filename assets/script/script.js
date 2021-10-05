const main = document.querySelector('.main')

for(let i = 0; i < 7; i++){
    const coluna = document.createElement('section')
    coluna.className = 'coluna'+(i+1)
    coluna.addEventListener('click', colunaSelecionada)

    for(let j = 0; j < 6; j++){
        const linha = document.createElement('div')
        linha.className = 'linha'
        coluna.appendChild(linha)
    }

    main.appendChild(coluna)
}

function colunaSelecionada(event){
    const coluna = event.currentTarget

    let looping = false
    let number = 0

    while(looping === false){
        number++;

        if(number <= coluna.childElementCount){

            if(coluna.children[coluna.childElementCount-number].id === ''){
                coluna.children[coluna.childElementCount-number].id = 'ocupado'
                looping = true


                console.log(number)
                number = 0


            }

        }
        else{
            looping = true
        }
    }

}