// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          RegistrarUsuario();
          ResponderSolicitud();
          Login();
          event.preventDefault();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function RegistrarUsuario() {
  const Nombre = document.querySelector("#NombreForm").value;
  const Appelido = document.querySelector("#ApellidoForm").value;
  const Identificacion = document.querySelector("#IdentificacionForm").value;
  const Correo = document.querySelector("#emailForm").value;
  const Telefono = document.querySelector("#TelefonoForm").value;
  const Contrasena = document.querySelector("#passwordForm").value;
  const Rol = document.querySelector("#RolForm").value;

  const url = `http://localhost:3000/usuarios`;
  const datos = {
    nombre: Nombre,
    apellido: Appelido,
    identificacion: Identificacion,
    correo: Correo,
    telefono: Telefono,
    contrasena: Contrasena,
    rol: Rol,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((mensaje) => {
      console.log(mensaje);
    });
}
// ==========================Soliciutd==============================

function ResponderSolicitud() {
  let flexRadioDefault = document.querySelector("#flexRadioDefault1").value;
  let FRD = document.querySelector("#flexRadioDefault2").value;
  let Aceptar = document.querySelector("#button").value;
  let Rechazar = document.querySelector("#button2").value;

  let url = `http://localhost:3000/usuarios`;
  let datos = {
    flexRadioDefault: flexRadioDefault,
    FRD: FRD,
    Aceptar: Aceptar,
    Rechazar: Rechazar,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Contet-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((mensaje) => {
      console.log(mensaje);
    });

  alert("Se ha mandado la debida respuesta a la solicitud.");
}

// <==================> Login <==========================>
function Login() {
  const User = document.querySelector("#emailForm").value;
  const Clave = document.querySelector("#passwordForm").value;
  const Is = document.querySelector('#sigin').value;

  const url = `http://localhost:3000/usuarios`;
  const datos = {
    correo: User,
    contrasena: Clave,
    IniciarSesion : Is
    
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((mensaje) => {
      console.log(mensaje);
    });

  alert("ELUSUARIO ES INCORRECTO");

  // <=================> Dasborad <========================>

  const sidMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");

  //Muestra la barra
  menuBtn.addEventListener("click", () => {
    sidMenu.style.display = "block";
  });

  // Cirra la barra
  closeBtn.addEventListener("click", () => {
    sidMenu.style.display = "none";
  });

  // cambia el tema de la pagina

  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector("span").classList.toggle("active");
  });
}
