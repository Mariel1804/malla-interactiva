document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click',()=> {
    const siguiente = ramo.dataset.desbloquea;
    if (siguiente) {
      const desbloqueado = document.getElementaryById(siguiente);
      if (desbloqueado && desbloqueado.classList.contains('bloqueado')) {
        desbloqueado.classList.remove('bloqueado');
      }
    }
  });
});
