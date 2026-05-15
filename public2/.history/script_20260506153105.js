const dados = {
  jogos: [
    {
      id: 1,
      nome: "Resident Evil 2",
      descricao_curta: "O terror psicológico clássico.",
      conteudo: "Sobrevivência em Raccoon City com Leon e Claire.",
      ano: 1998,
      desenvolvedora: "Capcom",
      genero: "Survival Horror",
      plataforma: "PlayStation",
      destaque: true,
      imagem_principal: "assets/re2.jpg"
    },
    {
      id: 2,
      nome: "Sonic the Hedgehog 2",
      descricao_curta: "Velocidade absurda com Sonic e Tails.",
      conteudo: "Clássico do Mega Drive com fases icônicas.",
      ano: 1992,
      desenvolvedora: "SEGA",
      genero: "Plataforma",
      plataforma: "Mega Drive",
      destaque: true,
      imagem_principal: "assets/sonic2.jpg"
    },
    {
      id: 3,
      nome: "Zelda: Ocarina of Time",
      descricao_curta: "A maior aventura já feita.",
      conteudo: "Link enfrenta Ganondorf viajando no tempo.",
      ano: 1998,
      desenvolvedora: "Nintendo",
      genero: "Ação-Aventura",
      plataforma: "Nintendo 64",
      destaque: true,
      imagem_principal: "assets/zelda.jpg"
    }
  ]
};

// INIT
function initIndexPage() {
  renderCarouselDestaques();
  renderTodosCards();
}

// CARROSSEL
function renderCarouselDestaques() {
  const destaques = dados.jogos.filter(j => j.destaque);

  const inner = document.getElementById("carouselInner");
  const indicators = document.getElementById("carouselIndicators");

  if (!inner || !indicators) return;

  inner.innerHTML = "";
  indicators.innerHTML = "";

  destaques.forEach((jogo, i) => {
    inner.innerHTML += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <img src="${jogo.imagem_principal}" class="d-block w-100" style="height:400px; object-fit:cover;">
        <div class="carousel-caption">
          <h5>${jogo.nome}</h5>
          <p>${jogo.descricao_curta}</p>
          <a href="detalhe.html?id=${jogo.id}" class="btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    `;

    indicators.innerHTML += `
      <button data-bs-target="#carouselDestaques" data-bs-slide-to="${i}" class="${i === 0 ? "active" : ""}"></button>
    `;
  });
}

// CARDS
function renderTodosCards() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  dados.jogos.forEach(jogo => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100">
        <img src="${jogo.imagem_principal}" class="card-img-top" style="height:220px; object-fit:cover;">
        <div class="card-body">
          <h5>${jogo.nome}</h5>
          <p>${jogo.descricao_curta}</p>
          <button class="btn btn-primary ver">Acessar</button>
        </div>
      </div>
    `;

    col.querySelector(".ver").addEventListener("click", () => {
      window.location.href = `detalhe.html?id=${jogo.id}`;
    });

    container.appendChild(col);
  });
}

// DETALHES
function initDetalhesPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const jogo = dados.jogos.find(j => j.id === id);
  const container = document.getElementById("detalhesConteudo");

  if (!container) return;

  if (!jogo) {
    container.innerHTML = `<p>Jogo não encontrado</p>`;
    return;
  }

  container.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${jogo.imagem_principal}" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h1>${jogo.nome}</h1>
        <p><strong>Ano:</strong> ${jogo.ano}</p>
        <p>${jogo.conteudo}</p>
        <a href="index.html" class="btn btn-secondary">Voltar</a>
      </div>
    </div>
  `;
}