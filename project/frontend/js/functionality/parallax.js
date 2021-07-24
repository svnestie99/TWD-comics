export function parallax(event) {
  this.querySelectorAll('.layer').forEach((layer) => {
    let speed = layer.dataset.speed;
    let positionX = (event.clientX * speed) / 1000;
    let positionY = (event.clientY * speed) / 1000;
    layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
  });
}
