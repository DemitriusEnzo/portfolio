import { TypingAnimation } from './js/typing.js';
import { MenuToggle } from './js/menu.js';

const typingElement = document.querySelector('.typing');
const cursorElement = document.querySelector('.cursor');
const typingAnimation = new TypingAnimation("Desenvolvedor ", "Full-Stack", typingElement, cursorElement);
typingAnimation.start();

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
new MenuToggle(menuToggle, menu);
