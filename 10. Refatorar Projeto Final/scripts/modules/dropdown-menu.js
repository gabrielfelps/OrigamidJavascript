import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, userEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define touchstart e click como argumento padrão de userEvents.
    if (userEvents === undefined) this.userEvents = ['touchstart', 'click'];
    else this.userEvents = userEvents;

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdown menu e adiciona a função que observa o clique fora dela.
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  // Adiciona os eventos ao dropdownmenu.
  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
