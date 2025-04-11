function abrirModal() {
  document.getElementById('modal').style.display = 'flex';
}
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}


function cambiarPestaña(pestaña) {
  document.querySelectorAll('.pestaña').forEach(btn => btn.classList.remove('activa'));
  document.querySelectorAll('.seccion-formulario').forEach(sección => sección.classList.remove('activa'));
  document.querySelector(`.pestaña[onclick*='${pestaña}']`).classList.add('activa');
  document.getElementById(pestaña).classList.add('activa');
}
function mostrarPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('mostrar');

  setTimeout(() => {
    popup.classList.remove('mostrar');
  }, 3000); 
}


function manejarEnvio() {
 const pestañaActiva = document.querySelector('.pestaña.activa').textContent.includes('Empresa') ? 'empresa' : 'personal';
 const formulario = document.querySelector(`#form-${pestañaActiva}`);

 if (formulario.checkValidity()) {
   cerrarModal();       
   mostrarPopup();        
   formulario.reset();  
        
 } else {
   formulario.reportValidity();  
}

}


document.querySelectorAll('input[name="rutEmpresa"], input[name="rutPersonal"]').forEach(input => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9kK-]/g, ''); // Permite solo números, k/K y guión
  });
});
