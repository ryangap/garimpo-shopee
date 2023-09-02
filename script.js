function verificar() {
  let id = document.getElementById('number');
  let idValue = id.value;
  let href = document.getElementById('button');

  if (idValue > 20) {
    alert("Produto não encontrado, verifique o ID.");
  } else {
    console.log(idValue);
    href.innerHTML = "<a href='#" +  idValue + "'><button>Pesquisar</button></a>"
  }
}

