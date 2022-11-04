'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */



function resetBtnClick (event) {
  event.preventDefault();
  cardArticlePreview.classList.add('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  paletteRadio1.checked = true; 
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
"use strict";

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
  updatePreview();

resetBtn.addEventListener('click', resetBtnClick );
