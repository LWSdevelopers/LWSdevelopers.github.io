const anuncioData = {
  titulo: "Mais dados móveis (MB), acessíveis",
  descricao: "Precisa de mais megabytes? Barato, ativação imediata e pronto.",
  link: "https://abreai.com/AtivarMBs?target=blank",
  textoBotao: "Ativar agora"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Patrocinado • Anúncio</div>
  <img src="${anuncioData.imagem}" alt="Imagem do curso" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
    <h4>${anuncioData.titulo}</h4>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
