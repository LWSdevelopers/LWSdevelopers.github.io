const anuncioData = {
  imagem: "https://lwsdevelopers.github.io/000abanner.png",
  titulo: "Pacotes de internet acessíveis (MB)",
  descricao: "🤩 Precisa de mais megabytes? Barato, ativação imediata e pronto.",
  link: "https://abreai.com/MB_internet?target=blank",
  textoBotao: "Adquirir pacote"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Patrocinado • Anúncio</div>
  <div class="conteudo-anuncio">
    <h4>${anuncioData.titulo}</h4>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
