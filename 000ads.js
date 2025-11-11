const anuncioData = {
  imagem: "https://lwsdevelopers.github.io/000abanner.png",
  titulo: "Promoção de Megas! Aproveita!",
  descricao: "Megas rápido e barato! Temos pacotes para todas as necessidades.",
  link: "https://abreai.com/Magonet?target=blank",
  textoBotao: "Contactar"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">PATROCINADO</div>
  <img src="${anuncioData.imagem}" alt="Imagem do curso" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
