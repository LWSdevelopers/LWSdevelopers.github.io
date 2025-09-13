const anuncioData = {
  imagem: "",
  titulo: "Gostou do aplicativo?",
  descricao: "Avalie o app na Play Store e conte sua experiência. Sua opinião ajuda muito!",
  link: "https://abre.ai/teoricomz?target=blank",
  textoBotao: "Avaliar agora"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado"></div>
  <img src="${anuncioData.imagem}" alt="" class=""/>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
