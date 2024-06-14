import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

function createNav() {
  const nav = document.createElement('nav');
  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';

  homeBtn.addEventListener('click', () => loadPage(home));
  menuBtn.addEventListener('click', () => loadPage(menu));
  contactBtn.addEventListener('click', () => loadPage(contact));

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}

function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(page());
}

document.body.insertBefore(createNav(), document.getElementById('content'));
loadPage(home);
