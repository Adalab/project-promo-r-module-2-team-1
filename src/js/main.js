/* eslint-disable no-unused-vars */
'use strict';

// 1- Elementos de la página que voy a usar.

const resetBtn = document.querySelector('.js-card__button');
const profileName = document.querySelector ('.js-profile__name');
const profileText = document.querySelector ('.js-profile__text');
const profileImg = document.querySelector ('.js-image');
const linkMobile = document.querySelector ('.js-nav__mobile');
const linkEmail = document.querySelector ('.js-nav__mail');
const linkLinkedin = document.querySelector ('.js-nav__linkedin');
const linkGithub = document.querySelector ('.js-nav__github');


const inputName = document.querySelector ('.js-name');
const inputJob = document.querySelector ('.js-job');
const inputPhoto = document.querySelector ('.js-photo');
const inputEmail = document.querySelector ('.js-email');
const inputPhone = document.querySelector ('.js-phone');
const inputLinkedin = document.querySelector ('.js-linkedin');
const inputGithub = document.querySelector ('.js-github');

// 2- Variables globales: contiene los datos de la aplicación.

// 3- Funciones.


// 4- Eventos.

inputName.addEventListener('input', (event) => {
  event.preventDefault();
  let name = '';
  name = inputName.value;
  if (name === ''){
    profileName.innerHTML = 'Nombre apellido';
  } else {
    profileName.innerHTML = inputName.value;
  }
});

inputJob.addEventListener('input', (event) => {
  event.preventDefault();
  let job = '';
  job = inputJob.value;
  if (job === ''){
    profileText.innerHTML = 'Front-end developer';
  } else {
    profileText.innerHTML = inputJob.value;
  }
});

inputPhone.addEventListener('input', (event) => {
  event.preventDefault();
  let phone = '';
  phone = inputPhone.value;
  if (phone === ''){
    linkMobile.href = '';
  } else {
    linkMobile.href = `tel:${inputPhone.value}`;
    console.log(linkMobile.href);
  }
});

inputEmail.addEventListener('input', (event) => {
  event.preventDefault();
  let email = '';
  email = inputEmail.value;
  if (email === ''){
    linkEmail.href = '';
  } else {
    linkEmail.href = `mailto:${inputEmail.value}`;
  }
});

inputLinkedin.addEventListener('input', (event) => {
  event.preventDefault();
  let linkedin = '';
  linkedin = inputLinkedin.value;
  if (linkedin === ''){
    linkLinkedin.href = '';
  } else {
    linkLinkedin.href = inputLinkedin.value;
  }
});

inputGithub.addEventListener('input', (event) => {
  event.preventDefault();
  let github = '';
  github = inputGithub.value;
  if (github === ''){
    linkGithub.href = '';
  } else {
    linkGithub.href = inputGithub.value;
  }
});




/*resetBtn.addEventListener('click',(event) => {
    event.preventDefault();
    profileName.innerHTML =
})*/

/*Terjeta de nombre 
tarjeta de profesion
tarjeta de telefono
tarjeta de email
tarjeta de github*/

