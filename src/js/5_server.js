'use strict';
/* eslint-disable indent */
/* eslint-disable no-undef */

createCardBtn.addEventListener('click',(event) =>{
 event.preventDefault();
 fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())

    .then(responseJson => {
        console.log(responseJson);
        if(responseJson.success){
                sectionCardCreate.classList.remove('collapsed'); 
                errorMessage.innerHTML = '';
                newCardLink.innerHTML = responseJson.cardURL;
          saveData();
        } else {
                sectionCardCreate.classList.add('collapsed');
              
            errorMessage.innerHTML = 'Debes rellenar todos las campos';
            console.log('error');
        }
    });
    
});
