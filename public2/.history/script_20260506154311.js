const dados = {
  jogos: [
    {
      id: 1,
      nome: "Resident Evil 2",
      descricao_curta: "O terror psicológico que revolucionou o survival horror.",
      conteudo:
        "Resident Evil 2 coloca você na devastada Raccoon City, acompanhando Leon S. Kennedy e Claire Redfield em uma luta desesperada pela sobrevivência. É um clássico absoluto do PlayStation.",
      ano: 1998,
      desenvolvedora: "Capcom",
      genero: "Survival Horror",
      plataforma: "PlayStation",
      destaque: true,
      imagem_principal: "assets/re2.jpg",
    },
    {
      id: 2,
      nome: "Sonic the Hedgehog 2",
      descricao_curta: "Velocidade, fases marcantes e a estreia de Tails.",
      conteudo:
        "Sonic 2 elevou a franquia com ação rápida, música inesquecível e a presença de Tails como parceiro. Um dos maiores clássicos do Mega Drive.",
      ano: 1992,
      desenvolvedora: "SEGA",
      genero: "Plataforma",
      plataforma: "Mega Drive",
      destaque: true,
      imagem_principal: "assets/sonic2.jpg",
    },
    {
      id: 3,
      nome: "The Legend of Zelda: Ocarina of Time",
      descricao_curta: "A aventura que definiu os jogos 3D.",
      conteudo:
        "Ocarina of Time leva Link por uma jornada épica no tempo para impedir Ganondorf. Com exploração, música marcante e design revolucionário, virou referência histórica.",
      ano: 1998,
      desenvolvedora: "Nintendo",
      genero: "Ação-Aventura",
      plataforma: "Nintendo 64",
      destaque: true,
      imagem_principal: "assets/zelda.jpg",
    },
  ],
};

function initIndexPage() {
  renderCarouselDestaques();
  renderTodosCards();
}

function renderCarouselDestaques() {
  const destaques = dados.jogos.filter((jogo) => jogo.destaque);
  const carouselInner = document.getElementById("carouselInner");
  const indicators = document.getElementById("carouselIndicators");

  if (!carouselInner || !indicators) return;

  carouselInner.innerHTML = "";
  indicators.innerHTML = "";

  destaques.forEach((jogo, index) => {
    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="carousel-destaque-img">
          <img src="${jogo.imagem_principal}" alt="${jogo.nome}">
        </div>
        <div class="carousel-caption custom-caption">
          <h5>${jogo.nome}</h5>
          <p>${jogo.descricao_curta}</p>
          <a href="detalhe.html?id=${jogo.id}" class="btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    `;

    indicators.innerHTML += `
      <button 
        type="button" 
        data-bs-target="#carouselDestaques" 
        data-bs-slide-to="${index}" 
        class="${index === 0 ? "active" : ""}" 
        aria-current="${index === 0 ? "true" : "false"}" 
        aria-label="Slide ${index + 1}">
      </button>
    `;
  });
}

function renderTodosCards() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  dados.jogos.forEach((jogo) => {
    const col = document.createElement("div");
    col.className = "col-sm-12 col-md-6 col-lg-4";

    col.innerHTML = `
      <div class="card game-card h-100 border-0 shadow-sm">
        <img src="${jogo.imagem_principal}" class="card-img-top game-card-img" alt="${jogo.nome}">
        <div class="card-body bg-dark-soft d-flex flex-column">
          <span class="badge bg-primary mb-2 align-self-start">${jogo.plataforma}</span>
          <h5 class="card-title text-primary fw-bold">${jogo.nome}</h5>
          <p class="card-text small text-light flex-grow-1">${jogo.descricao_curta}</p>
          <button class="btn btn-outline-primary btn-sm ver-detalhe mt-2">Acessar</button>
        </div>
      </div>
    `;

    const btn = col.querySelector(".ver-detalhe");
    btn.addEventListener("click", () => {
      window.location.href = `detalhe.html?id=${jogo.id}`;
    });

    container.appendChild(col);
  });
}

function initDetalhesPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);

  const jogo = dados.jogos.find((item) => item.id === id);
  const container = document.getElementById("detalhesConteudo");

  if (!container) return;

  if (!jogo) {
    container.innerHTML = `<div class="alert alert-danger">Jogo não encontrado.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="row g-4 align-items-start">
      <div class="col-lg-6">
        <div class="detail-image-box">
          <img src="${jogo.imagem_principal}" alt="${jogo.nome}">
        </div>
      </div>

      <div class="col-lg-6">
        <div class="detail-panel">
          <h1 class="text-primary fw-bold mb-3">${jogo.nome}</h1>

          <p><strong>Ano:</strong> ${jogo.ano}</p>
          <p><strong>Desenvolvedora:</strong> ${jogo.desenvolvedora}</p>
          <p><strong>Gênero:</strong> ${jogo.genero}</p>
          <p><strong>Plataforma:</strong> ${jogo.plataforma}</p>
          <p class="mb-4"><strong>Descrição:</strong> ${jogo.conteudo}</p>

          <a href="index.html" class="btn btn-outline-secondary">Voltar</a>
        </div>
      </div>
    </div>
  `;
}