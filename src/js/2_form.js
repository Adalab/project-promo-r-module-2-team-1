'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// 3- Funciones.

//función que maneja el quitar y poner las clases de las paletas

function handlePalette(event) {
  cardArticlePreview.classList.remove('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  cardArticlePreview.classList.add(`palette-${event.currentTarget.value}`);
}

//función que maneja los inputs del form
function handleInput(event) {
  const elementName = event.target.name;
  const value = event.target.value;

  data[elementName] = value;
  updatePreview();
  saveData();
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

//Cuando se carga la página
createCardBtn.disabled = false; //esto habrá que revisarlo
