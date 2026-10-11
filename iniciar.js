function syncBrand(){document.getElementById('wiki-name').textContent=database.settings.title;document.getElementById('wiki-tagline').textContent=database.settings.tagline||'WIKI • ENCICLOPÉDIA';document.getElementById('wiki-footer-name').textContent=database.settings.title+' Wiki';}
// Inicia a navegação após carregar os arquivos públicos.
document.getElementById('brand-art').innerHTML=img('leaf','logo');
buildSidebar();window.addEventListener('hashchange',display);display();
