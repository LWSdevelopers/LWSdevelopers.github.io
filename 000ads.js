const anuncioData = {
  imagem: "000img.jpg",
  titulo: "",
  descricao: "🚦 O método profissional para cuidar, poupar, criar soluções e evitar grandes prejuízos.",
  link: "https://abre.ai/picl?target=blank",
  textoBotao: "Descobrir Agora"
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
