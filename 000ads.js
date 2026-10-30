const anuncioData = {
  imagem: "https://lwsdevelopers.github.io/000abanner.png",
  titulo: "🚀 Nova versão disponível.",
  descricao: "Atualize o aplicativo para a versão mais recente e aproveite as novidades, melhorias e correções.",
  link: "https://play.google.com/store/apps/details?id=com.lws.examesteoricos?target=blank",
  textoBotao: "Atualizar"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Melhorias • </div>
  <div class="conteudo-anuncio">
    <h4>${anuncioData.titulo}</h4>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;