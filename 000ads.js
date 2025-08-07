const anuncioData = {
  imagem: "https://www.ejemplos.co/wp-content/uploads/2021/11/publicidad-coca-cola-800x393.jpg",
  titulo: "📘 Curso Preparatório INATRO",
  descricao: "Estude com os melhores conteúdos para passar no exame teórico com confiança.",
  link: "https://abre.ai/nf1R?target=blank",
  textoBotao: "Acessar Curso"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Patrocinado</div>
  <img src="${anuncioData.imagem}" alt="Imagem do curso" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
