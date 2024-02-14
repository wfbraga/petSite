document.addEventListener('DOMContentLoaded', function () {
  const duvidasEl = document.querySelectorAll('.duvida');

  duvidasEl.forEach(function (duvidaEl) {
    duvidaEl.addEventListener('click', function () {
      duvidaEl.classList.toggle('active');
    })
  })
})