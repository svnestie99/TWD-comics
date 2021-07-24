import Component from '../../views/component.js';
import {
  addDarkClassToHTML,
  toggleTheme,
} from '../../functionality/main-options.js';

class Error404 extends Component {
  afterRender() {
    toggleTheme();
    addDarkClassToHTML();
  }
  render() {
    return new Promise((resolve) => {
      resolve(`                
      <div class="error-page">
        <div class="error-content">
          <div class="error">
            <p>4</p>
            <img src="media/images/main_images/eye.png" alt="" />
            <p>4</p>
          </div>
          <p>Упс.... похоже эту страницу съели зомби</p>
        </div>
      </div>
      <footer class="footer">
        <div class="footer-nav">
          <a href="#">
            <i class="nav-link fas fa-home icon"></i>
          </a>
          <a class="nav-link" href="#/about">
            <p>О сайте</p>
          </a>
          <a class="nav-link" href="#">
            <p>Выпуски</p>
          </a>
          <div class="footer-contacts">
            <a class="soc_item" href="https://vk.com/i_inanimate" target="_blank">
              <i class="fab fa-vk" aria-hidden="true"></i>
            </a>
            <p>Связаться со мной</p>
          </div>
        </div>
        <div class="footer-rights">
          <p>© 2021 TWDcomics. All Rights Reserved.</p>
          <p>Website Designed by Glushakov Daniil</p>
        </div>
      </footer>             
            `);
    });
  }
}

export default Error404;
