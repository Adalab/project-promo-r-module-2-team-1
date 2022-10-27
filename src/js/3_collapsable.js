/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
arrowDesign.addEventListener('click', (event) => {
    event.preventDefault();
    if (sectionDesign.classList.contains('collapsed')) {
        sectionDesign.classList.remove('collapsed');
      } else {
        sectionDesign.classList.add('collapsed');
      }

});

arrowFill.addEventListener('click', (event) => {
    event.preventDefault();
    if (sectionFill.classList.contains('collapsed')) {
        sectionFill.classList.remove('collapsed');
      } else {
        sectionFill.classList.add('collapsed');
      }

});

arrowShare.addEventListener('click', (event) => {
    event.preventDefault();
    if (sectionShare.classList.contains('collapsed')) {
        sectionShare.classList.remove('collapsed');
      } else {
        sectionShare.classList.add('collapsed');
      }
    if (sectionCardCreate.classList.contains('collapsed')) {
    sectionCardCreate.classList.remove('collapsed');
    }   else {
    sectionCardCreate.classList.add('collapsed');
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