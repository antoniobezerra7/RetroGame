const dados = [
  {
    id: 1,
    titulo: "Resident Evil 2",
    descricao: "O survival horror que marcou uma geração no PlayStation.",
    conteudo:
      "Resident Evil 2 coloca o jogador em Raccoon City, acompanhando Leon S. Kennedy e Claire Redfield em uma fuga cheia de tensão, puzzles e criaturas memoráveis. É um dos clássicos mais influentes da Capcom.",
    categoria: "Horror",
    autor: "Capcom",
    data: "1998-01-21",
    imagem: "assets/re2.jpg",
  },
  {
    id: 2,
    titulo: "Sonic the Hedgehog 2",
    descricao: "Velocidade, fases marcantes e a estreia de Tails.",
    conteudo:
      "Sonic 2 expandiu tudo o que o primeiro jogo fez, trazendo fases icônicas, trilha sonora marcante e a parceria com Tails. É um dos maiores símbolos do Mega Drive e do auge da SEGA nos 16 bits.",
    categoria: "Plataforma",
    autor: "SEGA",
    data: "1992-11-24",
    imagem: "assets/sonic2.jpg",
  },
  {
    id: 3,
    titulo: "The Legend of Zelda: Ocarina of Time",
    descricao: "A aventura que definiu os jogos 3D.",
    conteudo:
      "Ocarina of Time levou Link a uma jornada no tempo para impedir Ganondorf. Com exploração, música memorável e um design revolucionário, o jogo se tornou um dos maiores clássicos da história.",
    categoria: "Aventura",
    autor: "Nintendo",
    data: "1998-11-21",
    imagem: "assets/zelda.jpg",
  },
];

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("pt-BR");
}

function initIndexPage() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  dados.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("game-card");

    card.innerHTML = `
      <div class="game-card__image">
        <img src="${item.imagem}" alt="${item.titulo}">
      </div>

      <div class="game-card__body">
        <span class="badge">${item.categoria}</span>
        <h3 class="game-card__title">${item.titulo}</h3>

        <div class="game-card__meta">
          <span>${item.autor}</span>
          <span>${formatDate(item.data)}</span>
        </div>

        <p class="game-card__desc">${item.descricao}</p>

        <a class="btn btn-primary" href="detalhe.html?id=${item.id}">Ver detalhes</a>
      </div>
    `;

    container.appendChild(card);
  });
}

function initDetalhesPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const item = dados.find((game) => game.id === id);

  const container = document.getElementById("detalhesConteudo");
  if (!container) return;

  if (!item) {
    container.innerHTML = `
      <div class="loading-box">
        <h1>Jogo não encontrado</h1>
        <p>O item solicitado não existe no catálogo.</p>
        <a class="btn btn-primary" href="index.html">Voltar para a coleção</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="detail-card">
      <div class="detail-image-box">
        <img src="${item.imagem}" alt="${item.titulo}">
      </div>

      <div class="detail-content">
        <span class="badge">${item.categoria}</span>
        <h1>${item.titulo}</h1>

        <ul class="detail-list">
          <li><strong>Categoria:</strong> ${item.categoria}</li>
          <li><strong>Autor / Desenvolvedora:</strong> ${item.autor}</li>
          <li><strong>Data:</strong> ${formatDate(item.data)}</li>
          <li><strong>ID:</strong> ${item.id}</li>
        </ul>

        <p><strong>Descrição:</strong> ${item.descricao}</p>
        <p>${item.conteudo}</p>

        <a class="btn btn-outline" href="index.html">Voltar para a coleção</a>
      </div>
    </div>
  `;
}

if (document.getElementById("cardsContainer")) {
  initIndexPage();
}

if (document.getElementById("detalhesConteudo")) {
  initDetalhesPage();
}