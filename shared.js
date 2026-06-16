(function () {
  // ── Google Analytics 4 ────────────────────────────────────────────────
  (function() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-5VR7ZSLYHV';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-5VR7ZSLYHV');
  })();

  // ── Google AdSense ────────────────────────────────────────────────────────
  (function() {
    if (document.querySelector('script[src*="adsbygoogle"]')) return;
    var _as = document.createElement('script');
    _as.async = true;
    _as.crossOrigin = 'anonymous';
    _as.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2354455470381202';
    document.head.appendChild(_as);
  })();

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
      '.explic table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;border-collapse:collapse;margin:10px 0;font-size:.84rem;max-width:100%;}',
      '.card table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;max-width:100%;}',
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
      /* E-E-A-T badge global */
      '.eeat-badge{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#f0f4ff;border:1px solid #c5cae9;border-radius:8px;font-size:.78rem;color:#3949ab;margin-bottom:14px}',
      /* CLS: reserva espaço mínimo no header antes dos trust badges carregarem */
      'header{min-height:110px;}',
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
      '<span style="' + _bs + 'background:rgba(218,245,232,.25);border:1px solid rgba(157,216,184,.6);color:#c8f7d8;">✅ Atualizado 2026</span>' +
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

  // Verifica especificamente se já existe WebApplication (não bloqueia HowTo/Article/FAQ externos)
  var _hasWebApp = false;
  document.querySelectorAll('script[type="application/ld+json"]').forEach(function(el) {
    try {
      var _p = JSON.parse(el.textContent);
      if (_p['@type'] === 'WebApplication') { _hasWebApp = true; return; }
      if (_p['@graph'] && _p['@graph'].some(function(x){ return x['@type'] === 'WebApplication'; })) _hasWebApp = true;
    } catch(e) {}
  });
  if (!isHome && !_hasWebApp) {
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

  // ── Article Schema — E-E-A-T author + dateModified ────────────────────
  (function injectArticleSchema() {
    if (isHome) return;
    var _has = false;
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(el) {
      try {
        var p = JSON.parse(el.textContent);
        if (p['@type'] === 'Article') _has = true;
        if (p['@graph'] && p['@graph'].some(function(x){ return x['@type']==='Article'; })) _has = true;
      } catch(e) {}
    });
    if (_has) return;
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context':'https://schema.org', '@type':'Article',
      'headline': pgTitle.split('|')[0].split('—')[0].trim(),
      'description': pgDesc,
      'author': {'@type':'Person','name':'Equipe Editorial FacilCalc'},
      'publisher': {'@type':'Organization','name':'FacilCalc','url':window.location.origin+'/'},
      'datePublished':'2024-01-15', 'dateModified':'2026-05-01',
      'inLanguage':'pt-BR', 'isAccessibleForFree':true
    });
    document.head.appendChild(ld);
  })();

  // ── HowTo Schema — passo a passo por calculadora ──────────────────────
  (function injectHowToSchema() {
    if (isHome) return;
    var _has = false;
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(el) {
      try { if (JSON.parse(el.textContent)['@type'] === 'HowTo') _has = true; } catch(e) {}
    });
    if (_has) return;
    var _s = function(n,t){ return {name:n, text:t}; };
    var HOWTO = {
      'calculadora-rescisao': { name:'Como calcular as verbas rescisórias', steps:[
        _s('Selecione o tipo de rescisão','Escolha entre demissão sem justa causa, pedido de demissão, acordo mútuo ou justa causa.'),
        _s('Informe o salário bruto e datas','O salário define as verbas; as datas calculam o tempo de serviço e o aviso prévio proporcional.'),
        _s('Preencha os campos opcionais','FGTS, férias vencidas e banco de horas melhoram a precisão. Deixe em branco para estimativa automática.'),
        _s('Clique em Calcular Rescisão','Veja detalhamento completo, elegibilidade ao seguro-desemprego e total bruto a receber.')]},
      'calculadora-fgts': { name:'Como calcular saldo e multa do FGTS', steps:[
        _s('Informe salário e tempo de serviço','FGTS = 8% do salário bruto por mês trabalhado. Quanto mais tempo, maior o saldo.'),
        _s('Informe o saldo atual (opcional)','Consulte pelo app FGTS. Se não souber, estimamos automaticamente pelo salário e tempo.'),
        _s('Selecione o tipo de demissão','Multa de 40% (sem justa causa), 20% (acordo mútuo) ou zero (pedido de demissão).'),
        _s('Veja o resultado','Saldo estimado, multa devida e valor disponível para saque conforme o tipo de rescisão.')]},
      'calculadora-ferias': { name:'Como calcular férias CLT', steps:[
        _s('Informe o salário bruto','O valor das férias é calculado sobre o salário base mensal.'),
        _s('Informe o período aquisitivo','Data de admissão ou último gozo de férias para calcular os meses proporcionais.'),
        _s('Escolha o tipo de férias','Completas (30 dias), proporcionais ou com abono pecuniário (venda de até 10 dias).'),
        _s('Clique em Calcular','Veja valor bruto, adicional de 1/3 constitucional e descontos de INSS.')]},
      'calculadora-horas-extras': { name:'Como calcular horas extras', steps:[
        _s('Informe salário e jornada contratual','Define o valor da hora normal, base para os adicionais.'),
        _s('Informe as horas extras por tipo','Dias úteis (50% de adicional) e domingos/feriados (100%).'),
        _s('Informe se há adicional noturno','Trabalho das 22h às 5h tem adicional de 20% sobre a hora normal (CLT art. 73).'),
        _s('Clique em Calcular','Valor de cada tipo de hora extra e total bruto a receber.')]},
      'simulador-salario': { name:'Como simular o salário líquido', steps:[
        _s('Informe o salário bruto','Remuneração mensal antes de qualquer desconto.'),
        _s('Informe dependentes e deduções','Cada dependente reduz a base de IR. Informe pensão alimentícia se houver.'),
        _s('Clique em Calcular','Veja desconto exato de INSS (tabela progressiva), IR com alíquota efetiva e salário líquido final.')]},
      'calculadora-inss': { name:'Como calcular contribuição ao INSS', steps:[
        _s('Informe salário ou renda bruta','Valor mensal de salário CLT, pró-labore ou renda como autônomo.'),
        _s('Selecione a categoria','CLT, autônomo, MEI ou contribuinte facultativo — cada um tem alíquotas diferentes.'),
        _s('Clique em Calcular','Tabela progressiva do INSS 2026: desconto por faixa e total a recolher.')]},
      'calculadora-13-salario': { name:'Como calcular o 13º salário', steps:[
        _s('Informe o salário bruto e meses trabalhados','Meses com 15 dias ou mais contam como mês inteiro para o proporcional.'),
        _s('Selecione 1ª ou 2ª parcela','1ª parcela (até novembro) sem IR; 2ª parcela (dezembro) com INSS e IR descontados.'),
        _s('Clique em Calcular','Valor bruto, descontos e 13º líquido para cada parcela.')]},
      'calculadora-ir': { name:'Como calcular o Imposto de Renda mensal', steps:[
        _s('Informe salário bruto e INSS','O INSS já descontado reduz a base de cálculo do IR.'),
        _s('Informe dependentes e outras deduções','Cada dependente abate da base de IR mensal conforme tabela 2026.'),
        _s('Clique em Calcular','Tabela progressiva IRPF 2026: alíquota efetiva, desconto e salário líquido.')]},
      'calculadora-emprestimo': { name:'Como simular um empréstimo', steps:[
        _s('Informe valor, taxa e prazo','Valor total do empréstimo, taxa de juros mensal e número de parcelas.'),
        _s('Escolha o sistema de amortização','Price (parcelas fixas) ou SAC (parcelas decrescentes).'),
        _s('Clique em Calcular','Parcela mensal, total pago com juros, CET e tabela completa de amortização.')]},
      'simulador-financiamento': { name:'Como simular financiamento imobiliário ou veicular', steps:[
        _s('Selecione o tipo de financiamento','Imóvel, veículo ou crédito pessoal — cada um tem taxas e regras diferentes.'),
        _s('Informe valor, entrada, taxa e prazo','O financiamento incide sobre o valor após a entrada. Compare diferentes prazos.'),
        _s('Escolha SAC ou Price','SAC tem parcelas decrescentes; Price tem parcelas fixas. A calculadora simula os dois.'),
        _s('Clique em Simular','Parcela inicial, total de juros, CET e tabela de amortização mês a mês.')]},
      'calculadora-juros-compostos': { name:'Como calcular juros compostos', steps:[
        _s('Informe capital inicial e aportes mensais','Capital de partida e valor que adiciona todo mês ao investimento.'),
        _s('Informe taxa e período','Taxa ao mês ou ao ano e prazo total. Experimente diferentes cenários.'),
        _s('Clique em Calcular','Montante final, total investido e quanto veio só de juros — o poder dos juros compostos no tempo.')]},
      'calculadora-sac-price': { name:'Como comparar sistemas SAC e Price', steps:[
        _s('Informe valor financiado, taxa e prazo','Dados do financiamento que deseja comparar nos dois sistemas.'),
        _s('Clique em Comparar','Veja parcelas mês a mês, total de juros no SAC vs Price e qual sistema convém para o seu caso.')]},
      'calculadora-rescisao-aluguel': { name:'Como calcular multa de rescisão de aluguel', steps:[
        _s('Informe o valor do aluguel e datas do contrato','Aluguel mensal, início, prazo total e data de encerramento desejada.'),
        _s('Informe a multa contratual','Geralmente 3 meses de aluguel — verifique o contrato assinado.'),
        _s('Clique em Calcular','Multa proporcional ao tempo restante conforme Lei do Inquilinato (Lei 8.245/91).')]},
      'banco-de-horas': { name:'Como calcular banco de horas', steps:[
        _s('Informe salário e jornada diária','Determina o valor monetário de cada hora no banco.'),
        _s('Informe o saldo de horas','Positivo = horas a receber; negativo = horas a compensar.'),
        _s('Clique em Calcular','Saldo em reais, horas a compensar ou a receber e prazo máximo conforme CLT.')]},
      'calculadora-insalubridade': { name:'Como calcular adicional de insalubridade ou periculosidade', steps:[
        _s('Selecione o tipo de adicional','Insalubridade grau mínimo (10%), médio (20%) ou máximo (40%), ou periculosidade (30%).'),
        _s('Selecione a base de cálculo','Salário mínimo nacional, salário base ou piso da categoria conforme convenção coletiva.'),
        _s('Clique em Calcular','Valor do adicional mensal e salário total com o adicional incluído.')]},
      'calculadora-plr': { name:'Como calcular IR sobre PLR', steps:[
        _s('Informe o valor bruto da PLR','Participação nos Lucros e Resultados conforme comunicado da empresa.'),
        _s('Informe o salário mensal','Usado para verificar a faixa de isenção — PLR tem tabela de IR exclusiva.'),
        _s('Clique em Calcular','Tabela exclusiva de IR para PLR (diferente da mensal) e valor líquido a receber.')]},
      'comparador-pj-clt-mei': { name:'Como comparar PJ, CLT e MEI', steps:[
        _s('Informe a remuneração bruta em cada regime','Valor do contrato PJ, salário CLT equivalente e faturamento como MEI.'),
        _s('Informe benefícios e custos adicionais','Vale-refeição, plano de saúde, transporte e custos operacionais como PJ.'),
        _s('Clique em Comparar','Rendimento líquido real em cada regime com todos os impostos, encargos e benefícios calculados.')]},
      'calculadora-cdb-lci-lca': { name:'Como comparar CDB, LCI e LCA', steps:[
        _s('Informe o valor a investir e o prazo','O IR do CDB é regressivo — quanto mais longo, menor a alíquota. LCI/LCA são isentos.'),
        _s('Informe as taxas oferecidas pelos bancos','Percentual do CDI de cada produto para comparação direta.'),
        _s('Clique em Calcular','Rendimento bruto, IR descontado e líquido de cada opção para ver qual vale mais.')]},
      'simulador-tesouro-direto': { name:'Como simular Tesouro Direto', steps:[
        _s('Selecione o título','Selic (liquidez diária), IPCA+ (proteção contra inflação) ou Prefixado (taxa garantida).'),
        _s('Informe valor, prazo e taxa atual','Consulte as taxas em tesouro.gov.br para simular com valores reais.'),
        _s('Clique em Simular','Montante bruto, IR regressivo, valor líquido e comparativo com poupança e CDI.')]},
      'calculadora-fire': { name:'Como calcular independência financeira (FIRE)', steps:[
        _s('Informe gastos mensais e patrimônio atual','Gastos = sua meta de renda passiva. Patrimônio = o que você já acumulou.'),
        _s('Informe aporte mensal e rentabilidade esperada','Quanto poupa por mês e retorno real anual acima da inflação (geralmente 4%–6%).'),
        _s('Clique em Calcular','Meta FIRE, anos para atingi-la, quanto pode sacar mensalmente com segurança pela regra dos 4%.')]},
      'calculadora-pgbl-vgbl': { name:'Como comparar PGBL e VGBL', steps:[
        _s('Informe renda anual e regime de IR','PGBL convém para declaração completa; VGBL para simplificada ou isentos de IR.'),
        _s('Informe aporte mensal e prazo','O prazo impacta muito na tributação do resgate — tabela progressiva ou regressiva.'),
        _s('Clique em Comparar','Diferença líquida no resgate entre PGBL e VGBL conforme seu perfil tributário.')]},
      'alugar-ou-comprar': { name:'Como decidir entre alugar ou comprar imóvel', steps:[
        _s('Informe valor do imóvel e aluguel equivalente','Preço de compra e aluguel mensal que pagaria pelo mesmo imóvel.'),
        _s('Informe condições de financiamento','Taxa de juros, prazo e entrada disponível — custos reais da compra incluindo ITBI.'),
        _s('Informe valorização e rentabilidade esperadas','Valorização anual do imóvel e retorno alternativo do capital (CDI ou Selic).'),
        _s('Clique em Analisar','Comparativo financeiro em 10 anos mostrando qual opção gera mais patrimônio.')]},
      'calculadora-itbi': { name:'Como calcular o ITBI', steps:[
        _s('Informe o valor do imóvel','Valor declarado na escritura ou valor venal — o ITBI incide sobre o maior.'),
        _s('Selecione o município','A alíquota do ITBI varia por cidade: de 2% a 3% na maioria dos municípios.'),
        _s('Clique em Calcular','ITBI, custos de cartório, registro e total de despesas na compra do imóvel.')]},
      'calculadora-yield-imovel': { name:'Como calcular yield (rentabilidade) do imóvel', steps:[
        _s('Informe valor do imóvel e aluguel mensal','Valor de mercado atual e aluguel bruto recebido.'),
        _s('Informe custos e vacância','IPTU, condomínio, manutenção e meses sem inquilino por ano.'),
        _s('Clique em Calcular','Yield bruto, yield líquido e comparativo com CDI, Selic e FIIs.')]},
      'calculadora-reforma': { name:'Como estimar custo de reforma', steps:[
        _s('Selecione os ambientes e metragens','Banheiro, cozinha, sala — área em m² de cada cômodo a reformar.'),
        _s('Selecione o padrão','Simples, médio ou alto padrão — os preços de materiais e mão de obra variam bastante.'),
        _s('Clique em Calcular','Estimativa de custo por cômodo e total geral da reforma.')]},
      'calculadora-combustivel': { name:'Como calcular qual combustível compensa', steps:[
        _s('Informe preços de gasolina e etanol','Preço atual no posto da sua cidade para cada combustível.'),
        _s('Informe consumo do veículo e km mensais','Km/litro com cada combustível e distância percorrida por mês.'),
        _s('Clique em Calcular','Custo por km, custo mensal e qual combustível é mais econômico para o seu carro.')]},
      'custo-do-carro': { name:'Como calcular o custo real do carro', steps:[
        _s('Informe valor e financiamento','Preço do carro, entrada e parcela mensal se financiado.'),
        _s('Informe custos fixos e variáveis','IPVA, seguro, manutenção, combustível, pedágios e estacionamento mensais.'),
        _s('Informe a depreciação esperada','Carros perdem 10–20% do valor por ano — custo real frequentemente ignorado.'),
        _s('Clique em Calcular','Custo total mensal, custo por km e o verdadeiro preço de ter o carro.')]},
      'calculadora-das-mei': { name:'Como calcular o DAS do MEI', steps:[
        _s('Selecione a atividade do MEI','Comércio/indústria (ICMS), serviços (ISS) ou ambas — cada tipo tem valor de DAS diferente.'),
        _s('Clique em Calcular','Detalhamento do DAS 2026: INSS, ISS e/ou ICMS e total mensal a pagar.')]},
      'calculadora-icms-iss': { name:'Como calcular ICMS e ISS', steps:[
        _s('Selecione o imposto e informe o valor da operação','ICMS para comércio/indústria; ISS para serviços.'),
        _s('Informe a alíquota aplicável','ICMS varia por estado (4%–25%); ISS por município e serviço (2%–5%).'),
        _s('Clique em Calcular','Imposto por dentro e por fora, base de cálculo e valor líquido da operação.')]},
      'calculadora-hora-trabalho': { name:'Como calcular o valor real da hora de trabalho', steps:[
        _s('Informe salário, impostos e descontos','INSS, IR, custos como PJ ou MEI — tudo que você paga para poder trabalhar.'),
        _s('Informe horas reais trabalhadas','Inclua deslocamento, reuniões e trabalho fora do horário contratado.'),
        _s('Clique em Calcular','Valor real por hora descontando tudo que gasta para trabalhar — essencial para autônomos e freelancers.')]},
      'divisor-de-conta': { name:'Como dividir conta entre pessoas', steps:[
        _s('Informe valor total e número de pessoas','Total da conta e quantos vão dividir.'),
        _s('Adicione gorjeta (opcional)','Percentual de gorjeta se quiser incluir na divisão.'),
        _s('Clique em Dividir','Quanto cada pessoa paga, com ou sem gorjeta.')]},
      'conversor-unidades': { name:'Como converter unidades de medida', steps:[
        _s('Selecione a categoria e as unidades','Comprimento, peso, temperatura, área, volume — origem e destino da conversão.'),
        _s('Digite o valor e veja o resultado','Conversão instantânea com a fórmula explicada.')]},
      'calculadora-gravidez': { name:'Como calcular data provável do parto', steps:[
        _s('Informe a data da última menstruação (DUM)','Ponto de partida mais usado pelos obstetras para calcular a gestação.'),
        _s('Clique em Calcular','Data provável do parto (DPP), semanas de gestação, trimestre atual e calendário de pré-natal.')]},
      'calculadora-imc': { name:'Como calcular o IMC', steps:[
        _s('Informe peso e altura','Seu peso em kg e altura em cm.'),
        _s('Clique em Calcular','IMC, classificação OMS (abaixo do peso, normal, sobrepeso, obesidade) e faixa de peso ideal.')]},
      'calculadora-calorias': { name:'Como calcular necessidade calórica diária', steps:[
        _s('Informe dados pessoais','Peso, altura, idade e sexo — equação de Harris-Benedict.'),
        _s('Selecione nível de atividade e objetivo','Sedentário a muito ativo. Objetivo: perder peso, manter ou ganhar massa.'),
        _s('Clique em Calcular','Taxa metabólica basal (TMB), gasto total diário e meta calórica para o objetivo.')]},
      'calculadora-media-escolar': { name:'Como calcular média escolar', steps:[
        _s('Informe notas e pesos de cada avaliação','Bimestres, trimestres ou provas com seus respectivos pesos.'),
        _s('Informe a média mínima para aprovação','Geralmente 5,0 ou 6,0 conforme a escola.'),
        _s('Clique em Calcular','Média ponderada, situação (aprovado/recuperação) e nota necessária na próxima prova.')]},
      'consulta-cnpj': { name:'Como consultar CNPJ', steps:[
        _s('Digite o CNPJ','Com ou sem formatação — pontos, traço e barra são opcionais.'),
        _s('Clique em Consultar','Dados em tempo real da Receita Federal: razão social, situação cadastral, endereço, CNAE e sócios.')]},
      'feriados': { name:'Como consultar feriados nacionais', steps:[
        _s('Selecione o ano (2025 ou 2026)','Calendário completo de feriados nacionais do Brasil.'),
        _s('Veja o próximo feriado e a lista completa','Contagem regressiva, data, dia da semana e tipo de cada feriado.')]},
      'calculadora-contagem-datas': { name:'Como calcular dias entre datas', steps:[
        _s('Informe a data inicial e final','Datas de início e fim do período que deseja calcular.'),
        _s('Selecione se desconta fins de semana e feriados','Para calcular prazo em dias úteis, ative as opções.'),
        _s('Clique em Calcular','Diferença em dias corridos, dias úteis, semanas e meses entre as duas datas.')]},
      'taxas-do-dia': { name:'Como consultar taxas de juros do dia', steps:[
        _s('Acesse a página','As taxas são carregadas automaticamente via BrasilAPI com dados do Banco Central.'),
        _s('Veja Selic, CDI e outras taxas','Taxas oficiais do dia: Selic, CDI diário e anual, TJLP, TR — atualizadas em tempo real.')]},
      'cotacao-moedas': { name:'Como consultar cotação de moedas', steps:[
        _s('Acesse a página','Cotações carregadas em tempo real via API de câmbio.'),
        _s('Informe o valor e selecione a moeda','Digite o valor e escolha a moeda de destino para conversão instantânea.'),
        _s('Veja dólar, euro e outras moedas','Taxa de compra, venda e variação do dia para as principais moedas.')]},
      'gerador-qr-code': { name:'Como gerar um QR Code', steps:[
        _s('Selecione o tipo de conteúdo','Link, mensagem WhatsApp, chave PIX ou texto livre.'),
        _s('Informe o conteúdo','URL, número de telefone, chave PIX ou o texto que o QR Code deve conter.'),
        _s('Clique em Gerar e baixe o QR Code','QR Code gerado instantaneamente em alta resolução para download em PNG.')]},
      'calculadora': { name:'Como usar a calculadora científica', steps:[
        _s('Digite a expressão matemática','Suporta operações básicas, trigonometria, logaritmos, potências e raízes.'),
        _s('Pressione Enter ou clique em Calcular','Resultado instantâneo com histórico das últimas operações.')]},
      'encurtador-url': { name:'Como encurtar um link', steps:[
        _s('Cole a URL que deseja encurtar','Qualquer link válido com http:// ou https://.'),
        _s('Clique em Encurtar','Link curto gerado instantaneamente, pronto para compartilhar.')]},
      'consulta-cep': { name:'Como consultar endereço pelo CEP', steps:[
        _s('Digite o CEP','Com ou sem traço — 8 dígitos do CEP brasileiro.'),
        _s('Clique em Consultar','Endereço completo via ViaCEP: logradouro, bairro, cidade, estado e link para Google Maps.')]},
      'verificar-dominio': { name:'Como verificar disponibilidade de domínio', steps:[
        _s('Digite o nome do domínio desejado','Sem o ponto ou extensão — a calculadora verifica .com, .com.br, .net e .org.'),
        _s('Clique em Verificar','Disponibilidade em tempo real e dados WHOIS se o domínio estiver registrado.')]}
    };
    var data = HOWTO[currentSlug];
    if (!data) return;
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context':'https://schema.org', '@type':'HowTo',
      'name': data.name, 'description': pgDesc, 'totalTime':'PT2M',
      'step': data.steps.map(function(s,i){ return {'@type':'HowToStep','position':i+1,'name':s.name,'text':s.text}; })
    });
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
      title: '📋 Calculadora de Rescisão Trabalhista 2026 Online Grátis',
      desc: 'Calcule todos os valores da rescisão: saldo de salário, aviso prévio, 13º proporcional, férias + 1/3 e multa do FGTS. Funciona para demissão sem justa causa, pedido de demissão e acordo mútuo — com estimativas automáticas mesmo sem todas as informações.',
      chips: ['✅ CLT Atualizada 2026', '✅ 3 tipos de rescisão', '✅ Estimativas automáticas']
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
      '<div class="revisao-badge">📅 Atualizado em <time datetime="2026-05-01">01/05/2026</time> · Regras vigentes 2026</div>';
    // Insere antes de #formulario, ou como primeiro filho de <main>
    var _fEl = document.getElementById('formulario');
    var _mainEl = document.querySelector('main');
    if (_fEl) {
      _fEl.parentNode.insertBefore(_plDiv, _fEl);
    } else if (_mainEl) {
      _mainEl.insertBefore(_plDiv, _mainEl.firstChild);
    }
  }

  // ── E-E-A-T badge — após page-lead em todas as páginas ────────────────
  (function injectEEAT() {
    if (isHome) return;
    if (document.querySelector('.eeat-badge')) return;
    var badge = document.createElement('div');
    badge.className = 'eeat-badge';
    badge.innerHTML = '📋 <span>Conteúdo elaborado pela equipe <strong>FacilCalc</strong> &nbsp;·&nbsp; Atualizado em <strong><time datetime="2026-05-01">01/05/2026</time></strong> &nbsp;·&nbsp; Estimativa educacional — não substitui orientação profissional</span>';
    var lead = document.querySelector('.page-lead');
    var mainEl = document.querySelector('main');
    if (lead && lead.parentNode) {
      lead.parentNode.insertBefore(badge, lead.nextSibling);
    } else if (mainEl) {
      mainEl.insertBefore(badge, mainEl.firstChild);
    }
  })();

  // ── rel=nofollow noopener em todos os links externos ──────────────────
  document.querySelectorAll('a[href^="http"]').forEach(function(a) {
    var h = a.getAttribute('href') || '';
    if (h.includes('facilcalc.com.br') || h.startsWith(window.location.origin)) return;
    var rel = (a.getAttribute('rel') || '').trim();
    if (!rel.includes('nofollow')) {
      a.setAttribute('rel', (rel ? rel + ' ' : '') + 'nofollow noopener');
    }
  });

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
        '<a href="' + _origin + '/contato/" style="color:inherit;opacity:.7;margin:0 8px;text-decoration:none;">Contato</a>' +
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
