'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

designClicker.addEventListener('click', (event) => {
  event.preventDefault();

  // Este está abierto cuando iniciamos

  // Si hacen click en el no se puede cerrar si está abierto
  // Si este NO tiene collapsed (está abierto) y hacen click no pasa na
  if (sectionDesign.classList.contains('collapsed')) {
    sectionDesign.classList.remove('collapsed');
    arrowDesign.classList.add('arrow-up');
    arrowDesign.classList.remove('arrow-down');

    // CERRAR LOS OTROS
    // CERRAR FILL
    sectionFill.classList.add('collapsed');
    arrowFill.classList.add('arrow-down');
    arrowFill.classList.remove('arrow-up');

    // CERRAR SHARE
    sectionShare.classList.add('collapsed');
    arrowShare.classList.add('arrow-down');
    arrowShare.classList.remove('arrow-up');
  }
});

fillClicker.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionFill.classList.contains('collapsed')) {
    sectionFill.classList.remove('collapsed');
    arrowFill.classList.add('arrow-up');
    arrowFill.classList.remove('arrow-down');

    // CERRAR LOS OTROS
    // CERRAR DESIGN
    sectionDesign.classList.add('collapsed');
    arrowDesign.classList.add('arrow-down');
    arrowDesign.classList.remove('arrow-up');

    // CERRAR SHARE
    sectionShare.classList.add('collapsed');
    arrowShare.classList.add('arrow-down');
    arrowShare.classList.remove('arrow-up');
  }
});

shareClicker.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionShare.classList.contains('collapsed')) {
    sectionShare.classList.remove('collapsed');
    arrowShare.classList.add('arrow-up');
    arrowShare.classList.remove('arrow-down');

    // CERRAR LOS OTROS
    // CERRAR DESIGN
    sectionDesign.classList.add('collapsed');
    arrowDesign.classList.add('arrow-down');
    arrowDesign.classList.remove('arrow-up');

    // CERRAR FILL
    sectionFill.classList.add('collapsed');
    arrowFill.classList.add('arrow-down');
    arrowFill.classList.remove('arrow-up');
  }
});

createCardBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionCardCreate.classList.contains('collapsed')) {
    sectionCardCreate.classList.remove('collapsed');
  } else {
    sectionCardCreate.classList.add('collapsed');
  }
});
