const anuncioData = {
  imagem: "",
  titulo: " 🚦Convide seus amigos",
  descricao: "Os melhores alunos não estudam sozinhos, convide seus colegas!",
  link: "https://rebrand.ly/exames-teoricos",
  textoBotao: "Convidar"
};

// Função para acionar a partilha nativa do sistema
async function compartilharApp() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: anuncioData.titulo,
        text: `Olá! Estou a usar este app para estudar para o exame de condução. É muito fácil, e é gratuito! Vê aqui:`,
        url: anuncioData.link,
      });
      console.log("Conteúdo partilhado com sucesso!");
    } catch (err) {
      console.log("Erro ao tentar partilhar:", err);
    }
  } else {
    // Fallback para navegadores que não suportam partilha nativa
    const whatsappUrl = `https://api.whatsapp.com/send?text=Olá! Estuda para o seu exame de condução com este app: ${anuncioData.link}`;
    window.open(whatsappUrl, '_blank');
  }
}

const anuncioContainer = document.getElementById("anuncio");

if (anuncioContainer) {
  anuncioContainer.innerHTML = `
    <div class="patrocinado">Convite •</div>
    <img src="${anuncioData.imagem}" alt="Convite para estudo" class="imagem-anuncio"/>
    <div class="conteudo-anuncio">
      <h3>${anuncioData.titulo}</h3>
      <p>${anuncioData.descricao}</p>
    </div>
    <button class="botao-anuncio" onclick="compartilharApp()">
      ${anuncioData.textoBotao}
    </button>
  `;
}