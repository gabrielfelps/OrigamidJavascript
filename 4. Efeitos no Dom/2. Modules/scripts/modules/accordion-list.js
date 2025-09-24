export default function initAccordionList() {
  const descriptionTitles = document.querySelectorAll(
    "[data-description-list] dt"
  );
  const ativarClasse = "active";
  if (descriptionTitles.length) {
    descriptionTitles[0].nextElementSibling.classList.add(ativarClasse);
    descriptionTitles[0].classList.add(ativarClasse);

    function toggleDd() {
      this.classList.toggle(ativarClasse);
      this.nextElementSibling.classList.toggle(ativarClasse);
    }

    descriptionTitles.forEach((item) => {
      item.addEventListener("click", toggleDd);
    });
  }
}
