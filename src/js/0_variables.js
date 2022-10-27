/* eslint-disable no-unused-vars */
'use strict';

// 1- Elementos de la página que voy a usar.
//elementos HTML de la tarjeta preview
const resetBtn = document.querySelector('.js-card__button');
const profileName = document.querySelector('.js-profile__name');
const profileText = document.querySelector('.js-profile__text');
const profileImg = document.querySelector('.js-image');
const linkMobile = document.querySelector('.js-nav__mobile');
const linkEmail = document.querySelector('.js-nav__mail');
const linkLinkedin = document.querySelector('.js-nav__linkedin');
const linkGithub = document.querySelector('.js-nav__github');
const cardArticlePreview = document.querySelector('.js-card__article');

//elementos HTML del form de profile-cards, la parte de DISEÑA
const paletteRadio1 = document.querySelector('.palettes__1--radio');
const paletteRadio2 = document.querySelector('.palettes__2--radio');
const paletteRadio3 = document.querySelector('.palettes__3--radio');

//elementos HTML del form de profile-cards, la parte de RELLENA
const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputPhoto = document.querySelector('.js-photo');
const inputEmail = document.querySelector('.js-email');
const inputPhone = document.querySelector('.js-phone');
const inputLinkedin = document.querySelector('.js-linkedin');
const inputGithub = document.querySelector('.js-github');

//Arrows
const arrowDesign = document.querySelector('.js-arrow-design');
const sectionDesign = document.querySelector('.js-design__wrap2');
const arrowFill = document.querySelector('.js-arrow-fill');
const sectionFill = document.querySelector('.js-fill__wrap2');
const arrowShare = document.querySelector('.js-arrow-share');
const sectionShare = document.querySelector('.js-share__wrap2');


//Buttom form
const createCardBtn = document.querySelector('.js-create__btn');
const sectionCardCreate = document.querySelector('.js-share__wrap3');




// 2- Variables globales: contiene los datos de la aplicación.
