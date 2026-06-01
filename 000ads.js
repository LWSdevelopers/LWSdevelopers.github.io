const anuncioData = {
  titulo: "😍 Internet (MB) Quase de Borla!",
  descricao: "Rápido e Seguro: Assista vídeos, estude e navegue com dados baratos.",
  link: "https://abre.ai/mb-adquirir?target=blank",
  textoBotao: "Pedir Megas"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Anúncio • </div>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
