const anuncioData = {
  imagem: "",
  titulo: "😍 Gostou do aplicativo? ",
  descricao: "Avalie o app no Play Store, deixe a sua opinião ou conte a sua experiência.",
  link: "https://abre.ai/avaliar-agoraa?target=blank",
  textoBotao: "Avaliar"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado"> • </div>
  <img src="${anuncioData.imagem}" alt="Imagem do curso" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
