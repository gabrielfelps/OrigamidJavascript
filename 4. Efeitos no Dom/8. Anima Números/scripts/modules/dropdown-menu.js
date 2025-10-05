import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const userEvents = ["touchstart", "click"];

  dropdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();

    this.classList.add("active");
    outsideClick(this, userEvents, () => {
      this.classList.remove("active");
    });
  }
}
