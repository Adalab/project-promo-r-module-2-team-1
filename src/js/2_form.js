/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

// 3- Funciones.

//función que maneja el quitar y poner las clases de las paletas

function paletteHandler(event) {
  cardArticlePreview.classList.remove('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  cardArticlePreview.classList.add(event.currentTarget.value);
}

// 4- Eventos.

//Eventos click para las paletas (elemento input type = "radio") del formulario (DISEÑA)
paletteRadio1.addEventListener('click', paletteHandler);
paletteRadio2.addEventListener('click', paletteHandler);
paletteRadio3.addEventListener('click', paletteHandler);

//Evento input para el elemento input del Nombre en el formulario (RELLENA)
inputName.addEventListener('input', (event) => {
  event.preventDefault();
  let name = '';
  name = inputName.value;
  if (name === '') {
    profileName.innerHTML = 'Nombre apellido';
  } else {
    profileName.innerHTML = inputName.value;
  }
});

//Evento input para el elemento input del Trabajo en el formulario (RELLENA)
inputJob.addEventListener('input', (event) => {
  event.preventDefault();
  let job = '';
  job = inputJob.value;
  if (job === '') {
    profileText.innerHTML = 'Front-end developer';
  } else {
    profileText.innerHTML = inputJob.value;
  }
});

//Evento input para el elemento input del Teléfono en el formulario (RELLENA)
inputPhone.addEventListener('input', (event) => {
  event.preventDefault();
  let phone = '';
  phone = inputPhone.value;
  if (phone === '') {
    linkMobile.href = '';
  } else {
    linkMobile.href = `tel:${inputPhone.value}`;
  }
});

//Evento input para el elemento input del Email en el formulario (RELLENA)
inputEmail.addEventListener('input', (event) => {
  event.preventDefault();
  let email = '';
  email = inputEmail.value;
  if (email === '') {
    linkEmail.href = '';
  } else {
    linkEmail.href = `mailto:${inputEmail.value}`;
  }
});

//Evento input para el elemento input del Linkedin en el formulario (RELLENA)
inputLinkedin.addEventListener('input', (event) => {
  event.preventDefault();
  let linkedin = '';
  linkedin = inputLinkedin.value;
  if (linkedin === '') {
    linkLinkedin.href = '';
  } else {
    linkLinkedin.href = inputLinkedin.value;
  }
});

//Evento input para el elemento input del Github en el formulario (RELLENA)
inputGithub.addEventListener('input', (event) => {
  event.preventDefault();
  let github = '';
  github = inputGithub.value;
  if (github === '') {
    linkGithub.href = '';
  } else {
    linkGithub.href = inputGithub.value;
  }
});

//TODO: añadir funcionalidad al botón Añadir imagen
//y cambiar la imagen de fondo de la preview card

/*resetBtn.addEventListener('click',(event) => {
      event.preventDefault();
      profileName.innerHTML =
  })*/

/*Terjeta de nombre
  tarjeta de profesion
  tarjeta de telefono
  tarjeta de email
  tarjeta de github*/
