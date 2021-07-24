import Component from '../../views/component.js';

class Header extends Component {
  render() {
    const resource = this.request.resource;

    return new Promise((resolve) => {
      resolve(`
                <header class="header">
                <div class="container">
                    <div class="header-part">
                    <div class="header-logo">
                        <img class="logo" src="media/images/main_images/twd-logo.png" alt="" />
                    </div>
                    <nav class="nav">
                        <a href="#">
                          <i class="nav-link fas fa-home icon"></i>
                        </a>
                        <a class="nav-link" href="#/about">
                          <p>О сайте</p>
                        </a>
                        <a class="nav-link" href="#/issues">
                          <p>Выпуски</p>
                        </a>
                        <a href="#" class="themetoggle">
                          <span class="material-icons icon toggle">
                        brightness_4
                        </span>
                        </a>
                        <a href="#/wishlist">
                          <i class="far fa-heart nav-link icon"></i>
                        </a>
                    </nav>
                    </div>
                </div>
                </header>
            `);
    });
  }
}

export default Header;
