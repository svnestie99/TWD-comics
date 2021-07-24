import Component from '../../views/component.js';
import Gallery from '../../functionality/slider-gallery.js';
import comicsDataBase from '../../functionality/comicsbase.js';
import { fullscreen } from '../../functionality/fullscreen.js';
import {
  addDarkClassToHTML,
  toggleTheme,
} from '../../functionality/main-options.js';

class Issue1 extends Component {
  afterRender() {
    new Gallery(document.getElementById('gallery'), {
      margin: 10,
    });
    fullscreen();
    toggleTheme();
    addDarkClassToHTML();
  }

  render() {
    function mapSlides(urls) {
      return urls.map(
        (pair) => `
        <div class="slide">
          <img src="${[pair.firstPage]}" alt="" />
          <img src="${[pair.secondPage]}" alt="" />
          <div class="slide-nav">
            <a href="#/issue1"><i class="fas fa-chevron-left"></i> Предыдущий выпуск </a>
            <i class="fas fa-expand fullscreen"></i>
            <a href="#/issue2">Следующий выпуск <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>`
      );
    }

    const pairedUrls = comicsDataBase.comics1
      .map((n, i, arr) => ({ firstPage: n, secondPage: arr[i + 1] }))
      .filter((n, i) => i % 2 === 0);

    return new Promise((resolve) => {
      resolve(
        `
        <div class="slider-page">
            <div id="gallery">
              <div class="slide">
                  <img src="media/images/comics_albums/issue 1.jpg" alt="" />
                  <div class="slide-nav">
                    <a href="#/issue1"><i class="fas fa-chevron-left"></i> Предыдущий выпуск </a>
                    <i class="fas fa-expand fullscreen"></i>
                    <a href="#/issue2">Следующий выпуск <i class="fas fa-chevron-right"></i></a>
                  </div>
              </div>
                ${mapSlides(pairedUrls)}
            </div>
        </div>
            `
          .split(',')
          .join('')
      );
    });
  }
}

export default Issue1;