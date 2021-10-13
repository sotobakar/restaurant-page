import './tailwind.css';
import './index.html';
import firstLoadPage from './pages/first-load';
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';

const renderPages = (name) => {
  const pages = {
    "Home": Home,
    "About": About,
    "Menu": Menu
  }
  document.getElementById('page').innerHTML = pages[name];
}

const checkPage = () => {
  const buttons = document.getElementById('navbar').children;
  for (let i = 0; i < buttons.length; i++) {
    if(buttons[i].classList.contains('button-active')) {
      return buttons[i].textContent;
    }
  }
  return "Home";
}

window.addEventListener('DOMContentLoaded', (event) => {
  firstLoadPage(renderPages);
  let name = checkPage();
  renderPages(name);
});

