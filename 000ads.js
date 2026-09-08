const anuncioData = {
  imagem: "https://raw.githubusercontent.com/LWSdevelopers/LWSdevelopers.github.io/refs/heads/main/000img.jpg",
  titulo: "🚘 A SUA MARCA AQUI",
  descricao: "Chegue a milhares de futuros condutores em Moçambique.",
  link: "https://wa.me/258855495032?text=Ol%C3%A1%21%20%F0%9F%91%8B%20Tenho%20interesse%20em%20anunciar%20no%20vosso%20aplicativo.%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es.%20%5BEdite%20esta%20mensagem%20e%20conte-nos%20como%20podemos%20ajudar.%5D?target=blank",
  textoBotao: "Contacte-nos"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Espaço publicitário •</div>
  <img src="${anuncioData.imagem}" alt="Publicidade" class="imagem-anuncio"/>
  <div class="conteudo-anuncio">
   <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
