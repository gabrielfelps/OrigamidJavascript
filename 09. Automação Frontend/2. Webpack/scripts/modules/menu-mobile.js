import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const userEvents = ['touchstart', 'click'];

  function openMenu() {
    menuBtn.classList.add('active');
    menuList.classList.add('active');

    outsideClick(menuList, userEvents, () => {
      menuBtn.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuBtn) {
    userEvents.forEach((userEvent) =>
      menuBtn.addEventListener(userEvent, openMenu)
    );
  }
}
