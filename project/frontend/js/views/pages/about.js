import {
  addDarkClassToHTML,
  feedBack,
  toggleTheme,
} from '../../functionality/main-options.js';
import Component from '../../views/component.js';

class About extends Component {
  afterRender() {
    toggleTheme();
    addDarkClassToHTML();
    feedBack();
  }
  render() {
    return new Promise((resolve) => {
      resolve(`
        <div id="about" class="about">
          <div class="video">
            <video
              class="video-media"
              src="media/video/twd-intro.mp4"
              autoplay
              muted
              loop
            ></video>
          </div>
          <div class="about-content">
            <div class="about-container">
              <h1>О сайте</h1>
              <p>
                Сайт является бесплатным сервисом для чтения комиксов <br />"The
                Walking Dead" авторов: Роберта Киркмана и Тони Мура.<br />
                Здесь можно найти множество выпусков и томов комикса и просто
                наслаждаться историей ваших любимых героев.
              </p>
              <div class="form-container">
                <form class="contact-form">
                  <h1>Оставляйте свои отзывы</h1>
                  <div class="id">
                    <input type="text" id="name" placeholder="Ваше имя">
                    <i class="far fa-user"></i>
                  </div>
                  <div class="id">
                    <input type="email" id="email" placeholder="Email">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="id">
                    <input type="test" id="subject" placeholder="Тема письма">
                  </div>
                  <textarea id="message" placeholder="Сообщение" cols="30" rows="10"></textarea>
                  <input type="submit" class="submit" value="Отправить сообщение">
                </form>
              </div>
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
            <p>© 2021 TWDcomics. All Rights Reserved.</p>
            <p>Website Designed by Glushakov Daniil</p>
          </div>
        </footer>
            `);
    });
  }
}

export default About;
