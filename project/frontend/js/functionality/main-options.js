export function scrollToTop() {
  const scrollBtn = document.getElementsByClassName('showBtn')[0];
  window.onscroll = () => {
    if (window.scrollY > 900) {
      scrollBtn.classList.remove('hideBtn');
    } else if (window.scrollY < 900) {
      scrollBtn.classList.add('hideBtn');
    }
  };
  scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}
export function flippingCards() {
  const container = document.getElementsByClassName('container')[1]
  container.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('card__inner')) {
      target.classList.toggle('is-flipped');
    }
  });
}

export function toggleTheme() {
  document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML();
  });
}
export function addDarkClassToHTML() {
  try {
    const body = document.getElementsByTagName('body')[0];
    const themeToggle = document.getElementsByClassName('themetoggle span');
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      themeToggle.textContent = 'brightness_5';
    } else {
      body.classList.remove('dark');
      themeToggle.textContent = 'brightness_4';
    }
  } catch (err) {
    console.error('возникло исключение!');
    console.error('текст исключения: ' + err.message);
  }
}

export function scrollingAnimation() {
  const animBox = document.getElementsByClassName('comic-box');

  if (animBox.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let i = 0; i < animBox.length; i++) {
        const animItem = animBox[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add('active');
        } else {
          animItem.classList.remove('active');
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
}

export function feedBack() {
  const contactForm = document.querySelector('.contact-form');
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/sendEmail');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onload = function () {
      if (xhr.responseText == 'success') {
        alert('Отзыв отправлен');
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
      } else {
        alert('Что-то пошло не так...');
      }
    };

    xhr.send(JSON.stringify(formData));
  });
}

export function addToWishList() {
  const mainPage = document.getElementsByClassName('main-page')[0];
  const notification = document.getElementsByClassName('notification')[0];

  mainPage.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains('to-wish-list')) {
      localStorage.setItem(target.parentNode.href, target.parentNode.innerHTML);

      const redirectBtn = document.getElementsByClassName('redirect')[0];
      const closeNotificationBtn =
        document.getElementsByClassName('fas fa-times')[0];
      closeNotificationBtn.onclick = () => {
        notification.classList.remove('notification-show');
      };
      redirectBtn.onclick = () => {
        scroll(0, 0);
        window.location.href = '#/wishlist';
      };

      notification.children[0].textContent =
        target.parentNode.textContent + 'добавлен';
      notification.classList.add('notification-show');

      setTimeout(() => {
        notification.classList.remove('notification-show');
      }, 6000);
    } else if (target.classList.contains('comic-issue')) {
      window.location.href = target.href;
    }
  });
}

export function createAndEditWishList() {
  const mainPage = document.getElementsByClassName('main-page')[0];
  const wishList = document.createElement('div');

  wishList.classList.add('wish-list');

  for (let key in localStorage) {
    if (localStorage.getItem(key)) {
      let issue = document.createElement('a');
      issue.classList.add('selected-comic');
      issue.href = key;
      issue.innerHTML = localStorage.getItem(key);
      
      mainPage.appendChild(wishList);
      wishList.appendChild(issue);

      const btnAddToWishList = document.getElementsByClassName('to-wish-list');

      for (let i = 0; i < btnAddToWishList.length; i++) {
        issue.removeChild(btnAddToWishList[i]);
      }

      const deleteBtn = document.createElement('div');
      deleteBtn.classList.add('deleteBtn');
      issue.appendChild(deleteBtn);
      deleteBtn.insertAdjacentHTML(
        'beforeend',
        '<i class="far fa-trash-alt"></i>'
      );
    }
  }
  mainPage.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (target.classList.contains('deleteBtn')) {
      wishList.removeChild(target.parentNode);
      localStorage.removeItem(target.parentNode.href);
    } else if (target.classList.contains('selected-comic')) {
      window.location.href = target.href;
    }
  });
  const clearWishList = document.getElementsByClassName('clear-wish-list')[0];
  clearWishList.onclick = () => {
    for (let key in localStorage) {
      if (localStorage.getItem(key) && mainPage.children[1] != undefined) {
        mainPage.removeChild(wishList);
        localStorage.clear();
      }
    }
  };
}
