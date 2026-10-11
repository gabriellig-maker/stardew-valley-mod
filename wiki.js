/* Lógica de navegação, páginas e pesquisa. */
'use strict';
let database=structuredClone(window.WIKI_DADOS);
const sprites = {...window.WIKI_IMAGENS};
let categories=database.categories.map(([slug,label,description,icon,group])=>({slug,label,description,icon,group}));
let pages=database.pages.map(page=>({...page,spriteName:(page.sprite||'').split('/').pop().replace('.png','')}));
let byId=new Map(pages.map(p=>[p.id,p]));
let byTitle=new Map();
const norm=t=>(t||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function reindex(){
  categories=database.categories.map(([slug,label,description,icon,group])=>({slug,label,description,icon,group}));
  pages=database.pages.map(p=>({...p,spriteName:p.spriteName||(p.sprite||'').split('/').pop().replace('.png','')||'book'}));
  byId=new Map(pages.map(p=>[p.id,p]));byTitle=new Map();
  for(const p of pages){byTitle.set(norm(p.title),p);for(const alias of p.aliases||[])byTitle.set(norm(alias),p)}
  Object.assign(sprites,database.images||{});
} reindex();
const esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const img=(name='book',size='normal',alt='')=>`<img class="pixel-sprite sprite-${size}" src="${esc(sprites[name]||sprites.book)}" alt="${esc(alt)}" loading="lazy">`;
const articleHref=p=>`#/artigo/${encodeURIComponent(p.id)}`;
const categoryHref=c=>`#/categoria/${encodeURIComponent(c)}`;
const catName=slug=>categories.find(c=>c.slug===slug)?.label||slug;
const breadcrumb=(title,sub,crumb='')=>`<div class="breadcrumb"><a href="#/wiki">Wiki</a>${crumb?' <span>›</span> '+crumb:''}</div><div class="article-titlebar"><h1>${esc(title)}</h1>${sub?`<span class="subtitle">${esc(sub)}</span>`:''}</div>`;
const badge=(p)=>p&&p.demo===false?'<span class="personal-label">DO SEU MOD</span>':'<span class="demo-label">EXEMPLO FICTÍCIO</span>';
function buildSidebar(){
  let groups=[...new Set(categories.map(c=>c.group))];
  const item=(text,link,art)=>`<a class="side-link" href="${link}">${img(art,'tiny')} ${esc(text)}</a>`;
  const html=`<div class="side-top">${img('star','mini')} <span>Explorar a wiki</span></div>
  <div class="side-section">${item('Página inicial','#/wiki','house')}${item('Índice A–Z','#/indice','book')}${item('Pesquisa avançada','#/busca','search')}</div>
  ${groups.map(group=>`<div class="side-section"><div class="side-heading">${esc(group)}</div>${categories.filter(c=>c.group===group).map(c=>item(c.label,categoryHref(c.slug),c.icon)).join('')}</div>`).join('')}
  <div class="side-section"><div class="side-heading">Sobre o projeto</div>${item('Créditos','#/sobre-preview','star')}</div>
  <div class="side-bottom">✦ Sua wiki, do seu jeito ✦</div>`;
  document.getElementById('wiki-sidebar').innerHTML=html;
}
function home(){
  const featured=['personagens','itens','cultivos','peixes','locais','missoes','receitas','eventos'].map(id=>categories.find(c=>c.slug===id));
  const recommended=['npc-lia','item-cristal','cultivo-flor','local-bosque'].map(id=>byId.get(id)).filter(Boolean);if(!recommended.length)recommended.push(...pages.slice(0,4));
  return `<div class="home-banner"><div class="banner-deco deco-left">${img('tree','large')}</div><div class="home-banner-inner"><span class="eyebrow">BEM-VINDO(A) AO VALE</span><h1>${esc(database.settings.title)} <span>Wiki</span></h1><p>${esc(database.settings.subtitle)}</p><div class="hero-count"><span>${pages.length} artigos</span><span>•</span><span>Versão ${esc(database.settings.version)}</span></div></div><div class="banner-deco deco-right">${img('house','large')}</div></div>
  <div class="welcome-note"><div class="notice-icon">${img('leaf')}</div><div><strong>${esc(database.settings.introTitle)}</strong><p>${esc(database.settings.intro)}</p></div></div>
  <div class="section-line"><h2>Explore o mundo</h2><span>Escolha por onde começar</span></div>
  <div class="category-grid">${featured.map(c=>`<a href="${categoryHref(c.slug)}" class="category-card">${img(c.icon)}<span>${esc(c.label)}</span><small>Ver categoria →</small></a>`).join('')}</div>
  <div class="home-columns"><section><div class="section-line"><h2>Descubra na wiki</h2><span>Artigos em destaque</span></div><div class="feature-list">${recommended.map(p=>`<a class="feature-row" href="${articleHref(p)}">${img(p.spriteName)}<span><strong>${esc(p.title)}</strong><small>${esc(p.description)}</small></span><b aria-hidden="true">›</b></a>`).join('')}</div></section><section><div class="section-line"><h2>Comece por aqui</h2></div><div class="guide-card"><span class="guide-eyebrow">GUIA DO VIAJANTE</span>${img('scroll','xl')}<h3>Novidades no vale?</h3><p>Conheça os personagens, veja itens e descubra os recursos que sua wiki poderá apresentar.</p><a class="wood-button" href="#/sobre-preview">Conhecer a prévia <span>→</span></a></div></section></div>
  <div class="section-line"><h2>Artigos recentes</h2><a href="#/indice">Ver todas as páginas →</a></div><div class="updates-list">${pages.slice(0,6).map(p=>`<a href="${articleHref(p)}">${img(p.spriteName,'tiny')}<span>${esc(p.title)}</span><small>${esc(catName(p.type))}</small></a>`).join('')}</div>
  <div class="notice-help"><strong>Um mundo para descobrir.</strong> Explore os artigos, consulte as categorias e acompanhe as novidades publicadas nesta wiki.</div>`;
}
function categoryPage(id){
  const c=categories.find(x=>x.slug===id);
  if(!c)return missing();
  const records=pages.filter(p=>p.type===id).sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
  return `${breadcrumb(c.label,c.description,esc(c.label))}<div class="category-intro">${img(c.icon,'xl')}<p>${esc(c.description)}<small>${records.length} artigo(s) nesta categoria.</small></p></div>
  ${records.length?`<div class="article-index">${records.map(p=>`<a href="${articleHref(p)}">${img(p.spriteName)}<span><strong>${esc(p.title)}</strong><small>${esc(p.description)}</small></span><span class="chevron">›</span></a>`).join('')}</div>`:`<div class="empty-state">Esta categoria ainda não possui artigos. Experimente visitar <a href="#/categoria/itens">Itens</a> ou <a href="#/categoria/personagens">Personagens</a>.</div>`}
  <p class="page-bottom-note">Voltar ao <a href="#/indice">índice completo</a> ou à <a href="#/wiki">página inicial</a>.</p>`;
}
function indexPage(){
  const ordered=pages.slice().sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
  const groups={};for(const p of ordered){const letter=norm(p.title).charAt(0).toUpperCase()||'#';(groups[letter]??=[]).push(p)}
  return `${breadcrumb('Índice A–Z','Todos os artigos do projeto, organizados em ordem alfabética.')}<div class="alphabet">${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l=>`<a href="#" data-jump="letra-${l}">${l}</a>`).join('')}</div>
  ${Object.entries(groups).map(([letter,ps])=>`<section class="list-section" id="letra-${esc(letter)}"><h2>${esc(letter)}</h2><div class="compact-index">${ps.map(p=>`<a href="${articleHref(p)}">${img(p.spriteName,'tiny')} ${esc(p.title)}</a>`).join('')}</div></section>`).join('')}`;
}
function mdInline(text){
  let s=esc(text);
  s=s.replace(/\[\[([^\]]+)\]\]/g,(_,name)=>{const p=byTitle.get(norm(name));return p?`<a href="${articleHref(p)}">${esc(name)}</a>`:`<span class="broken-link" title="Ainda não cadastrado">${esc(name)}</span>`});
  s=s.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/(?<!\*)\*([^*]+)\*/g,'<em>$1</em>');
  return s;
}
function slug(text){return norm(text).replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-')}
function renderMd(md){
  const lines=String(md||'').split(/\r?\n/),out=[];let i=0,para=[],lis=[],type='';
  function flushP(){if(para.length){out.push(`<p>${mdInline(para.join(' '))}</p>`);para=[]}}
  function flushL(){if(lis.length){out.push(`<${type}>${lis.map(a=>`<li>${mdInline(a)}</li>`).join('')}</${type}>`);lis=[];type=''}}
  while(i<lines.length){const line=lines[i].trim();if(!line){flushP();flushL();i++;continue}
    if(/^\|.+\|$/.test(line)&&/^\|[\s\-|:]+\|$/.test((lines[i+1]||'').trim())){
      flushP();flushL();const cells=l=>l.replace(/^\||\|$/g,'').split('|').map(c=>c.trim());const heads=cells(line);i+=2;const rows=[];
      while(i<lines.length&&/^\|.+\|$/.test(lines[i].trim())){rows.push(cells(lines[i]));i++}
      out.push(`<div class="table-scroll"><table class="wiki-table"><thead><tr>${heads.map(c=>`<th>${mdInline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${mdInline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);continue;
    }
    const h=line.match(/^(#{2,4})\s+(.+)$/);if(h){flushP();flushL();const level=h[1].length;out.push(`<h${level} id="h-${slug(h[2])}">${mdInline(h[2])}</h${level}>`);i++;continue}
    if(/^[-*]\s+/.test(line)||/^\d+\.\s+/.test(line)){flushP();const mode=/^\d+\.\s+/.test(line)?'ol':'ul';if(type&&type!==mode)flushL();type=mode;lis.push(line.replace(/^([-*]|\d+\.)\s+/,''));i++;continue}
    if(/^>\s?/.test(line)){flushP();flushL();out.push(`<blockquote class="wiki-quote">${mdInline(line.replace(/^>\s?/,''))}</blockquote>`);i++;continue}
    flushL();para.push(line);i++;
  }
  flushP();flushL();return out.join('\n');
}
function articlePage(id){
 const p=byId.get(id);if(!p)return missing();const rel=(p.related||[]).map(id=>byId.get(id)).filter(Boolean);
 const headings=[...String(p.content||'').matchAll(/^#{2,3}\s+(.+)$/gm)].map(m=>m[1]);
 const fields=Object.entries(p.fields||{});
 return `${breadcrumb(p.title,p.type==='personagens'?'Personagem':catName(p.type),`<a href="${categoryHref(p.type)}">${esc(catName(p.type))}</a> <span>›</span> ${esc(p.title)}`)}
 <div class="article-actions"><span>${badge(p)}</span></div>
 <div class="article-layout"><article class="wiki-article"><p class="article-summary">${esc(p.description)}</p>
 ${headings.length>=2?`<nav class="table-contents" aria-label="Índice"><strong>Nesta página</strong><ol>${headings.map(h=>`<li><a href="#" data-jump="h-${slug(h)}">${esc(h)}</a></li>`).join('')}</ol></nav>`:''}
 ${renderMd(p.content)}
 ${rel.length?`<section class="related"><h2>Veja também</h2><div class="related-grid">${rel.map(r=>`<a href="${articleHref(r)}">${img(r.spriteName,'tiny')} ${esc(r.title)}</a>`).join('')}</div></section>`:''}
 <div class="article-meta">Informações de autoria do mod ou dados demonstrativos identificados acima · <a href="${categoryHref(p.type)}">Categoria: ${esc(catName(p.type))}</a></div></article>
 <aside class="infobox"><div class="infobox-top">${esc(p.title)}</div><div class="infobox-art">${img(p.spriteName,'hero',p.title)}</div><div class="infobox-description">${esc(p.description)}</div><div class="infobox-ribbon">Informações</div><dl>${fields.length?fields.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join(''):'<div><dt>Dados</dt><dd>Em elaboração</dd></div>'}</dl><div class="infobox-footer">${badge(p)}</div></aside></div>`;
}
function searchMatches(q){const n=norm(q);if(!n)return [];return pages.map(p=>({p,match:norm(p.title).includes(n)?0:norm(catName(p.type)).includes(n)?2:norm(p.description).includes(n)?3:(p.aliases||[]).some(a=>norm(a).includes(n))?1:9})).filter(x=>x.match<9).sort((a,b)=>a.match-b.match||a.p.title.localeCompare(b.p.title,'pt-BR')).map(x=>x.p)}
function searchPage(q=''){
 const matches=searchMatches(q);
 return `${breadcrumb('Pesquisa',q?`Resultados para “${q}”`:'Encontre artigos, personagens e lugares')}<form class="search-main" id="advanced-form" role="search"><label class="sr-only" for="full-query">Pesquisar conteúdo</label><input id="full-query" value="${esc(q)}" name="q" placeholder="Procure por um item, personagem, cultivo..." autocomplete="off"><button class="wood-button">Pesquisar</button></form>
 ${q?`<p class="results-count">${matches.length} resultado(s) encontrado(s).</p>${matches.length?`<div class="article-index">${matches.map(p=>`<a href="${articleHref(p)}">${img(p.spriteName)}<span><strong>${esc(p.title)}</strong><small>${esc(p.description)}</small></span><span class="type-chip">${esc(catName(p.type))}</span></a>`).join('')}</div>`:`<div class="empty-state">Nenhum artigo encontrado. Experimente outra palavra ou consulte o <a href="#/indice">índice completo</a>.</div>`}`:'<p>Digite o nome de um personagem, cultivo ou item. A busca também encontra descrições e categorias.</p>'}`;
}
function about(){return `${breadcrumb('Sobre esta wiki','Projeto independente em HTML puro.')}<div class="guide-preview"><h3>Personalize seu mod</h3><p>Este site reúne informações do mod e será atualizado pelo autor. Alguns conteúdos iniciais são exemplos fictícios usados apenas para demonstração.</p><h3>Independência</h3><p>Este é um projeto de fãs, sem afiliação oficial com Stardew Valley.</p></div>`}
function missing(){return `${breadcrumb('Página não encontrada','Esta trilha ainda não foi explorada.')}<div class="empty-state">${img('map','xl')}<p>A página solicitada não existe nesta prévia.</p><a href="#/wiki" class="wood-button">Voltar para o início →</a></div>`}
function display(){
 const hash=decodeURIComponent(location.hash.replace(/^#/,'')||'/wiki');const path=hash.split('?')[0];const main=document.getElementById('conteudo');
 let view='',title='Página inicial';
 if(path==='/wiki'||path==='/'){view=home();}
 else if(path.startsWith('/categoria/')){const id=path.split('/')[2];title=catName(id);view=categoryPage(id)}
 else if(path.startsWith('/artigo/')){const id=path.split('/')[2];title=byId.get(id)?.title||'Artigo';view=articlePage(id)}
 else if(path==='/indice'){title='Índice A–Z';view=indexPage()}
 else if(path==='/busca'){title='Pesquisa';const params=new URLSearchParams(hash.slice(path.length+1));view=searchPage(params.get('q')||'')}
 else if(path==='/sobre-preview'){title='Sobre';view=about()}
 else{title='Página não encontrada';view=missing()}
 document.title=`${title} — ${database.settings.title} Wiki`;
 main.innerHTML=view;syncBrand();
 document.querySelectorAll('#wiki-sidebar a.side-link').forEach(a=>{const selected=location.hash===a.getAttribute('href');a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 document.querySelector('.site-frame').classList.remove('sidebar-open');document.getElementById('mobile-menu').setAttribute('aria-expanded','false');
 document.getElementById('suggestions').hidden=true;
 window.scrollTo(0,0);
}
function navigateSearch(term){const q=String(term||'').trim();location.hash='#/busca'+(q?'?q='+encodeURIComponent(q):'');if(!q&&location.hash==='#/busca')display()}
let active=-1;
const search=document.getElementById('site-search'),suggest=document.getElementById('suggestions');
function suggestions(){const term=search.value.trim();if(term.length<2){suggest.hidden=true;active=-1;return}
 const found=searchMatches(term).slice(0,6);suggest.innerHTML=found.length?found.map((p,i)=>`<a class="suggestion-item" role="option" href="${articleHref(p)}" data-index="${i}">${img(p.spriteName,'tiny')}<span>${esc(p.title)}</span><small>${esc(catName(p.type))}</small></a>`).join(''):`<div class="suggestion-item">Nenhum artigo encontrado</div>`;suggest.hidden=false;active=-1}
search.addEventListener('input',suggestions);
search.addEventListener('keydown',event=>{const items=[...suggest.querySelectorAll('a')];if(event.key==='Escape'){suggest.hidden=true;return}
 if((event.key==='ArrowDown'||event.key==='ArrowUp')&&items.length){event.preventDefault();active=(active+(event.key==='ArrowDown'?1:-1)+items.length)%items.length;items.forEach((el,i)=>el.classList.toggle('selected',i===active))}
 if(event.key==='Enter'&&active>=0&&items[active]){event.preventDefault();location.hash=items[active].getAttribute('href');suggest.hidden=true;search.blur()}});
document.getElementById('site-search-form').addEventListener('submit',event=>{event.preventDefault();navigateSearch(search.value);suggest.hidden=true});
document.addEventListener('submit',event=>{if(event.target.id==='advanced-form'){event.preventDefault();navigateSearch(event.target.querySelector('[name=q]').value)}});
document.addEventListener('click',event=>{const jump=event.target.closest('[data-jump]');if(jump){event.preventDefault();document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'})}
 if(!event.target.closest('.top-search'))suggest.hidden=true;
 if(event.target.closest('#wiki-sidebar a')){document.querySelector('.site-frame').classList.remove('sidebar-open');document.getElementById('mobile-menu').setAttribute('aria-expanded','false')}
});
document.getElementById('mobile-menu').addEventListener('click',function(){const frame=document.querySelector('.site-frame');frame.classList.toggle('sidebar-open');this.setAttribute('aria-expanded',String(frame.classList.contains('sidebar-open')))});
