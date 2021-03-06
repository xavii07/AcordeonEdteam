const iconos = document.querySelectorAll(".acordeon__icono");
const textos = document.querySelectorAll(".acordeon__texto");
const titulos = document.querySelectorAll(".acordeon__titulo");

const mostrarTexto = (e) => {
  iconos.forEach((icono) => {
    if (icono.parentNode === e.target.parentNode.parentNode) {
      icono.classList.add("girar");
    } else {
      icono.classList.remove("girar");
    }
  });

  titulos.forEach((titulo) => {
    if (titulo.parentNode === e.target.parentNode.parentNode) {
      titulo.style.color = "#0651f3";
    } else {
      titulo.style.color = "#000";
    }
  });

  textos.forEach((texto) => {
    if (e.target.parentNode.parentNode === texto.parentNode) {
      texto.classList.add("mostrar");
    } else {
      texto.classList.remove("mostrar");
    }
  });
};

iconos.forEach((icono) => {
  icono.addEventListener("click", mostrarTexto);
});
