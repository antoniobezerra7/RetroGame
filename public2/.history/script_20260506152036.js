const dados = {
  jogos: [
    {
      id: 1,
      nome: "Resident Evil 2",
      descricao_curta: "O terror psicológico que revolucionou o survival horror no PlayStation.",
      conteudo: "Resident Evil 2 coloca você na devastada Raccoon City, controlado por Leon S. Kennedy e Claire Redfield.",
      ano: 1998,
      desenvolvedora: "Capcom",
      genero: "Survival Horror",
      plataforma: "PlayStation",
      destaque: true,
      imagem_principal: "https://picsum.photos/id/104/800/500"
    },
    {
      id: 2,
      nome: "The Legend of Zelda: Ocarina of Time",
      descricao_curta: "A aventura que definiu os jogos 3D e conquistou o mundo.",
      conteudo: "Ocarina of Time transporta Link através do tempo para impedir Ganondorf.",
      ano: 1998,
      desenvolvedora: "Nintendo EAD",
      genero: "Ação-Aventura",
      plataforma: "Nintendo 64",
      destaque: true,
      imagem_principal: "https://picsum.photos/id/77/800/500"
    },
    {
      id: 3,
      nome: "Sonic the Hedgehog 2",
      descricao_curta: "Velocidade pura, fases marcantes e a estreia do Tails.",
      conteudo: "Sonic 2 trouxe o amigo Tails e o icônico Super Sonic.",
      ano: 1992,
      desenvolvedora: "Sega",
      genero: "Plataforma",
      plataforma: "Mega Drive",
      destaque: true,
      imagem_principal: "https://picsum.photos/id/111/800/500"
    }
  ]
};

function initIndexPage() {
  renderCarouselDestaques();
  renderTodosCards();
}

function renderCarouselDestaques() {
  const destaques = dados.jogos.filter(jogo => jogo.destaque);
  const carouselInner = document.getElementById("carouselInner");
  const indicators = document.getElementById("carouselIndicators");

  if (!carouselInner || !indicators) return;

  carouselInner.innerHTML = "";
  indicators.innerHTML = "";

  destaques.forEach((jogo, index) => {
    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${jogo.imagem_principal}" class="d-block w-100" style="height: 400px; object-fit: cover;" alt="${jogo.nome}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${jogo.nome}</h5>
          <p>${jogo.descricao_curta}</p>
          <a href="detalhe.html?id=${jogo.id}" class="btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    `;

    indicators.innerHTML += `
      <button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}"></button>
    `;
  });
}

function renderTodosCards() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  dados.jogos.forEach(jogo => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card game-card h-100 border-0 shadow-sm">
        <img src="${jogo.imagem_principal}" class="card-img-top" style="height: 220px; object-fit: cover;" alt="${jogo.nome}">
        <div class="card-body bg-dark-soft">
          <h5 class="card-title text-primary">${jogo.nome}</h5>
          <p class="card-text text-light">${jogo.descricao_curta}</p>
          <button class="btn btn-outline-primary btn-sm ver-detalhe">Acessar</button>
        </div>
      </div>
    `;

    col.querySelector(".ver-detalhe").addEventListener("click", () => {
      window.location.href = `detalhe.html?id=${jogo.id}`;
    });

    container.appendChild(col);
  });
}

function initDetalhesPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const jogo = dados.jogos.find(j => j.id === id);
  const container = document.getElementById("detalhesConteudo");

  if (!container) return;

  if (!jogo) {
    container.innerHTML = `<div class="alert alert-danger">Jogo não encontrado.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <img src="${jogo.imagem_principal}" class="img-fluid rounded shadow" alt="${jogo.nome}">
      </div>

      <div class="col-lg-6">
        <h1 class="text-primary">${jogo.nome}</h1>
        <p><strong>Ano:</strong> ${jogo.ano}</p>
        <p><strong>Desenvolvedora:</strong> ${jogo.desenvolvedora}</p>
        <p><strong>Gênero:</strong> ${jogo.genero}</p>
        <p><strong>Plataforma:</strong> ${jogo.plataforma}</p>
        <p>${jogo.conteudo}</p>

        <a href="index.html" class="btn btn-outline-secondary">Voltar</a>
      </div>
    </div>
  `;
}