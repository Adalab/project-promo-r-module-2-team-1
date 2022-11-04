'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

designClicker.addEventListener('click', (event) => {
  event.preventDefault();

  if (sectionDesign.classList.contains('collapsed')) {
    sectionDesign.classList.remove('collapsed');
    arrowDesign.classList.add('arrow-up');
    arrowDesign.classList.remove('arrow-down');
    closeFill();
    closeShare();
  }
});

fillClicker.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionFill.classList.contains('collapsed')) {
    sectionFill.classList.remove('collapsed');
    arrowFill.classList.add('arrow-up');
    arrowFill.classList.remove('arrow-down');
    closeDesign();
    closeShare();
  }
});

shareClicker.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionShare.classList.contains('collapsed')) {
    sectionShare.classList.remove('collapsed');
    arrowShare.classList.add('arrow-up');
    arrowShare.classList.remove('arrow-down');
    closeDesign();
    closeFill();
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

function closeDesign() {
  sectionDesign.classList.add('collapsed');
  arrowDesign.classList.add('arrow-down');
  arrowDesign.classList.remove('arrow-up');
}

function closeShare() {
  sectionShare.classList.add('collapsed');
  arrowShare.classList.add('arrow-down');
  arrowShare.classList.remove('arrow-up');
}

function closeFill() {
  sectionFill.classList.add('collapsed');
  arrowFill.classList.add('arrow-down');
  arrowFill.classList.remove('arrow-up');
}
