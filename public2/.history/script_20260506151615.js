function renderTodosCards() {
  const container = document.getElementById('cardsContainer');
  if (!container) return;

  container.innerHTML = '';

  dados.jogos.forEach(jogo => {
    const col = document.createElement('div');
    col.className = 'col-sm-12 col-md-6 col-lg-4';

    col.innerHTML = `
      <div class="card game-card h-100 border-0 shadow-sm">
        <img src="${jogo.imagem_principal}" class="card-img-top" alt="${jogo.nome}" style="height: 220px; object-fit: cover;">
        <div class="card-body bg-dark-soft">
          <span class="badge bg-primary mb-2">${jogo.plataforma}</span>
          <h5 class="card-title text-primary fw-bold">${jogo.nome}</h5>
          <p class="card-text small text-light">${jogo.descricao_curta}</p>
          <button class="btn btn-outline-primary btn-sm ver-detalhe">Acessar</button>
        </div>
      </div>
    `;

    col.querySelector('.ver-detalhe').addEventListener('click', () => {
      window.location.href = `detalhe.html?id=${jogo.id}`;
    });

    container.appendChild(col);
  });
}