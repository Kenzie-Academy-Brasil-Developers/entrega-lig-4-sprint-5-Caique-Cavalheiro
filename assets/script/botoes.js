//BOTÃO INICIAR O JOGO
jogar.addEventListener("click", () => {
  jogar.style.display = "none";
  navbar.style.display = "none";
  navbar.style.display = "block";

  for (let i = 0; i < 7; i++) {
    const coluna = document.createElement("section");
    coluna.addEventListener("click", () => {
      console.log(20);
    });
    coluna.className = "coluna" + (i + 1);
    coluna.dataset.columns = i;
    for (let j = 0; j < 6; j++) {
      const linha = document.createElement("div");
      linha.className = "linha";
      linha.dataset.columns = i;
      linha.dataset.rows = j;
      coluna.dataset.rows = j;
      coluna.appendChild(linha);
    }
    coluna.addEventListener("click", colunaSelecionada);
    main.appendChild(coluna);
  }

  section.appendChild(resetButton);
});

//BOTÃO RESET
resetButton.addEventListener("click", function () {
  location.reload();
});
