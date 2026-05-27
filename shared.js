(function () {
  // ── Remover ad-slot placeholders (AdSense injeta os reais automaticamente) ──
  document.querySelectorAll('.ad-slot').forEach(function(el){ el.remove(); });

  // ── Trust badges no header de todas as páginas de ferramenta ──────────
  var _hdr = document.querySelector('header');
  if (_hdr && !_hdr.querySelector('.fc-trust') && !_hdr.querySelector('.trust-badges')) {
    var _tb = document.createElement('div');
    _tb.className = 'fc-trust';
    _tb.style.cssText = 'display:flex;flex-wrap:wrap;justify-content:center;gap:7px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,.18);';
    var _bs = 'border-radius:20px;padding:3px 12px;font-size:.73rem;font-weight:700;';
    _tb.innerHTML =
      '<span style="' + _bs + 'background:rgba(52,168,83,.28);border:1px solid rgba(52,168,83,.5);color:#c8f7d8;">✅ Atualizado 2025</span>' +
      '<span style="' + _bs + 'background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.28);color:#fff;">🆓 Gratuito</span>' +
      '<span style="' + _bs + 'background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.28);color:#fff;">🔒 Sem cadastro</span>' +
      '<span style="' + _bs + 'background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.28);color:#fff;">⚡ Instantâneo</span>';
    _hdr.appendChild(_tb);
  }

  // ── Favicon ⚡ ─────────────────────────────────────────────────────────
  if (!document.querySelector('link[rel="icon"]')) {
    const lnk = document.createElement('link');
    lnk.rel = 'icon';
    lnk.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>";
    document.head.appendChild(lnk);
  }

  // ── Detect current page slug ──────────────────────────────────────────
  const pathParts = window.location.pathname.replace(/\/$/,'').split('/').filter(Boolean);
  const currentSlug = pathParts[pathParts.length - 1] || '';
  const isHome = !currentSlug;

  // ── Open Graph (WhatsApp, Facebook, LinkedIn preview) ─────────────────
  function setMeta(prop, val, isName) {
    const attr = isName ? 'name' : 'property';
    if (!document.querySelector('meta[' + attr + '="' + prop + '"]')) {
      const m = document.createElement('meta');
      m.setAttribute(attr, prop);
      m.content = val;
      document.head.appendChild(m);
    }
  }
  const pgTitle = document.title || 'FacilCalc';
  const pgDesc  = (document.querySelector('meta[name="description"]') || {}).content || 'Calculadoras gratuitas para brasileiros.';
  const pgUrl   = window.location.href;
  setMeta('og:title',            pgTitle);
  setMeta('og:description',      pgDesc);
  setMeta('og:type',             'website');
  setMeta('og:url',              pgUrl);
  setMeta('og:site_name',        'FacilCalc');
  setMeta('og:locale',           'pt_BR');
  setMeta('twitter:card',        'summary', true);
  setMeta('twitter:title',       pgTitle,   true);
  setMeta('twitter:description', pgDesc,    true);

  // ── Schema.org JSON-LD ─────────────────────────────────────────────────
  const SLUG_APPCAT = {
    'calculadora-rescisao':'FinanceApplication','calculadora-fgts':'FinanceApplication',
    'calculadora-ferias':'FinanceApplication','calculadora-horas-extras':'FinanceApplication',
    'simulador-salario':'FinanceApplication','calculadora-inss':'FinanceApplication',
    'calculadora-13-salario':'FinanceApplication','calculadora-ir':'FinanceApplication',
    'calculadora-emprestimo':'FinanceApplication','simulador-financiamento':'FinanceApplication',
    'calculadora-juros-compostos':'FinanceApplication','calculadora-sac-price':'FinanceApplication',
    'calculadora-aposentadoria':'FinanceApplication','calculadora-rescisao-aluguel':'FinanceApplication',
    'banco-de-horas':'FinanceApplication','calculadora-insalubridade':'FinanceApplication',
    'calculadora-plr':'FinanceApplication','comparador-pj-clt-mei':'FinanceApplication',
    'calculadora-cdb-lci-lca':'FinanceApplication','simulador-tesouro-direto':'FinanceApplication',
    'calculadora-fire':'FinanceApplication','calculadora-pgbl-vgbl':'FinanceApplication',
    'alugar-ou-comprar':'FinanceApplication','calculadora-itbi':'FinanceApplication',
    'calculadora-yield-imovel':'FinanceApplication','cotacao-moedas':'FinanceApplication',
    'calculadora-das-mei':'FinanceApplication','calculadora-icms-iss':'FinanceApplication',
    'calculadora-combustivel':'UtilitiesApplication','custo-do-carro':'UtilitiesApplication',
    'calculadora-hora-trabalho':'UtilitiesApplication','calculadora-reforma':'UtilitiesApplication',
    'divisor-de-conta':'UtilitiesApplication','conversor-unidades':'UtilitiesApplication',
    'calculadora':'UtilitiesApplication','calculadora-contagem-datas':'UtilitiesApplication',
    'encurtador-url':'UtilitiesApplication','verificar-dominio':'UtilitiesApplication',
    'calculadora-media-escolar':'EducationApplication',
    'calculadora-gravidez':'HealthApplication','calculadora-imc':'HealthApplication',
    'calculadora-calorias':'HealthApplication',
    'taxas-do-dia':'FinanceApplication','consulta-cnpj':'FinanceApplication',
    'consulta-cep':'UtilitiesApplication','feriados':'UtilitiesApplication',
    'gerador-qr-code':'UtilitiesApplication',
  };

  if (!isHome && !document.querySelector('script[type="application/ld+json"]')) {
    const appCat = SLUG_APPCAT[currentSlug] || 'UtilitiesApplication';
    const origin = window.location.origin;
    const shortName = pgTitle.split('|')[0].split('—')[0].trim();
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          'name': shortName,
          'description': pgDesc,
          'url': pgUrl,
          'applicationCategory': appCat,
          'operatingSystem': 'All',
          'inLanguage': 'pt-BR',
          'isAccessibleForFree': true,
          'offers': {'@type':'Offer','price':'0','priceCurrency':'BRL'},
          'publisher': {'@type':'Organization','name':'FacilCalc','url':origin + '/'}
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {'@type':'ListItem','position':1,'name':'FacilCalc','item':origin + '/'},
            {'@type':'ListItem','position':2,'name':shortName,'item':pgUrl}
          ]
        }
      ]
    };
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify(schema);
    document.head.appendChild(ld);
  }

  // ── Internal links — "Veja também" ────────────────────────────────────
  const TOOL_LABELS = {
    'calculadora-rescisao':'Rescisão CLT',
    'calculadora-fgts':'Calculadora FGTS',
    'calculadora-ferias':'Calculadora de Férias',
    'calculadora-horas-extras':'Horas Extras',
    'simulador-salario':'Salário Líquido',
    'calculadora-inss':'Calculadora INSS',
    'calculadora-13-salario':'13º Salário',
    'calculadora-ir':'Imposto de Renda',
    'calculadora-emprestimo':'Simulador de Empréstimo',
    'simulador-financiamento':'Financiamento Imobiliário',
    'calculadora-juros-compostos':'Juros Compostos',
    'calculadora-sac-price':'SAC vs Price',
    'calculadora-aposentadoria':'Aposentadoria INSS',
    'calculadora-rescisao-aluguel':'Rescisão de Aluguel',
    'banco-de-horas':'Banco de Horas',
    'calculadora-insalubridade':'Insalubridade e Periculosidade',
    'calculadora-plr':'Calculadora PLR',
    'comparador-pj-clt-mei':'PJ vs CLT vs MEI',
    'calculadora-cdb-lci-lca':'CDB vs LCI vs LCA',
    'simulador-tesouro-direto':'Tesouro Direto',
    'calculadora-fire':'Independência Financeira (FIRE)',
    'calculadora-pgbl-vgbl':'PGBL vs VGBL',
    'alugar-ou-comprar':'Alugar ou Comprar?',
    'calculadora-itbi':'Calculadora ITBI',
    'calculadora-yield-imovel':'Yield do Imóvel',
    'calculadora-reforma':'Custo de Reforma',
    'calculadora-combustivel':'Custo de Combustível',
    'custo-do-carro':'Custo Real do Carro',
    'calculadora-hora-trabalho':'Hora de Trabalho',
    'divisor-de-conta':'Divisor de Conta',
    'conversor-unidades':'Conversor de Unidades',
    'calculadora-gravidez':'Calculadora de Gravidez',
    'calculadora-media-escolar':'Média Escolar',
    'calculadora-das-mei':'DAS MEI 2025',
    'calculadora-icms-iss':'ICMS e ISS',
    'calculadora-imc':'Calculadora de IMC',
    'calculadora-calorias':'Calculadora de Calorias',
    'cotacao-moedas':'Cotação de Moedas',
    'encurtador-url':'Encurtador de URL',
    'verificar-dominio':'Verificar Domínio',
    'calculadora':'Calculadora Científica',
    'calculadora-contagem-datas':'Contagem de Datas',
    'taxas-do-dia':'Taxas do Dia (Selic/CDI)',
    'consulta-cnpj':'Consulta CNPJ',
    'consulta-cep':'Consulta CEP',
    'feriados':'Feriados 2025/2026',
    'gerador-qr-code':'Gerador de QR Code',
  };

  // 5 related tools per page — ordered by relevance
  const RELATED = {
    'calculadora-rescisao':    ['calculadora-fgts','calculadora-ferias','simulador-salario','calculadora-13-salario','banco-de-horas'],
    'calculadora-fgts':        ['calculadora-rescisao','calculadora-ferias','simulador-salario','calculadora-13-salario','banco-de-horas'],
    'calculadora-ferias':      ['calculadora-rescisao','calculadora-fgts','calculadora-horas-extras','calculadora-13-salario','banco-de-horas'],
    'calculadora-horas-extras':['banco-de-horas','calculadora-insalubridade','calculadora-ferias','calculadora-rescisao','simulador-salario'],
    'simulador-salario':       ['calculadora-inss','calculadora-ir','comparador-pj-clt-mei','calculadora-rescisao','calculadora-13-salario'],
    'calculadora-inss':        ['simulador-salario','calculadora-ir','calculadora-rescisao','calculadora-aposentadoria','calculadora-das-mei'],
    'calculadora-13-salario':  ['calculadora-plr','calculadora-ferias','calculadora-rescisao','simulador-salario','calculadora-inss'],
    'calculadora-ir':          ['simulador-salario','calculadora-pgbl-vgbl','calculadora-inss','calculadora-cdb-lci-lca','calculadora-das-mei'],
    'calculadora-emprestimo':  ['calculadora-juros-compostos','calculadora-sac-price','simulador-financiamento','alugar-ou-comprar','calculadora-cdb-lci-lca'],
    'simulador-financiamento': ['calculadora-sac-price','calculadora-itbi','alugar-ou-comprar','calculadora-emprestimo','calculadora-yield-imovel'],
    'calculadora-juros-compostos':['calculadora-cdb-lci-lca','simulador-tesouro-direto','calculadora-fire','calculadora-sac-price','calculadora-emprestimo'],
    'calculadora-sac-price':   ['simulador-financiamento','calculadora-emprestimo','calculadora-itbi','alugar-ou-comprar','calculadora-juros-compostos'],
    'calculadora-aposentadoria':['calculadora-inss','calculadora-fire','calculadora-pgbl-vgbl','simulador-tesouro-direto','calculadora-cdb-lci-lca'],
    'calculadora-rescisao-aluguel':['alugar-ou-comprar','calculadora-itbi','calculadora-yield-imovel','simulador-financiamento','calculadora-reforma'],
    'banco-de-horas':          ['calculadora-horas-extras','calculadora-insalubridade','calculadora-ferias','calculadora-rescisao','calculadora-plr'],
    'calculadora-insalubridade':['banco-de-horas','calculadora-horas-extras','calculadora-plr','calculadora-rescisao','simulador-salario'],
    'calculadora-plr':         ['calculadora-13-salario','calculadora-ir','simulador-salario','calculadora-rescisao','calculadora-inss'],
    'comparador-pj-clt-mei':   ['calculadora-das-mei','calculadora-icms-iss','simulador-salario','calculadora-ir','calculadora-inss'],
    'calculadora-cdb-lci-lca': ['simulador-tesouro-direto','calculadora-juros-compostos','calculadora-fire','calculadora-pgbl-vgbl','cotacao-moedas'],
    'simulador-tesouro-direto':['calculadora-cdb-lci-lca','calculadora-juros-compostos','calculadora-fire','calculadora-pgbl-vgbl','calculadora-ir'],
    'calculadora-fire':        ['simulador-tesouro-direto','calculadora-cdb-lci-lca','calculadora-pgbl-vgbl','calculadora-juros-compostos','alugar-ou-comprar'],
    'calculadora-pgbl-vgbl':   ['calculadora-fire','calculadora-ir','calculadora-cdb-lci-lca','simulador-tesouro-direto','calculadora-inss'],
    'alugar-ou-comprar':       ['calculadora-itbi','calculadora-yield-imovel','simulador-financiamento','calculadora-sac-price','calculadora-reforma'],
    'calculadora-itbi':        ['alugar-ou-comprar','simulador-financiamento','calculadora-yield-imovel','calculadora-sac-price','calculadora-rescisao-aluguel'],
    'calculadora-yield-imovel':['alugar-ou-comprar','calculadora-itbi','calculadora-reforma','calculadora-cdb-lci-lca','simulador-tesouro-direto'],
    'calculadora-reforma':     ['calculadora-itbi','calculadora-yield-imovel','alugar-ou-comprar','custo-do-carro','divisor-de-conta'],
    'calculadora-combustivel': ['custo-do-carro','calculadora-hora-trabalho','calculadora-juros-compostos','calculadora-emprestimo','divisor-de-conta'],
    'custo-do-carro':          ['calculadora-combustivel','calculadora-hora-trabalho','calculadora-emprestimo','alugar-ou-comprar','calculadora-juros-compostos'],
    'calculadora-hora-trabalho':['simulador-salario','custo-do-carro','calculadora-combustivel','comparador-pj-clt-mei','calculadora-horas-extras'],
    'divisor-de-conta':        ['calculadora','calculadora-combustivel','custo-do-carro','calculadora-hora-trabalho','conversor-unidades'],
    'conversor-unidades':      ['calculadora','divisor-de-conta','calculadora-combustivel','calculadora-imc','calculadora-gravidez'],
    'calculadora-gravidez':    ['calculadora-imc','calculadora-calorias','calculadora-contagem-datas','conversor-unidades','calculadora'],
    'calculadora-media-escolar':['calculadora','calculadora-contagem-datas','conversor-unidades','divisor-de-conta','calculadora-gravidez'],
    'calculadora-das-mei':     ['comparador-pj-clt-mei','calculadora-icms-iss','simulador-salario','calculadora-ir','calculadora-inss'],
    'calculadora-icms-iss':    ['calculadora-das-mei','comparador-pj-clt-mei','calculadora-ir','simulador-salario','calculadora-emprestimo'],
    'calculadora-imc':         ['calculadora-calorias','calculadora-gravidez','conversor-unidades','calculadora','calculadora-contagem-datas'],
    'calculadora-calorias':    ['calculadora-imc','calculadora-gravidez','conversor-unidades','calculadora-hora-trabalho','calculadora'],
    'cotacao-moedas':          ['calculadora-cdb-lci-lca','simulador-tesouro-direto','calculadora-juros-compostos','calculadora-fire','calculadora-emprestimo'],
    'encurtador-url':          ['verificar-dominio','calculadora','conversor-unidades','cotacao-moedas','divisor-de-conta'],
    'verificar-dominio':       ['encurtador-url','calculadora','conversor-unidades','cotacao-moedas','divisor-de-conta'],
    'calculadora':             ['conversor-unidades','calculadora-juros-compostos','divisor-de-conta','calculadora-media-escolar','calculadora-contagem-datas'],
    'calculadora-contagem-datas':['calculadora','calculadora-gravidez','calculadora-rescisao','calculadora-ferias','calculadora-media-escolar'],
    'calculadora-sac-price':   ['simulador-financiamento','calculadora-emprestimo','alugar-ou-comprar','calculadora-itbi','calculadora-juros-compostos'],
    'taxas-do-dia':            ['calculadora-cdb-lci-lca','simulador-tesouro-direto','calculadora-juros-compostos','calculadora-fire','cotacao-moedas'],
    'consulta-cnpj':           ['comparador-pj-clt-mei','calculadora-das-mei','calculadora-icms-iss','calculadora-ir','consulta-cep'],
    'consulta-cep':            ['consulta-cnpj','calculadora-itbi','alugar-ou-comprar','verificar-dominio','calculadora-reforma'],
    'feriados':                ['calculadora-ferias','calculadora-rescisao','banco-de-horas','calculadora-contagem-datas','calculadora-hora-trabalho'],
    'gerador-qr-code':         ['encurtador-url','verificar-dominio','consulta-cnpj','cotacao-moedas','calculadora'],
  };

  if (!isHome && RELATED[currentSlug]) {
    const related = RELATED[currentSlug].slice(0, 5);
    const origin  = window.location.origin;
    const section = document.createElement('div');
    section.id = 'fc-related';
    section.style.cssText = 'max-width:680px;margin:0 auto 16px;padding:0 16px;';
    section.innerHTML =
      '<div style="background:#fff;border-radius:14px;box-shadow:0 2px 12px rgba(0,0,0,.08);padding:18px 22px;">' +
        '<p style="font-size:.82rem;font-weight:700;color:#1a237e;margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px;">Veja também</p>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px;">' +
          related.map(function(s){
            var label = TOOL_LABELS[s] || s;
            var href  = origin + '/' + s + '/';
            return '<a href="' + href + '" style="background:#f0f4ff;color:#1a237e;border:1.5px solid #c5cae9;border-radius:20px;padding:6px 14px;font-size:.8rem;font-weight:600;text-decoration:none;white-space:nowrap;">' + label + '</a>';
          }).join('') +
        '</div>' +
      '</div>';
    var footer = document.querySelector('footer');
    if (footer) footer.parentNode.insertBefore(section, footer);
  }

  // ── Acessibilidade ─────────────────────────────────────────────────────
  const focusStyle = document.createElement('style');
  focusStyle.textContent = [
    '*:focus-visible{outline:3px solid #1a73e8 !important;outline-offset:2px !important;border-radius:4px;}',
    '.btn-calc:focus-visible,.btn-novo:focus-visible{outline-color:#fff !important;}'
  ].join('');
  document.head.appendChild(focusStyle);

  document.querySelectorAll('.field').forEach(function(field) {
    var label = field.querySelector('label');
    var input = field.querySelector('input, select, textarea');
    if (!label || !input) return;
    var labelText = label.textContent.replace(/\(.*?\)/g,'').trim();
    if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      input.setAttribute('aria-label', labelText);
    }
  });

  var mainEl = document.querySelector('main');
  if (mainEl && !mainEl.getAttribute('role')) mainEl.setAttribute('role', 'main');

  if (!document.getElementById('skip-link')) {
    var skip = document.createElement('a');
    skip.id = 'skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Ir para o conteúdo principal';
    skip.style.cssText = 'position:absolute;top:-999px;left:0;background:#1a73e8;color:#fff;padding:8px 16px;border-radius:0 0 8px 0;font-weight:700;z-index:9999;text-decoration:none;';
    skip.addEventListener('focus', function(){ skip.style.top = '0'; });
    skip.addEventListener('blur',  function(){ skip.style.top = '-999px'; });
    document.body.prepend(skip);
    if (mainEl) mainEl.id = mainEl.id || 'main-content';
  }

  // ── Ano dinâmico + links institucionais em todos os rodapés ───────────
  var ano = new Date().getFullYear();
  var _origin = window.location.origin;
  document.querySelectorAll('footer').forEach(function(f) {
    f.innerHTML = f.innerHTML.replace(/©\s*\d{4}/g, '© ' + ano);
    if (!f.querySelector('.fc-inst')) {
      var inst = document.createElement('p');
      inst.className = 'fc-inst';
      inst.style.cssText = 'margin-top:8px;font-size:.75rem;';
      inst.innerHTML =
        '<a href="' + _origin + '/sobre/" style="color:inherit;opacity:.7;margin:0 8px;text-decoration:none;">Sobre</a>' +
        '·' +
        '<a href="' + _origin + '/politica-privacidade/" style="color:inherit;opacity:.7;margin:0 8px;text-decoration:none;">Política de Privacidade</a>';
      f.appendChild(inst);
    }
  });

  // ── Autocomplete off em todos os inputs ────────────────────────────────
  document.querySelectorAll('input').forEach(function(el){ el.setAttribute('autocomplete', 'off'); });

  // ── Estilos de impressão ───────────────────────────────────────────────
  var ps = document.createElement('style');
  ps.media = 'print';
  ps.textContent = [
    '.nav,.ad-slot,#formulario,.btn-novo,.btn-calc,#fc-actions,#fc-related,footer a,header p{display:none !important;}',
    'header{padding:10px !important;font-size:12pt;}',
    '.card{break-inside:avoid;box-shadow:none !important;border:1px solid #ccc !important;}',
    'body{background:#fff !important;}',
    '.total-box,.melhor-box,.result-box,.parcela-card,.mini,.mini-card{-webkit-print-color-adjust:exact;print-color-adjust:exact;}'
  ].join('');
  document.head.appendChild(ps);

  // ── Barra de ações (Imprimir / Compartilhar) ───────────────────────────
  var resultado = document.getElementById('resultado');
  if (!resultado) return;

  function injectActions() {
    if (document.getElementById('fc-actions')) return;
    var bar = document.createElement('div');
    bar.id = 'fc-actions';
    bar.style.cssText = 'display:flex;gap:10px;justify-content:center;margin:16px 0 8px;flex-wrap:wrap;';
    bar.innerHTML =
      '<button id="fc-print" style="background:#1a73e8;color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:.9rem;font-weight:700;cursor:pointer;">🖨️ Imprimir / Salvar PDF</button>' +
      '<button id="fc-share" style="background:#2e7d32;color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:.9rem;font-weight:700;cursor:pointer;">🔗 Compartilhar</button>';

    var novoWrap = resultado.querySelector('div[style*="text-align:center"]');
    if (novoWrap) resultado.insertBefore(bar, novoWrap);
    else resultado.appendChild(bar);

    document.getElementById('fc-print').addEventListener('click', function(){ window.print(); });

    document.getElementById('fc-share').addEventListener('click', function() {
      var btn = document.getElementById('fc-share');
      var url = window.location.href.split('?')[0].split('#')[0];
      var title = document.title;
      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function(){});
      } else {
        navigator.clipboard.writeText(url).then(function(){
          btn.textContent = '✅ Link copiado!';
          setTimeout(function(){ btn.innerHTML = '🔗 Compartilhar'; }, 2500);
        }).catch(function(){
          prompt('Copie o link abaixo:', url);
        });
      }
    });
  }

  var obs = new MutationObserver(function() {
    if (resultado.style.display && resultado.style.display !== 'none') injectActions();
  });
  obs.observe(resultado, { attributes: true, attributeFilter: ['style'] });

  // ── Zerar formulário ao clicar Novo Cálculo ────────────────────────────
  document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-novo')) return;
    setTimeout(function() {
      document.querySelectorAll('#formulario input[type="text"], #formulario input[type="number"]')
        .forEach(function(el){ el.value = ''; });
      var bar = document.getElementById('fc-actions');
      if (bar) bar.remove();
    }, 60);
  });
})();
