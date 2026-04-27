const anuncioData = {
  imagem: "",
  titulo: "Internet e Megabytes (MB) Quase de borla 😍",
  descricao: "Queres navegar, estudar e até assistir videos?",
  link: "https://rebrand.ly/whatsapp-megass?target=blank",
  textoBotao: "Ativar agora"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Patrocinado • </div>
  <img src="${anuncioData.imagem}" alt="Imagem do curso" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
