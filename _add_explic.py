#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Insere seções .explic em páginas FacilCalc que ainda não têm."""

import os, re

BASE = r"C:\github\Futuro\calculadora-rescisao"

EXPLIC = {}

# ─── 1. calculadora-insalubridade ────────────────────────────────────────────
EXPLIC["calculadora-insalubridade"] = """
  <div class="explic">
    <h3>⚠️ Como Funciona o Adicional de Insalubridade e Periculosidade?</h3>
    <p>O <strong>adicional de insalubridade</strong> é devido ao trabalhador exposto a agentes nocivos à saúde, conforme a <strong>NR-15 do Ministério do Trabalho</strong>. O adicional de <strong>periculosidade</strong> se aplica a quem trabalha com inflamáveis, explosivos, energia elétrica ou radiações ionizantes, conforme a <strong>NR-16</strong>.</p>
    <h4>💰 Percentuais Legais (CLT, art. 192 e 193)</h4>
    <table>
      <thead><tr><th>Adicional</th><th>Grau / Tipo</th><th>% sobre o salário</th></tr></thead>
      <tbody>
        <tr><td>Insalubridade Mínima</td><td>Grau mínimo (NR-15)</td><td>10% do salário mínimo</td></tr>
        <tr><td>Insalubridade Média</td><td>Grau médio</td><td>20% do salário mínimo</td></tr>
        <tr><td>Insalubridade Máxima</td><td>Grau máximo</td><td>40% do salário mínimo</td></tr>
        <tr><td>Periculosidade</td><td>Inflamáveis, elétrica, explosivos</td><td>30% do salário bruto</td></tr>
      </tbody>
    </table>
    <div class="info-box">ℹ️ O salário mínimo nacional em 2025 é <strong>R$ 1.518,00</strong>. Os adicionais de insalubridade são calculados sobre esse valor — não sobre o salário contratual do empregado.</div>
    <h4>⚡ Insalubridade vs Periculosidade — Qual Escolher?</h4>
    <p>O trabalhador <strong>não pode acumular</strong> os dois adicionais simultaneamente — deve optar pelo mais vantajoso (CLT, art. 193, §2º). Em geral, a periculosidade (30% sobre o salário bruto) é mais vantajosa que a insalubridade (10–40% sobre o salário mínimo).</p>
    <div class="warn-box">⚠️ O adicional de insalubridade só é devido após <strong>laudo técnico de PPRA/PGR</strong> emitido por engenheiro de segurança do trabalho. A empresa não pode eliminar o adicional apenas com uso de EPI — é necessário comprovar a eliminação efetiva do risco (Súmula 289, TST).</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">O adicional de insalubridade entra na base de cálculo do FGTS e 13º?</div>
      <div class="faq-a">Sim. O adicional de insalubridade integra o salário para fins de FGTS, 13º salário, férias e INSS — pois é parcela habitual da remuneração.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">A empresa pode remover o adicional fornecendo EPI?</div>
      <div class="faq-a">Segundo a Súmula 289 do TST, o simples fornecimento de EPI não afasta o direito ao adicional. É necessário que o EPI comprovadamente neutralize o agente nocivo — atestado em laudo técnico.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Trabalhador temporário tem direito ao adicional?</div>
      <div class="faq-a">Sim. Todo trabalhador sujeito a agentes insalubres ou perigosos tem direito ao adicional, independente do tipo de contrato — inclusive temporários e terceirizados.</div>
    </div>
  </div>
"""

# ─── 2. calculadora-plr ──────────────────────────────────────────────────────
EXPLIC["calculadora-plr"] = """
  <div class="explic">
    <h3>🏆 Como Funciona a PLR — Participação nos Lucros e Resultados?</h3>
    <p>A <strong>PLR</strong> é um benefício previsto na <strong>Constituição Federal (art. 7º, XI)</strong> e regulamentada pela <strong>Lei 10.101/2000</strong>. É negociada entre empresa e empregados via convenção coletiva ou comissão interna.</p>
    <h4>💰 Tabela de IR Exclusivo na Fonte — PLR 2025</h4>
    <table>
      <thead><tr><th>Faixa PLR</th><th>Alíquota</th><th>Parcela a deduzir</th></tr></thead>
      <tbody>
        <tr><td>Até R$ 7.407,11</td><td>Isento</td><td>—</td></tr>
        <tr><td>R$ 7.407,12 a R$ 9.250,71</td><td>7,5%</td><td>R$ 555,54</td></tr>
        <tr><td>R$ 9.250,72 a R$ 11.250,05</td><td>15%</td><td>R$ 1.249,00</td></tr>
        <tr><td>R$ 11.250,06 a R$ 13.715,03</td><td>22,5%</td><td>R$ 2.091,55</td></tr>
        <tr><td>Acima de R$ 13.715,03</td><td>27,5%</td><td>R$ 2.778,30</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ A PLR tem <strong>tributação exclusiva na fonte</strong> — não entra na base de cálculo do IR anual. A tabela é diferente e mais vantajosa que a tabela mensal de IRRF sobre salários.</div>
    <h4>📋 Regras Importantes da PLR</h4>
    <ul>
      <li>Não pode substituir ou complementar a remuneração — pagamento mensal é proibido</li>
      <li>Pode ser pago em até 2 parcelas/ano, com intervalo mínimo de 1 trimestre</li>
      <li>PLR <strong>não integra o salário</strong> — não incide FGTS e não base para férias e 13º</li>
      <li>O INSS incide normalmente sobre a PLR (alíquota progressiva)</li>
    </ul>
    <div class="warn-box">⚠️ Se a PLR não for negociada conforme a Lei 10.101/2000, pode ser descaracterizada como salário — passando a integrar a base de cálculo de FGTS, férias e 13º.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">PLR entra no cálculo de rescisão ou férias?</div>
      <div class="faq-a">Não. A PLR não integra a remuneração para fins de férias, 13º, FGTS ou rescisão — desde que paga conforme a Lei 10.101/2000.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Empregado em aviso prévio tem direito à PLR?</div>
      <div class="faq-a">Depende do acordo de PLR da empresa. Se prevê proporcionalidade por meses trabalhados e o aviso ocorreu no período, o empregado tem direito proporcional. Consulte o regulamento da sua empresa.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Autônomo ou PJ pode receber PLR?</div>
      <div class="faq-a">Não. A PLR é exclusiva para trabalhadores com vínculo empregatício (CLT). Profissionais contratados como PJ, MEI ou autônomos não têm direito à PLR.</div>
    </div>
  </div>
"""

# ─── 3. simulador-financiamento ──────────────────────────────────────────────
EXPLIC["simulador-financiamento"] = """
  <div class="explic">
    <h3>🏠 Como Funciona o Financiamento Imobiliário no Brasil?</h3>
    <p>O financiamento imobiliário permite a compra parcelada de imóveis em longo prazo. Os principais sistemas são o <strong>SAC</strong> (Sistema de Amortização Constante) e o <strong>Price</strong> (Tabela Price), com características distintas de parcela e custo total.</p>
    <h4>⚖️ SAC vs Price — Principais Diferenças</h4>
    <table>
      <thead><tr><th>Característica</th><th>SAC</th><th>Price</th></tr></thead>
      <tbody>
        <tr><td>Parcelas</td><td>Decrescentes</td><td>Constantes (fixas)</td></tr>
        <tr><td>Amortização</td><td>Constante</td><td>Crescente ao longo do tempo</td></tr>
        <tr><td>Custo total</td><td>Menor</td><td>Maior</td></tr>
        <tr><td>Primeira parcela</td><td>Mais alta</td><td>Mais baixa</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ Em longo prazo, o <strong>SAC é mais vantajoso em custo total</strong>. O Price é preferido para aprovação de crédito com parcelas iniciais menores.</div>
    <h4>💡 Taxas Médias (2025)</h4>
    <ul>
      <li><strong>SBPE/FGTS (Caixa):</strong> 10,5–12% a.a. para imóveis residenciais</li>
      <li><strong>IPCA+:</strong> Risco de inflação — parcela sobe junto com IPCA</li>
      <li><strong>CET (Custo Efetivo Total):</strong> Inclui juros + seguros + IOF + tarifas — sempre compare</li>
    </ul>
    <h4>📋 Custos Além da Parcela</h4>
    <ul>
      <li><strong>ITBI:</strong> 2–4% do valor do imóvel</li>
      <li><strong>Cartório (escritura + registro):</strong> ~1–2%</li>
      <li><strong>Seguros obrigatórios:</strong> MIP + DFI incluídos na parcela</li>
    </ul>
    <div class="warn-box">⚠️ O <strong>CET (Custo Efetivo Total)</strong> representa o custo real do financiamento. Sempre compare o CET — não apenas a taxa nominal — ao escolher entre bancos.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Posso usar o FGTS para financiamento?</div>
      <div class="faq-a">Sim. O FGTS pode ser usado como entrada, parcelas ou amortização do saldo devedor em financiamentos pelo SFH, para imóvel residencial e primeira compra (limite R$ 1,5 milhão em 2025).</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Qual percentual da renda posso comprometer?</div>
      <div class="faq-a">Os bancos aprovam com parcela de até 30% da renda bruta. O ideal é limitar habitação a 25–30% da renda líquida para equilíbrio orçamentário.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Vale a pena amortizar antecipadamente?</div>
      <div class="faq-a">Em geral sim, se os juros do financiamento superam o rendimento de investimentos seguros. Prefira reduzir o prazo em vez de reduzir a parcela — economiza mais juros.</div>
    </div>
  </div>
"""

# ─── 4. calculadora-rescisao-aluguel ─────────────────────────────────────────
EXPLIC["calculadora-rescisao-aluguel"] = """
  <div class="explic">
    <h3>🏠 Como Funciona a Rescisão de Contrato de Aluguel?</h3>
    <p>A rescisão de aluguel é regulamentada pela <strong>Lei do Inquilinato (Lei 8.245/1991)</strong>. As regras de multa e aviso prévio variam conforme quem pede a rescisão e o tipo de imóvel.</p>
    <h4>📋 Situações de Rescisão</h4>
    <table>
      <thead><tr><th>Situação</th><th>Multa</th><th>Aviso Prévio</th></tr></thead>
      <tbody>
        <tr><td>Locatário antes do prazo</td><td>Proporcional (padrão 3 meses)</td><td>30 dias</td></tr>
        <tr><td>Locatário após prazo (ind.)</td><td>Sem multa</td><td>30 dias obrigatórios</td></tr>
        <tr><td>Transferência de trabalho (CLT)</td><td>Sem multa</td><td>30 dias + comprovação</td></tr>
        <tr><td>Locador — uso próprio</td><td>Sem multa</td><td>30 dias mínimo</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ Se o locatário foi <strong>transferido de cidade pelo empregador</strong>, pode rescindir sem multa com aviso de 30 dias (art. 4º, parágrafo único, Lei 8.245/91).</div>
    <h4>💰 Como é Calculada a Multa Proporcional?</h4>
    <p><strong>Multa = (Meses restantes ÷ Total do contrato) × Multa cheia (3 meses de aluguel)</strong></p>
    <div class="warn-box">⚠️ Multas acima de 3 meses de aluguel em contratos residenciais são geralmente consideradas abusivas pelo Judiciário.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">O fiador também paga a multa rescisória?</div>
      <div class="faq-a">O fiador responde pelas obrigações do locatário, incluindo a multa, caso o locatário não pague. O fiador deve estar ciente de todas as cláusulas do contrato.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O que acontece com a caução na rescisão?</div>
      <div class="faq-a">A caução (até 3 meses de aluguel) deve ser devolvida em até 30 dias após a entrega das chaves, descontados eventuais débitos (aluguéis atrasados, reparos por danos).</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Locador pode entrar no imóvel sem aviso?</div>
      <div class="faq-a">Não. O acesso deve ser combinado com o locatário, em horários razoáveis e com comunicação prévia. Acesso arbitrário viola o direito de privacidade do inquilino.</div>
    </div>
  </div>
"""

# ─── 5. calculadora-sac-price ────────────────────────────────────────────────
EXPLIC["calculadora-sac-price"] = """
  <div class="explic">
    <h3>🏦 SAC vs Tabela Price — Qual Sistema de Amortização Escolher?</h3>
    <p>A escolha entre <strong>SAC</strong> e <strong>Price</strong> é uma das decisões mais importantes em um financiamento imobiliário. Ambos cobram os mesmos juros sobre o saldo devedor, mas a forma de amortização é diferente.</p>
    <h4>📐 Como Funciona Cada Sistema</h4>
    <table>
      <thead><tr><th>Aspecto</th><th>SAC</th><th>Tabela Price</th></tr></thead>
      <tbody>
        <tr><td>Amortização mensal</td><td>Constante (igual todo mês)</td><td>Crescente ao longo do tempo</td></tr>
        <tr><td>Parcela</td><td>Começa alta e vai caindo</td><td>Sempre igual (fixa)</td></tr>
        <tr><td>Custo total</td><td>Menor</td><td>Maior</td></tr>
        <tr><td>Risco de saldo crescer</td><td>Muito baixo</td><td>Possível nos primeiros anos</td></tr>
      </tbody>
    </table>
    <h4>💡 Exemplo Prático (R$ 500.000 · 360 meses · 10% a.a.)</h4>
    <table>
      <thead><tr><th>Sistema</th><th>1ª Parcela</th><th>Última Parcela</th><th>Total Pago</th></tr></thead>
      <tbody>
        <tr><td>SAC</td><td>≈ R$ 5.555</td><td>≈ R$ 1.402</td><td>≈ R$ 986.000</td></tr>
        <tr><td>Price</td><td>≈ R$ 4.388</td><td>≈ R$ 4.388</td><td>≈ R$ 1.580.000</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ No exemplo acima, o SAC economiza cerca de <strong>R$ 594.000</strong> em juros. A diferença cresce quanto mais longo o prazo e maior a taxa de juros.</div>
    <div class="warn-box">⚠️ No Price com indexador (IPCA/TR), o saldo devedor pode <strong>crescer em meses de inflação alta</strong> — quando a correção supera a amortização da parcela. No SAC isso raramente ocorre.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Qual sistema é indicado para quem tem renda limitada?</div>
      <div class="faq-a">O Price tem parcela inicial menor, facilitando a aprovação. Mas a longo prazo o SAC é sempre mais barato. Se possível, escolha SAC e economize nas décadas seguintes.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Posso trocar de SAC para Price durante o financiamento?</div>
      <div class="faq-a">Em geral não — o sistema é definido na assinatura do contrato. Ao amortizar antecipadamente, é possível renegociar prazo e valor de parcela, mas não o sistema de amortização.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Qual sistema o Minha Casa Minha Vida usa?</div>
      <div class="faq-a">O MCMV usa o sistema SAC (com possível subsídio do governo). As parcelas caem ao longo do tempo, tornando o financiamento mais leve nos anos finais.</div>
    </div>
  </div>
"""

# ─── 6. alugar-ou-comprar ────────────────────────────────────────────────────
EXPLIC["alugar-ou-comprar"] = """
  <div class="explic">
    <h3>🏠 Alugar ou Comprar? A Análise Financeira Completa</h3>
    <p>A decisão entre alugar ou comprar vai além de comparar parcela com aluguel. Envolve <strong>custo de oportunidade, valorização, custos de transação, liquidez e horizonte de tempo</strong>.</p>
    <h4>💡 Custos Ocultos ao Comprar</h4>
    <ul>
      <li><strong>ITBI:</strong> 2–4% do valor do imóvel (pago na compra)</li>
      <li><strong>Cartório:</strong> Escritura e registro (~1–2%)</li>
      <li><strong>Custo de oportunidade:</strong> O que a entrada renderia investida em renda fixa</li>
      <li><strong>Manutenção:</strong> Estimativa de 1–2% do valor do imóvel por ano</li>
      <li><strong>IPTU e condomínio:</strong> No aluguel geralmente pago pelo proprietário</li>
    </ul>
    <div class="info-box">✅ Regra de bolso: se o <strong>yield do aluguel</strong> (aluguel anual ÷ valor do imóvel) for abaixo de 4–5%, alugar e investir a diferença pode ser mais vantajoso. Yields típicos no Brasil: 4–6% a.a.</div>
    <h4>📊 Quando Comprar Tende a Ser Vantajoso</h4>
    <ul>
      <li>Horizonte de longo prazo (+10 anos no mesmo imóvel)</li>
      <li>Entrada substancial (20–30%) disponível</li>
      <li>Imóvel em região com perspectiva de valorização</li>
      <li>Você valoriza estabilidade e não pode ser despejado</li>
    </ul>
    <h4>📊 Quando Alugar Tende a Ser Vantajoso</h4>
    <ul>
      <li>Você tem mobilidade ou pode precisar mudar de cidade</li>
      <li>Yield do imóvel pretendido abaixo de 4% a.a.</li>
      <li>Juros altos encarecem muito o financiamento</li>
      <li>Você tem disciplina para investir a diferença</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Como calcular o custo de oportunidade?</div>
      <div class="faq-a">Simule quanto o valor da entrada e custos de transação renderiam em renda fixa segura (Tesouro Selic ou CDB 100%+ CDI) no mesmo período. Se esse rendimento superar a valorização esperada, alugar pode ser mais vantajoso.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Imóvel é sempre um bom investimento?</div>
      <div class="faq-a">Não necessariamente. No Brasil, de 2014 a 2022, muitos imóveis perderam valor real (descontada a inflação). Imóvel pode ser excelente ou ruim dependendo da localização, momento e comparativo com outras alternativas.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O FGTS muda a análise?</div>
      <div class="faq-a">Sim, favorece a compra. O FGTS rende apenas TR + 3% a.a. — bem abaixo do CDI. Usar o FGTS como entrada reduz custo que de outra forma seria perdido — um dos fatores que favorecem a compra para trabalhadores CLT.</div>
    </div>
  </div>
"""

# ─── 7. calculadora-cdb-lci-lca ──────────────────────────────────────────────
EXPLIC["calculadora-cdb-lci-lca"] = """
  <div class="explic">
    <h3>💹 CDB, LCI e LCA — Entenda as Diferenças e Renda Mais</h3>
    <p>CDB, LCI e LCA são os investimentos de <strong>renda fixa privada</strong> mais populares no Brasil. Todos têm cobertura do <strong>FGC (Fundo Garantidor de Créditos)</strong> até R$ 250.000 por CPF por instituição.</p>
    <h4>📋 Comparativo Rápido</h4>
    <table>
      <thead><tr><th>Característica</th><th>CDB</th><th>LCI</th><th>LCA</th></tr></thead>
      <tbody>
        <tr><td>IR sobre rendimentos</td><td>Tabela regressiva (15–22,5%)</td><td>Isento (PF)</td><td>Isento (PF)</td></tr>
        <tr><td>Prazo mínimo</td><td>Sem mínimo</td><td>9 meses</td><td>9 meses</td></tr>
        <tr><td>Liquidez</td><td>Pode ter diária</td><td>Geralmente no vencimento</td><td>Geralmente no vencimento</td></tr>
        <tr><td>FGC</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>
      </tbody>
    </table>
    <h4>💰 Tabela IR Regressivo (CDB)</h4>
    <table>
      <thead><tr><th>Prazo</th><th>Alíquota IR</th></tr></thead>
      <tbody>
        <tr><td>Até 180 dias</td><td>22,5%</td></tr>
        <tr><td>181 a 360 dias</td><td>20%</td></tr>
        <tr><td>361 a 720 dias</td><td>17,5%</td></tr>
        <tr><td>Acima de 720 dias</td><td>15%</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ Para comparar LCI/LCA (isento) com CDB: <strong>Taxa equivalente CDB = Taxa LCI ÷ (1 - alíquota IR)</strong>. Exemplo: LCI 10% em 2 anos equivale a CDB de 11,76% (÷ 0,85). Se o CDB oferecer menos, a LCI vence.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">O FGC cobre 100% do meu dinheiro?</div>
      <div class="faq-a">Sim, até R$ 250.000 por CPF por instituição. Se você tem R$ 300.000 no mesmo banco, os R$ 50.000 excedentes ficam sem cobertura. Diversifique entre instituições para proteção total.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Vale a pena CDB de banco pequeno com taxa maior?</div>
      <div class="faq-a">Depende do prêmio. Bancos menores oferecem 120–150% do CDI. Com a cobertura do FGC, até R$ 250.000 o risco adicional é baixo — mas avalie a saúde financeira da instituição e a liquidez antes de aplicar.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">LCI e LCA são realmente melhores que o CDB?</div>
      <div class="faq-a">Nem sempre. Depende da taxa ofertada. Um CDB a 120% do CDI pode superar uma LCI a 90% do CDI mesmo com IR. Use a fórmula de equivalência e compare pelo retorno líquido.</div>
    </div>
  </div>
"""

# ─── 8. simulador-tesouro-direto ─────────────────────────────────────────────
EXPLIC["simulador-tesouro-direto"] = """
  <div class="explic">
    <h3>🏛️ Tesouro Direto — O Investimento Mais Seguro do Brasil</h3>
    <p>O <strong>Tesouro Direto</strong> é um programa do Tesouro Nacional que permite comprar títulos públicos federais a partir de R$ 30. É o investimento de mais baixo risco no Brasil, garantido pelo governo federal.</p>
    <h4>📋 Tipos de Títulos Disponíveis (2025)</h4>
    <table>
      <thead><tr><th>Título</th><th>Rendimento</th><th>Para quem</th></tr></thead>
      <tbody>
        <tr><td>Tesouro Selic</td><td>Taxa Selic (pós-fixado)</td><td>Reserva de emergência, curto prazo</td></tr>
        <tr><td>Tesouro IPCA+</td><td>IPCA + taxa fixa</td><td>Proteção da inflação, longo prazo</td></tr>
        <tr><td>Tesouro IPCA+ c/ Juros Sem.</td><td>IPCA + taxa fixa (cupons)</td><td>Renda periódica, aposentadoria</td></tr>
        <tr><td>Tesouro Prefixado</td><td>Taxa fixa</td><td>Quando Selic tende a cair</td></tr>
      </tbody>
    </table>
    <h4>💰 Custos do Tesouro Direto</h4>
    <ul>
      <li><strong>Taxa da B3:</strong> 0,20% a.a. sobre o valor investido</li>
      <li><strong>Taxa do banco/corretora:</strong> A maioria cobra 0% hoje</li>
      <li><strong>IR:</strong> Tabela regressiva — 22,5% (até 180 dias) a 15% (acima de 720 dias)</li>
      <li><strong>IOF:</strong> Apenas se resgatar antes de 30 dias</li>
    </ul>
    <div class="info-box">✅ O <strong>Tesouro Selic</strong> é a alternativa mais segura e líquida para reserva de emergência — rende diariamente, tem liquidez D+1 e praticamente não tem risco de perda.</div>
    <div class="warn-box">⚠️ O <strong>Tesouro IPCA+ e Prefixado</strong> podem ter rentabilidade negativa no curto prazo se vendidos antes do vencimento (marcação a mercado). Só invista nesses títulos com dinheiro que não vai precisar até o vencimento.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Posso perder dinheiro no Tesouro Direto?</div>
      <div class="faq-a">No Tesouro Selic, praticamente não. Nos prefixados e IPCA+, se você vender antes do vencimento e as taxas subiram, pode receber menos. Se mantiver até o vencimento, recebe exatamente o combinado.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Tesouro Direto ou CDB — qual é melhor?</div>
      <div class="faq-a">Depende da taxa e prazo. CDBs de bancos pequenos podem oferecer taxas superiores, com cobertura do FGC. O Tesouro tem segurança máxima (risco soberano) e liquidez diária no Selic.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Qual o valor mínimo para investir?</div>
      <div class="faq-a">R$ 30,00 ou 1% do valor do título. Na prática, você consegue começar com menos de R$ 100 na maioria dos títulos — o investimento mais acessível do mercado financeiro brasileiro.</div>
    </div>
  </div>
"""

# ─── 9. calculadora-fire ─────────────────────────────────────────────────────
EXPLIC["calculadora-fire"] = """
  <div class="explic">
    <h3>🔥 O que é FIRE — Financial Independence, Retire Early?</h3>
    <p>O movimento <strong>FIRE</strong> busca acumular patrimônio suficiente para viver dos rendimentos sem depender de trabalho ativo. A premissa central é a <strong>Regra dos 4%</strong>: um portfólio bem diversificado pode sustentar retiradas de 4% ao ano indefinidamente.</p>
    <h4>📐 Patrimônio Necessário (Regra ×25)</h4>
    <table>
      <thead><tr><th>Gasto Mensal</th><th>Patrimônio FIRE (×300)</th></tr></thead>
      <tbody>
        <tr><td>R$ 3.000/mês</td><td>R$ 900.000</td></tr>
        <tr><td>R$ 5.000/mês</td><td>R$ 1.500.000</td></tr>
        <tr><td>R$ 10.000/mês</td><td>R$ 3.000.000</td></tr>
        <tr><td>R$ 20.000/mês</td><td>R$ 6.000.000</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ Fórmula: <strong>Patrimônio FIRE = Gasto anual × 25</strong> (retirada de 4% a.a.). Para o Brasil, muitos especialistas recomendam ×30 (3,33%) por maior volatilidade local.</div>
    <h4>🎯 Variações do FIRE</h4>
    <ul>
      <li><strong>Lean FIRE:</strong> Estilo de vida frugal com gastos bem abaixo da média</li>
      <li><strong>Fat FIRE:</strong> Alto padrão de vida (acima de R$ 15.000/mês)</li>
      <li><strong>Barista FIRE:</strong> Patrimônio parcial + trabalho de baixa intensidade</li>
      <li><strong>Coast FIRE:</strong> Patrimônio já suficiente para crescer sem aportes adicionais</li>
    </ul>
    <div class="warn-box">⚠️ A Regra dos 4% foi calculada para carteiras americanas em dólares. No Brasil, use taxa de retirada mais conservadora (3–3,5%) e mantenha parte em ativos atrelados ao IPCA.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Como acelerar o caminho para o FIRE?</div>
      <div class="faq-a">Aumentar a taxa de poupança é o principal acelerador. Quem poupa 10% leva ~46 anos; quem poupa 50% leva ~17 anos; quem poupa 75% leva ~7 anos. Reduzir gastos é mais eficaz que aumentar renda no curto prazo.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O INSS entra no cálculo do FIRE?</div>
      <div class="faq-a">Pode ser considerado como renda futura que reduz o patrimônio necessário. Use conservadorismo — a idade de aposentadoria e o valor do benefício podem mudar.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Onde investir o patrimônio FIRE no Brasil?</div>
      <div class="faq-a">Uma carteira típica inclui: Tesouro IPCA+ (30–40%), ações/ETFs (30–40%), FIIs (10–20%) e Tesouro Selic/emergência (10–20%). A diversificação protege contra diferentes cenários.</div>
    </div>
  </div>
"""

# ─── 10. calculadora-pgbl-vgbl ───────────────────────────────────────────────
EXPLIC["calculadora-pgbl-vgbl"] = """
  <div class="explic">
    <h3>💜 PGBL vs VGBL — Qual Previdência Privada é Melhor para Você?</h3>
    <p>PGBL e VGBL são os dois tipos de planos de <strong>previdência privada</strong> no Brasil. A escolha certa depende principalmente do seu relacionamento com o Imposto de Renda.</p>
    <h4>📋 Diferenças Fundamentais</h4>
    <table>
      <thead><tr><th>Característica</th><th>PGBL</th><th>VGBL</th></tr></thead>
      <tbody>
        <tr><td>Dedução IR na entrada</td><td>Até 12% da renda tributável</td><td>Sem dedução</td></tr>
        <tr><td>IR no resgate</td><td>Sobre valor total (capital + rendimentos)</td><td>Apenas sobre os rendimentos</td></tr>
        <tr><td>Indicado para</td><td>Quem declara IR modelo completo</td><td>Quem declara simplificado ou isento</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ <strong>Regra prática:</strong> Declara IR completo e tem IR a pagar? Use PGBL. Declara simplificado ou é isento? Use VGBL.</div>
    <h4>💰 Regimes de Tributação</h4>
    <table>
      <thead><tr><th>Regime</th><th>Alíquota no resgate</th><th>Melhor para</th></tr></thead>
      <tbody>
        <tr><td>Progressivo (tabela IRPF)</td><td>Varia conforme renda total</td><td>Quem terá renda baixa na aposentadoria</td></tr>
        <tr><td>Regressivo (exclusivo)</td><td>35% (2 anos) → 10% (10+ anos)</td><td>Quem mantém por mais de 10 anos</td></tr>
      </tbody>
    </table>
    <div class="warn-box">⚠️ Fique atento às <strong>taxas de administração</strong>. Uma taxa de 2% a.a. pode corroer até 40% do patrimônio em 30 anos. Prefira planos com taxa inferior a 1% a.a.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Posso mudar de PGBL para VGBL?</div>
      <div class="faq-a">Sim, via portabilidade sem pagar IR, transferindo o saldo entre planos. O prazo de carência e o regime de tributação são mantidos do plano original.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Previdência privada é melhor que o Tesouro IPCA+?</div>
      <div class="faq-a">Depende da taxa de administração e do benefício fiscal. Com taxas baixas (abaixo de 0,7% a.a.) e aproveitando a dedução do PGBL, pode ser vantajosa. Com taxas altas, o Tesouro Direto tende a superar.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O que acontece com a previdência em caso de morte?</div>
      <div class="faq-a">O saldo vai diretamente para os beneficiários indicados no plano, sem passar por inventário — uma das grandes vantagens da previdência privada. Atualize sempre os beneficiários.</div>
    </div>
  </div>
"""

# ─── 11. calculadora-emprestimo ──────────────────────────────────────────────
EXPLIC["calculadora-emprestimo"] = """
  <div class="explic">
    <h3>💳 Como Funciona o Empréstimo Pessoal — Juros, CET e Armadilhas</h3>
    <p>O empréstimo pessoal é um dos produtos de crédito mais comuns no Brasil. As taxas variam enormemente conforme a modalidade e o banco. Entender o <strong>CET (Custo Efetivo Total)</strong> é essencial antes de assinar qualquer contrato.</p>
    <h4>💰 Taxas Médias por Modalidade (2025)</h4>
    <table>
      <thead><tr><th>Modalidade</th><th>Taxa média a.m.</th><th>Taxa média a.a.</th></tr></thead>
      <tbody>
        <tr><td>Empréstimo Pessoal (banco)</td><td>~3,0–4,5%</td><td>~43–70%</td></tr>
        <tr><td>Consignado Público</td><td>~1,4–1,8%</td><td>~18–24%</td></tr>
        <tr><td>Consignado Privado</td><td>~2,0–2,5%</td><td>~27–35%</td></tr>
        <tr><td>Com garantia (home equity)</td><td>~1,0–1,8%</td><td>~13–24%</td></tr>
        <tr><td>Cartão rotativo</td><td>limitado</td><td>limitado a 2,95% a.m. (2024+)</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ O <strong>crédito consignado</strong> tem as menores taxas pois o desconto é direto em folha. Para servidores públicos e aposentados INSS, é a melhor opção de empréstimo.</div>
    <h4>📋 O que é o CET?</h4>
    <p>O <strong>CET</strong> inclui: juros + tarifas + seguros + IOF. Por lei, instituições financeiras são obrigadas a informar o CET antes da contratação. <strong>Sempre compare o CET</strong> — não apenas a taxa nominal.</p>
    <div class="warn-box">⚠️ Exemplo: R$ 10.000 a 3,5% a.m. em 24 parcelas → parcela ≈ R$ 566, total pago ≈ R$ 13.584 (juros de R$ 3.584 = 35,8% do principal). Juros compostos crescem exponencialmente — evite prazos longos.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Qual é o limite de comprometimento de renda?</div>
      <div class="faq-a">O Banco Central recomenda que a dívida total não ultrapasse 30% da renda líquida. Para crédito consignado, o limite legal é de 45% da renda disponível.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Posso quitar antecipadamente?</div>
      <div class="faq-a">Sim. Você tem o direito de quitar o empréstimo a qualquer momento com redução proporcional dos juros futuros. Peça o "Documento de Liquidação Antecipada" ao banco.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Home equity vale a pena?</div>
      <div class="faq-a">Em termos de taxa, sim — muito menores (1–2% a.m.). Mas o risco é alto: se não pagar, pode perder o imóvel. Use apenas para finalidades produtivas — nunca para consumo.</div>
    </div>
  </div>
"""

# ─── 12. calculadora-das-mei ─────────────────────────────────────────────────
EXPLIC["calculadora-das-mei"] = """
  <div class="explic">
    <h3>🪪 DAS MEI — Como Funciona o Boleto Mensal do Microempreendedor?</h3>
    <p>O <strong>DAS MEI</strong> é o documento mensal que o Microempreendedor Individual deve pagar para manter contribuições em dia. Inclui INSS + ICMS e/ou ISS conforme a atividade. Os valores são <strong>fixos</strong> — não variam com o faturamento.</p>
    <h4>💰 Valores DAS MEI 2025</h4>
    <table>
      <thead><tr><th>Atividade</th><th>INSS</th><th>ICMS</th><th>ISS</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>Comércio / Indústria</td><td>R$ 75,90</td><td>R$ 1,00</td><td>—</td><td><strong>R$ 76,90</strong></td></tr>
        <tr><td>Serviços</td><td>R$ 75,90</td><td>—</td><td>R$ 5,00</td><td><strong>R$ 80,90</strong></td></tr>
        <tr><td>Comércio + Serviços</td><td>R$ 75,90</td><td>R$ 1,00</td><td>R$ 5,00</td><td><strong>R$ 81,90</strong></td></tr>
      </tbody>
    </table>
    <div class="info-box">ℹ️ O INSS do MEI é 5% do salário mínimo (R$ 1.518,00 em 2025 = R$ 75,90). Quando o salário mínimo é reajustado, o DAS aumenta proporcionalmente.</div>
    <h4>📋 Regras MEI 2025</h4>
    <ul>
      <li><strong>Limite anual:</strong> R$ 81.000,00</li>
      <li><strong>MEI Caminhoneiro:</strong> Limite especial de R$ 251.600,00/ano</li>
      <li><strong>Funcionário:</strong> Pode contratar 1 com salário mínimo ou piso da categoria</li>
      <li><strong>Proibido:</strong> Profissões regulamentadas (médico, advogado, engenheiro etc.)</li>
    </ul>
    <div class="warn-box">⚠️ Faturar entre R$ 81.000 e R$ 97.200 em 2025 → MEI enquadrado como ME no ano seguinte. Acima de R$ 97.200 no mesmo ano → desenquadrado imediatamente.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">MEI tem direito a benefícios do INSS?</div>
      <div class="faq-a">Sim: aposentadoria por idade, auxílio-doença (após 12 meses contribuindo), salário-maternidade, pensão por morte. Atenção: a contribuição de 5% não garante aposentadoria por tempo de contribuição — apenas por idade.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Posso complementar a contribuição INSS do MEI?</div>
      <div class="faq-a">Sim. Pagando mais 15% (total 20% sobre o salário mínimo), o MEI garante aposentadoria por tempo de contribuição e benefício maior no futuro.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O que acontece se não pagar o DAS?</div>
      <div class="faq-a">Multa de 0,33% ao dia (limitada a 20%) + juros Selic. Meses sem pagamento não contam como período de contribuição para fins de benefícios do INSS.</div>
    </div>
  </div>
"""

# ─── 13. calculadora-icms-iss ────────────────────────────────────────────────
EXPLIC["calculadora-icms-iss"] = """
  <div class="explic">
    <h3>🧾 ICMS e ISS — Impostos sobre Mercadorias e Serviços</h3>
    <p>O <strong>ICMS</strong> (estadual) e o <strong>ISS</strong> (municipal) são dois tributos complementares que incidem sobre quase toda atividade econômica no Brasil.</p>
    <h4>📋 Diferenças Fundamentais</h4>
    <table>
      <thead><tr><th>Característica</th><th>ICMS</th><th>ISS</th></tr></thead>
      <tbody>
        <tr><td>Competência</td><td>Estados e DF</td><td>Municípios</td></tr>
        <tr><td>O que tributa</td><td>Mercadorias, comunicação, transporte interestadual</td><td>Prestação de serviços (LC 116/2003)</td></tr>
        <tr><td>Alíquota interna típica</td><td>12–25% (varia por estado/produto)</td><td>2–5% (varia por município)</td></tr>
        <tr><td>Compensação</td><td>Não cumulativo (créditos nas entradas)</td><td>Cumulativo (sem crédito)</td></tr>
      </tbody>
    </table>
    <h4>💰 ICMS por Estado (Alíquotas Gerais 2025)</h4>
    <table>
      <thead><tr><th>Estado</th><th>Alíquota geral</th></tr></thead>
      <tbody>
        <tr><td>São Paulo (SP)</td><td>18%</td></tr>
        <tr><td>Rio de Janeiro (RJ)</td><td>20%</td></tr>
        <tr><td>Minas Gerais (MG)</td><td>18%</td></tr>
        <tr><td>Paraná (PR)</td><td>19,5%</td></tr>
        <tr><td>Rio Grande do Sul (RS)</td><td>17%</td></tr>
      </tbody>
    </table>
    <div class="warn-box">⚠️ O ICMS é calculado "por dentro" — o imposto integra a própria base de cálculo. Isso eleva o imposto efetivo sobre o preço sem impostos: com 18% de alíquota, o ICMS representa 21,95% sobre o preço líquido.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">MEI e Simples Nacional pagam ICMS/ISS?</div>
      <div class="faq-a">Para MEI: ICMS R$ 1,00 e ISS R$ 5,00/mês (fixos). Para Simples Nacional: são recolhidos junto com outros impostos em uma única guia DAS com alíquotas progressivas.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Serviço pode ser tributado por ICMS e ISS ao mesmo tempo?</div>
      <div class="faq-a">Em alguns casos sim — serviços de instalação com fornecimento de materiais podem ter parte tributada pelo ISS (serviço) e parte pelo ICMS (mercadorias). A LC 116/2003 define as regras de cada atividade.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O que é a guerra fiscal do ICMS?</div>
      <div class="faq-a">Estados competem oferecendo alíquotas menores ou benefícios fiscais para atrair empresas. Isso cria distorções — empresas do mesmo setor pagam imposto diferente dependendo do estado onde estão registradas.</div>
    </div>
  </div>
"""

# ─── 14. calculadora-itbi ────────────────────────────────────────────────────
EXPLIC["calculadora-itbi"] = """
  <div class="explic">
    <h3>🏠 O que é o ITBI e Como é Calculado?</h3>
    <p>O <strong>ITBI</strong> (Imposto sobre Transmissão de Bens Imóveis) é um imposto municipal cobrado na compra e venda de imóveis. Deve ser pago pelo <strong>comprador</strong> antes do registro no cartório.</p>
    <h4>💰 ITBI nas Principais Cidades (2025)</h4>
    <table>
      <thead><tr><th>Município</th><th>Alíquota ITBI</th></tr></thead>
      <tbody>
        <tr><td>São Paulo (SP)</td><td>3%</td></tr>
        <tr><td>Rio de Janeiro (RJ)</td><td>3%</td></tr>
        <tr><td>Belo Horizonte (MG)</td><td>3%</td></tr>
        <tr><td>Curitiba (PR)</td><td>2,7%</td></tr>
        <tr><td>Porto Alegre (RS)</td><td>3%</td></tr>
        <tr><td>Fortaleza (CE)</td><td>2%</td></tr>
        <tr><td>Salvador (BA)</td><td>2%</td></tr>
      </tbody>
    </table>
    <div class="info-box">ℹ️ Alíquota varia entre 2% e 4% por município. Consulte sempre a prefeitura local para a alíquota exata e possíveis isenções para primeiro imóvel ou imóveis de baixo valor.</div>
    <h4>📋 Quando o ITBI é Cobrado?</h4>
    <ul>
      <li>Compra e venda de imóvel urbano ou rural</li>
      <li>Dação em pagamento com imóvel</li>
      <li>Permuta de imóveis (sobre a diferença, se houver)</li>
    </ul>
    <div class="warn-box">⚠️ Não confunda ITBI com ITCMD! O ITBI é cobrado em transações onerosas (compra/venda). O ITCMD (estadual) incide sobre doações e heranças — alíquotas e bases diferentes.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">ITBI incide sobre o valor do contrato ou valor venal?</div>
      <div class="faq-a">Pela lei, o ITBI incide sobre o valor de mercado. Muitas prefeituras usam o "valor venal de referência" ou o valor do contrato — o que for maior. O STF firmou que o município não pode cobrar sobre valor superior ao da transação.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Posso parcelar o ITBI?</div>
      <div class="faq-a">Depende do município. Alguns permitem parcelamento em até 12 vezes. Em muitas cidades, o ITBI deve ser pago integralmente antes do registro no cartório.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Primeiro imóvel tem desconto no ITBI?</div>
      <div class="faq-a">Alguns municípios oferecem isenção ou alíquota reduzida para aquisição do primeiro imóvel residencial abaixo de certo valor. Consulte a legislação da sua cidade — a isenção não é nacional.</div>
    </div>
  </div>
"""

# ─── 15. calculadora-yield-imovel ────────────────────────────────────────────
EXPLIC["calculadora-yield-imovel"] = """
  <div class="explic">
    <h3>🏠 Yield de Imóvel — Como Avaliar a Rentabilidade do Aluguel</h3>
    <p>O <strong>yield</strong> é a relação entre o aluguel anual e o valor do imóvel, em percentual. É a métrica básica para comparar se vale mais a pena alugar o imóvel ou investir em renda fixa.</p>
    <h4>📐 Yield Bruto vs Yield Líquido</h4>
    <table>
      <thead><tr><th>Tipo</th><th>Fórmula</th><th>O que inclui</th></tr></thead>
      <tbody>
        <tr><td>Yield Bruto</td><td>(Aluguel anual ÷ Valor do imóvel) × 100</td><td>Apenas aluguel/preço</td></tr>
        <tr><td>Yield Líquido</td><td>(Aluguel − custos) ÷ Valor total gasto</td><td>Descontados IPTU, condomínio, vacância, manutenção, IR</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ No Brasil, yield bruto médio residencial: <strong>4–6% a.a.</strong> O yield líquido fica entre 2,5–4,5% — bem abaixo do Tesouro Selic (~14,75% a.a. em 2025). A análise de yield é fundamental antes de comprar para renda.</div>
    <h4>💸 Custos Que Corroem o Yield</h4>
    <ul>
      <li><strong>IPTU:</strong> 0,5–1,5% do valor venal por ano</li>
      <li><strong>Vacância:</strong> 1–2 meses/ano = perda de 8–17% da renda</li>
      <li><strong>Manutenção:</strong> 0,5–1% do valor do imóvel por ano</li>
      <li><strong>Administração imobiliária:</strong> 8–12% do aluguel</li>
      <li><strong>IR sobre aluguel:</strong> 7,5–27,5% conforme faixa de rendimento</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">FII é melhor que imóvel físico?</div>
      <div class="faq-a">Para a maioria dos investidores PF, FIIs têm vantagens: liquidez diária, diversificação, dividendos isentos de IR e gestão profissional. Yield médio de FIIs de tijolo: 7–10% a.a. O imóvel físico tem vantagem no controle direto e valorização local.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Qual yield mínimo aceitar em um imóvel?</div>
      <div class="faq-a">Regra prática: yield líquido deve superar IPCA + 2–3% de prêmio pela iliquidez. Com IPCA de 5%, o mínimo seria 8% a.a. líquido — difícil de alcançar em residenciais. Imóveis comerciais tendem a ter yields maiores.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Devo incluir a valorização no yield?</div>
      <div class="faq-a">A valorização faz parte do retorno total. Some aluguel líquido + valorização anual para ter o retorno total — e compare com CDI + valorização de outros ativos no mesmo período.</div>
    </div>
  </div>
"""

# ─── 16. calculadora-reforma ─────────────────────────────────────────────────
EXPLIC["calculadora-reforma"] = """
  <div class="explic">
    <h3>🏗️ Como Estimar o Custo de uma Reforma?</h3>
    <p>Planejar o orçamento de uma reforma é fundamental para evitar surpresas. Os custos variam muito conforme a região, os materiais escolhidos e a complexidade da obra.</p>
    <h4>💰 Custo Médio por m² (2025)</h4>
    <table>
      <thead><tr><th>Tipo de Reforma</th><th>Custo estimado (R$/m²)</th></tr></thead>
      <tbody>
        <tr><td>Pintura simples</td><td>R$ 15–35/m²</td></tr>
        <tr><td>Piso (revestimento)</td><td>R$ 80–200/m²</td></tr>
        <tr><td>Banheiro completo</td><td>R$ 800–2.500/m²</td></tr>
        <tr><td>Cozinha (revestimento)</td><td>R$ 500–1.500/m²</td></tr>
        <tr><td>Elétrica (refazer)</td><td>R$ 100–250/m²</td></tr>
        <tr><td>Reforma completa</td><td>R$ 1.200–3.500/m²</td></tr>
      </tbody>
    </table>
    <div class="warn-box">⚠️ Adicione <strong>20–30% de reserva</strong> ao orçamento inicial para imprevistos — descobertas na estrutura, infiltrações e variação de preços de materiais são comuns em reformas.</div>
    <h4>📋 Dicas para Não Estourar o Orçamento</h4>
    <ul>
      <li>Faça o projeto antes de começar — mudanças na obra são sempre mais caras</li>
      <li>Obtenha pelo menos 3 orçamentos de fornecedores diferentes</li>
      <li>Especifique detalhadamente no contrato — metragem, material, prazo, garantia</li>
      <li>Nunca pague tudo adiantado — prefira pagamentos por etapas concluídas</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Reforma aumenta o valor do imóvel?</div>
      <div class="faq-a">Depende do tipo e localização. Cozinha e banheiro reformados têm melhor retorno (60–80% do custo em valorização). Reformas muito específicas raramente se pagam na revenda.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Preciso de alvará para reformar?</div>
      <div class="faq-a">Reformas que não alteram estrutura nem área dispensam alvará. Obras que alteram fachada, estrutura ou área construída podem exigir aprovação na prefeitura.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Devo reformar antes de vender ou vender como está?</div>
      <div class="faq-a">Pequenas melhorias cosméticas (pintura, limpeza) geralmente se pagam. Reformas completas raramente se pagam na revenda — o comprador quer desconto para reformar do seu jeito.</div>
    </div>
  </div>
"""

# ─── 17. calculadora-combustivel ─────────────────────────────────────────────
EXPLIC["calculadora-combustivel"] = """
  <div class="explic">
    <h3>⛽ Como Calcular o Custo Real de Combustível</h3>
    <p>O custo de combustível é um dos maiores gastos variáveis de quem tem carro. Calcular o custo por km e por viagem ajuda a planejar a rota mais econômica e decidir entre combustíveis.</p>
    <h4>💰 Etanol vs Gasolina — Qual é Mais Barato?</h4>
    <p>O etanol vale mais a pena quando custa até <strong>70% do preço da gasolina</strong>.</p>
    <table>
      <thead><tr><th>Situação</th><th>Exemplo</th><th>Decisão</th></tr></thead>
      <tbody>
        <tr><td>Etanol ÷ Gasolina &lt; 0,70</td><td>R$ 3,50 ÷ R$ 5,50 = 0,636</td><td>✅ Use Etanol</td></tr>
        <tr><td>Etanol ÷ Gasolina &gt; 0,70</td><td>R$ 4,10 ÷ R$ 5,50 = 0,745</td><td>✅ Use Gasolina</td></tr>
        <tr><td>Etanol ÷ Gasolina = 0,70</td><td>R$ 3,85 ÷ R$ 5,50 = 0,70</td><td>⚖️ Indiferente</td></tr>
      </tbody>
    </table>
    <h4>📊 Consumo Médio por Tipo de Veículo</h4>
    <ul>
      <li><strong>Carros populares (HB20, Onix, Argo):</strong> 10–13 km/l (cidade) / 13–16 km/l (estrada)</li>
      <li><strong>SUVs compactos:</strong> 8–11 km/l (cidade) / 11–14 km/l (estrada)</li>
      <li><strong>Pickup trucks:</strong> 6–9 km/l (cidade) / 9–12 km/l (estrada)</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Como medir o consumo real do meu carro?</div>
      <div class="faq-a">Encha o tanque, zere o hodômetro, dirija normalmente até ~metade do tanque, reabasteça e veja os litros colocados. Divida os km rodados pelos litros. Faça 3 vezes e tire a média.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Ar condicionado aumenta muito o consumo?</div>
      <div class="faq-a">Sim — o AC aumenta o consumo em 10–20%. Em velocidades baixas (até 60 km/h) em cidade, janelas abertas são mais econômicas do que o AC.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Compensa usar Uber vs dirigir?</div>
      <div class="faq-a">Calcule o custo total do carro (parcela + seguro + IPVA + manutenção + combustível) e divida pelo km rodado. Se for maior que R$ 1,50–2,00/km, usar Uber pode ser mais econômico para quem roda pouco.</div>
    </div>
  </div>
"""

# ─── 18. custo-do-carro ──────────────────────────────────────────────────────
EXPLIC["custo-do-carro"] = """
  <div class="explic">
    <h3>🚗 Custo Real do Carro — Muito Além do Combustível</h3>
    <p>O <strong>custo total de propriedade</strong> de um carro inclui muito mais do que combustível. Depreciação, seguro, IPVA, revisões e financiamento são custos invisíveis que somam muito no longo prazo.</p>
    <h4>💸 Componentes do Custo Real</h4>
    <table>
      <thead><tr><th>Custo</th><th>Tipo</th><th>Estimativa típica</th></tr></thead>
      <tbody>
        <tr><td>Depreciação</td><td>Fixo (maior custo)</td><td>15–25% ao ano (primeiros 3 anos)</td></tr>
        <tr><td>Seguro</td><td>Fixo anual</td><td>2–6% do valor do carro/ano</td></tr>
        <tr><td>IPVA</td><td>Fixo anual</td><td>1–4% do valor FIPE (varia por estado)</td></tr>
        <tr><td>Combustível</td><td>Variável</td><td>Depende do consumo e km rodado</td></tr>
        <tr><td>Manutenção preventiva</td><td>Semi-variável</td><td>R$ 80–200/mês em média</td></tr>
        <tr><td>Financiamento (juros)</td><td>Fixo</td><td>Depende da taxa e prazo</td></tr>
      </tbody>
    </table>
    <div class="warn-box">⚠️ A <strong>depreciação</strong> é o maior custo ignorado. Um carro de R$ 80.000 pode perder R$ 15.000–20.000 no primeiro ano — independentemente de você dirigir ou não.</div>
    <h4>💡 Custo por km — Referências</h4>
    <ul>
      <li><strong>Carro popular seminovo bem conservado:</strong> R$ 0,80–1,20/km</li>
      <li><strong>SUV compacto novo com financiamento:</strong> R$ 1,50–2,50/km</li>
      <li><strong>Carro de luxo:</strong> R$ 3,00–6,00/km</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Carro elétrico é mais barato para manter?</div>
      <div class="faq-a">Em custo variável (energia vs combustível) sim — ~60–70% mais barato por km. Em custo fixo, depende do preço de aquisição e da bateria. O custo total começa a compensar a partir de ~30.000 km/ano para modelos de entrada.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">IPVA varia muito entre estados?</div>
      <div class="faq-a">Sim. Em São Paulo, é 4% do valor FIPE para carros de passeio. No Rio de Janeiro é 4%, no Paraná 3,5%, em Minas Gerais 4%. Estados do Norte têm alíquotas menores (alguns estados como Espírito Santo isentam veículos acima de determinada idade).</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Vale financiar um carro?</div>
      <div class="faq-a">Financiar agrega custo de juros (15–30% a.a. em média) sobre um bem que se deprecia. Avalie: se o dinheiro da entrada investido rende mais que os juros do financiamento, compensa investir e pagar à vista mais tarde. Para quem precisa do carro imediatamente, compare o CET entre bancos.</div>
    </div>
  </div>
"""

# ─── 19. calculadora (científica) ────────────────────────────────────────────
EXPLIC["calculadora"] = """
  <div class="explic">
    <h3>🧮 Como Usar a Calculadora Online — Funções e Dicas</h3>
    <p>Nossa <strong>calculadora online</strong> funciona como uma calculadora científica completa, disponível em qualquer dispositivo sem instalação. Além das operações básicas, oferece funções matemáticas avançadas.</p>
    <h4>📋 Funções Disponíveis</h4>
    <table>
      <thead><tr><th>Função</th><th>Como usar</th><th>Exemplo</th></tr></thead>
      <tbody>
        <tr><td>Potenciação</td><td>x^y ou x**y</td><td>2^10 = 1024</td></tr>
        <tr><td>Raiz quadrada</td><td>√ ou sqrt()</td><td>√144 = 12</td></tr>
        <tr><td>Porcentagem</td><td>número %</td><td>500 × 15% = 75</td></tr>
        <tr><td>Seno/Cosseno/Tangente</td><td>sin(), cos(), tan()</td><td>sin(90°) = 1</td></tr>
        <tr><td>Logaritmo</td><td>log(), ln()</td><td>log(100) = 2</td></tr>
        <tr><td>Fatorial</td><td>n!</td><td>5! = 120</td></tr>
      </tbody>
    </table>
    <h4>💡 Atalhos de Teclado</h4>
    <ul>
      <li><strong>Enter / =</strong> — Calcular resultado</li>
      <li><strong>Backspace / Delete</strong> — Apagar último dígito</li>
      <li><strong>Esc / C</strong> — Limpar a calculadora</li>
      <li><strong>Números e operadores</strong> — Digitação direta pelo teclado</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Como calcular porcentagem de aumento/desconto?</div>
      <div class="faq-a">Para aumento: valor × (1 + percentual/100). Exemplo: R$ 500 com 15% de aumento = 500 × 1,15 = R$ 575. Para desconto: valor × (1 - percentual/100). Exemplo: R$ 500 com 20% de desconto = 500 × 0,80 = R$ 400.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Como calcular quantos % um número é de outro?</div>
      <div class="faq-a">Divida o valor pelo total e multiplique por 100. Exemplo: 75 é quantos % de 300? → (75 ÷ 300) × 100 = 25%.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Os cálculos ficam salvos?</div>
      <div class="faq-a">A calculadora mantém o histórico durante a sessão. Para guardar cálculos importantes, use o botão de copiar ou copie manualmente o resultado antes de sair da página.</div>
    </div>
  </div>
"""

# ─── 20. divisor-de-conta ────────────────────────────────────────────────────
EXPLIC["divisor-de-conta"] = """
  <div class="explic">
    <h3>🍽️ Como Dividir Conta de Restaurante — Com e Sem Gorjeta</h3>
    <p>Dividir a conta em restaurantes parece simples, mas gorjeta, produtos individuais e divisões desiguais podem complicar. Esta calculadora facilita a divisão justa entre qualquer número de pessoas.</p>
    <h4>💡 Gorjeta — O que é Obrigatório?</h4>
    <p>No Brasil, a <strong>gorjeta de 10%</strong> é uma <strong>sugestão</strong>, não obrigatória por lei. Você pode recusar sem problema — o estabelecimento não pode cobrar compulsoriamente. Porém, por ser parte da remuneração dos garçons, muitos optam por pagar.</p>
    <table>
      <thead><tr><th>Situação</th><th>Gorjeta sugerida</th></tr></thead>
      <tbody>
        <tr><td>Serviço excelente</td><td>15–20%</td></tr>
        <tr><td>Serviço bom (padrão)</td><td>10%</td></tr>
        <tr><td>Serviço regular</td><td>5% ou sem gorjeta</td></tr>
        <tr><td>Serviço ruim</td><td>Sem gorjeta</td></tr>
      </tbody>
    </table>
    <div class="info-box">ℹ️ Em São Paulo e algumas outras cidades, a gorjeta cobrada pelos estabelecimentos é <strong>isenta de ICMS e ISS</strong> e vai integralmente para os funcionários — isso estimula o pagamento pelos consumidores.</div>
    <h4>📋 Formas de Dividir</h4>
    <ul>
      <li><strong>Divisão igualitária:</strong> Total ÷ número de pessoas — mais simples, mas nem sempre justo</li>
      <li><strong>Por consumo individual:</strong> Cada um paga o que pediu — mais justo, mais trabalhoso</li>
      <li><strong>Divisão ponderada:</strong> Pesos diferentes por consumo — intermediário</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Posso me recusar a pagar a gorjeta cobrada automaticamente na nota?</div>
      <div class="faq-a">Sim. A gorjeta de 10% não é obrigatória por lei no Brasil, mesmo quando impressa na nota fiscal. Você pode solicitar a retirada do item ao garçom ou ao caixa sem qualquer penalidade.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Como dividir com quem bebeu bebida alcoólica e quem não bebeu?</div>
      <div class="faq-a">A divisão por consumo individual é a mais justa nesse caso. Separe os itens compartilhados (entrada, sobremesa) e divida igualmente, somando os itens individuais para cada pessoa.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Como dividir quando alguém não tem dinheiro exato?</div>
      <div class="faq-a">Use transferências via Pix — é instantâneo e gratuito. Cada pessoa transfere sua parte para quem vai pagar a conta. Evite deixar contas pendentes para outro dia.</div>
    </div>
  </div>
"""

# ─── 21. conversor-unidades ──────────────────────────────────────────────────
EXPLIC["conversor-unidades"] = """
  <div class="explic">
    <h3>🔄 Conversor de Unidades — Peso, Distância, Temperatura e Volume</h3>
    <p>Converter entre unidades de medida é essencial no dia a dia — receitas culinárias, compras internacionais, construção civil, saúde e viagens. Este conversor cobre as conversões mais usadas no Brasil e internacionalmente.</p>
    <h4>📋 Conversões Mais Usadas</h4>
    <table>
      <thead><tr><th>Categoria</th><th>Conversão comum</th><th>Fator</th></tr></thead>
      <tbody>
        <tr><td>Distância</td><td>km ↔ milha</td><td>1 km = 0,621 mi / 1 mi = 1,609 km</td></tr>
        <tr><td>Distância</td><td>m ↔ pé (feet)</td><td>1 m = 3,281 ft / 1 ft = 0,305 m</td></tr>
        <tr><td>Peso</td><td>kg ↔ libra (lb)</td><td>1 kg = 2,205 lb / 1 lb = 0,454 kg</td></tr>
        <tr><td>Temperatura</td><td>°C ↔ °F</td><td>°F = °C × 9/5 + 32</td></tr>
        <tr><td>Volume</td><td>litro ↔ galão (US)</td><td>1 L = 0,264 gal / 1 gal = 3,785 L</td></tr>
        <tr><td>Área</td><td>m² ↔ ft²</td><td>1 m² = 10,764 ft²</td></tr>
      </tbody>
    </table>
    <div class="info-box">ℹ️ O Brasil usa o <strong>Sistema Internacional (SI)</strong> — metro, quilograma, litro, grau Celsius. Países como EUA e Reino Unido usam o sistema imperial — polegadas, libras, galões, Fahrenheit.</div>
    <h4>💡 Referências Rápidas para o Dia a Dia</h4>
    <ul>
      <li><strong>Temperatura corporal normal:</strong> 36,5–37°C (97,7–98,6°F)</li>
      <li><strong>Água ferve:</strong> 100°C = 212°F</li>
      <li><strong>1 polegada (tela, TV):</strong> 2,54 cm</li>
      <li><strong>1 onça (oz, ouro):</strong> 28,35 g | 1 onça troy (metais preciosos): 31,10 g</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Como converter receitas americanas (xícaras/oz) para medidas brasileiras?</div>
      <div class="faq-a">1 cup (xícara americana) = 240 ml. 1 tablespoon (colher de sopa) = 15 ml. 1 teaspoon (colher de chá) = 5 ml. 1 oz (fluido) = 29,57 ml. Use essas equivalências para adaptar qualquer receita americana.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Polegada de tela de TV — como calcular o tamanho real?</div>
      <div class="faq-a">A polegada de tela é medida na diagonal. TV 55" = 55 × 2,54 = 139,7 cm de diagonal. Uma TV 16:9 de 55" tem aproximadamente 121 cm de largura × 68 cm de altura.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Por que o Brasil não usa milhas e galões?</div>
      <div class="faq-a">O Brasil adotou o Sistema Métrico Internacional em 1862 e obrigou o uso exclusivo do SI em 1872 — mais de um século antes da maioria dos países. O sistema métrico é mais lógico (base 10) e é usado por mais de 95% dos países do mundo.</div>
    </div>
  </div>
"""

# ─── 22. calculadora-hora-trabalho ───────────────────────────────────────────
EXPLIC["calculadora-hora-trabalho"] = """
  <div class="explic">
    <h3>⏰ Quanto Vale Sua Hora de Trabalho?</h3>
    <p>Saber o valor real da sua hora de trabalho é fundamental para freelancers, autônomos, profissionais liberais e qualquer pessoa que queira avaliar se um emprego, projeto ou atividade vale o tempo investido.</p>
    <h4>💰 Como Calcular o Valor da Hora</h4>
    <table>
      <thead><tr><th>Perfil</th><th>Fórmula</th><th>Exemplo</th></tr></thead>
      <tbody>
        <tr><td>CLT (salário fixo)</td><td>Salário líquido ÷ horas mensais efetivas</td><td>R$ 4.000 ÷ 176h = R$ 22,73/h</td></tr>
        <tr><td>PJ / Autônomo</td><td>(Faturamento − impostos − custos) ÷ horas faturáveis</td><td>(R$ 8.000 − 30%) ÷ 120h = R$ 46,67/h</td></tr>
        <tr><td>Freelancer</td><td>Custo hora = (Despesas mensais + lucro desejado) ÷ horas disponíveis</td><td>Variável</td></tr>
      </tbody>
    </table>
    <div class="info-box">✅ Para <strong>PJ e autônomos</strong>, inclua no custo: impostos (Simples, ISS, IR), previdência, plano de saúde, férias e 13º autoprovisionados, equipamentos e infra. O custo real é sempre maior que o aparente.</div>
    <h4>💡 Hora de Lazer vs Hora de Trabalho</h4>
    <p>Conhecer o valor da sua hora ajuda a tomar decisões como: contratar um serviço ou fazer você mesmo? Trabalhar mais horas por mais dinheiro ou ter mais tempo livre? Uma limpeza que custa R$ 150 pode valer mais a pena do que 3h do seu tempo (que valem R$ 200).</p>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Como definir o preço do meu serviço como freelancer?</div>
      <div class="faq-a">Calcule: despesas fixas mensais + quanto quer ganhar líquido + impostos = faturamento necessário. Divida pelas horas faturáveis (em geral 60–70% das horas disponíveis — o resto vai para vendas, admin e ócio). O resultado é seu valor mínimo de hora.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Vale a pena ganhar mais em uma vaga que exige mais horas?</div>
      <div class="faq-a">Calcule o valor por hora das duas opções, não apenas o salário total. Uma vaga de R$ 8.000 em 44h/semana = R$ 45,45/h. Uma de R$ 7.000 em 30h/semana = R$ 58,33/h — pode ser mais vantajosa considerando qualidade de vida.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Como o transporte e deslocamento afetam o valor da hora?</div>
      <div class="faq-a">Adicione o tempo de deslocamento às horas trabalhadas. Se você trabalha 8h e gasta 2h no transporte por dia, efetivamente "trabalha" 10h pelo mesmo salário — reduzindo o valor real da sua hora em 20%.</div>
    </div>
  </div>
"""

# ─── 23. calculadora-gravidez ────────────────────────────────────────────────
EXPLIC["calculadora-gravidez"] = """
  <div class="explic">
    <h3>🤰 Como Funciona o Cálculo de Gravidez — DPP e Semanas Gestacionais</h3>
    <p>A <strong>calculadora de gravidez</strong> estima a <strong>data provável do parto (DPP)</strong> e as semanas gestacionais com base na data da última menstruação (DUM). A gravidez humana dura em média <strong>40 semanas</strong> (280 dias) contadas a partir da DUM.</p>
    <h4>📋 Como é Calculada a DPP?</h4>
    <p>O método mais usado é a <strong>Regra de Naegele</strong>: some 280 dias (ou 40 semanas) à data da última menstruação. Outra forma: adicione 9 meses e 7 dias à DUM.</p>
    <table>
      <thead><tr><th>Trimestre</th><th>Semanas</th><th>Desenvolvimento</th></tr></thead>
      <tbody>
        <tr><td>1º Trimestre</td><td>1–13 semanas</td><td>Formação dos órgãos principais, maior risco de aborto</td></tr>
        <tr><td>2º Trimestre</td><td>14–27 semanas</td><td>Crescimento rápido, movimentos fetais, ultrassom morfológico</td></tr>
        <tr><td>3º Trimestre</td><td>28–40 semanas</td><td>Amadurecimento pulmonar, posicionamento para o parto</td></tr>
      </tbody>
    </table>
    <div class="info-box">ℹ️ A DPP é uma <strong>estimativa</strong>. Apenas 5% dos bebês nascem exatamente na data calculada. Partos entre a 37ª e 42ª semana são considerados a termo (normais). Antes de 37 semanas = prematuro; após 42 = pós-maduro.</div>
    <h4>💉 Exames e Consultas por Trimestre</h4>
    <ul>
      <li><strong>1º Trimestre:</strong> Beta-HCG, translucência nucal (10–14 sem.), hemograma, tipagem sanguínea</li>
      <li><strong>2º Trimestre:</strong> Ultrassom morfológico (20–24 sem.), teste de tolerância a glicose</li>
      <li><strong>3º Trimestre:</strong> Ultrassom de crescimento, cardiotocografia, consultas quinzenais/semanais</li>
    </ul>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">A calculadora é tão precisa quanto o médico?</div>
      <div class="faq-a">A calculadora usa a mesma fórmula (Regra de Naegele) que os obstetras. Porém, o ultrassom do primeiro trimestre é mais preciso para datar a gestação, especialmente para ciclos irregulares. Sempre confirme com seu médico.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">E se meu ciclo menstrual não for de 28 dias?</div>
      <div class="faq-a">A Regra de Naegele assume ciclo de 28 dias. Ciclos mais longos significam ovulação mais tardia — a DPP pode ser alguns dias depois. O ultrassom do 1º trimestre ajusta a data com base no tamanho do embrião.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Quando devo ir à primeira consulta de pré-natal?</div>
      <div class="faq-a">O ideal é na 8ª semana ou logo após a confirmação da gravidez. O pré-natal precoce é fundamental para identificar riscos e iniciar suplementação de ácido fólico (reduz risco de malformações do tubo neural).</div>
    </div>
  </div>
"""

# ─── 24. consulta-cnpj ───────────────────────────────────────────────────────
EXPLIC["consulta-cnpj"] = """
  <div class="explic">
    <h3>🔍 O que é o CNPJ e Para que Serve a Consulta?</h3>
    <p>O <strong>CNPJ</strong> (Cadastro Nacional de Pessoas Jurídicas) é o número de registro de empresas e outras entidades junto à <strong>Receita Federal do Brasil</strong>. É o equivalente empresarial do CPF das pessoas físicas.</p>
    <h4>📋 O que a Consulta CNPJ Revela?</h4>
    <ul>
      <li><strong>Razão Social:</strong> Nome oficial da empresa no registro</li>
      <li><strong>Nome Fantasia:</strong> Nome comercial usado pelo público</li>
      <li><strong>Situação Cadastral:</strong> Ativa, Inapta, Suspensa, Baixada ou Nula</li>
      <li><strong>Data de Abertura:</strong> Quando a empresa foi constituída</li>
      <li><strong>Atividade Principal (CNAE):</strong> Ramo de atividade principal</li>
      <li><strong>Endereço:</strong> Localização registrada na Receita Federal</li>
      <li><strong>Porte:</strong> MEI, ME, EPP, Empresa de Grande Porte</li>
      <li><strong>Natureza Jurídica:</strong> Ltda, SA, MEI, Cooperativa, Associação etc.</li>
    </ul>
    <div class="info-box">✅ Antes de fechar qualquer negócio, consulte o CNPJ do fornecedor. Uma empresa com situação "Inapta" ou "Baixada" pode indicar problemas fiscais, impossibilidade de emitir nota fiscal ou risco de golpe.</div>
    <h4>🔢 Como Ler o CNPJ?</h4>
    <p>O CNPJ tem 14 dígitos no formato <strong>XX.XXX.XXX/XXXX-DD</strong>:</p>
    <ul>
      <li>Primeiros 8 dígitos: número base da empresa</li>
      <li>4 dígitos após "/": número do estabelecimento (0001 = matriz)</li>
      <li>2 últimos dígitos: dígitos verificadores</li>
    </ul>
    <div class="warn-box">⚠️ CNPJ com final diferente de /0001 é uma <strong>filial</strong> da empresa. A situação de cada estabelecimento pode ser diferente da matriz — verifique sempre o CNPJ específico com que você vai negociar.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Empresa ativa pode ter restrições mesmo assim?</div>
      <div class="faq-a">Sim. Situação "Ativa" na Receita Federal não significa que a empresa está em dia com todos os tributos. Consulte também o CADIN, Sintegra (ICMS estadual) e certidões negativas para uma análise mais completa.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Como saber se um CNPJ é MEI?</div>
      <div class="faq-a">Na consulta, o campo "Porte" mostrará "MICRO EMPREENDEDOR INDIVIDUAL" e a Natureza Jurídica será "213-5 - Empresário (Individual)". MEIs têm faturamento limitado e características específicas.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Empresa recém aberta já aparece na consulta?</div>
      <div class="faq-a">Sim, geralmente em até 48h após o registro na Receita Federal. O processo de abertura de empresa hoje pode ser feito online e muitas vezes em menos de 24 horas para estruturas simples como MEI e EIRELI.</div>
    </div>
  </div>
"""

# ─── 25. feriados ────────────────────────────────────────────────────────────
EXPLIC["feriados"] = """
  <div class="explic">
    <h3>📅 Feriados Nacionais, Estaduais e Municipais — O que Muda?</h3>
    <p>O Brasil tem três tipos de feriados: <strong>nacionais</strong> (valem em todo o país, definidos por lei federal), <strong>estaduais</strong> (válidos no estado, definidos por lei estadual) e <strong>municipais</strong> (válidos na cidade, definidos pela câmara municipal).</p>
    <h4>📋 Feriados Nacionais Fixos (Lei 9.093/1995)</h4>
    <table>
      <thead><tr><th>Data</th><th>Feriado</th></tr></thead>
      <tbody>
        <tr><td>1° de Janeiro</td><td>Confraternização Universal (Ano Novo)</td></tr>
        <tr><td>21 de Abril</td><td>Tiradentes</td></tr>
        <tr><td>1° de Maio</td><td>Dia do Trabalho</td></tr>
        <tr><td>7 de Setembro</td><td>Independência do Brasil</td></tr>
        <tr><td>12 de Outubro</td><td>Nossa Senhora Aparecida</td></tr>
        <tr><td>2 de Novembro</td><td>Finados</td></tr>
        <tr><td>15 de Novembro</td><td>Proclamação da República</td></tr>
        <tr><td>20 de Novembro</td><td>Consciência Negra (desde 2024)</td></tr>
        <tr><td>25 de Dezembro</td><td>Natal</td></tr>
      </tbody>
    </table>
    <h4>🗓️ Feriados Móveis (Religiosos)</h4>
    <ul>
      <li><strong>Carnaval:</strong> 47 dias antes da Páscoa (segunda e terça)</li>
      <li><strong>Sexta-feira Santa:</strong> 2 dias antes da Páscoa</li>
      <li><strong>Páscoa:</strong> Domingo calculado pela lua cheia</li>
      <li><strong>Corpus Christi:</strong> 60 dias após a Páscoa</li>
    </ul>
    <div class="info-box">ℹ️ Carnaval e Corpus Christi são <strong>pontos facultativos</strong> em âmbito federal — empresas privadas não são obrigadas a conceder folga. Verifique a convenção coletiva da sua categoria.</div>
    <div class="warn-box">⚠️ Trabalhar em feriado nacional sem acordo coletivo dá direito a <strong>hora em dobro</strong> (100% de adicional) ou folga compensatória, conforme a CLT.</div>
    <h4>❓ Perguntas Frequentes</h4>
    <div class="faq-item">
      <div class="faq-q">Empresa pode obrigar funcionário a trabalhar em feriado?</div>
      <div class="faq-a">Sim, desde que haja previsão em convenção coletiva ou acordo individual e o trabalhador receba a compensação devida (pagamento em dobro ou folga). Para comércios, a abertura em feriados depende da legislação municipal.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Feriado estadual ou municipal vale para o setor privado?</div>
      <div class="faq-a">Sim. Feriados estaduais e municipais têm a mesma força que os nacionais para fins trabalhistas — empresas devem conceder folga ou pagar em dobro para trabalhadores da localidade.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">O que é "ponto facultativo"?</div>
      <div class="faq-a">Ponto facultativo é um dia em que o governo federal (ou estadual/municipal) dispensa seus servidores, mas não obriga empresas privadas. Para o setor privado, só tem efeito se previsto em convenção coletiva.</div>
    </div>
  </div>
"""

# ─────────────────────────────────────────────────────────────────────────────
# Função que insere o bloco antes de </main>
# ─────────────────────────────────────────────────────────────────────────────
def inject(slug, html_block):
    path = os.path.join(BASE, slug, "index.html")
    if not os.path.exists(path):
        print(f"  ⚠️  Arquivo não encontrado: {path}")
        return False
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if 'class="explic"' in content:
        print(f"  ⏭️  Já tem .explic: {slug}")
        return False
    # Insere antes do último </main>
    idx = content.rfind("</main>")
    if idx == -1:
        print(f"  ❌  Sem </main>: {slug}")
        return False
    new_content = content[:idx] + html_block + "\n</main>" + content[idx+7:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"  ✅  Injetado: {slug}")
    return True

# ─────────────────────────────────────────────────────────────────────────────
# Execução
# ─────────────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    ok = 0
    for slug, block in EXPLIC.items():
        if inject(slug, block):
            ok += 1
    print(f"\n🎉 Concluído: {ok}/{len(EXPLIC)} páginas atualizadas.")
