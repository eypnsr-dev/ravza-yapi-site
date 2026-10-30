const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#main-nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Menüyü aç':'Menüyü kapat');menu.classList.toggle('is-open',!open)});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Menüyü aç')}));
document.querySelector('#year').textContent=new Date().getFullYear();
