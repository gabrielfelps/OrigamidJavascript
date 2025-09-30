export default function initDropdownMenu() {}

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

function outsideClick(element, userEvents, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    userEvents.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsideClick);
    });

    element.setAttribute(outside, "");
  }

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      userEvents.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      callback();
    }
  }
}
