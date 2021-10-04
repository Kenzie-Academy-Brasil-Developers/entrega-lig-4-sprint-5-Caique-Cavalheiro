const main = document.querySelector('.main')

for(let i = 0; i < 6; i++){
    const coluna = document.createElement('section')
    coluna.className = 'coluna'
    //coluna.addEventListener('click', function)

    for(let j = 0; j < 7; j++){
        const linha = document.createElement('div')
        linha.className = 'linha'
        coluna.appendChild(linha)
    }

    main.appendChild(coluna)
}