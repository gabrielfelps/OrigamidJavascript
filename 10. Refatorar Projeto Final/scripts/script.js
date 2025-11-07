import initAnimaScroll from './modules/animacao-scroll.js';
import SmoothScroll from './modules/scroll-suave.js';
import initAccordionList from './modules/accordion-list.js';
import initTabContent from './modules/tab-content.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initFuncionamento from './modules/funcionamento.js';

initAnimaScroll();
// Declarando e Inicializando o Scroll Suave
const smoothScroll = new SmoothScroll('[data-navbar] a[href^="#"]');
smoothScroll.init();

initAccordionList();
initTabContent();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFetchAnimais();
initFetchBitcoin();
initFuncionamento();
