'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function resetBtnClick(event) {
  event.preventDefault();
  data = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };
  //esto oculta la sección que se abre al clickar "Crear tarjeta"
  sectionCardCreate.classList.add('collapsed');
  cardArticlePreview.classList.add('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  paletteRadio1.checked = true;
  inputName.value = '';
  inputJob.value = '';
  fileField.value = '';
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = ''; // se queda por defecto la que hemos puesto
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  localStorage.clear();
  twitterBtn.href =
    'https://twitter.com/intent/tweet?text=Mirad%20mi%20nueva%20tarjeta%20';
  createCardBtn.disabled = false;
  createCardBtn.classList.remove('button-disabled');
  updatePreview();
}

//*Se podría hacer con reset() pero habría que añadir lo de cambiar las clases de las paletas
// resetBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   form.reset();
//   updatePreview();
// });

//BUCLE ( añadir el bucle dentro de la funcion manejadora, mantener las paletas y update preview();
//(habría que añadir la clase "js_reset" a los inputs.)

// function reset() {
//   const inputsToReset = document.querySelectorAll('.js_reset');
//   for (let i = 0; i < inputsToReset.length; i++) {
//     inputsToReset[i].value = '';
//   }
// }

resetBtn.addEventListener('click', resetBtnClick);
