    const CATEGORY = {"key":"tatuadores","short":"TATUADORES","label":"Atendimento, agenda e relacionamento para tatuadores","host":"tattoo.toppapps.online","title":"Soluções para atender melhor, organizar a agenda e proteger o próximo passo.","description":"Guias e ferramentas planejadas para tatuadores que querem reduzir ruído no atendimento e conduzir cada conversa com mais clareza.","accent":"#e11d2e","accent_soft":"#fde8ea","deep":"#0a0a0a","hero_asset":"/assets/hero-tatuadores-1.webp","hero_alt":"Tatuador na bancada do estúdio conduzindo uma conversa no celular","slides":[{"title":"A conversa começa antes do orçamento.","copy":"Organize o caminho entre primeira mensagem, contexto e próximo passo sem improviso.","image":"/assets/hero-tatuadores-1.webp","alt":"Destaque editorial 1 de TATUADORES"},{"title":"Uma agenda protegida reduz ruído.","copy":"Reúna informações importantes e deixe combinados mais fáceis de revisar.","image":"/assets/hero-tatuadores-2.webp","alt":"Destaque editorial 2 de TATUADORES"},{"title":"Atendimento também é experiência.","copy":"Escolha uma solução por objetivo e mantenha o foco no trabalho que precisa acontecer.","image":"/assets/hero-tatuadores-3.webp","alt":"Destaque editorial 3 de TATUADORES"}],"collections":[["atendimento","Atender com clareza","Para organizar respostas, contexto e próximos passos."],["agenda","Proteger a agenda","Para reunir combinados e reduzir desencontros antes da sessão."],["relacionamento","Cuidar do relacionamento","Para retomar conversas e manter o contato com mais intenção."]],"products":[{"slug":"whatsapp-que-fecha","title":"WhatsApp que Fecha","subtitle":"Rota de conversa no WhatsApp","description":"Guia com o método ROTA CERTA, 100 mensagens e bônus para briefing, sinal e follow-up no WhatsApp.","objective":"Atendimento","theme":"Conversas comerciais","audience":"Tatuadores que recebem pedidos pelo WhatsApp","format":"Guia digital + aplicação","delivery":"Publicação em preparação","price":null,"status":"planned","priority":1,"collection":"atendimento","tags":["whatsapp","atendimento","orçamento","conversa"],"featured":true,"cover":"/assets/covers/whatsapp-que-fecha.webp"},{"slug":"cliente-sumiu","title":"Cliente Sumiu?","subtitle":"Retomada de conversas","description":"Critérios para retomar uma conversa sem pressão, registrar o contexto e decidir quando seguir ou encerrar.","objective":"Relacionamento","theme":"Follow-up","audience":"Tatuadores que perdem o fio depois do primeiro contato","format":"Guia digital","delivery":"Publicação em preparação","price":null,"status":"planned","priority":2,"collection":"relacionamento","tags":["cliente","follow-up","retomar","conversa"],"featured":true,"cover":"/assets/covers/cliente-sumiu.webp"},{"slug":"agenda-protegida","title":"Agenda Protegida","subtitle":"Organização de combinados","description":"Uma estrutura planejada para reunir informações da sessão, combinados e próximos passos antes de reservar tempo na agenda.","objective":"Agenda","theme":"Combinados e organização","audience":"Tatuadores que querem reduzir desencontros","format":"Guia digital + miniapp","delivery":"Publicação em preparação","price":null,"status":"planned","priority":3,"collection":"agenda","tags":["agenda","sessão","combinados","organização"],"featured":true,"cover":"/assets/covers/agenda-protegida.webp"}],"faqs":[["O hub é uma ferramenta de agendamento?","Não. O hub organiza a descoberta das soluções. Cada página individual informa o estado real da oferta e do próximo passo."],["As soluções garantem mais clientes?","Não há promessa de resultado externo. O foco é organizar atendimento, comunicação e critérios de decisão."],["Quando as ofertas poderão ser compradas?","As ofertas aparecem como planejadas até que bundle, checkout, suporte e QA estejam confirmados no fluxo oficial."]]};
    const SUPPORT_EMAIL = 'suporte@toppapps.online';
    const app = document.getElementById('app');
    const pathParts = location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
    const params = new URLSearchParams(location.search);
    const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
    const money = (value) => value == null ? 'Preço a confirmar' : value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    const findProduct = (slug) => CATEGORY.products.find((product) => product.slug === slug);
    const initials = (title) => title.split(/\s+/).filter(Boolean).slice(0,2).map((part) => part[0]).join('').toUpperCase();
    const statusLabel = (status) => status === 'live' ? 'Em produção · QA pendente' : 'Planejada · não publicada';
    const productHref = (product) => `/p/${product.slug}`;
    function header() {
      return `<header class="site-header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Toppapps, início da loja de ${esc(CATEGORY.short)}"><span class="brand-mark" aria-hidden="true">${esc(CATEGORY.short.slice(0,2))}</span><span>TOPPAPPS <em>· ${esc(CATEGORY.short)}</em></span></a><div class="header-search"><label class="sr-only" for="header-search">Buscar soluções</label><input id="header-search" type="search" placeholder="Buscar soluções" autocomplete="off" list="search-suggestions"></div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button><nav class="main-nav" id="main-nav" aria-label="Navegação principal"><a href="/#catalogo">Soluções</a><a href="/#colecoes">Coleções</a><a href="/#destaques">Destaques editoriais</a><a href="/suporte">Suporte</a></nav></div></header>`;
    }
    function footer() {
      return `<footer class="site-footer wrap"><span>TOPPAPPS · ${esc(CATEGORY.short)} · Loja de soluções</span><span><a href="/suporte">Suporte</a> · <a href="/#catalogo">Ver soluções</a> · ${SUPPORT_EMAIL}</span></footer>`;
    }
    function confidence() {
      return `<section class="confidence" aria-label="Informações de compra e suporte"><div class="wrap confidence-grid"><div class="confidence-item"><b aria-hidden="true">01</b><span>Entrega digital</span></div><div class="confidence-item"><b aria-hidden="true">02</b><span>Acesso após confirmação</span></div><div class="confidence-item"><b aria-hidden="true">03</b><span>Informações da oferta na página oficial</span></div><div class="confidence-item"><b aria-hidden="true">04</b><span>Suporte por canal oficial</span></div></div></section>`;
    }
    function carousel() {
      const slides = CATEGORY.slides;
      return `<div class="hero-visual"><img id="hero-image" class="${(slides[0].image.endsWith('.png') || slides[0].image.endsWith('.webp')) ? 'alpha-asset' : ''}" src="${esc(slides[0].image)}" alt="${esc(slides[0].alt)}" width="900" height="520" fetchpriority="high"><div class="carousel" aria-label="Destaques da categoria"><div class="carousel-caption" aria-live="polite"><strong id="slide-title">${esc(slides[0].title)}</strong><span id="slide-copy">${esc(slides[0].copy)}</span></div><div class="carousel-controls"><button id="slide-prev" type="button" aria-label="Destaque anterior">‹</button><button id="slide-next" type="button" aria-label="Próximo destaque">›</button><div class="carousel-dots" role="tablist" aria-label="Escolher destaque">${slides.map((_, index) => `<button type="button" role="tab" aria-label="Destaque ${index+1}" aria-selected="${index === 0}" class="${index === 0 ? 'active' : ''}" data-slide="${index}"></button>`).join('')}</div></div></div></div>`;
    }
    function hubHero() {
      return `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">LOJA TOPPAPPS · ${esc(CATEGORY.short)}</p><h1>${esc(CATEGORY.title)}</h1><p class="hero-lede">${esc(CATEGORY.description)}</p><div class="hero-actions"><a class="button" href="#catalogo">Explorar soluções</a><a class="button secondary" href="/suporte">Acessar suporte</a></div><p class="hero-note">A loja organiza a escolha. A página de cada solução explica o próximo passo.</p></div>${carousel()}</div></section>`;
    }
    function collectionSection() {
      return `<section class="section" id="colecoes"><div class="wrap"><div class="section-head"><p class="eyebrow">NAVEGAÇÃO POR INTENÇÃO</p><h2>Encontre um ponto de partida para o seu momento.</h2><p class="copy">As coleções agrupam soluções por objetivo real do catálogo e levam você direto ao recorte escolhido.</p></div><div class="collection-row">${CATEGORY.collections.map(([slug,title,description], index) => `<a class="collection-card" href="/categoria/${slug}"><span class="index">0${index+1} · COLEÇÃO</span><h3>${esc(title)}</h3><p>${esc(description)}</p></a>`).join('')}</div></div></section>`;
    }
    function featureCard(product) {
      return `<article class="feature-card"><div class="feature-media" aria-hidden="true">${esc(initials(product.title))}</div><div class="feature-body"><span class="eyebrow">SELEÇÃO EDITORIAL</span><h3>${esc(product.title)}</h3><p>${esc(product.description)}</p><div class="feature-footer"><strong>${product.price == null ? 'Em preparação' : money(product.price)}</strong><a class="button secondary" href="${productHref(product)}">Conhecer</a></div></div></article>`;
    }
    function highlights() {
      const products = CATEGORY.products.filter((product) => product.featured);
      if (!products.length) return '';
      return `<section class="section light" id="destaques"><div class="wrap"><div class="section-head"><p class="eyebrow">DESTAQUES EDITORIAIS</p><h2>Uma seleção para começar sem percorrer o catálogo inteiro.</h2><p class="copy">Esta é uma seleção editorial da categoria. Não representa ranking de vendas ou avaliações.</p></div><div class="feature-grid">${products.map(featureCard).join('')}</div></div></section>`;
    }
    function optionsFrom(field) { return [...new Set(CATEGORY.products.map((product) => product[field]).filter(Boolean))]; }
    function filterPanel() {
      const objectives = optionsFrom('objective'), formats = optionsFrom('format');
      return `<div class="filter-panel" id="filter-panel"><div class="filter-groups"><div class="filter-group"><h3>Objetivo</h3>${objectives.map((value) => `<label class="filter-option"><input type="checkbox" data-filter-field="objective" value="${esc(value)}">${esc(value)}</label>`).join('')}</div><div class="filter-group"><h3>Formato</h3>${formats.map((value) => `<label class="filter-option"><input type="checkbox" data-filter-field="format" value="${esc(value)}">${esc(value)}</label>`).join('')}</div><div class="filter-group"><h3>Estado</h3><label class="filter-option"><input type="checkbox" data-filter-field="status" value="live">Em produção</label><label class="filter-option"><input type="checkbox" data-filter-field="status" value="planned">Em preparação</label></div></div><div class="active-filters" id="active-filters"></div><div class="actions"><button class="button secondary" type="button" id="clear-filters">Limpar filtros</button></div></div>`;
    }
    function catalogCard(product) {
      const live = product.status === 'live';
      return `<article class="product-card" data-product="${esc(product.slug)}"><div class="product-cover"><img class="${(product.cover.endsWith('.png') || product.cover.endsWith('.webp')) ? 'alpha-asset' : ''}" src="${esc(product.cover)}" alt="Capa de ${esc(product.title)}" width="900" height="520" loading="lazy"></div><div class="product-body"><span class="status ${live ? 'live' : 'planned'}">${esc(statusLabel(product.status))}</span><h3>${esc(product.title)}</h3><p class="product-subtitle">${esc(product.subtitle)}</p><p class="product-description">${esc(product.description)}</p><div class="product-meta"><span>${esc(product.format)}</span><span>${esc(product.delivery)}</span></div><div class="product-footer"><div class="product-price">${live ? `<small>Valor informado</small>${money(product.price)}` : `<small>Estado comercial</small>Em preparação`}</div>${live ? `<a class="button" href="${productHref(product)}">Comprar</a>` : `<a class="button secondary" href="${productHref(product)}">Ver detalhes</a>`}</div></div></article>`;
    }
    function catalogSection(initialCollection = '') {
      return `<section class="section catalog-shell" id="catalogo"><div class="wrap"><div class="section-head"><p class="eyebrow">CATÁLOGO DA CATEGORIA</p><h2>Compare soluções e escolha o próximo passo.</h2><p class="copy">Pesquise por nome, tema, objetivo, público ou formato. Os estados e valores exibidos são os registrados para esta categoria.</p></div><div class="catalog-toolbar" role="search"><div class="search-field"><label for="catalog-search">Buscar soluções</label><input id="catalog-search" type="search" placeholder="Nome, tema ou necessidade" autocomplete="off" list="search-suggestions" value="${esc(params.get('q') || '')}"></div><button class="tool-button" type="button" id="filter-toggle" aria-expanded="false" aria-controls="filter-panel">Filtros <span id="filter-count"></span></button><div class="select-field"><label for="sort-select">Ordenar</label><select id="sort-select"><option value="recommended">Recomendadas</option><option value="recent">Mais recentes</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option><option value="title">Nome</option></select></div></div>${filterPanel()}<div class="active-filters" id="toolbar-filters"></div><div class="result-summary"><strong id="result-count">0 soluções</strong><span>Sem ranking inventado: a loja mostra estados reais e seleção editorial.</span></div><div class="catalog-grid" id="catalog-grid"></div><div class="empty-state" id="empty-state"><strong>Nenhuma solução corresponde a esta busca.</strong><span>Tente outro termo ou limpe os filtros. Você também pode explorar uma coleção ou falar com o suporte.</span><div class="actions"><button class="button secondary" type="button" id="empty-clear">Limpar busca e filtros</button><a class="button ghost" href="/suporte">Acessar suporte</a></div></div></div><datalist id="search-suggestions"></datalist></section>`;
    }
    function relatedSection() {
      return `<section class="section dark"><div class="wrap"><div class="section-head"><p class="eyebrow">COMBINAÇÕES POR OBJETIVO</p><h2>Se uma solução não basta, continue por uma coleção relacionada.</h2><p class="copy">As combinações abaixo são caminhos de navegação, não descontos ou bundles de compra. Abra a coleção e compare as opções disponíveis.</p></div><div class="related-grid">${CATEGORY.collections.map(([slug,title,description], index) => `<article class="related-card"><span class="index">0${index+1} · CAMINHO</span><h3>${esc(title)}</h3><p>${esc(description)}</p><a href="/categoria/${slug}">Ver soluções relacionadas</a></article>`).join('')}</div></div></section>`;
    }
    function supportSection() {
      return `<section class="section dark" id="suporte"><div class="wrap support-grid"><div><p class="eyebrow">SUPORTE E CONTATO</p><h2>Ajuda clara para acesso, pagamento e uso.</h2><p class="copy">Se encontrar uma dificuldade, informe a solução, a URL acessada e o dispositivo usado. Não envie senhas ou dados completos de pagamento.</p></div><div class="support-box"><h3>Canal oficial</h3><p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p><div class="support-list"><div><b>01</b><span>Nome da solução e rota acessada.</span></div><div><b>02</b><span>Descrição objetiva do que aconteceu.</span></div><div><b>03</b><span>Orientação após a confirmação da compra.</span></div></div></div></div></section>`;
    }
    function faqSection() {
      return `<section class="section"><div class="wrap"><div class="section-head"><p class="eyebrow">DÚVIDAS REAIS</p><h2>Antes de escolher, confira as respostas.</h2></div><div class="faq-list">${CATEGORY.faqs.map(([question,answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('')}</div></div></section>`;
    }
    function hub(collection = '') {
      document.title = `${CATEGORY.short} | Toppapps`;
      return `${header()}<main id="main-content">${hubHero()}${confidence()}${collectionSection()}${highlights()}${catalogSection(collection)}${relatedSection()}${supportSection()}${faqSection()}</main>${footer()}`;
    }
    function routeHeader(title, eyebrow) { return `${header()}<main id="main-content"><section class="route-hero"><div class="wrap"><p class="eyebrow">${esc(eyebrow)} · ${esc(CATEGORY.short)}</p><h1>${esc(title)}</h1></div></section>`; }
    function salesHeader() {
      return `<style id="sales-header-fit">@media(max-width:480px){.site-header .brand-copy{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)} .header-inner{gap:8px;min-width:0} .header-actions{margin-left:auto;gap:6px;flex-shrink:0} .sales-header-cta{padding:8px 10px;font-size:12px}}</style><header class="site-header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Toppapps, início da loja de ${esc(CATEGORY.short)}"><span class="brand-mark" aria-hidden="true">${esc(CATEGORY.short.slice(0,2))}</span><span class="brand-copy">TOPPAPPS <em>· ${esc(CATEGORY.short)}</em></span></a><nav class="main-nav" id="main-nav" aria-label="Navegação da oferta"><a href="#metodo">Método</a><a href="#conteudo">Conteúdo</a><a href="#oferta">Acesso</a><a href="/suporte">Suporte</a></nav><div class="header-actions"><a class="button sales-header-cta" href="https://pay.kiwify.com.br/zZsQA1d" target="_blank" rel="noreferrer">Quero acessar agora</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button></div></div></header>`;
    }
    function salesPage(product) {
      document.title = `${product.title} | ${CATEGORY.short}`;
      const samples = [
        ['Quanto custa?', 'Oi, [nome]. Consigo te passar um valor justo quando eu tiver tamanho aproximado, local no corpo e uma referência. Pode me mandar isso? Com essas três coisas eu te devolvo o orçamento com o que está incluso.'],
        ['Briefing', 'A referência ajuda, mas ainda falta o local e o tamanho aproximado em centímetros. Sem isso o orçamento fica chute. Me manda essas duas informações que eu te respondo com o valor e o tempo de sessão.'],
        ['Preço', 'Pelo tamanho, local e estilo que você mandou, o valor fica [valor]. Entra desenho, sessão de cerca de [tempo] e os cuidados básicos. O orçamento vale [prazo]. Se fizer sentido, o próximo passo é o sinal de [sinal] para reservar o horário.'],
        ['Sinal', 'Para segurar a data, o estúdio trabalha com sinal de [sinal]. Ele reserva o horário e o tempo de desenho. O restante fica para o dia da sessão. Se quiser seguir, eu te mando a chave e a data que ainda está aberta.'],
        ['Está caro', 'Entendo o susto com o número. Esse valor cobre tempo de desenho, sessão, material e o cuidado que o local pede. Não costumo reduzir o escopo só para caber num preço — mas posso te mostrar um recorte menor, se você quiser começar por uma peça mais simples.'],
        ['Vou pensar', 'Tranquilo pensar. Eu deixo este orçamento válido até [prazo]. Se quiser ajustar tamanho ou local, me chama que eu refaço o valor. Se não for o momento, sem problema — o horário volta para a agenda.'],
        ['Silêncio', 'Oi, [nome]. Deixei o orçamento da [peça] aqui. Ainda faz sentido para você? Se sim, me diz e a gente vê a data. Se mudou de ideia, pode responder só um “agora não” que eu encerro por aqui.'],
        ['Pós-sessão', 'Sessão feita. Qualquer dúvida de cuidado, me chama nesta conversa. Se quiser retorno de acompanhamento, o prazo usual é [prazo]. Quando a pele assentar, se quiser conversar sobre a próxima, é só puxar o fio.']
      ];
      const chapters = [
        ['01','Primeiro contato','Como responder quando o interessado chega sem virar interrogatório.'],
        ['02','Briefing incompleto','O que perguntar — e em que ordem — quando a referência não dá para orçar.'],
        ['03','Quanto custa?','Como não mandar um número solto e ainda assim ser direto.'],
        ['04','Apresentar o preço','Escopo, tempo, o que está incluso e validade do orçamento.'],
        ['05','Sinal e reserva','Pedir o sinal com clareza, sem discurso de medo.'],
        ['06','Está caro','Desconto, comparação e o que responder quando o valor vira o único assunto.'],
        ['07','Vou pensar','Dar espaço sem abandonar a conversa e sem perseguir.'],
        ['08','Silêncio','Quando retornar, o que dizer e quando encerrar com educação.'],
        ['09','Cancelar e reagendar','Proteger o horário, o desenho e o combinado quando o plano muda.'],
        ['10','Depois da sessão','Cuidados, retorno e indicação sem transformar o cliente em vendedor.']
      ];
      const rota = [
        ['R','Reconhecer o momento','Primeiro contato, briefing, preço, sinal, objeção, silêncio ou encerramento.'],
        ['O','Organizar o contexto','Estilo, tamanho, local, cor, referência e prazo entram antes do valor.'],
        ['T','Transmitir o valor com escopo','O preço aparece junto do que está incluso e do que não entra.'],
        ['A','Avançar o próximo passo','Toda mensagem termina em briefing, orçamento, sinal, agenda, retorno ou encerramento.']
      ];
      return `${salesHeader()}<main id="main-content">
<section class="sales-hero"><div class="wrap sales-hero-grid"><div>
<p class="sales-kicker">Atendimento para tatuadores</p>
<h1>A conversa no WhatsApp precisa de uma rota — não de mais um texto salvo.</h1>
<p class="hero-lede">Um caminho claro para organizar contexto, apresentar o valor com escopo, pedir o sinal com respeito e definir o próximo passo — sem parecer automático e sem improvisar no meio da sessão.</p>
<div class="hero-actions"><a class="button" href="https://pay.kiwify.com.br/zZsQA1d" target="_blank" rel="noreferrer">Quero acessar agora</a><a class="button secondary" href="#exemplos">Ver exemplos reais do material</a></div>
<p class="hero-note">Guia em PDF + 100 mensagens + 3 bônus · R$ 27,90 · garantia de 7 dias</p>
</div><img class="sales-media" src="/product/hero.webp?v=rosto-2" alt="Mãos tatuadas conduzindo uma conversa no celular, sobre a bancada do estúdio." width="1792" height="1008"></div></section>
${confidence()}
<section class="section" id="problema"><div class="wrap deliver-grid"><div>
<p class="eyebrow">O ponto em que a conversa trava</p>
<h2>O interessado pergunta o preço. Você está tatuando. A conversa esfria.</h2>
<p class="copy">Não é falta de talento. É falta de um caminho para cada momento: a referência incompleta, o número solto, o sinal sem explicação, o “vou pensar” que some.</p>
<div class="pain-list">
<article class="pain-item"><h3>O preço sai sem contexto</h3><p>A pessoa pergunta “quanto é?”. Você responde um número. Ela compara com o mais barato e some.</p></article>
<article class="pain-item"><h3>A referência chega incompleta</h3><p>Falta tamanho, local, estilo, cor ou prazo. Você pergunta tudo de novo e a conversa esfria.</p></article>
<article class="pain-item"><h3>O sinal constrange</h3><p>Reservar horário sem combinado deixa a agenda exposta. Pedir sinal no improviso parece desculpa — ou agressão.</p></article>
<article class="pain-item"><h3>O follow-up vira silêncio</h3><p>A pessoa diz que vai pensar, visualiza e some. Você não sabe se retorna ou se encerra.</p></article>
</div></div>
<img class="sales-media tall" src="/product/pain.webp?v=rosto-2" alt="Celular com mensagens acumuladas sobre a bandeja do estúdio." width="1792" height="1008">
</div></section>
<section class="section dark" id="metodo"><div class="wrap">
<p class="eyebrow">O método</p>
<h2>ROTA CERTA: um caminho, não um script mágico.</h2>
<p class="copy">O problema não é “não ter uma frase boa”. É não ter um caminho para cada momento comercial.</p>
<div class="rota-grid">${rota.map(([l,t,c]) => `<article class="rota-card"><span class="rota-letter">${l}</span><h3>${esc(t)}</h3><p>${esc(c)}</p></article>`).join('')}</div>
<div class="certa-row">
<article class="rota-card"><h3>Clara</h3><p>A pessoa entende o combinado sem reler três vezes.</p></article>
<article class="rota-card"><h3>Específica</h3><p>Fala de um caso, não de um cardápio genérico.</p></article>
<article class="rota-card"><h3>Respeitosa</h3><p>Não pressiona, não implora, não desvaloriza o trabalho.</p></article>
<article class="rota-card"><h3>Temporal</h3><p>Tem prazo, data de retorno ou janela de reserva.</p></article>
<article class="rota-card"><h3>Acionável</h3><p>Diz o que acontece agora — e o que acontece se não houver resposta.</p></article>
</div></div></section>
<section class="section light" id="conteudo"><div class="wrap">
<p class="eyebrow">Os 10 momentos</p>
<h2>Cem mensagens, organizadas pela situação.</h2>
<p class="copy">Cada bloco mostra quando usar, o texto adaptável, o motivo da frase e o próximo passo.</p>
<div class="chapter-grid">${chapters.map(([n,t,c]) => `<article class="chapter-row"><b>${n}</b><div><h3>${esc(t)}</h3><p>${esc(c)}</p></div></article>`).join('')}</div>
</div></section>
<section class="section" id="exemplos"><div class="wrap">
<p class="eyebrow">Demonstração do material</p>
<h2>Assim é uma mensagem do guia.</h2>
<p class="copy">Oito trechos reais do banco. Os colchetes são para você preencher. Isto não é depoimento de cliente — é o próprio material, à vista.</p>
<div class="msg-grid">${samples.map(([s,t]) => `<article class="msg-card"><span class="eyebrow">${esc(s)}</span><p>${esc(t)}</p></article>`).join('')}</div>
</div></section>
<section class="section light"><div class="wrap deliver-grid"><div>
<p class="eyebrow">O que você recebe</p>
<h2>Um guia para ler e um banco para usar no dia seguinte.</h2>
<div class="deliver-list">
<article class="pain-item"><h3>Guia WhatsApp que Fecha</h3><p>PDF com o método ROTA CERTA, os 10 momentos, checklists e orientação de uso.</p></article>
<article class="pain-item"><h3>100 mensagens adaptáveis</h3><p>Organizadas por situação, com quando usar, por que a frase existe e qual é o próximo passo.</p></article>
<article class="pain-item"><h3>Bônus: briefing, sinal e follow-up</h3><p>Checklist de briefing, modelo de política de sinal e roteiro D+1, D+3 e D+7.</p></article>
</div></div>
<div>
<img class="sales-media" src="/product/mockup.webp?v=rosto-2" alt="Guia impresso WhatsApp que Fecha ao lado de um celular." width="1600" height="1200">
<img class="sales-media" style="margin-top:14px;height:220px" src="/product/notebook.webp?v=rosto-2" alt="Caderno aberto com checklist de briefing." width="1728" height="1152">
</div></div></section>
<section class="section"><div class="wrap who-grid">
<article class="who-card"><p class="eyebrow">Para quem é</p><h2>Se você atende orçamento pelo WhatsApp.</h2><ul><li>Tatuadores que recebem pedido pelo WhatsApp ou Instagram.</li><li>Quem trabalha sozinho e responde entre uma sessão e outra.</li><li>Quem já tem respostas salvas, mas elas não dizem o próximo passo.</li></ul></article>
<article class="who-card dark"><p class="eyebrow">Para quem não é</p><h2>Se você quer resultado automático.</h2><ul><li>Quem busca um script que fecha todo mundo.</li><li>Quem espera garantia de agenda cheia ou faturamento.</li><li>Quem precisa de um curso de tatuagem — este material não ensina a tatuar.</li></ul></article>
</div></section>
<section class="section light" id="oferta"><div class="wrap offer-grid">
<img class="sales-media" src="/product/cover.webp?v=rosto-2" alt="Capa do guia WhatsApp que Fecha." width="900" height="520">
<aside class="offer-box">
<p class="eyebrow">Acesso</p>
<h2>${esc(product.title)}</h2>
<p>Rota de conversa no WhatsApp para tatuadores</p>
<p class="price">R$&nbsp;27,90</p>
<p>Pagamento único · acesso digital · garantia de 7 dias</p>
<ul>
<li>Guia em PDF com o método ROTA CERTA</li>
<li>100 mensagens por situação</li>
<li>Checklist, política de sinal e follow-up</li>
</ul>
<div class="actions" style="margin-top:22px">
<a class="button" href="https://pay.kiwify.com.br/zZsQA1d" target="_blank" rel="noreferrer">Quero acessar agora</a>
</div>
<p class="note-soft">O botão abre o checkout oficial da Kiwify. Confira nome, preço e garantia antes de pagar.</p>
<p class="note-ok">Garantia de 7 dias pelo CDC. Se o material não servir, escreva para ${SUPPORT_EMAIL}.</p>
</aside>
</div></section>
<section class="section"><div class="wrap">
<p class="eyebrow">Perguntas</p>
<h2>Antes de decidir, leia isto.</h2>
<div class="faq-list">
<details><summary>O que eu recebo depois do pagamento?</summary><p>O guia em PDF, o banco de 100 mensagens e os três bônus. O acesso é digital, enviado após a confirmação no checkout oficial.</p></details>
<details><summary>Preciso de aplicativo?</summary><p>Não. Esta oferta é o guia e as mensagens. Qualquer área interativa só entra depois, se fizer sentido para quem já comprou.</p></details>
<details><summary>Não vai parecer mensagem de robô?</summary><p>O material pede adaptação. Cada texto tem espaço para nome, tom e o que é verdade no seu estúdio.</p></details>
<details><summary>Isso aumenta minhas vendas?</summary><p>Não há promessa de resultado externo. O material entrega uma conversa com próximo passo definido.</p></details>
<details><summary>E a garantia?</summary><p>7 dias, conforme o Código de Defesa do Consumidor. Escreva para ${SUPPORT_EMAIL} dentro desse prazo.</p></details>
<details><summary>Onde peço ajuda?</summary><p>Suporte em ${SUPPORT_EMAIL}. Informe o nome da solução, a página acessada e o que aconteceu.</p></details>
</div></div></section>
${supportSection()}
</main>${footer()}`;
    }

    function productPage(product) {
      const live = product.status === 'live';
      document.title = `${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(product.title, 'SOLUÇÃO INDIVIDUAL')}<section class="section"><div class="wrap detail-grid"><article class="detail-card"><span class="status ${live ? 'live' : 'planned'}">${esc(statusLabel(product.status))}</span><h2>${esc(product.subtitle)}</h2><p>${esc(product.description)}</p><h3>O que esta solução organiza</h3><ul><li>Objetivo: ${esc(product.objective)}</li><li>Tema: ${esc(product.theme)}</li><li>Formato: ${esc(product.format)}</li><li>Entrega: ${esc(product.delivery)}</li></ul></article><aside class="detail-card"><h2>${live ? money(product.price) : 'Em preparação'}</h2><div class="route-note"><strong>${live ? 'Próximo passo' : 'Estado comercial'}</strong><br>${live ? 'A página explica o escopo antes de encaminhar para qualquer confirmação de compra.' : 'Esta oferta ainda não possui CTA de compra ou preço publicado.'}</div><div class="actions">${live ? `<a class="button" href="/app/${product.slug}">Conhecer a área da solução</a>` : `<span class="button disabled" aria-disabled="true">Compra não publicada</span>`}<a class="button secondary" href="/">Voltar ao catálogo</a></div></aside></div></section><section class="section light"><div class="wrap"><div class="section-head"><p class="eyebrow">TRANSPARÊNCIA</p><h2>A oferta separa descoberta, decisão e acesso.</h2><p class="copy">O catálogo ajuda a escolher. Esta página apresenta a solução. Condições de pagamento, garantia e acesso somente devem aparecer quando confirmadas no fluxo oficial.</p></div></div></section>${supportSection()}${footer()}</main>`;
    }
    function appPage(product) {
      const live = product.status === 'live';
      document.title = `Área de ${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(`Área de ${product.title}`, 'ÁREA DA SOLUÇÃO')}<section class="section"><div class="wrap"><div class="center-card"><p class="eyebrow">${live ? 'ACESSO DA SOLUÇÃO' : 'ROTA PLANEJADA'}</p><h1>${live ? 'Seu próximo passo fica nesta área.' : 'Esta área ainda não foi publicada.'}</h1><p>${live ? 'O acesso funcional e as instruções da oferta devem ser liberados somente após a confirmação no fluxo oficial.' : 'A rota faz parte do contrato da oferta, mas permanece indisponível enquanto bundle, suporte e QA não estiverem confirmados.'}</p><div class="actions">${live ? `<a class="button secondary" href="/obrigado/${product.slug}">Ver instruções de acesso</a>` : ''}<a class="button secondary" href="/p/${product.slug}">Voltar para a solução</a></div></div></div></section>${supportSection()}${footer()}</main>`;
    }
    function thanksPage(product) {
      const live = product.status === 'live';
      document.title = `Acesso a ${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(`Acesso a ${product.title}`, 'ACESSO E PRÓXIMO PASSO')}<section class="center-route"><div class="wrap"><div class="center-card"><p class="eyebrow">${live ? 'INSTRUÇÕES DE ACESSO' : 'ROTA PLANEJADA'}</p><h1>${live ? 'As instruções aparecem após a confirmação.' : 'Esta página ainda não está publicada.'}</h1><p>${live ? 'Não há confirmação de compra nesta página. O acesso deve ser enviado pelo fluxo oficial da oferta depois que as condições forem aceitas.' : 'A página de obrigado faz parte do contrato, mas permanece planejada até a publicação completa da oferta.'}</p><div class="actions"><a class="button secondary" href="/">Voltar ao catálogo</a><a class="button ghost" href="/suporte">Acessar suporte</a></div></div></div></section>${footer()}</main>`;
    }
    function supportPage() {
      document.title = `Suporte | ${CATEGORY.short}`;
      return `${routeHeader('Ajuda para escolher, acessar e usar.', 'CENTRAL DE SUPORTE')}<section class="section"><div class="wrap detail-grid"><article class="detail-card"><h2>Antes de entrar em contato</h2><ul><li>Nome da solução e URL acessada.</li><li>Dispositivo e navegador usados.</li><li>Mensagem ou comportamento observado.</li><li>Se a confirmação de compra já aconteceu.</li></ul></article><article class="detail-card"><h2>Canal oficial</h2><p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p><p>Não envie senhas, tokens ou dados completos de cartão. O suporte orienta acesso, pagamento, download e uso conforme o estado real da oferta.</p></article></div></section>${faqSection()}${footer()}</main>`;
    }
    function notFound() {
      document.title = `Página não encontrada | ${CATEGORY.short}`;
      return `${routeHeader('Este caminho não faz parte desta loja.', '404 · ROTA NÃO ENCONTRADA')}<section class="center-route"><div class="wrap"><div class="center-card"><p>Verifique a URL ou volte para o catálogo desta categoria. Nenhuma rota de outra loja é usada como fallback.</p><div class="actions"><a class="button" href="/">Voltar ao catálogo</a><a class="button secondary" href="/suporte">Acessar suporte</a></div></div></div></section>${footer()}</main>`;
    }
    function mount() {
      let output;
      if (pathParts.length === 0) output = hub();
      else if (pathParts[0] === 'categoria' && pathParts[1] && CATEGORY.collections.some(([slug]) => slug === pathParts[1])) output = hub(pathParts[1]);
      else if (pathParts[0] === 'p' && pathParts[1] && findProduct(pathParts[1])) { const _p = findProduct(pathParts[1]); output = _p.slug === 'whatsapp-que-fecha' ? salesPage(_p) : productPage(_p); }
      else if (pathParts[0] === 'app' && pathParts[1] && findProduct(pathParts[1])) output = appPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'obrigado' && pathParts[1] && findProduct(pathParts[1])) output = thanksPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'suporte') output = supportPage();
      else output = notFound();
      app.innerHTML = output;
      bindCommon();
      if (pathParts.length === 0 || pathParts[0] === 'categoria') bindHub();
    }
    function bindCommon() {
      const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.main-nav');
      menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
      document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); }));
      const headerSearch = document.getElementById('header-search');
      headerSearch?.addEventListener('keydown', (event) => { if (event.key === 'Enter' && headerSearch.value.trim()) location.href = `/?q=${encodeURIComponent(headerSearch.value.trim())}#catalogo`; });
      const datalist = document.getElementById('search-suggestions');
      if (datalist) datalist.innerHTML = CATEGORY.products.flatMap((product) => [product.title, product.objective, product.theme, ...product.tags]).map((value) => `<option value="${esc(value)}"></option>`).join('');
    }
    function bindCarousel() {
      let index = 0, timer;
      const title = document.getElementById('slide-title'), copy = document.getElementById('slide-copy'), dots = [...document.querySelectorAll('[data-slide]')];
      const render = (next) => { index = (next + CATEGORY.slides.length) % CATEGORY.slides.length; const slide = CATEGORY.slides[index]; title.textContent = slide.title; copy.textContent = slide.copy; const image = document.getElementById('hero-image'); if (image) { image.src = slide.image; image.alt = slide.alt; } dots.forEach((dot, dotIndex) => { dot.classList.toggle('active', dotIndex === index); dot.setAttribute('aria-selected', String(dotIndex === index)); }); };
      const start = () => { clearInterval(timer); timer = setInterval(() => render(index + 1), 6500); };
      document.getElementById('slide-prev')?.addEventListener('click', () => { render(index - 1); start(); });
      document.getElementById('slide-next')?.addEventListener('click', () => { render(index + 1); start(); });
      dots.forEach((dot) => dot.addEventListener('click', () => { render(Number(dot.dataset.slide)); start(); }));
      const visual = document.querySelector('.hero-visual'); visual?.addEventListener('mouseenter', () => clearInterval(timer)); visual?.addEventListener('mouseleave', start); visual?.addEventListener('focusin', () => clearInterval(timer)); visual?.addEventListener('focusout', start); start();
    }
    function syncQuery(next) { const query = new URLSearchParams(next); const queryString = query.toString(); history.replaceState(null, '', `${location.pathname}${queryString ? `?${queryString}` : ''}#catalogo`); }
    function bindHub() {
      bindCarousel();
      const grid = document.getElementById('catalog-grid'), empty = document.getElementById('empty-state'), search = document.getElementById('catalog-search'), sort = document.getElementById('sort-select'), toggle = document.getElementById('filter-toggle'), panel = document.getElementById('filter-panel'), count = document.getElementById('result-count'), filterCount = document.getElementById('filter-count'), active = document.getElementById('toolbar-filters'), panelActive = document.getElementById('active-filters');
      if (!grid || !search || !sort) return;
      const selected = { objective: new Set(), format: new Set(), status: new Set() };
      const initialCollection = pathParts[0] === 'categoria' ? pathParts[1] : params.get('collection') || '';
      const state = { q: params.get('q') || '', collection: initialCollection, sort: params.get('sort') || 'recommended' };
      search.value = state.q; sort.value = state.sort;
      if (state.collection) syncQuery({ q: state.q, collection: state.collection, sort: state.sort });
      function matches(product) {
        const text = [product.title, product.subtitle, product.description, product.objective, product.theme, product.audience, product.format, ...product.tags].join(' ').toLowerCase();
        const queryOk = !state.q || text.includes(state.q.toLowerCase());
        const collectionOk = !state.collection || product.collection === state.collection;
        const filtersOk = Object.entries(selected).every(([field, values]) => !values.size || values.has(String(product[field])));
        return queryOk && collectionOk && filtersOk;
      }
      function render() {
        const filtered = CATEGORY.products.filter(matches).sort((a,b) => { if (state.sort === 'price-asc') return (a.price ?? 999999) - (b.price ?? 999999); if (state.sort === 'price-desc') return (b.price ?? -1) - (a.price ?? -1); if (state.sort === 'title') return a.title.localeCompare(b.title,'pt-BR'); if (state.sort === 'recent') return b.priority - a.priority; return a.priority - b.priority; });
        grid.innerHTML = filtered.map(catalogCard).join(''); count.textContent = `${filtered.length} ${filtered.length === 1 ? 'solução' : 'soluções'}`; empty.classList.toggle('show', filtered.length === 0); const chips = []; if (state.collection) { const collection = CATEGORY.collections.find(([slug]) => slug === state.collection); if (collection) chips.push(['collection',state.collection,collection[1]]); } Object.entries(selected).forEach(([field, values]) => values.forEach((value) => chips.push([field,value,value]))); const chipMarkup = chips.map(([field,value,label]) => `<span class="filter-chip">${esc(label)} <button type="button" aria-label="Remover filtro ${esc(label)}" data-remove-field="${esc(field)}" data-remove-value="${esc(value)}">×</button></span>`).join(''); active.innerHTML = chipMarkup; panelActive.innerHTML = chipMarkup; filterCount.textContent = chips.length ? `(${chips.length})` : ''; document.querySelectorAll('[data-remove-field]').forEach((button) => button.addEventListener('click', () => { const field = button.dataset.removeField, value = button.dataset.removeValue; if (field === 'collection') state.collection = ''; else selected[field]?.delete(value); syncQuery({q: state.q, collection: state.collection, sort: state.sort}); render(); })); syncQuery({ q: state.q, collection: state.collection, sort: state.sort }); }
      document.querySelectorAll('[data-filter-field]').forEach((input) => input.addEventListener('change', () => { if (input.checked) selected[input.dataset.filterField].add(input.value); else selected[input.dataset.filterField].delete(input.value); render(); }));
      search.addEventListener('input', () => { state.q = search.value.trim(); render(); }); sort.addEventListener('change', () => { state.sort = sort.value; render(); }); toggle.addEventListener('click', () => { const open = panel.classList.toggle('open'); toggle.classList.toggle('active',open); toggle.setAttribute('aria-expanded',String(open)); }); document.getElementById('clear-filters')?.addEventListener('click', () => { Object.values(selected).forEach((values) => values.clear()); state.collection = ''; state.q = ''; search.value = ''; render(); }); document.getElementById('empty-clear')?.addEventListener('click', () => { Object.values(selected).forEach((values) => values.clear()); state.collection = ''; state.q = ''; search.value = ''; render(); }); render();
    }
    mount();
