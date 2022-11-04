'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


function showDesignClicker() {
  sectionDesign.classList.remove('collapsed');
}

function hideDesignClicker() {
  sectionDesign.classList.add('collapsed');
}

// ---------- FUNCION RELLENA -----------------
function showFillClicker() {
  sectionFill.classList.remove('collapsed');
}

function hideFillClicker() {
  sectionFill.classList.add('collapsed');
}

// ---------- FUNCION COMPARTE -----------------

function showShareClicker() {
  sectionShare.classList.remove('collapsed');
}

function hideShareClicker() {
  sectionShare.classList.add('collapsed');
}


// ---------- FUNCIONES MANEJADORAS -----------------
//DISEÑA
function handleClickDesing(event) {
  event.preventDefault();
  if (sectionDesign.classList.contains('collapsed')) {
    showDesignClicker();
    arrowDesign.classList.add('arrow-up');
    arrowDesign.classList.remove('arrow-down');
    sectionFill.classList.add('collapsed');
    sectionShare.classList.add('collapsed');
    
  } else {
    hideDesignClicker();
    arrowDesign.classList.remove('arrow-up');
    arrowDesign.classList.add('arrow-down');
    sectionFill.classList.remove('collapsed');
    sectionShare.classList.remove('collapsed');
  }
}
//RELLENA
function handleClickFill(event) {
  event.preventDefault();
  if (sectionFill.classList.contains('collapsed')) {
    showFillClicker();
    arrowFill.classList.add('arrow-up');
    arrowFill.classList.remove('arrow-down');
    sectionDesign.classList.add('collapsed');
    sectionShare.classList.add('collapsed');
  } else {
    hideFillClicker();
    arrowFill.classList.remove('arrow-up');
    arrowFill.classList.add('arrow-down');
    sectionDesign.classList.remove('collapsed');
    sectionShare.classList.remove('collapsed');
  }
}
//COMPARTE
function handleClickShare(event) {
  event.preventDefault();
  if (sectionShare.classList.contains('collapsed')) {
    showShareClicker();
    arrowShare.classList.add('arrow-up');
    arrowShare.classList.remove('arrow-down');
    sectionFill.classList.add('collapsed');
    sectionDesign.classList.add('collapsed');
  } else {
    hideShareClicker();
    arrowShare.classList.remove('arrow-up');
    arrowShare.classList.add('arrow-down');
    sectionFill.classList.remove('collapsed');
    sectionDesign.classList.remove('collapsed');
  }
}

// ---------- FUNCIÓN BOTÓN (COLOCAR Y REVISAR) -----------------

createCardBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionCardCreate.classList.contains('collapsed')) {
    sectionCardCreate.classList.remove('collapsed');
  } else {
    sectionCardCreate.classList.add('collapsed');
  }
});

// ---------- EVENTOS CLICK -----------------

designClicker.addEventListener('click', handleClickDesing);
fillClicker.addEventListener('click', handleClickFill);
shareClicker.addEventListener('click', handleClickShare);