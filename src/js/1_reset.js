'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */



function resetBtnClick (event) {
  event.preventDefault();
  // cardArticlePreview.classList.add('palette-1');
  // cardArticlePreview.classList.remove('palette-2');
  // cardArticlePreview.classList.remove('palette-3');
  paletteRadio1.checked; //no se queda por defecto la primera clicada
  inputName.value = '';
  inputJob.value = '';
  fileField.value = '';
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';// se queda por defecto la que hemos puesto
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  updatePreview();
}

resetBtn.addEventListener('click', resetBtnClick );
