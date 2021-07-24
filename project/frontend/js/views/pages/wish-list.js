import {
  addDarkClassToHTML,
  createAndEditWishList,
  toggleTheme,
} from '../../functionality/main-options.js';
import Component from '../component.js';

class WishList extends Component {
  afterRender() {
    toggleTheme();
    addDarkClassToHTML();
    createAndEditWishList()
  }
  render() {
    return new Promise((resolve) => {
      resolve(`
      <div class="main-page">
        <h1 class="wish-header">Ваш список желаемого: <button class="clear-wish-list">очистить</button></h1>
      </div>`);
    });
  }
}

export default WishList;
