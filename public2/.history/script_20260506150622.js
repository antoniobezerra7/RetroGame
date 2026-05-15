
const dados = {
  "jogos": [
    {
      "id": 1,
      "nome": "Resident Evil 2",
      "descricao_curta": "O terror psicológico que revolucionou o survival horror no PlayStation.",
      "conteudo": "Resident Evil 2 coloca você na devastada Raccoon City, controlado por Leon S. Kennedy e Claire Redfield. Com cenários claustrofóbicos, quebra-cabeças intrincados e o icônico Mr. X, esse clássico da Capcom entregou tensão e atmosfera inesquecíveis em 1998.",
      "ano": 1998,
      "desenvolvedora": "Capcom",
      "genero": "Survival Horror",
      "plataforma": "PlayStation",
      "destaque": true,
      "imagem_principal": "https://picsum.photos/id/104/800/500",
      "fotos": [
        { "id": 1, "titulo": "Capa lendária americana", "imagem": "https://picsum.photos/id/96/600/400" },
        { "id": 2, "titulo": "Cena do corredor da delegacia", "imagem": "https://picsum.photos/id/169/600/400" },
        { "id": 3, "titulo": "Enfrentando o Tyrant", "imagem": "https://picsum.photos/id/175/600/400" }
      ]
    },
    {
      "id": 2,
      "nome": "The Legend of Zelda: Ocarina of Time",
      "descricao_curta": "A aventura que definiu os jogos 3D e conquistou o mundo.",
      "conteudo": "Ocarina of Time transporta Link através do tempo para impedir Ganondorf. Com uma trilha sonora inesquecível, templos desafiadores e a revolucionária mira Z-target, é considerado por muitos o melhor jogo de todos os tempos.",
      "ano": 1998,
      "desenvolvedora": "Nintendo EAD",
      "genero": "Ação-Aventura",
      "plataforma": "Nintendo 64",
      "destaque": true,
      "imagem_principal": "https://picsum.photos/id/77/800/500",
      "fotos": [
        { "id": 1, "titulo": "Link e Navi na Floresta Kokiri", "imagem": "https://picsum.photos/id/127/600/400" },
        { "id": 2, "titulo": "Templo do Fogo", "imagem": "https://picsum.photos/id/39/600/400" },
        { "id": 3, "titulo": "Mestra-Espada", "imagem": "https://picsum.photos/id/220/600/400" }
      ]
    },
    {
      "id": 3,
      "nome": "Sonic the Hedgehog 2",
      "descricao_curta": "Velocidade pura, fases marcantes e a estreia do Miles 'Tails'.",
      "conteudo": "Sonic 2 trouxe o amigo Tails, o icônico Super Sonic e Chemical Plant Zone. Uma correria frenética que consolidou o Mega Drive como rival direto do SNES. Coletar anéis nunca foi tão divertido!",
      "ano": 1992,
      "desenvolvedora": "Sega Technical Institute",
      "genero": "Plataforma",
      "plataforma": "Mega Drive",
      "destaque": true,
      "imagem_principal": "https://picsum.photos/id/111/800/500",
      "fotos": [
        { "id": 1, "titulo": "Zona Química", "imagem": "https://picsum.photos/id/26/600/400" },
        { "id": 2, "titulo": "Batalha contra o Eggman", "imagem": "https://picsum.photos/id/155/600/400" }
      ]
    },
    {
      "id": 4,
      "nome": "Super Mario World",
      "descricao_curta": "O dinossauro Yoshi e o Reino dos Cogumelos em sua melhor forma 16 bits.",
      "conteudo": "Super Mario World acompanha Mario e Luigi em busca de salvar a Dinosaur Land. Com mapas interconectados, saídas secretas e o poder da capa, é um marco do SNES e referência até hoje.",
      "ano": 1990,
      "desenvolvedora": "Nintendo EAD",
      "genero": "Plataforma",
      "plataforma": "Super Nintendo",
      "destaque": false,
      "imagem_principal": "https://picsum.photos/id/113/800/500",
      "fotos": [
        { "id": 1, "titulo": "Mario montando Yoshi", "imagem": "https://picsum.photos/id/53/600/400" },
        { "id": 2, "titulo": "Castelo de Bowser", "imagem": "https://picsum.photos/id/147/600/400" }
      ]
    },
    {
      "id": 5,
      "nome": "Street Fighter II: The World Warrior",
      "descricao_curta": "O fenômeno dos fliperamas que popularizou os jogos de luta.",
      "conteudo": "Street Fighter II trouxe mecânicas inovadoras como combos especiais e chefes icônicos. Ryu, Ken, Chun-Li e Blanka viraram lendas nas arcades, definindo o gênero por décadas.",
      "ano": 1991,
      "desenvolvedora": "Capcom",
      "genero": "Luta",
      "plataforma": "Arcade / SNES",
      "destaque": true,
      "imagem_principal": "https://picsum.photos/id/114/800/500",
      "fotos": [
        { "id": 1, "titulo": "Hadouken clássico", "imagem": "https://picsum.photos/id/125/600/400" },
        { "id": 2, "titulo": "Seleção de personagens", "imagem": "https://picsum.photos/id/164/600/400" }
      ]
    },
    {
      "id": 6,
      "nome": "Castlevania: Symphony of the Night",
      "descricao_curta": "A obra-prima gótica que inventou o Metroidvania.",
      "conteudo": "Alucard explora o castelo reverso em uma jornada cheia de armas, level design inteligente e trilha sonora clássica. Symphony of the Night é atemporal e indispensável para fãs de exploração.",
      "ano": 1997,
      "desenvolvedora": "Konami",
      "genero": "Ação / Metroidvania",
      "plataforma": "PlayStation",
      "destaque": false,
      "imagem_principal": "https://picsum.photos/id/29/800/500",
      "fotos": [
        { "id": 1, "titulo": "Alucard e a biblioteca", "imagem": "https://picsum.photos/id/116/600/400" },
        { "id": 2, "titulo": "Castelo invertido", "imagem": "https://picsum.photos/id/42/600/400" }
      ]
    }
  ]
};

// ========================= FUNÇÕES DA PÁGINA PRINCIPAL (INDEX) =========================
function initIndexPage() {
  renderCarouselDestaques();
  renderTodosCards();
}

// Slider com os itens onde "destaque" === true
function renderCarouselDestaques() {
  const destaques = dados.jogos.filter(jogo => jogo.destaque === true);
  const carouselInner = document.getElementById('carouselInner');
  const indicatorsContainer = document.getElementById('carouselIndicators');
  
  if (!carouselInner || !indicatorsContainer) return;
  
  if (destaques.length === 0) {
    carouselInner.innerHTML = `<div class="carousel-item active"><div class="bg-secondary text-white p-5 text-center">Nenhum jogo em destaque no momento</div></div>`;
    return;
  }
  
  let innerHtml = '';
  let indicatorsHtml = '';
  
  destaques.forEach((jogo, idx) => {
    const activeClass = idx === 0 ? 'active' : '';
    innerHtml += `
      <div class="carousel-item ${activeClass}">
        <div class="row align-items-center g-0">
          <div class="col-md-6">
            <img src="${jogo.imagem_principal}" class="d-block w-100 carousel-img" alt="${jogo.nome}" style="height: 380px; object-fit: cover;">
          </div>
          <div class="col-md-6 bg-dark bg-opacity-75 p-4 text-white">
            <span class="badge bg-warning text-dark mb-2">⭐ Em Destaque</span>
            <h2 class="display-6 fw-bold">${jogo.nome}</h2>
            <p class="lead">${jogo.descricao_curta}</p>
            <p><i class="bi bi-controller"></i> Plataforma: ${jogo.plataforma} | ${jogo.ano}</p>
            <a href="detalhes.html?id=${jogo.id}" class="btn btn-primary mt-2">🔍 Ver detalhes completos</a>
          </div>
        </div>
      </div>
    `;
    
    indicatorsHtml += `<button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" aria-current="${idx === 0 ? 'true' : 'false'}" aria-label="Slide ${idx+1}"></button>`;
  });
  
  carouselInner.innerHTML = innerHtml;
  indicatorsContainer.innerHTML = indicatorsHtml;
}

// Cards para todos os jogos (entidade principal)
function renderTodosCards() {
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  
  const todosJogos = dados.jogos;
  container.innerHTML = '';
  
  todosJogos.forEach(jogo => {
    const col = document.createElement('div');
    col.className = 'col-sm-12 col-md-6 col-lg-4';
    
    col.innerHTML = `
      <div class="card game-card h-100 border-0 shadow-sm transition-hover">
        <img src="${jogo.imagem_principal}" class="card-img-top" alt="${jogo.nome}" style="height: 220px; object-fit: cover;">
        <div class="card-body bg-dark-soft">
          <span class="badge bg-primary mb-2">${jogo.plataforma}</span>
          <h5 class="card-title text-primary fw-bold">${jogo.nome}</h5>
          <p class="card-text small text-light">${jogo.descricao_curta.substring(0, 100)}${jogo.descricao_curta.length > 100 ? '...' : ''}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <small class="text-muted"><i class="bi bi-calendar"></i> ${jogo.ano}</small>
            <a href="detalhes.html?id=${jogo.id}" class="btn btn-outline-primary btn-sm stretched-link-mimic">Acessar <i class="bi bi-arrow-right-circle"></i></a>
          </div>
        </div>
      </div>
    `;
    
    // tornando o card clicável (melhor experiência)
    const linkBtn = col.querySelector('.btn-outline-primary');
    if (linkBtn) {
      linkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = `detalhes.html?id=${jogo.id}`;
      });
    }
    container.appendChild(col);
  });
}

// ========================= FUNÇÕES DA PÁGINA DETALHES =========================
function initDetalhesPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const idJogo = parseInt(urlParams.get('id'));
  
  if (isNaN(idJogo)) {
    document.getElementById('detalhesConteudo').innerHTML = `<div class="alert alert-danger">⚠️ ID inválido. Jogo não encontrado.</div>`;
    return;
  }
  
  const jogo = dados.jogos.find(item => item.id === idJogo);
  if (!jogo) {
    document.getElementById('detalhesConteudo').innerHTML = `<div class="alert alert-warning">🎮 Jogo não encontrado na coleção.</div>`;
    return;
  }
  
  renderDetalhesPersonalizados(jogo);
}

// Página de Detalhe com layout personalizado (pelo menos 5 campos distintos + fotos secundárias)
function renderDetalhesPersonalizados(jogo) {
  const container = document.getElementById('detalhesConteudo');
  if (!container) return;
  
  // Montagem das INFORMAÇÕES GERAIS (mais de 5 itens: Imagem, nome, ano, desenvolvedora, gênero, plataforma, descrição completa + curiosidades)
  const htmlInfo = `
    <div class="row g-4 mb-5">
      <div class="col-lg-6">
        <div class="card border-0 shadow rounded-4 overflow-hidden">
          <img src="${jogo.imagem_principal}" class="img-fluid" alt="${jogo.nome}" style="max-height: 480px; width: 100%; object-fit: cover;">
          <div class="bg-dark p-3 text-center">
            <span class="badge bg-warning text-dark fs-6">📀 CÓPIA FÍSICA - EDIÇÃO LENDÁRIA</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card border-0 shadow h-100 p-4 bg-dark-soft">
          <h1 class="display-5 fw-bold text-primary">${jogo.nome}</h1>
          <hr class="border-primary">
          <ul class="list-group list-group-flush bg-transparent">
            <li class="list-group-item bg-transparent text-white"><i class="bi bi-calendar2-heart fs-5 me-2 text-primary"></i> <strong>Ano de lançamento:</strong> ${jogo.ano}</li>
            <li class="list-group-item bg-transparent text-white"><i class="bi bi-building fs-5 me-2 text-primary"></i> <strong>Desenvolvedora:</strong> ${jogo.desenvolvedora}</li>
            <li class="list-group-item bg-transparent text-white"><i class="bi bi-joystick fs-5 me-2 text-primary"></i> <strong>Gênero:</strong> ${jogo.genero}</li>
            <li class="list-group-item bg-transparent text-white"><i class="bi bi-cpu fs-5 me-2 text-primary"></i> <strong>Plataforma original:</strong> ${jogo.plataforma}</li>
            <li class="list-group-item bg-transparent text-white"><i class="bi bi-card-text fs-5 me-2 text-primary"></i> <strong>Sinopse completa:</strong> ${jogo.conteudo}</li>
            <li class="list-group-item bg-transparent text-white"><i class="bi bi-star-fill text-warning me-2"></i> <strong>Clássico atemporal:</strong> ${jogo.destaque ? 'Item em destaque na coleção' : 'Item essencial no acervo'}</li>
          </ul>
          <div class="mt-3">
            <a href="index.html" class="btn btn-outline-secondary"><i class="bi bi-arrow-left"></i> Voltar ao acervo</a>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // SEÇÃO DE FOTOS VINCULADAS (entidade secundária: fotos do jogo)
  let fotosHtml = `<div class="mt-4"><h3 class="section-title border-start border-4 border-primary ps-3 mb-4">📸 Fotos & Mídias do jogo</h3><div class="row g-3">`;
  
  if (jogo.fotos && jogo.fotos.length > 0) {
    jogo.fotos.forEach(foto => {
      fotosHtml += `
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 bg-dark border-0 shadow-sm">
            <img src="${foto.imagem}" class="card-img-top" alt="${foto.titulo}" style="height: 180px; object-fit: cover;">
            <div class="card-body text-center">
              <p class="card-text text-white"><i class="bi bi-camera-fill"></i> ${foto.titulo}</p>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    fotosHtml += `<div class="col-12"><div class="alert alert-secondary">Nenhuma foto adicional vinculada a este título.</div></div>`;
  }
  fotosHtml += `</div></div>`;
  
  container.innerHTML = htmlInfo + fotosHtml;
}

// Exportação para escopo global (as funções são chamadas nos HTML)
window.initIndexPage = initIndexPage;
window.initDetalhesPage = initDetalhesPage;