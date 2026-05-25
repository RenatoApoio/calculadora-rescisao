(function () {
  // ── Favicon ⚡ ─────────────────────────────────────────────────────────
  if (!document.querySelector('link[rel="icon"]')) {
    const lnk = document.createElement('link');
    lnk.rel = 'icon';
    lnk.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>";
    document.head.appendChild(lnk);
  }

  // ── Open Graph (WhatsApp, Facebook, LinkedIn preview) ─────────────────
  function setMeta(prop, val, isName) {
    const attr = isName ? 'name' : 'property';
    if (!document.querySelector(`meta[${attr}="${prop}"]`)) {
      const m = document.createElement('meta');
      m.setAttribute(attr, prop);
      m.content = val;
      document.head.appendChild(m);
    }
  }
  const pgTitle  = document.title || 'FacilCalc';
  const pgDesc   = document.querySelector('meta[name="description"]')?.content || 'Calculadoras gratuitas para brasileiros.';
  const pgUrl    = window.location.href;
  setMeta('og:title',       pgTitle);
  setMeta('og:description', pgDesc);
  setMeta('og:type',        'website');
  setMeta('og:url',         pgUrl);
  setMeta('og:site_name',   'FacilCalc');
  setMeta('og:locale',      'pt_BR');
  setMeta('twitter:card',   'summary', true);
  setMeta('twitter:title',  pgTitle,   true);
  setMeta('twitter:description', pgDesc, true);

  // ── Acessibilidade ─────────────────────────────────────────────────────
  // 1. Foco visível para navegação por teclado
  const focusStyle = document.createElement('style');
  focusStyle.textContent = `
    *:focus-visible {
      outline: 3px solid #1a73e8 !important;
      outline-offset: 2px !important;
      border-radius: 4px;
    }
    .btn-calc:focus-visible, .btn-novo:focus-visible { outline-color: #fff !important; }
  `;
  document.head.appendChild(focusStyle);

  // 2. aria-label em inputs que não têm id associado a label
  document.querySelectorAll('.field').forEach(field => {
    const label = field.querySelector('label');
    const input = field.querySelector('input, select, textarea');
    if (!label || !input) return;
    const labelText = label.textContent.replace(/\(.*?\)/g,'').trim();
    if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      input.setAttribute('aria-label', labelText);
    }
  });

  // 3. role="main" no main se não tiver
  const mainEl = document.querySelector('main');
  if (mainEl && !mainEl.getAttribute('role')) mainEl.setAttribute('role', 'main');

  // 4. Skip link (pula direto para o conteúdo principal — acessibilidade teclado/leitores)
  if (!document.getElementById('skip-link')) {
    const skip = document.createElement('a');
    skip.id = 'skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Ir para o conteúdo principal';
    skip.style.cssText = 'position:absolute;top:-999px;left:0;background:#1a73e8;color:#fff;padding:8px 16px;border-radius:0 0 8px 0;font-weight:700;z-index:9999;text-decoration:none;';
    skip.addEventListener('focus', () => { skip.style.top = '0'; });
    skip.addEventListener('blur',  () => { skip.style.top = '-999px'; });
    document.body.prepend(skip);
    if (mainEl) mainEl.id = mainEl.id || 'main-content';
  }

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
