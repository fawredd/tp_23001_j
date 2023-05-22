document.getElementById("idHeader").innerHTML = `
<div id="menuf1">
  <div id="menuf1_columna_izquierda"><a href="tel:+54115555-5555"><i class="fa-solid fa-phone"></i> +54 11 5555-5555</a></div>
    <div id="menuf1_columna_derecha">
      <a href="https://www.facebook.com/tubroker" target="_blank"><i class="fab fa-brands fa-facebook"></i></a>
      <a href="https://twitter.com/tubroker" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.linkedin.com/company/tubroker" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com/tubroker" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
<nav class="menuf2 navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Broker</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html"><i class="fa-solid fa-house"></i>Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="preguntas-frecuentes.html"><i class="fa-solid fa-person-circle-question"></i>Preguntas</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-regular fa-newspaper"></i>Planes
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="planes.html#plan1">Plan 1</a></li>
          <li><a class="dropdown-item" href="planes.html#plan2">Plan 2</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contacto.html"><i class="fa-solid fa-at""></i>Contáctanos</a>
      </li>
    </ul>
    </div>
</div>
</nav>
`;
// Busco que el menu quede siempre visible
window.onscroll = function() {siempreVisible()};
var header = document.getElementById("idHeader");
var sticky = header.offsetTop;
function siempreVisible() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.getElementById("idFooter").innerHTML = `
<div class="redes-sociales">
  <!-- Boton de whatsapp -->
  <a href="https://wa.me/5491123456789?text=Hola,%20quiero%20saber%20más%20sobre%20los%20planes%20de%20medicina%20prepaga" target="_blank"><i class="fab fa-whatsapp"></i></a>
  <!-- fin boton whatsapp -->
  <a href="https://www.facebook.com/tubroker" target="_blank"><i class="fab fa-brands fa-facebook"></i></a>
  <a href="https://twitter.com/tubroker" target="_blank"><i class="fab fa-twitter"></i></a>
  <a href="https://www.linkedin.com/company/tubroker" target="_blank"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://www.instagram.com/tubroker" target="_blank"><i class="fab fa-instagram"></i></a>
</div>
<p>&copy; 2023 Broker de Medicina Prepaga en Argentina</p>
`;