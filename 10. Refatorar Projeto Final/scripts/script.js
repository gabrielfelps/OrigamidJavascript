import initAnimaScroll from './modules/animacao-scroll.js';
import SmoothScroll from './modules/scroll-suave.js';
import AccordionList from './modules/accordion-list.js';
import TabNav from './modules/tab-content.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import fetchAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';
import initFuncionamento from './modules/funcionamento.js';

initAnimaScroll();
// Declarando e Inicializando o Scroll Suave
const smoothScroll = new SmoothScroll('[data-navbar], a[href^="#"]');
smoothScroll.init();

// Declarando e Inicializando o Accordion List
const accordion = new AccordionList('[data-description-list] dt');
accordion.init();

// Declarando e Inicializando a TabNav
const tabNav = new TabNav('[data-tab-menu] li', '[data-tab-content] section');
tabNav.init();

// Declarando e Inicializando o Modal
const modal = new Modal(
  '.modal-container',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]'
);
modal.init();

// Declarando e Inicializando a ToolTip
const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
