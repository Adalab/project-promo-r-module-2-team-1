/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
arrowDesign.addEventListener('click', (event) => {
    event.preventDefault();
    if (sectionDesign.classList.contains('collapsed')) {
        sectionDesign.classList.remove('collapsed');
        arrowDesign.classList.add('arrow-up');
        arrowDesign.classList.remove('arrow-down');
      } else {
        sectionDesign.classList.add('collapsed');
        arrowDesign.classList.add('arrow-down');
        arrowDesign.classList.remove('arrow-up');
      }

});

arrowFill.addEventListener('click', (event) => {
    event.preventDefault();
    if (sectionFill.classList.contains('collapsed')) {
        sectionFill.classList.remove('collapsed');
        arrowFill.classList.add('arrow-up');
        arrowFill.classList.remove('arrow-down');
      } else {
        sectionFill.classList.add('collapsed');
        arrowFill.classList.add('arrow-down');
        arrowFill.classList.remove('arrow-up');
      }

});

arrowShare.addEventListener('click', (event) => {
    event.preventDefault();
    if (sectionShare.classList.contains('collapsed')) {
        sectionShare.classList.remove('collapsed');
        arrowShare.classList.add('arrow-up');
        arrowShare.classList.remove('arrow-down');
      } else {
        sectionShare.classList.add('collapsed');
        arrowShare.classList.add('arrow-down');
        arrowShare.classList.remove('arrow-up');
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


function arrowRotate (event){

  //Quiero que cuando la flecha esté hacia arriba, es decir, contenga la clase arrow-up, me la quite y me ponga la clase arrow-down
  //Quiero que cuando la flecha esté hacia abajo, es decir, contenga la clase arrow-down, me la quite y me ponga la clase arrow-up

};