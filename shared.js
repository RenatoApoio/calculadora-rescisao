(function () {
  // ── Ano dinâmico no rodapé ─────────────────────────────────────────────
  const ano = new Date().getFullYear();
  document.querySelectorAll('footer').forEach(f => {
    f.innerHTML = f.innerHTML.replace(/©\s*\d{4}/g, '© ' + ano);
  });

  // ── Autocomplete off em todos os inputs ────────────────────────────────
  document.querySelectorAll('input').forEach(el => el.setAttribute('autocomplete', 'off'));

  // ── Estilos de impressão ───────────────────────────────────────────────
  const ps = document.createElement('style');
  ps.media = 'print';
  ps.textContent = `
    .nav, .ad-slot, #formulario, .btn-novo, .btn-calc,
    #fc-actions, footer a, header p { display: none !important; }
    header { padding: 10px !important; font-size: 12pt; }
    .card { break-inside: avoid; box-shadow: none !important; border: 1px solid #ccc !important; }
    body { background: #fff !important; }
    .total-box, .melhor-box, .result-box, .parcela-card, .mini, .mini-card { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  `;
  document.head.appendChild(ps);

  // ── Barra de ações (Imprimir / Compartilhar) ───────────────────────────
  const resultado = document.getElementById('resultado');
  if (!resultado) return;

  function injectActions() {
    if (document.getElementById('fc-actions')) return;

    const bar = document.createElement('div');
    bar.id = 'fc-actions';
    bar.style.cssText = 'display:flex;gap:10px;justify-content:center;margin:16px 0 8px;flex-wrap:wrap;';
    bar.innerHTML = `
      <button id="fc-print" style="background:#1a73e8;color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:.9rem;font-weight:700;cursor:pointer;">🖨️ Imprimir / Salvar PDF</button>
      <button id="fc-share" style="background:#2e7d32;color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:.9rem;font-weight:700;cursor:pointer;">🔗 Compartilhar</button>
    `;

    // Insere antes do div que contém o btn-novo
    const novoWrap = resultado.querySelector('div[style*="text-align:center"]');
    if (novoWrap) resultado.insertBefore(bar, novoWrap);
    else resultado.appendChild(bar);

    document.getElementById('fc-print').addEventListener('click', () => window.print());

    document.getElementById('fc-share').addEventListener('click', async () => {
      const btn = document.getElementById('fc-share');
      const url = window.location.href.split('?')[0].split('#')[0];
      const title = document.title;
      if (navigator.share) {
        try { await navigator.share({ title, url }); } catch (e) {}
      } else {
        try {
          await navigator.clipboard.writeText(url);
          btn.textContent = '✅ Link copiado!';
          setTimeout(() => { btn.innerHTML = '🔗 Compartilhar'; }, 2500);
        } catch (e) {
          prompt('Copie o link abaixo:', url);
        }
      }
    });
  }

  // Observa quando #resultado fica visível
  const obs = new MutationObserver(() => {
    if (resultado.style.display && resultado.style.display !== 'none') injectActions();
  });
  obs.observe(resultado, { attributes: true, attributeFilter: ['style'] });

  // ── Zerar formulário ao clicar Novo Cálculo ────────────────────────────
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('btn-novo')) return;
    setTimeout(() => {
      document.querySelectorAll('#formulario input[type="text"], #formulario input[type="number"]')
        .forEach(el => { el.value = ''; });
      const bar = document.getElementById('fc-actions');
      if (bar) bar.remove();
    }, 60);
  });
})();
