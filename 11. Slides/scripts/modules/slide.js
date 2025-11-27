export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.getElementById(wrapper);
    this.slide = document.getElementById(slide);

    this.dist = { startX: 0, movement: 0, finalPosition: 0 };
    this.scrollSensitivity = 1.4;
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3D(${distX}px, 0, 0)`;
  }

  udpatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * this.scrollSensitivity;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(e) {
    let movetype;

    if (e.type === 'mousedown') {
      e.preventDefault();
      this.dist.startX = e.clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = e.changedTouches[0].clientX;
      movetype = 'touchmove';
    }

    this.wrapper.addEventListener(movetype, this.onMove);
  }

  onMove(e) {
    const pointerPosition =
      e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;
    const finalPosition = this.udpatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(e) {
    const moveType = e.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();

    return this;
  }
}
