'use strict';

function saveData(){
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

function printFromLocal(){
  data = JSON.parse(localStorage.getItem('dataFromForm'));

  inputName.value = data.name;
  inputJob.value = data.job;
  profileImage.style.backgroundImage = `url(${data.photo})`;
  profilePreview.style.backgroundImage = `url(${data.photo})`;
  inputPhone.value = data.phone;
  inputEmail.value = data.email;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;
  //esta función pinta lo que tenga data en la tarjeta preview
  updatePreview();
}

if(JSON.parse(localStorage.getItem('dataFromForm')))
    {printFromLocal()};


//if el localStorage está relleno, ejecuta printPreview()
//si no está relleno pues nada