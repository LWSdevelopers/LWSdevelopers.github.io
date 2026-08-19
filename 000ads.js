const anuncioData = {
  imagem: "https://raw.githubusercontent.com/LWSdevelopers/LWSdevelopers.github.io/refs/heads/main/000img.jpg",
  titulo: "",
  descricao: "🚦 Descubra os erros que podem fazer você gastar milhares de meticais no carro.",
  link: "https://abre.ai/picl?target=blank",
  textoBotao: "Ver Oferta"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Anúncio •</div>
  <img src="${anuncioData.imagem}" alt="Imagem do curso" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
   <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
