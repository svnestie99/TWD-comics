export function fullscreen() {
  const sliderPage = document.getElementsByClassName('slider-page')[0];
  const gallery = document.getElementsByClassName('gallery')[0];

  gallery.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('fullscreen')) {
      if (!document.fullscreenElement) {
        sliderPage.requestFullscreen();
      } else if (document.fullscreenEnabled) {
        document.exitFullscreen();
      }
    }
  });
}
