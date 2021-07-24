import Component from '../../views/component.js';
import { parallax } from '../../functionality/parallax.js';
import {
  addDarkClassToHTML,
  addToWishList,
  flippingCards,
  scrollingAnimation,
  scrollToTop,
  toggleTheme,
} from '../../functionality/main-options.js';

document.addEventListener('mousemove', parallax);

class MainPage extends Component {
  afterRender() {
    flippingCards();
    scrollToTop();
    toggleTheme();
    addDarkClassToHTML();
    scrollingAnimation();
    addToWishList();
  }
  render() {
    return new Promise((resolve) => {
      resolve(`
    <div class="scene">
      <div data-speed="15" class="layer layer-bg"></div>
      <div data-speed="30" class="layer layer-1"></div>
      <div data-speed="60" class="layer layer-2"></div>
      <div data-speed="45" class="layer layer-3"></div>
      <div data-speed="23" class="layer layer-4"></div>
    </div>
    <div class="notification">
      <p></p>
      <button class="redirect">Показать</button>
      <i class="fas fa-times"></i>
    </div>
    <div id="scrollTop" class="showBtn hideBtn">
      <div class="scroll-content">
      <p>Вверх</p>
      <i class="far fa-caret-square-up"></i>
      </div>
      <img src="media/images/main_images/rick-scroll.png" width="50" alt="">
    </div>
    
    <div class="main-page">
      <div class="container">
        <div class="comic-box">
          <div class="card">
            <div class="card__inner">
              <div class="card__face">
                <img
                  class="volume-img"
                  src="media/images/comics_albums/volume 1.jpg"
                  alt=""
                />
              </div>
              <div class="card__face card__face_back">
                <div class="card__body">
                  <p>
                    Рик Граймс, заместитель шерифа из Кентукки, ранен при
                    исполнении служебных обязанностей, выходит из комы и
                    обнаруживает, что мир захвачен нежитью.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a class="comic-issue" href="#/issue1">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 1.jpg"
              alt=""
            />
            <p>Дни Минувшие #1</p>
            <div class="to-wish-list">
              в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue2">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 2.jpg"
              alt=""
            />
            <p>Дни Минувшие #2</p>
              <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue3">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 3.jpg"
              alt=""
            />
            <p>Дни Минувшие #3</p>
              <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue4">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 4.jpg"
              alt=""
            />
            <p>Дни Минувшие #4</p>
              <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue5">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 5.jpg"
              alt=""
            />
            <p>Дни Минувшие #5</p>
              <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue6">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 6.jpg"
              alt=""
            />
            <p>Дни Минувшие #6</p>
              <div class="to-wish-list">
                в желаемое
              </div>
            </a>
        </div>
        <div class="comic-box">
          <div class="card">
            <div class="card__inner">
              <div class="card__face">
                <img
                  class="volume-img"
                  src="media/images/comics_albums/volume 2.jpg"
                  alt=""
                />
              </div>
              <div class="card__face card__face_back">
                <div class="card__body">
                  <p>
                    Рик становится лидером группы. Он и остальные выжившие
                    покидают Атланту и путешествуют по враждебной территории в
                    поисках более безопасного убежища.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a class="comic-issue" href="#/issue7">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 7.jpg"
              alt=""
            />
            <p>Мили позади #7</p>
            <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue8">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 8.jpg"
              alt=""
            />
            <p>Мили позади #8</p>
            <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue9">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 9.jpg"
              alt=""
            />
            <p>Мили позади #9</p>
            <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue10">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 10.jpg"
              alt=""
            />
            <p>Мили позади #10</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue11">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 11.jpg"
              alt=""
            />
            <p>Мили позади #11</p>
            <div class="to-wish-list">
                в желаемое
              </div>
            </a>
          <a class="comic-issue" href="#/issue12">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 12.jpg"
              alt=""
            />
            <p>Мили позади #12</p>
            <div class="to-wish-list">
                в желаемое
              </div>
            </a>
        </div>
        <div class="comic-box">
          <div class="card">
            <div class="card__inner">
              <div class="card__face">
                <img
                  class="volume-img"
                  src="media/images/comics_albums/volume 3.jpg"
                  alt=""
                />
              </div>
              <div class="card__face card__face_back">
                <div class="card__body">
                  <p>
                    Группа начинает зачищать тюремный двор и один блок камер для жилых помещений.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a class="comic-issue" href="#/issue13">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 13.jpg"
              alt=""
            />
            <p>В безопасности за решёткой #13</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue14">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 14.jpg"
              alt=""
            />
            <p>В безопасности за решёткой #14</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue15">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 15.jpg"
              alt=""
            />
            <p>В безопасности за решёткой #15</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue16">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 16.jpg"
              alt=""
            />
            <p>В безопасности за решёткой #16</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue17">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 17.jpg"
              alt=""
            />
            <p>В безопасности за решёткой #17</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
          <a class="comic-issue" href="#/issue18">
            <img
              class="issue-album"
              src="media/images/comics_albums/issue 18.jpg"
              alt=""
            />
            <p>В безопасности за решёткой #18</p>
            <div class="to-wish-list">
                в желаемое
            </div>
            </a>
        </div>
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
        <a class="nav-link" href="#/issues">
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
        <p>© 2021 TWDcomics. All Rights Reserved. </p>
        <p>Website Designed by Glushakov Daniil</p>
      </div>
    </footer>
            `);
    });
  }
}

export default MainPage;
