'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// 3- Funciones.

//función que maneja el quitar y poner las clases de las paletas

function handlePalette(event) {
  cardArticlePreview.classList.remove('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  cardArticlePreview.classList.add(event.currentTarget.value);
}

//función que maneja los inputs del form
function handleInput(event) {
  const elementName = event.target.name;
  const value = event.target.value;

  data[elementName] = value;
  updatePreview();
}

//TODO: preguntar cómo simplicar esto y hacer lo de linkedin y github
function updatePreview() {
  //Elemento input del Nombre en el formulario (RELLENA)
  const name = inputName.value;
  if (name === '') {
    profileName.innerHTML = 'Nombre apellido';
  } else {
    profileName.innerHTML = name;
  }
  //Elemento input del Trabajo en el formulario (RELLENA)
  const job = inputJob.value;
  if (job === '') {
    profileText.innerHTML = 'Front-end developer';
  } else {
    profileText.innerHTML = job;
  }
  //Elemento input del Teléfono en el formulario (RELLENA)
  const phone = inputPhone.value;
  if (phone === '') {
    linkMobile.href = '';
  } else {
    linkMobile.href = `tel:${phone}`;
  }
  //Elemento input del Email en el formulario (RELLENA)
  const email = inputEmail.value;
  if (email === '') {
    linkEmail.href = '';
  } else {
    linkEmail.href = `mailto:${email}`;
  }
  //Elemento input del linkedin en el formulario (RELLENA)
  const linkedin = inputLinkedin.value;
  if (linkedin === '') {
    linkLinkedin.href = '';
  } else {
    linkLinkedin.href = linkedin;
  }
  //Elemento input del github en el formulario (RELLENA)
  const github = inputGithub.value;
  if (github === '') {
    linkGithub.href = '';
  } else {
    linkGithub.href = github;
  }
}

// 4- Eventos.

//Eventos click para las paletas (elemento input type = "radio") del formulario (DISEÑA)
paletteRadio1.addEventListener('click', handlePalette);
paletteRadio2.addEventListener('click', handlePalette);
paletteRadio3.addEventListener('click', handlePalette);

//Evento para el form completo
form.addEventListener('input', handleInput);

//TODO: añadir funcionalidad al botón Añadir imagen
//y cambiar la imagen de fondo de la preview card

//TODO: añadir funcionalidad del botón reset. Probar form.reset(), que es propio de JS
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
/*resetBtn.addEventListener('click',(event) => {
      event.preventDefault();
      profileName.innerHTML =
  })*/

/*Terjeta de nombre
  tarjeta de profesion
  tarjeta de telefono
  tarjeta de email
  tarjeta de github*/
