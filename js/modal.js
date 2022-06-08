const btnCallBck = document.querySelectorAll('.btn-callback');
const modalCallback = document.querySelector('.modal-callback');
const closeModalCallback = document.querySelector('.modal-callback__close');

  btnCallBck.forEach(function(item) {
    item.addEventListener('click', () => {
      modalCallback.classList.toggle('showModal');
      document.body.style.overflow = "hidden";
  });
  })
  closeModalCallback.addEventListener('click', () => {
    modalCallback.classList.remove('showModal');
    document.body.style.overflow = "auto";
  });