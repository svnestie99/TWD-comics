import { parseRequestURL } from './helpers/utils.js';

import Header from './views/partials/header.js';

import MainPage from './views/pages/main.js';
import About from './views/pages/about.js';
import AllIssues from './views/pages/all-issues.js';
import Error404 from './views/pages/error404.js';
import Issue1 from './views/pages/issue1.js';
import Issue2 from './views/pages/issue2.js';
import Issue3 from './views/pages/issue3.js';
import Issue4 from './views/pages/issue4.js';
import Issue5 from './views/pages/issue5.js';
import Issue6 from './views/pages/issue6.js';
import Issue7 from './views/pages/issue7.js';
import Issue8 from './views/pages/issue8.js';
import Issue9 from './views/pages/issue9.js';
import Issue10 from './views/pages/issue10.js';
import Issue11 from './views/pages/issue11.js';
import Issue12 from './views/pages/issue12.js';
import WishList from './views/pages/wish-list.js';
import Issue13 from './views/pages/issue13.js';
import Issue14 from './views/pages/issue14.js';
import Issue15 from './views/pages/issue15.js';
import Issue16 from './views/pages/issue16.js';
import Issue17 from './views/pages/issue17.js';
import Issue18 from './views/pages/issue18.js';

const Routes = {
  '/': MainPage,
  '/about': About,
  '/issues': AllIssues,
  '/issue1': Issue1,
  '/issue2': Issue2,
  '/issue3': Issue3,
  '/issue4': Issue4,
  '/issue5': Issue5,
  '/issue6': Issue6,
  '/issue7': Issue7,
  '/issue8': Issue8,
  '/issue9': Issue9,
  '/issue10': Issue10,
  '/issue11': Issue11,
  '/issue12': Issue12,
  '/issue13': Issue13,
  '/issue14': Issue14,
  '/issue15': Issue15,
  '/issue16': Issue16,
  '/issue17': Issue17,
  '/issue18': Issue18,
  '/wishlist': WishList
};

function router() {
  const headerContainer =
      document.getElementsByClassName('header-container')[0],
    contentContainer = document.getElementsByClassName('content-container')[0],
    header = new Header();

  header.render().then((html) => (headerContainer.innerHTML = html));

  const request = parseRequestURL(),
    parsedURL = `/${request.resource || ''}${request.id ? '/:id' : ''}${
      request.action ? `/${request.action}` : ''
    }`,
    page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

  page.render().then((html) => {
    contentContainer.innerHTML = html;
    page.afterRender();
  });
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.onload = () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
  }, 1200);
}