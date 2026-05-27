(function () {
  // ── Remover ad-slot placeholders (AdSense injeta os reais automaticamente) ──
  document.querySelectorAll('.ad-slot').forEach(function(el){ el.remove(); });

  // ── Paleta de cores FacilCalc — variáveis CSS globais ────────────────
  if (!document.getElementById('fc-palette-style')) {
    var _ps = document.createElement('style');
    _ps.id = 'fc-palette-style';
    _ps.textContent = [
      ':root{',
      '--bk1:#e8edf7;--bk1b:#b8cce8;',  /* azul suave   */
      '--bk2:#d4f1f4;--bk2b:#9dd8de;',  /* ciano        */
      '--bk3:#daf5e8;--bk3b:#9dd8b8;',  /* mint         */
      '--bk4:#e4f7e4;--bk4b:#9dd89d;',  /* verde        */
      '--bk5:#fdf8e0;--bk5b:#e8d870;',  /* amarelo      */
      '--bk6:#fde8d4;--bk6b:#e8c09d;',  /* pêssego      */
      '--bk7:#fde0d8;--bk7b:#e8a898;',  /* salmão       */
      '--bk8:#fdd4e0;--bk8b:#e898b8;',  /* rosa         */
      '--bk9:#edd8f8;--bk9b:#c898e8;',  /* lavanda      */
      '--bk10:#ebebeb;--bk10b:#c8c8c8;', /* cinza       */
      '}',
      /* Classes reutilizáveis em qualquer página */
      '.fc-chip{display:inline-flex;align-items:center;border-radius:20px;padding:4px 13px;font-size:.78rem;font-weight:700;color:#222;border:1.5px solid;text-decoration:none;white-space:nowrap;transition:filter .15s;}',
      '.fc-chip:hover{filter:brightness(.93);}',
      '.fc-chip-1{background:var(--bk1);border-color:var(--bk1b);}',
      '.fc-chip-2{background:var(--bk2);border-color:var(--bk2b);}',
      '.fc-chip-3{background:var(--bk3);border-color:var(--bk3b);}',
      '.fc-chip-4{background:var(--bk4);border-color:var(--bk4b);}',
      '.fc-chip-5{background:var(--bk5);border-color:var(--bk5b);}',
      '.fc-chip-6{background:var(--bk6);border-color:var(--bk6b);}',
      '.fc-chip-7{background:var(--bk7);border-color:var(--bk7b);}',
      '.fc-chip-8{background:var(--bk8);border-color:var(--bk8b);}',
      '.fc-chip-9{background:var(--bk9);border-color:var(--bk9b);}',
      '.fc-chip-10{background:var(--bk10);border-color:var(--bk10b);}',
      /* Correção global de overflow em inputs/selects (mobile-safe) */
      'main input,main select,main textarea{max-width:100%;box-sizing:border-box;}',
      '.field input,.field select,.field textarea{width:100%;max-width:100%;box-sizing:border-box;}',
      '.grid>*,.form-grid>*,.field{min-width:0;box-sizing:border-box;}',
      /* Seção de explicação sempre visível (.explic) */
      '.explic{background:#fff;border-radius:14px;box-shadow:0 2px 12px rgba(0,0,0,.08);padding:24px 22px;margin-bottom:20px}',
      '.explic h3{font-size:1rem;font-weight:800;color:#1a237e;margin-bottom:12px;padding-bottom:8px;border-bottom:2px solid #e8eaf6}',
      '.explic h4{font-size:.9rem;font-weight:700;color:#333;margin:14px 0 6px}',
      '.explic p{font-size:.88rem;line-height:1.8;color:#444;margin-bottom:10px}',
      '.explic p:last-child{margin-bottom:0}',
      '.explic ul{padding-left:18px;margin:6px 0}',
      '.explic ul li{font-size:.88rem;line-height:1.8;color:#444;margin-bottom:4px}',
      '.explic table{width:100%;border-collapse:collapse;margin:10px 0;font-size:.84rem}',
      '.explic table th{background:#e8eaf6;text-align:left;padding:8px 12px;color:#1a237e;font-weight:700;border-bottom:1px solid #c5cae9}',
      '.explic table td{padding:8px 12px;border-bottom:1px solid #f0f0f0;color:#444;vertical-align:top}',
      '.explic table tr:last-child td{border-bottom:none}',
      '.explic .info-box{background:#e8f5e9;border-left:4px solid #43a047;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.84rem;color:#2e7d32;margin:10px 0;line-height:1.7}',
      '.explic .warn-box{background:#fff8e1;border-left:4px solid #f9a825;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.84rem;color:#e65100;margin:10px 0;line-height:1.7}',
      '.explic .faq-item{border-bottom:1px solid #f0f0f0;padding:10px 0}',
      '.explic .faq-item:last-child{border-bottom:none}',
      '.explic .faq-q{font-weight:700;color:#1a237e;font-size:.88rem;margin-bottom:4px}',
      '.explic .faq-a{font-size:.85rem;color:#444;line-height:1.75}',
      /* Page-lead — cabeçalho profissional antes do formulário */
      '.page-lead{padding:16px 0 20px;border-bottom:2px solid var(--border,#e0e0e0);margin-bottom:20px}',
      '.page-lead .lead-title{font-size:1.15rem;font-weight:800;color:#1a237e;margin-bottom:8px;line-height:1.4}',
      '.page-lead .lead-desc{font-size:.9rem;color:#555;line-height:1.75;margin-bottom:14px}',
      '.lead-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}',
      '.lead-chips span{background:#e8eaf6;color:#1a237e;border-radius:20px;padding:4px 13px;font-size:.76rem;font-weight:700}',
      '.revisao-badge{display:inline-flex;align-items:center;gap:5px;background:#fff3cd;color:#856404;border-radius:20px;padding:4px 13px;font-size:.74rem;font-weight:600;border:1px solid #ffd970}',
    ].join('');
    document.head.appendChild(_ps);
  }

  // ── Trust badges no header de todas as páginas de ferramenta ──────────
  var _hdr = document.querySelector('header');
  if (_hdr && !_hdr.querySelector('.fc-trust') && !_hdr.querySelector('.trust-badges')) {
    var _tb = document.createElement('div');
    _tb.className = 'fc-trust';
    _tb.style.cssText = 'display:flex;flex-wrap:wrap;justify-content:center;gap:7px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,.18);';
    // Trust badges: fundo escuro do header → usar rgba semi-transparente com cores da paleta
    var _bs = 'border-radius:20px;padding:4px 13px;font-size:.73rem;font-weight:700;';
    _tb.innerHTML =
      '<span style="' + _bs + 'background:rgba(218,245,232,.25);border:1px solid rgba(157,216,184,.6);color:#c8f7d8;">✅ Atualizado 2025</span>' +
      '<span style="' + _bs + 'background:rgba(212,241,244,.2);border:1px solid rgba(157,216,222,.5);color:#d4f8fb;">🆓 Gratuito</span>' +
      '<span style="' + _bs + 'background:rgba(237,216,248,.2);border:1px solid rgba(200,152,232,.5);color:#edd8f8;">🔒 Sem cadastro</span>' +
      '<span style="' + _bs + 'background:rgba(253,248,224,.2);border:1px solid rgba(232,216,112,.5);color:#fdf8e0;">⚡ Instantâneo</span>';
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

  // ── FAQ JSON-LD Schema — Rich snippets para FAQ ────────────────────────
  // Auto-gera a partir dos elementos .faq-item .faq-q / .faq-item .faq-a
  (function injectFaqSchema() {
    if (isHome) return;
    // Se já existe um JSON-LD com FAQPage, não duplicar
    var existing = document.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < existing.length; i++) {
      try { if (JSON.parse(existing[i].textContent)['@type'] === 'FAQPage') return; } catch(e) {}
      try {
        var g = JSON.parse(existing[i].textContent)['@graph'];
        if (g && g.some(function(x){ return x['@type'] === 'FAQPage'; })) return;
      } catch(e) {}
    }
    var faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;
    var entries = [];
    faqItems.forEach(function(item) {
      var qEl = item.querySelector('.faq-q');
      var aEl = item.querySelector('.faq-a');
      if (!qEl || !aEl) return;
      var q = qEl.textContent.trim();
      var a = aEl.textContent.trim();
      if (!q || !a) return;
      entries.push({
        '@type': 'Question',
        'name': q,
        'acceptedAnswer': { '@type': 'Answer', 'text': a }
      });
    });
    if (!entries.length) return;
    var faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': entries
    };
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(ld);
  })();

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
    var _palCycles = ['fc-chip-1','fc-chip-2','fc-chip-3','fc-chip-4','fc-chip-5'];
    section.innerHTML =
      '<div style="background:#fff;border-radius:14px;box-shadow:0 2px 12px rgba(0,0,0,.08);padding:18px 22px;">' +
        '<p style="font-size:.75rem;font-weight:700;color:#888;margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">🔗 Veja também</p>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px;">' +
          related.map(function(s, i){
            var label = TOOL_LABELS[s] || s;
            var href  = origin + '/' + s + '/';
            var cls   = _palCycles[i % _palCycles.length];
            return '<a href="' + href + '" class="fc-chip ' + cls + '">' + label + '</a>';
          }).join('') +
        '</div>' +
      '</div>';
    var footer = document.querySelector('footer');
    if (footer) footer.parentNode.insertBefore(section, footer);
  }

  // ── Page-lead: cabeçalho profissional antes do formulário ─────────────
  const PAGE_LEAD = {
    'calculadora-rescisao': {
      title: '📋 Calculadora de Rescisão Trabalhista 2025',
      desc: 'Calcule todos os valores da rescisão: saldo de salário, aviso prévio, 13º proporcional, férias + 1/3 e multa do FGTS. Funciona para demissão sem justa causa, pedido de demissão e acordo mútuo — com estimativas automáticas mesmo sem todas as informações.',
      chips: ['✅ CLT Atualizada 2025', '✅ 3 tipos de rescisão', '✅ Estimativas automáticas']
    },
    'calculadora-fgts': {
      title: '🏦 Calculadora de FGTS 2025 — Saldo, Multa e Saque-Aniversário',
      desc: 'Estime seu saldo do FGTS, calcule a multa de 40% por demissão sem justa causa e simule os valores do saque-aniversário. Funciona com estimativas automáticas mesmo sem o saldo exato na conta.',
      chips: ['✅ Multa de 40%', '✅ Saque-aniversário', '✅ Estimativa automática']
    },
    'calculadora-ferias': {
      title: '🌴 Calculadora de Férias CLT 2025 — Período Aquisitivo e 1/3',
      desc: 'Calcule o valor das suas férias com o adicional constitucional de 1/3, férias proporcionais e abono pecuniário (vender dias de férias). Tudo conforme as regras da CLT em vigor para 2025.',
      chips: ['✅ CLT 2025', '✅ Férias proporcionais', '✅ Abono pecuniário']
    },
    'calculadora-horas-extras': {
      title: '⏰ Calculadora de Horas Extras 2025 — 50%, 100% e Noturno',
      desc: 'Calcule o valor correto das suas horas extras com os adicionais legais: 50% em dias úteis, 100% em domingos e feriados. Inclui adicional noturno (22h às 5h) e integração com banco de horas.',
      chips: ['✅ 50% e 100%', '✅ Adicional noturno', '✅ Banco de horas']
    },
    'simulador-salario': {
      title: '💰 Simulador de Salário Líquido 2025 — INSS e IR Descontados',
      desc: 'Descubra quanto vai cair na sua conta após os descontos de INSS e Imposto de Renda. Use as tabelas oficiais atualizadas para 2025 e simule com qualquer salário bruto ou líquido.',
      chips: ['✅ Tabela IR 2025', '✅ INSS progressivo', '✅ Simula qualquer salário']
    },
    'calculadora-inss': {
      title: '🏛️ Calculadora de INSS 2025 — Contribuição Mensal Correta',
      desc: 'Calcule sua contribuição ao INSS com a tabela progressiva de 2025. Veja o desconto exato para empregados CLT, autônomos e contribuintes facultativos — sem erro na alíquota.',
      chips: ['✅ Tabela progressiva 2025', '✅ CLT e Autônomo', '✅ Contribuição correta']
    },
    'calculadora-ir': {
      title: '📊 Calculadora de Imposto de Renda 2025 — IRPF',
      desc: 'Calcule o Imposto de Renda com a tabela atualizada de 2025. Veja sua alíquota efetiva, dedução por dependente, desconto simplificado e se você está na faixa de isenção.',
      chips: ['✅ Tabela IR 2025', '✅ Deduções e dependentes', '✅ Alíquota efetiva']
    },
    'calculadora-13-salario': {
      title: '🎄 Calculadora de 13º Salário 2025 — Gratificação Natalina',
      desc: 'Calcule o 13º salário líquido com todos os descontos corretos de INSS e Imposto de Renda. Veja o valor da 1ª e 2ª parcela e calcule o proporcional por meses trabalhados.',
      chips: ['✅ 1ª e 2ª parcela', '✅ Descontos INSS e IR', '✅ Proporcional por mês']
    },
    'banco-de-horas': {
      title: '🕐 Calculadora de Banco de Horas — Saldo e Compensação',
      desc: 'Controle seu banco de horas: calcule o saldo acumulado, horas a compensar e o valor a receber em dinheiro caso o banco não seja compensado dentro do prazo máximo legal.',
      chips: ['✅ Saldo acumulado', '✅ Pagamento em dobro', '✅ CLT 2025']
    },
    'calculadora-insalubridade': {
      title: '⚠️ Calculadora de Insalubridade e Periculosidade 2025',
      desc: 'Calcule o adicional de insalubridade nos graus mínimo (10%), médio (20%) e máximo (40%), e o adicional de periculosidade (30%). Baseado nas normas regulamentadoras NR-15 e NR-16.',
      chips: ['✅ NR-15 e NR-16', '✅ Graus mín/médio/máx', '✅ Periculosidade 30%']
    },
    'calculadora-plr': {
      title: '🏆 Calculadora de PLR 2025 — Participação nos Lucros',
      desc: 'Calcule o valor líquido da PLR com a tabela de alíquotas exclusiva (diferente da tabela mensal de IR). Veja INSS e IR específicos da participação nos lucros e resultados.',
      chips: ['✅ Tabela PLR exclusiva', '✅ IR e INSS corretos', '✅ Isenção até R$ 7.407']
    },
    'comparador-pj-clt-mei': {
      title: '⚖️ Comparador PJ vs CLT vs MEI — Qual Vale Mais?',
      desc: 'Compare os três regimes e descubra qual gera mais renda líquida. Análise completa com todos os custos: impostos, benefícios CLT, FGTS, INSS e encargos ocultos do PJ.',
      chips: ['✅ Análise completa', '✅ Benefícios CLT incluídos', '✅ Custo real do PJ']
    },
    'calculadora-juros-compostos': {
      title: '📈 Calculadora de Juros Compostos — Crescimento do Investimento',
      desc: 'Simule o crescimento do seu dinheiro com juros compostos. Veja o montante final, total investido e total de juros gerados — com aporte inicial, aportes mensais e qualquer prazo.',
      chips: ['✅ Aportes mensais', '✅ Qualquer período', '✅ Comparação de taxas']
    },
    'calculadora-cdb-lci-lca': {
      title: '💳 Calculadora de CDB, LCI e LCA 2025 — Renda Fixa',
      desc: 'Compare os rendimentos de CDB, LCI e LCA com o CDI real atualizado. Calcule rendimento bruto e líquido após IR regressivo e descubra qual investimento rende mais para você.',
      chips: ['✅ CDI atualizado', '✅ IR sobre CDB', '✅ LCI/LCA isento']
    },
    'simulador-tesouro-direto': {
      title: '🏛️ Simulador do Tesouro Direto 2025 — Selic, IPCA+ e Prefixado',
      desc: 'Simule quanto vai render seu investimento no Tesouro Direto. Compare Tesouro Selic, IPCA+ e Prefixado com taxas reais atualizadas e veja o rendimento líquido após IR.',
      chips: ['✅ Selic atual', '✅ Comparação de títulos', '✅ IR progressivo']
    },
    'calculadora-fire': {
      title: '🔥 Calculadora FIRE — Independência Financeira',
      desc: 'Descubra quanto você precisa acumular para viver de renda. Calcule sua meta FIRE com a regra dos 4%, quanto poupar por mês e em quanto tempo você vai atingir a independência.',
      chips: ['✅ Regra dos 4%', '✅ Taxa de poupança', '✅ Simulação completa']
    },
    'calculadora-pgbl-vgbl': {
      title: '📋 Comparador PGBL vs VGBL — Previdência Privada',
      desc: 'Compare PGBL e VGBL e veja qual previdência privada é mais vantajosa. Considera dedução de IR na declaração anual, tributação no resgate e perfil tributário completo.',
      chips: ['✅ Comparação de IR', '✅ Perfil tributário', '✅ Resgate simulado']
    },
    'alugar-ou-comprar': {
      title: '🏠 Alugar ou Comprar Imóvel? — Análise Completa',
      desc: 'Descubra se compensa mais alugar ou comprar um imóvel considerando todos os custos reais: ITBI, cartório, manutenção, valorização esperada e custo de oportunidade do capital.',
      chips: ['✅ Custo de oportunidade', '✅ Valorização estimada', '✅ Análise 10 anos']
    },
    'calculadora-itbi': {
      title: '🏡 Calculadora de ITBI 2025 — Imposto na Compra de Imóvel',
      desc: 'Calcule o ITBI para qualquer município brasileiro. Estime também os custos com cartório, registro de imóvel e impostos no financiamento para planejar sua compra com precisão.',
      chips: ['✅ Alíquotas por cidade', '✅ Custos de cartório', '✅ Financiamento incluído']
    },
    'calculadora-yield-imovel': {
      title: '📊 Calculadora de Yield de Imóvel — Rentabilidade do Aluguel',
      desc: 'Calcule o yield bruto e líquido do seu imóvel e descubra se o aluguel recebido é competitivo com outros investimentos como CDB, Selic ou Tesouro Direto.',
      chips: ['✅ Yield bruto e líquido', '✅ Comparação CDI', '✅ Cap rate']
    },
    'calculadora-reforma': {
      title: '🔨 Calculadora de Custo de Reforma — Estimativa por m²',
      desc: 'Estime o custo da sua reforma com preços médios por metro quadrado. Calcule mão de obra, materiais e total para banheiro, cozinha, área de serviço e outros ambientes.',
      chips: ['✅ Preços por m²', '✅ Mão de obra inclusa', '✅ Vários cômodos']
    },
    'calculadora-rescisao-aluguel': {
      title: '📄 Rescisão de Aluguel — Multa Proporcional (Lei do Inquilinato)',
      desc: 'Calcule a multa por rescisão antecipada do contrato de aluguel conforme a Lei do Inquilinato (Lei 8.245/91). Veja o valor proporcional ao tempo restante do contrato.',
      chips: ['✅ Lei do Inquilinato', '✅ Multa proporcional', '✅ Sem e com multa']
    },
    'calculadora-das-mei': {
      title: '📋 Calculadora DAS MEI 2025 — Guia de Pagamento Mensal',
      desc: 'Calcule o valor correto do DAS MEI para 2025. Veja o detalhamento de INSS, ISS e ICMS conforme sua atividade (comércio, serviços ou indústria/transporte).',
      chips: ['✅ Valores 2025', '✅ Comércio, Serviços e Indústria', '✅ Detalhamento completo']
    },
    'calculadora-icms-iss': {
      title: '🧮 Calculadora de ICMS e ISS — Impostos sobre Vendas e Serviços',
      desc: 'Calcule ICMS para operações comerciais e ISS para prestação de serviços. Identifique a base de cálculo correta, alíquota aplicável e se o imposto é por dentro ou por fora.',
      chips: ['✅ ICMS por estado', '✅ ISS por município', '✅ Simples Nacional']
    },
    'calculadora-combustivel': {
      title: '⛽ Calculadora de Combustível — Gasolina, Etanol e GNV',
      desc: 'Compare gasolina, etanol e GNV e descubra o custo real por quilômetro rodado. Calcule o ponto de equilíbrio e qual combustível é mais vantajoso para o seu carro.',
      chips: ['✅ Gasolina vs Etanol', '✅ Custo por km', '✅ GNV incluído']
    },
    'custo-do-carro': {
      title: '🚗 Custo Real do Carro — Todos os Gastos Mensais',
      desc: 'Descubra o custo total de ter um carro: financiamento, seguro, IPVA, combustível, manutenção e depreciação. Veja o custo real por quilômetro e o total mensal.',
      chips: ['✅ Custo completo', '✅ Depreciação', '✅ Custo por km']
    },
    'calculadora-sac-price': {
      title: '🏦 Calculadora SAC vs Price — Sistemas de Financiamento',
      desc: 'Compare os sistemas de amortização SAC e Price para o seu financiamento. Veja as parcelas mês a mês, total de juros pagos e qual sistema é mais vantajoso no seu caso.',
      chips: ['✅ SAC e Price', '✅ Tabela de parcelas', '✅ Comparação completa']
    },
    'simulador-financiamento': {
      title: '🏠 Simulador de Financiamento — Casa, Carro e Crédito',
      desc: 'Simule qualquer financiamento e veja o valor exato das parcelas, total de juros e custo efetivo total (CET). Compare diferentes prazos, taxas e sistemas de amortização.',
      chips: ['✅ CET calculado', '✅ Tabela de parcelas', '✅ Múltiplos prazos']
    },
    'calculadora-emprestimo': {
      title: '💳 Calculadora de Empréstimo — Parcelas, Juros e CET',
      desc: 'Calcule as parcelas do seu empréstimo pessoal, consignado ou crédito pessoal. Descubra o custo total com juros e compare taxas para tomar a melhor decisão financeira.',
      chips: ['✅ Juros reais', '✅ CET total', '✅ Consignado e pessoal']
    },
    'calculadora-hora-trabalho': {
      title: '⏱️ Calculadora de Hora de Trabalho — Custo Real por Hora',
      desc: 'Descubra quanto vale a sua hora de trabalho de verdade, descontando impostos, benefícios, deslocamento e tempo improdutivo. Essencial para autônomos, freelancers e CLT.',
      chips: ['✅ Custo real', '✅ Tempo produtivo', '✅ Autônomo e CLT']
    },
    'calculadora-contagem-datas': {
      title: '📅 Calculadora de Datas — Dias entre Datas e Prazos',
      desc: 'Calcule a diferença entre datas em dias, semanas, meses ou anos. Desconte fins de semana e feriados para obter o prazo em dias úteis. Ideal para vencimentos e prazos legais.',
      chips: ['✅ Dias úteis', '✅ Feriados descontados', '✅ Prazos e vencimentos']
    },
    'divisor-de-conta': {
      title: '🍽️ Divisor de Conta — Divida Despesas de Forma Justa',
      desc: 'Divida contas de restaurante e despesas entre amigos de forma simples e justa. Calcule quanto cada pessoa deve pagar com base nos consumos individuais e adicione gorjeta.',
      chips: ['✅ Divisão proporcional', '✅ Gorjeta inclusa', '✅ Várias pessoas']
    },
    'conversor-unidades': {
      title: '📐 Conversor de Unidades — Comprimento, Peso e Temperatura',
      desc: 'Converta entre as principais unidades de medida: comprimento, peso, temperatura, área e volume. Conversão rápida, precisa e com as fórmulas explicadas.',
      chips: ['✅ Múltiplas categorias', '✅ Resultado instantâneo', '✅ Fórmulas explicadas']
    },
    'calculadora-gravidez': {
      title: '🤰 Calculadora de Gravidez — DPP e Semanas de Gestação',
      desc: 'Calcule a data provável do parto (DPP), semanas e dias de gestação e os trimestres. Baseada na data da última menstruação (DUM) ou data estimada de concepção.',
      chips: ['✅ DPP calculado', '✅ Semanas e trimestres', '✅ Baseado na DUM']
    },
    'calculadora-media-escolar': {
      title: '🎓 Calculadora de Média Escolar — Aprovação e Recuperação',
      desc: 'Calcule a média escolar ponderada e descubra se você está aprovado ou em recuperação. Funciona para ensino médio, superior e cursos com pesos diferentes por matéria.',
      chips: ['✅ Média ponderada', '✅ Notas com pesos', '✅ Aprovação e recuperação']
    },
    'calculadora-imc': {
      title: '⚖️ Calculadora de IMC — Índice de Massa Corporal',
      desc: 'Calcule seu IMC e descubra sua classificação nutricional conforme os critérios da Organização Mundial da Saúde (OMS): abaixo do peso, normal, sobrepeso ou obesidade.',
      chips: ['✅ Classificação OMS', '✅ Faixa ideal de peso', '✅ IMC adulto e infantil']
    },
    'calculadora-calorias': {
      title: '🥗 Calculadora de Calorias — Necessidade Diária',
      desc: 'Calcule sua necessidade calórica diária com base em peso, altura, idade, sexo e nível de atividade física. Baseada na equação científica de Harris-Benedict.',
      chips: ['✅ Harris-Benedict', '✅ Nível de atividade', '✅ Meta de calorias']
    },
    'cotacao-moedas': {
      title: '💱 Cotação de Moedas em Tempo Real — Dólar, Euro e Mais',
      desc: 'Consulte a cotação atualizada de dólar, euro, libra, peso argentino e mais moedas em tempo real. Faça conversões e acompanhe a variação cambial do dia.',
      chips: ['✅ Tempo real', '✅ Conversão automática', '✅ Principais moedas']
    },
    'encurtador-url': {
      title: '🔗 Encurtador de URL — Links Curtos e Gratuitos',
      desc: 'Encurte qualquer link de forma rápida e gratuita para compartilhar em mensagens, redes sociais e e-mails. Sem cadastro, sem limite, resultado instantâneo.',
      chips: ['✅ Link instantâneo', '✅ Gratuito', '✅ Compartilhamento fácil']
    },
    'verificar-dominio': {
      title: '🌐 Verificador de Domínio — Disponibilidade e Registro',
      desc: 'Verifique se um domínio está disponível para registro. Consulte extensões como .com, .com.br, .net e .org, e veja informações de propriedade via WHOIS.',
      chips: ['✅ Disponibilidade', '✅ Múltiplas extensões', '✅ WHOIS gratuito']
    },
    'calculadora': {
      title: '🔢 Calculadora Científica — Operações Avançadas Online',
      desc: 'Calculadora científica completa no navegador, sem instalar nada. Funções trigonométricas, logarítmicas, potências, raízes e cálculos avançados com histórico.',
      chips: ['✅ Funções científicas', '✅ Histórico de cálculos', '✅ Sem instalação']
    },
    'taxas-do-dia': {
      title: '📊 Taxas do Dia — Selic, CDI e Juros em Tempo Real',
      desc: 'Consulte as taxas de juros oficiais atualizadas: Selic, CDI, TJLP, TR e outras. Dados direto da BrasilAPI com os valores vigentes do dia.',
      chips: ['✅ Selic atual', '✅ CDI ao dia', '✅ Fonte oficial']
    },
    'consulta-cnpj': {
      title: '🏢 Consulta CNPJ — Dados da Empresa em Tempo Real',
      desc: 'Consulte dados completos de qualquer empresa pelo CNPJ: razão social, situação cadastral na Receita Federal, endereço, atividade econômica e quadro de sócios.',
      chips: ['✅ Dados atualizados', '✅ Situação Receita Federal', '✅ Sócios e atividade']
    },
    'consulta-cep': {
      title: '📮 Consulta CEP — Endereço Completo pelo CEP',
      desc: 'Consulte o endereço completo de qualquer CEP brasileiro: logradouro, bairro, cidade e estado. Dados atualizados via ViaCEP com link direto para o Google Maps.',
      chips: ['✅ Endereço completo', '✅ Google Maps', '✅ ViaCEP oficial']
    },
    'feriados': {
      title: '📅 Feriados Nacionais 2025 e 2026 — Calendário Completo',
      desc: 'Consulte todos os feriados nacionais de 2025 e 2026 com contagem regressiva para o próximo feriado. Dados oficiais do governo federal brasileiro.',
      chips: ['✅ 2025 e 2026', '✅ Próximo feriado', '✅ Dados oficiais']
    },
    'gerador-qr-code': {
      title: '📱 Gerador de QR Code — Link, WhatsApp, PIX e Texto',
      desc: 'Gere QR Codes gratuitamente para links, mensagens WhatsApp, chaves PIX ou qualquer texto. Baixe a imagem em alta resolução com um único clique.',
      chips: ['✅ Link e WhatsApp', '✅ QR Code PIX', '✅ Download PNG']
    },
  };

  if (!isHome && PAGE_LEAD[currentSlug] && !document.querySelector('.page-lead')) {
    var _pld = PAGE_LEAD[currentSlug];
    var _plDiv = document.createElement('div');
    _plDiv.className = 'page-lead';
    _plDiv.innerHTML =
      '<h2 class="lead-title">' + _pld.title + '</h2>' +
      '<p class="lead-desc">' + _pld.desc + '</p>' +
      '<div class="lead-chips">' +
        _pld.chips.map(function(c){ return '<span>' + c + '</span>'; }).join('') +
        '<span>🆓 100% Gratuito</span>' +
      '</div>' +
      '<div class="revisao-badge">📅 Atualizado para 2025 · Última revisão: Maio/2026</div>';
    // Insere antes de #formulario, ou como primeiro filho de <main>
    var _fEl = document.getElementById('formulario');
    var _mainEl = document.querySelector('main');
    if (_fEl) {
      _fEl.parentNode.insertBefore(_plDiv, _fEl);
    } else if (_mainEl) {
      _mainEl.insertBefore(_plDiv, _mainEl.firstChild);
    }
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

  // ── Pix Doação — widget no rodapé ─────────────────────────────────────
  (function injectPix() {
    var footer = document.querySelector('footer');
    if (!footer || footer.querySelector('.fc-pix')) return;

    // Gera payload EMV Pix estático (sem valor fixo)
    function pixPayload(key, name, city) {
      function emv(id, val) { var l = String(val.length).padStart(2,'0'); return id + l + val; }
      var mai = emv('00','BR.GOV.BCB.PIX') + emv('01', key);
      var addData = emv('05','***');
      var body =
        emv('00','01') +
        emv('26', mai) +
        emv('52','0000') +
        emv('53','986') +
        emv('58','BR') +
        emv('59', name.substring(0,25)) +
        emv('60', city.substring(0,15)) +
        emv('62', addData) +
        '6304';
      // CRC16-CCITT
      var crc = 0xFFFF;
      for (var i = 0; i < body.length; i++) {
        crc ^= body.charCodeAt(i) << 8;
        for (var j = 0; j < 8; j++) { crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1); }
        crc &= 0xFFFF;
      }
      return body + crc.toString(16).toUpperCase().padStart(4,'0');
    }

    var pixKey  = 'renatoapoio@gmail.com';
    var payload = pixPayload(pixKey, 'FACILCALC', 'BRASIL');
    var qrUrl   = 'https://api.qrserver.com/v1/create-qr-code/?size=120x120&margin=4&data=' + encodeURIComponent(payload);

    var div = document.createElement('div');
    div.className = 'fc-pix';
    div.style.cssText = 'margin-top:14px;padding-top:12px;border-top:1px solid rgba(0,0,0,.08);display:flex;flex-direction:column;align-items:center;gap:8px;';
    div.innerHTML =
      '<p style="font-size:.75rem;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.8px;margin:0;">☕ Gostou? Apoie o FacilCalc</p>' +
      '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center;">' +
        '<img src="' + qrUrl + '" alt="QR Code Pix para doação" width="120" height="120" style="border-radius:8px;border:2px solid #e0e0e0;" loading="lazy"/>' +
        '<div style="text-align:left;">' +
          '<p style="font-size:.78rem;color:#555;margin:0 0 6px;">Chave Pix:</p>' +
          '<code id="fc-pix-key" style="background:#f5f5f5;padding:6px 10px;border-radius:6px;font-size:.8rem;color:#333;cursor:pointer;border:1px solid #ddd;display:block;">' + pixKey + '</code>' +
          '<button id="fc-pix-copy" style="margin-top:6px;background:#00b386;color:#fff;border:none;border-radius:6px;padding:6px 14px;font-size:.78rem;font-weight:700;cursor:pointer;width:100%;">📋 Copiar chave Pix</button>' +
          '<p style="font-size:.7rem;color:#aaa;margin:4px 0 0;text-align:center;">Qualquer valor é muito bem-vindo 💚</p>' +
        '</div>' +
      '</div>';

    footer.appendChild(div);

    document.getElementById('fc-pix-copy').addEventListener('click', function() {
      var btn = this;
      navigator.clipboard.writeText(pixKey).then(function() {
        btn.textContent = '✅ Copiado!';
        setTimeout(function() { btn.textContent = '📋 Copiar chave Pix'; }, 2500);
      }).catch(function() {
        // fallback
        var ta = document.createElement('textarea');
        ta.value = pixKey;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = '✅ Copiado!';
        setTimeout(function() { btn.textContent = '📋 Copiar chave Pix'; }, 2500);
      });
    });
    document.getElementById('fc-pix-key').addEventListener('click', function() {
      document.getElementById('fc-pix-copy').click();
    });
  })();

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
