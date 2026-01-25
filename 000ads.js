const anuncioData = {
  imagem: "https://lwsdevelopers.github.io/000abanner.png",
  titulo: "🤩 Gostou do aplicativo?",
  descricao: "Avalie o app no Play Store e conte a sua experiência, isso leva menos de 10 segundos!",
  link: "https://abre.ai/feedbackapp?target=blank",
  textoBotao: "Avaliar"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">•</div>
  <div class="conteudo-anuncio">
    <h4>${anuncioData.titulo}</h4>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
