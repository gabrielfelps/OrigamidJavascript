import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuBtn, menuList, userEvents) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'active';

    if (userEvents === undefined) this.userEvents = ['touchstart', 'click'];
    else this.userEvents = userEvents;
  }

  openMenu() {
    this.menuBtn.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsideClick(this.menuList, this.userEvents, () => {
      this.menuBtn.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.userEvents.forEach((userEvent) =>
      this.menuBtn.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
