function timeOut1() {
  winDiv.classList.remove("none");
  winDiv.classList.add("footer__winner__jogador2");
  main.classList.add("main__opacity");
  jogadorWin.innerText = "Luigi";
  jogadorWin.style.color = "#2b9b1d";
}

function timeOut2() {
  winDiv.classList.remove("none");
  winDiv.classList.add("footer__winner__jogador1");
  main.classList.add("main__opacity");
  jogadorWin.innerText = "Mario";
  jogadorWin.style.color = "#fe0022";
}
