'use strict';
function saveData(){
    localStorage.setItem('dataFromForm', JSON.stringify(data));
}

function printPreview(){
data = JSON.parse(localStorage.getItem('dataFromForm'));

updatePreview(); // faltaria pintar los datos locales en el formulario
}




