const anuncioData = {
  imagem: "https://lwsdevelopers.github.io/000abanner.png",
  titulo: "🤩 Gostou do aplicativo?",
  descricao: "Avalie o app no play store, leva menos de 10 segundos e a conte sua experiência! ",
  link: "https://abre.ai/teoricomz-app?target=blank",
  textoBotao: "Avaliar"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Patrocinado • Anúncio</div>
  <div class="conteudo-anuncio">
    <h4>${anuncioData.titulo}</h4>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
