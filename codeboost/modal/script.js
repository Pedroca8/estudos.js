const btnModal = document.querySelector('.js-open-modal');
const btnClose = document.querySelector('.js-close-modal');
const modal = document.getElementById('js-modal');

btnClose.addEventListener('click', closeModal);
btnModal.addEventListener('click', openModal);

function openModal(){
   modal.classList.add('active');
}
function closeModal(){
  modal.classList.remove('active');
}



