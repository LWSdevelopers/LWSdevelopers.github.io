const anuncioData = {
  titulo: "😍 Gostou do aplicativo?",
  descricao: "Avalie o app na play store e conte a sua experiência, leva menos de 10 segundos",
  link: "https://abre.ai/rateapp?target=blank",
  textoBotao: "Avaliar"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado"> • </div>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
