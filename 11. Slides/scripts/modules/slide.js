export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.getElementById(wrapper);
    this.slide = document.getElementById(slide);

    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
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
    e.preventDefault();
    this.dist.startX = e.clientX;
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(e) {
    const finalPosition = this.udpatePosition(e.clientX);
    this.moveSlide(finalPosition);
  }

  onEnd(e) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
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
