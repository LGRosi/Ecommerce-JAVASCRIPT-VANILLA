'use strict';

let losProductos = document.querySelector(".losProductos");
const tbody = document.querySelector(".tbody");
let aCarrito = [];

let aProductos = [
  {
    id: 0,
    imagen: "imagenes/bajo_pc.jpg",
    producto: "Bajo EpiPhone",
    alt: "instrumento musical de cuerdas Bajo Epiphone",
    detalleCorto: "Forma ergonómica.",
    detalleLargo:
      "El Toby Standard IV presenta la clásica forma ergonómica del cuerpo diseñada por Tobias que los bajistas encuentran tan fácil de tocar, proporcionando un sonido enfocado y terminado que tiene todo el golpe de un vertical con todos los detalles claros de un eléctrico. El Toby Standard IV está perfectamente equilibrado con un sonido rico y una gran capacidad de reproducción.",
    precio: 23000,
    categoria: "cuerdas",
  },
  {
    id: 1,
    imagen: "imagenes/bateria_pc.jpg",
    producto: "Batería Yamaha",
    alt: "instrumento musical de percusión Batería Yamaha",
    detalleCorto: "Láminas de álamo de 6 capas.",
    detalleLargo:
      "La nueva RYDEEN (pack con 5 cascos) es exactamente el kit con el que a cualquier baterista principiante le gustaría tocar. Esta batería incluye el set de hardware HW680W de Yamaha y sujeciones de toms. Los cascos están fabricados en láminas de álamo de 6 capas.",
    precio: 41000,
    categoria: "percusion",
  },
  {
    id: 2,
    imagen: "imagenes/guitarra_pc.jpg",
    producto: "Guitarra Acústica",
    alt: "Instrumento musical de cuerdas Guitarra Acústica",
    detalleCorto: "Sonido ideal para conciertos.",
    detalleLargo:
      "Esta guitarra cuenta con una construccion artesanal, materiales y principalmente un sonido inconfundible. Fabricada con maderas seleccionadas GRACIA ofrece excelentes guitarras con una relacion Calidad/Precio inigualable, sin duda la mejor opcion para iniciarse en el mundo de la música.",
    precio: 22000,
    categoria: "cuerdas",
  },
  {
    id: 3,
    imagen: "imagenes/saxo_pc.jpg",
    producto: "Saxo Parker",
    alt: "Instrumento musical de viento Saxo Parker",
    detalleCorto: "Llave de Fa # agudo.",
    detalleLargo:
      "Llave de Fa # agudo, Zapatillas de cuero con resonador plástico, Apoyapulgar metálico ergonométrico, Llaves de notas graves con balancín, Campana labrada, Llave de Fa agudo frontal anatómica, Terminación: Laqueado dorado con campana y cuerpo labrados, Incluye estuche",
    precio: 50000,
    categoria: "otros",
  },
  {
    id: 4,
    imagen: "imagenes/guitarraElectrica_pc.jpg",
    producto: "Guitarra Eléctrica",
    alt: "Instrumento musical eléctrico Guitarra eléctrica",
    detalleCorto: "3 micrófonos de bobina simple.",
    detalleLargo:
      "Incluye: Guitarra eléctrica, Amplificador de 10 Watts, Correa, Funda, Cable, Palanca, Púas. Características de la guitarra: Cuerpo de tilo, Diapasón de rosewood, Mástil de maple, 21 trastes de alpaca, Clavijas diecast cromadas, Cejuela de hueso sintético, Puente cromado con palanca de trémolo, 3 micrófonos de bobina simple, Cuerdas .009",
    precio: 25000,
    categoria: "cuerdas",
  },
  {
    id: 5,
    imagen: "imagenes/sintetizador_pc.jpg",
    producto: "Sintetizador Novation",
    alt: "Instrumento musical eléctrico Sintetizador Novation",
    detalleCorto: "Viene con 256 sonidos.",
    detalleLargo:
      'Mininova es un compacto, super-cool estudio y sintetizador en vivo con el motor de sonido igual que su hermano mayor; UltraNova. Viene con 256 sonidos increíbles a bordo que se puede ajustar con cinco mandos, o totalmente deformar con ocho botones de "animar". Cuenta con hasta 18 voces con hasta cinco efectos de sintetizador de cada sonido.',
    precio: 42000,
    categoria: "otros",
  },
  {
    id: 6,
    imagen: "imagenes/violin_pc.jpg",
    producto: "Violín Stradella",
    alt: "Instrumento musical Violín Stradella",
    detalleCorto: "La serie MV1411 de Stradella",
    detalleLargo:
      "La serie MV1411 de Stradella, es especial para comenzar a estudiar o para aquellos que buscan un instrumento fácil de tocar, bien construido, y de sencillo mantenimiento.",
    precio: 13000,
    categoria: "cuerdas",
  },
  {
    id: 7,
    imagen: "imagenes/folklore_pc.jpg",
    producto: "Bombo Folklore",
    alt: "Instrumento musical Bombo Folklore",
    detalleCorto: "Parche de cuero genuino.",
    detalleLargo:
      "Construido con los mejores materiales del mercado, ceibo ahuecado y parche de cuero genuino. Excelente resonancia única por su cuerpo en madera estacionada",
    precio: 7000,
    categoria: "percusion",
  },
];

function PintarElementos (aProductos) {

  let divReferencia = document.querySelector('.divReferencia');
  losProductos.remove();
  losProductos = document.createElement('div');
  losProductos.className = 'row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 losProductos';
  divReferencia.appendChild(losProductos);

  for (let i = 0; i < aProductos.length; i++) {

    //Estructura base del producto:
    let divContenedorProducto = document.createElement("div");
    divContenedorProducto.className =
      "d-flex justify-content-center produc mb-5";
      losProductos.appendChild(divContenedorProducto);
  
    let divProducto = document.createElement("div");
    divProducto.className = "card shadow mb-1 bg-dark rounded estructuraInstrumento";
    divContenedorProducto.appendChild(divProducto);
  
    //Titulo del producto:
    let tituloDelProducto = document.createElement("h3");
    tituloDelProducto.innerHTML = aProductos[i].producto;
    tituloDelProducto.className = "h4 card-title text-center text-primary py-2";
    divProducto.appendChild(tituloDelProducto);
  
    //Imagen del producto:
    let imgDelProducto = document.createElement("img");
    imgDelProducto.src = aProductos[i].imagen;
    imgDelProducto.alt = aProductos[i].alt;
    imgDelProducto.className = "card-img-top efectoImg";
    imgDelProducto.style.borderRadius = "10px";
    imgDelProducto.style.position = "relative";
    divProducto.appendChild(imgDelProducto);
  
    //Div contenedor Descripción, Precio, Botón:
    let divContenedorDescripcionPrecioBoton = document.createElement("div");
    divContenedorDescripcionPrecioBoton.className = "card-body";
    divProducto.appendChild(divContenedorDescripcionPrecioBoton);
  
    //Párrafo del detalle corto:
    let pDetalleCorto = document.createElement("p");
    pDetalleCorto.innerHTML = aProductos[i].detalleCorto;
    pDetalleCorto.className = "card-text text-white description";
    divContenedorDescripcionPrecioBoton.appendChild(pDetalleCorto);
  
    //Párrafo del Precio:
    let pPrecio = document.createElement("p");
    pPrecio.innerHTML = "Precio: ";
    pPrecio.className = "pb-3 h5 text-primary";
    divContenedorDescripcionPrecioBoton.appendChild(pPrecio);
  
    //Span del Precio:
    let spanPrecio = document.createElement("span");
    spanPrecio.innerHTML = `$ ${aProductos[i].precio}`;
    spanPrecio.className = "precio";
    pPrecio.appendChild(spanPrecio);
  
    //Div contenedor de los 2 botones:
    let divLosDosBotones = document.createElement("div");
    divLosDosBotones.className = "d-grid gap-2";
    divContenedorDescripcionPrecioBoton.appendChild(divLosDosBotones);
  
    //Botón agregar al carrito:
    let btnAgregarAlCarrito = document.createElement("button");
    btnAgregarAlCarrito.innerHTML = "AGREGAR AL CARRITO";
    btnAgregarAlCarrito.className = "btn btn-primary button efectoImg btnAgregarPrincipal";
    divLosDosBotones.appendChild(btnAgregarAlCarrito);
  
    btnAgregarAlCarrito.addEventListener("click", AgregarElProductoAlCarrito);
  
    //Botón ver más detalle:
    let btnVerMasDetalle = document.createElement("button");
    btnVerMasDetalle.innerHTML = "VER MÁS DETALLE";
    btnVerMasDetalle.className = "btn btn-outline-primary button2 efectoImg";
    divLosDosBotones.appendChild(btnVerMasDetalle);
  
    btnVerMasDetalle.addEventListener("click", function () {
      ModalVerElDetalle(aProductos[i]);
    });
  }
}
PintarElementos(aProductos);




//Redirección del logo a productos:
let logoMusindi = document.querySelector('.logo');
logoMusindi.addEventListener('click', () => {
  document.querySelector('.menuProductos').click();
});



//FILTRADO DE CATEGORÍAS:
const enlaces = document.querySelectorAll("#categorias a");
enlaces.forEach(elemento => {
  elemento.addEventListener('click', (e) => {
      e.preventDefault();
      enlaces.forEach(enlace => enlace.classList.remove('activo'));
      e.target.classList.add('activo');

      const seleccion = e.target.innerHTML.toLowerCase();
      let filtrarProductos = aProductos.filter((filtrar) => {
          return filtrar.categoria == seleccion ? filtrar.categoria : ''; 
      });
      if (filtrarProductos.length > 0) {
        PintarElementos(filtrarProductos);
      } else {
        PintarElementos(aProductos);
      }
  });
});





//BANNER:
let divBanner = document.querySelector('.divBanner');
if (divBanner) {
  divBanner.className = 'displayBanner';
}
let segundos = 10;

let intervalEquisBanner = setInterval(() => {
  let equisBanner = document.querySelector('.equis');
  equisBanner.addEventListener('click', () => {
    divBanner.style.display = 'none';
    window.location.reload();
  });
  clearInterval(intervalEquisBanner);
}, 200);    

let aTodos = document.querySelector('.aTodos');
aTodos.addEventListener('click', () => {
  divBanner.style.display = 'block';
    actualizarTiempo();
});

let aCuerdas = document.querySelector('.aCuerdas');
aCuerdas.addEventListener('click', () => {
  divBanner.style.display = 'block';
    actualizarTiempo();
});

let aPercusion = document.querySelector('.aPercusion');
aPercusion.addEventListener('click', () => {
  divBanner.style.display = 'block';
    actualizarTiempo();
});

let aOtros = document.querySelector('.aOtros');
aOtros.addEventListener('click', () => {
  divBanner.style.display = 'block';
    actualizarTiempo();
});
  
function actualizarTiempo () {
    let tiempo = document.querySelector('.tiempo');
    tiempo.innerHTML = segundos;
    if (segundos == 0) {
      divBanner.style.display = 'none'
    } else {
      segundos--;
      setTimeout("actualizarTiempo()", 1000);
      if (segundos == 0) {
        window.location.reload();
      }
    }
  }






let btnComprar = document.querySelector(".btnComprar");
let valBtnComprar = 0;
btnComprar.addEventListener("click", () => {
  valBtnComprar++;
  if (valBtnComprar == 1) {
    ModalFinalizarCompra();
  }  
});


function ModalFinalizarCompra () {
  //Div del modal:
  let divModalFinalizarCompra = document.createElement("div");
  divModalFinalizarCompra.className = "modal text-center";
  document.body.appendChild(divModalFinalizarCompra);

  // X para cerrar:
  let aXFinalizarCompra = document.createElement("a");
  aXFinalizarCompra.href = "javascript:void(0)";
  aXFinalizarCompra.innerHTML = "X";

  aXFinalizarCompra.addEventListener("click", () => {
    divModalFinalizarCompra.remove();
    window.location.reload();
  });
  divModalFinalizarCompra.appendChild(aXFinalizarCompra);


  //Formulario:
  let formularioCompleto = document.querySelector('.formularioCompleto');
  formularioCompleto.style.cssText = 'border-radius: 20px; width: 60%;';
  divModalFinalizarCompra.appendChild(formularioCompleto);

  let divRow = document.createElement('div');
  divRow.className = 'row d-flex justify-content-center';
  formularioCompleto.appendChild(divRow);

  let divCol12 = document.createElement('div');
  divCol12.className = 'col-12 mt-5';
  divRow.appendChild(divCol12);

  let divContenedorImgPago = document.createElement('div');
  divContenedorImgPago.className = 'd-flex justify-content-center';
  divCol12.appendChild(divContenedorImgPago);

  let h2ImgPago = document.createElement('h2');
  h2ImgPago.className = 'text-primary text-center';
  h2ImgPago.innerHTML = 'Pago';
  divContenedorImgPago.appendChild(h2ImgPago);

  let imgPago = document.createElement('img');
  imgPago.style.width = '50px';
  imgPago.src = '../imagenes/hand.svg';
  imgPago.alt = 'mano pago';
  divContenedorImgPago.appendChild(imgPago);


  let etiquetaForm = document.createElement('form');
  etiquetaForm.className = 'text-white row my-2 d-flex justify-content-center formSubmit';
  
  etiquetaForm.addEventListener('submit', e => {
      e.preventDefault();
  });
  divCol12.appendChild(etiquetaForm);

  //DATOS PERSONALES:
  let divCol10DatosPersonales = document.createElement('div');
  divCol10DatosPersonales.className = 'col-10 fondoForm';
  etiquetaForm.appendChild(divCol10DatosPersonales);

  let h3DatosPersonales = document.createElement('h3');
  h3DatosPersonales.className = 'text-primary my-3';
  h3DatosPersonales.innerHTML = 'Datos personales';
  divCol10DatosPersonales.appendChild(h3DatosPersonales);

  let divContenedorNombreApellido = document.createElement('div');
  divContenedorNombreApellido.className = 'form-group mb-3';
  divCol10DatosPersonales.appendChild(divContenedorNombreApellido);

  let inputNombreApellido = document.createElement('input');
  inputNombreApellido.className = 'form-control form2 radiusInput nombreApellido';
  inputNombreApellido.setAttribute('type', 'text');
  inputNombreApellido.setAttribute('name', 'nombre');
  inputNombreApellido.setAttribute('placeholder', 'Nombre y Apellido');
  inputNombreApellido.setAttribute('required', true);
  divContenedorNombreApellido.appendChild(inputNombreApellido);

  //VALIDACIÓN NOMBRE Y APELLIDO:
  let nombreApellido = document.querySelector("[name=nombre]");
  function ValidarNombre () {
    let expRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if (this.value.length == "") {
      this.style.border = "3px solid red";
      this.setCustomValidity("El campo no puede quedar vacío");
    } else if (this.value.length < 3) {
      this.style.border = "3px solid red";
      this.setCustomValidity("Debe tener 3 caracteres como mínimo");
    } else if (!expRegNombre.test(nombreApellido.value)) {
      this.style.border = "3px solid red";
      this.setCustomValidity("Solo puede contener letras");
    } else {
      this.style.border = "3px solid green";
      this.setCustomValidity("");
    }
  }
  nombreApellido.onkeypress = ValidarNombre;




  let divContenedorEmail = document.createElement('div');
  divContenedorEmail.className = 'form-group mb-3';
  divCol10DatosPersonales.appendChild(divContenedorEmail);

  let inputEmail = document.createElement('input');
  inputEmail.className = 'form-control form2 radiusInput';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');
  inputEmail.setAttribute('required', true);
  divContenedorEmail.appendChild(inputEmail);

  //VALIDACIÓN EMAIL:
  let email = document.querySelector("[name=email]");
  function ValidarEmail () {
    let expRegMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (this.value.length == "") {
      this.style.border = "3px solid red";
      this.setCustomValidity("El campo no puede quedar vacío");
    } else if (!expRegMail.test(email.value)) {
      this.style.border = "3px solid red";
      this.setCustomValidity(
        "Solo puede contener letras, números, puntos, guion medio y guion bajo."
      );
    } else {
      this.style.border = "3px solid green";
      this.setCustomValidity("");
    }
  }
  email.onkeypress = ValidarEmail;




  let divContenedorTelefono = document.createElement('div');
  divContenedorTelefono.className = 'form-group mb-3';
  divCol10DatosPersonales.appendChild(divContenedorTelefono);

  let inputTelefono = document.createElement('input');
  inputTelefono.className = 'form-control form2 radiusInput';
  inputTelefono.setAttribute('type', 'tel');
  inputTelefono.setAttribute('name', 'telefono');
  inputTelefono.setAttribute('placeholder', 'Teléfono de contacto');
  inputTelefono.setAttribute('required', true);
  divContenedorTelefono.appendChild(inputTelefono);

  //VALIDACIÓN TELÉFONO:
  let telefono = document.querySelector("[name=telefono]");
  function ValidarTelefono () {
    let expRegTel =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (this.value.length == "") {
      this.style.border = "3px solid red";
      this.setCustomValidity("El campo no puede quedar vacío");
    } else if (!expRegTel.test(telefono.value)) {
      this.style.border = "3px solid red";
      this.setCustomValidity("Solo puede contener caracteres numéricos");
    } else if (!(this.value.length >= 11 && this.value.length <= 13)) {
      this.style.border = "3px solid red";
      this.setCustomValidity(
        "Debe contener entre 11 y 13 caracteres numéricos"
      );
    } else {
      this.style.border = "3px solid green";
      this.setCustomValidity("");
    }
  }
  telefono.onkeypress = ValidarTelefono;





  let divContenedorDireccion = document.createElement('div');
  divContenedorDireccion.className = 'form-group mb-3';
  divCol10DatosPersonales.appendChild(divContenedorDireccion);

  let inputDireccion = document.createElement('input');
  inputDireccion.className = 'form-control form2 radiusInput';
  inputDireccion.setAttribute('type', 'text');
  inputDireccion.setAttribute('name', 'direccion');
  inputDireccion.setAttribute('placeholder', 'Dirección de envío');
  inputDireccion.setAttribute('required', true);
  divContenedorDireccion.appendChild(inputDireccion);

  //VALIDACIÓN DIRECCIÓN:
  let domicilio = document.querySelector("[name=direccion]");
  function ValidarDomicilio () {
    let expRegDomicilio = /^[#.0-9a-zA-ZÀ-ÿ\s,-]+$/;
    if (this.value.length == "") {
      this.style.border = "3px solid red";
      this.setCustomValidity("El campo no puede quedar vacío");
    } else if (!expRegDomicilio.test(domicilio.value)) {
      this.style.border = "3px solid red";
      this.setCustomValidity("Debe tener una expresión válida");
    } else if (this.value.length < 4) {
      this.style.border = "3px solid red";
      this.setCustomValidity("Debe tener 4 caracteres como mínimo");
    } else {
      this.style.border = "3px solid green";
      this.setCustomValidity("");
    }
  }
  domicilio.onkeypress = ValidarDomicilio;





  let divContenedorFecha = document.createElement('div');
  divContenedorFecha.className = 'form-group mb-3';
  divCol10DatosPersonales.appendChild(divContenedorFecha);

  let inputFecha = document.createElement('input');
  inputFecha.className = 'form-control form2 radiusInput';
  inputFecha.setAttribute('type', 'date');
  inputFecha.setAttribute('name', 'fecha');
  inputFecha.setAttribute('required', true);
  divContenedorFecha.appendChild(inputFecha);

  //VALIDACIÓN FECHA:
  let fecha = document.querySelector("[name=fecha]");
  function ValidarFecha () {
    if (this.value.length == "") {
      this.style.border = "3px solid red";
      this.setCustomValidity("El campo no puede quedar vacío");
    } else {
      this.style.border = "3px solid green";
      this.setCustomValidity("");
    }
  }
  fecha.onkeypress = ValidarFecha;





  //DATOS DEL PAGO:
  let divCol10DatosDelPago = document.createElement('div');
  divCol10DatosDelPago.className = 'col-10 fondoForm my-3';
  etiquetaForm.appendChild(divCol10DatosDelPago);

  let h3DatosDelPago = document.createElement('h3');
  h3DatosDelPago.className = 'text-primary my-3';
  h3DatosDelPago.innerHTML = 'Datos del pago';
  divCol10DatosDelPago.appendChild(h3DatosDelPago);

  let divContenedorNumeroTarjeta = document.createElement('div');
  divContenedorNumeroTarjeta.className = 'form-group mb-2';
  divCol10DatosDelPago.appendChild(divContenedorNumeroTarjeta);

  let inputNumeroTarjeta = document.createElement('input');
  inputNumeroTarjeta.className = 'form-control form2 radiusInput';
  inputNumeroTarjeta.setAttribute('type', 'text');
  inputNumeroTarjeta.setAttribute('name', 'numerosTarjeta');
  inputNumeroTarjeta.setAttribute('placeholder', 'Número de tarjeta');
  inputNumeroTarjeta.setAttribute('required', true);
  divContenedorNumeroTarjeta.appendChild(inputNumeroTarjeta);

  //VALIDACIÓN NÚMEROS DE LA TARJETA:
  let numerosDeTarjeta = document.querySelector("[name=numerosTarjeta]");
  numerosDeTarjeta.addEventListener("keyup", (e) => {
    let valorInputTarjeta = e.target.value;
    numerosDeTarjeta.value = valorInputTarjeta
      .replace(/\s/g, "")
      .replace(/\D/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();

    numerosDeTarjeta.onkeypress = LargoDeTarjeta;
  });

  function LargoDeTarjeta () {
    if (numerosDeTarjeta.value.length == "") {
      numerosDeTarjeta.style.border = "3px solid red";
      numerosDeTarjeta.setCustomValidity("El campo no puede quedar vacío");
    } else if (numerosDeTarjeta.value.length != 19) {
      numerosDeTarjeta.style.border = "3px solid red";
      numerosDeTarjeta.setCustomValidity("Debe tener 16 caracteres");
    } else {
      numerosDeTarjeta.style.border = "3px solid green";
      numerosDeTarjeta.setCustomValidity("");
    }
  }



  let divCol8DatosDelPago = document.createElement('div');
  divCol8DatosDelPago.className = 'col-8 d-flex align-items-center form-group mb-3';
  divCol10DatosDelPago.appendChild(divCol8DatosDelPago);

  let selectMesTarjeta = document.createElement('select');
  selectMesTarjeta.className = 'form-select form-group radiusInput';
  selectMesTarjeta.setAttribute('name', 'mesTarjeta');
  selectMesTarjeta.setAttribute('required', true);
  divCol8DatosDelPago.appendChild(selectMesTarjeta);

  let optionMes = document.createElement('option');
  optionMes.setAttribute('aria-required', true);
  optionMes.innerHTML = 'Mes';
  selectMesTarjeta.appendChild(optionMes);

  //VALIDACIÓN MES:
  let selectMes = document.querySelector("[name=mesTarjeta]");
  for (let i = 1; i <= 12; i++) {
    let opcionMes = document.createElement("option");
    opcionMes.value = i;
    opcionMes.innerHTML = i;
    selectMes.appendChild(opcionMes);
  }

  function Mes () {
    let expMes = /[0-9]/g;
    if (!expMes.test(selectMes.value)) {
      selectMes.style.border = "3px solid red";
      selectMes.setCustomValidity("Debe selecionar un mes específico");
    } else {
      selectMes.style.border = "3px solid green";
      selectMes.setCustomValidity("");
    }
  }
  selectMes.onkeypress = Mes;





  let selectAñoTarjeta = document.createElement('select');
  selectAñoTarjeta.className = 'form-select form-group mx-2 radiusInput';
  selectAñoTarjeta.setAttribute('name', 'añoTarjeta');
  selectAñoTarjeta.setAttribute('required', true);
  divCol8DatosDelPago.appendChild(selectAñoTarjeta);

  let optionAño = document.createElement('option');
  optionAño.setAttribute('aria-required', true);
  optionAño.innerHTML = 'Año';
  selectAñoTarjeta.appendChild(optionAño);

   //VALIDACIÓN AÑO:
   let añoActual = new Date().getFullYear();
   let selectAño = document.querySelector("[name=añoTarjeta]");
   for (let i = añoActual; i <= añoActual + 8; i++) {
     let opcionAño = document.createElement("option");
     opcionAño.value = i;
     opcionAño.innerHTML = i;
     selectAño.appendChild(opcionAño);
   }
 
   function Año () {
     let expAño = /[0-9]/g;
     if (!expAño.test(selectAño.value)) {
       selectAño.style.border = "3px solid red";
       selectAño.setCustomValidity("Debe selecionar un año específico");
     } else {
       selectAño.style.border = "3px solid green";
       selectAño.setCustomValidity("");
     }
   }
   selectAño.onkeypress = Año;





  let divContenedorCodigoTarjeta = document.createElement('div');
  divContenedorCodigoTarjeta.className = 'form-group';
  divCol8DatosDelPago.appendChild(divContenedorCodigoTarjeta);

  let inputCodigoTarjeta = document.createElement('input');
  inputCodigoTarjeta.className = 'form-control ccv form-group form2 radiusInput';
  inputCodigoTarjeta.setAttribute('type', 'text');
  inputCodigoTarjeta.setAttribute('name', 'codigoTarjeta');
  inputCodigoTarjeta.setAttribute('placeholder', 'CVV');
  inputCodigoTarjeta.setAttribute('required', true);
  divContenedorCodigoTarjeta.appendChild(inputCodigoTarjeta);

   //VALIDACIÓN CÓDIGO DE TARJETA:
  let cvvTarjeta = document.querySelector("[name=codigoTarjeta]");
  cvvTarjeta.addEventListener("blur", () => {
    cvvTarjeta.value = cvvTarjeta.value.replace(/\s/g, "").replace(/\D/g, "");
    cvvTarjeta.onblur = LargoDeTarjetaCVV;
  });

  function LargoDeTarjetaCVV () {
    if (cvvTarjeta.value.length == "") {
      cvvTarjeta.style.border = "3px solid red";
      cvvTarjeta.setCustomValidity("El campo no puede quedar vacío");
    } else if (cvvTarjeta.value.length != 3) {
      cvvTarjeta.style.border = "3px solid red";
      cvvTarjeta.setCustomValidity("Debe tener 3 caracteres");
    } else {
      cvvTarjeta.style.border = "3px solid green";
      cvvTarjeta.setCustomValidity("");
    }
  }


  let btnFinalizarCompra = document.createElement('button');
  btnFinalizarCompra.className = 'btn btn-primary efectoImg mb-2 w-50';
  btnFinalizarCompra.setAttribute('type', 'submit');
  btnFinalizarCompra.setAttribute('value', 'finalizarCompra');
  btnFinalizarCompra.innerHTML = 'FINALIZAR COMPRA';
  etiquetaForm.appendChild(btnFinalizarCompra);
  

  btnFinalizarCompra.addEventListener('click', (e) => {
    if (cvvTarjeta.value.length === 3) {
        MensajeOkDeCompraFinal(); 
    }
  });

  function MensajeOkDeCompraFinal () {

    divModalFinalizarCompra.remove();

    //Div del modal:
    let divModalBtnFinalizarCompra = document.createElement("div");
    divModalBtnFinalizarCompra.className = "modal text-center";
    document.body.appendChild(divModalBtnFinalizarCompra);

    //Div contenedor de los componentes del modal:
    let divContenedorCompraCorrecta = document.createElement("div");
    divContenedorCompraCorrecta.style.cssText = "width: 30%; height: 50%; background: white; border-radius: 20px;";
    divModalBtnFinalizarCompra.appendChild(divContenedorCompraCorrecta);

    //Imagen del modal:
    let imgCkeckOk = document.createElement("img");
    imgCkeckOk.src = '../imagenes/check_correcto.svg';
    imgCkeckOk.style.cssText = "width: 90px; height: 90px; margin-top: 10px;";
    divContenedorCompraCorrecta.appendChild(imgCkeckOk);

    let tituloPagoRealizado = document.createElement('p');
    tituloPagoRealizado.innerHTML = '¡Pago realizado con éxito!';
    tituloPagoRealizado.className = 'text-success text-center';
    tituloPagoRealizado.style.cssText = 'font-size: 25px; font-weight: 500;';
    divContenedorCompraCorrecta.appendChild(tituloPagoRealizado);

    let infoGraciasPorSuCompra = document.createElement('p');
    infoGraciasPorSuCompra.innerHTML = 'Muchas gracias por su compra.';
    infoGraciasPorSuCompra.className = 'text-muted text-center';
    infoGraciasPorSuCompra.style.cssText = 'font-size: 15px; margin-bottom: 40px;';
    divContenedorCompraCorrecta.appendChild(infoGraciasPorSuCompra);

    let btnVolver = document.createElement('button');
    btnVolver.innerHTML = 'Volver a productos';
    btnVolver.className = 'btn btn-outline-secondary';
    
    btnVolver.addEventListener('click', () => {
      divModalBtnFinalizarCompra.remove();
      document.querySelector('.menuProductos').click();
      localStorage.clear();
      window.location.reload();
    });

    divContenedorCompraCorrecta.appendChild(btnVolver);
  }
}




function ModalVerElDetalle (producto) {
  //Div del modal:
  let divModalVerElDetalle = document.createElement("div");
  divModalVerElDetalle.className = "modal text-center";
  document.body.appendChild(divModalVerElDetalle);

  //Div contenedor de los componentes del modal:
  let divContenedorDelDetalle = document.createElement("div");
  divContenedorDelDetalle.style.cssText = "width: 60%; height: 85%; background: white; border-radius: 20px;";
  divModalVerElDetalle.appendChild(divContenedorDelDetalle);

  //Imagen del modal:
  let imgModalVerElDetalle = document.createElement("img");
  imgModalVerElDetalle.src = producto.imagen;
  imgModalVerElDetalle.alt = producto.alt;
  imgModalVerElDetalle.className = "efectoImg";
  imgModalVerElDetalle.style.cssText = "margin-top: 20px;";
  divContenedorDelDetalle.appendChild(imgModalVerElDetalle);

  //Producto del modal:
  let tituloModalVerElDetalle = document.createElement("h3");
  tituloModalVerElDetalle.innerHTML = producto.producto;
  divContenedorDelDetalle.appendChild(tituloModalVerElDetalle);

  //Precio del modal:
  let precioModalVerElDetalle = document.createElement("p");
  precioModalVerElDetalle.innerHTML = "$ " + producto.precio;
  precioModalVerElDetalle.style.cssText = "margin-bottom: 25px; color: #075ddf;";
  divContenedorDelDetalle.appendChild(precioModalVerElDetalle);

  //Detalle del modal:
  let detalleModalVerElDetalle = document.createElement("p");
  detalleModalVerElDetalle.innerHTML = producto.detalleLargo;
  divContenedorDelDetalle.appendChild(detalleModalVerElDetalle);

  // X para cerrar:
  let aXDetalle = document.createElement("a");
  aXDetalle.href = "javascript:void(0)";
  aXDetalle.innerHTML = "X";

  aXDetalle.addEventListener("click", function () {
    divModalVerElDetalle.remove();
  });

  divModalVerElDetalle.appendChild(aXDetalle);
}




function AgregarElProductoAlCarrito (e) {
  let botonAzul = e.target;
  let item = botonAzul.closest(".card");
  let itemTitulo = item.querySelector(".card-title").textContent;
  let itemPrecio = item.querySelector(".precio").textContent;
  let itemImagen = item.querySelector(".card-img-top").src;

  let nuevoItem = {
    titulo: itemTitulo,
    precio: itemPrecio,
    imagen: itemImagen,
    cantidad: 1,
  };
  AgregarItemAlCarrito(nuevoItem);
}




function CrearCarrito () {
  tbody.innerHTML = "";
  aCarrito.map((item) => {
    let tr = document.createElement("tr");
    tr.className = "trCarrito";

    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.innerHTML = 1;
    tr.appendChild(th);

    let tdProducto = document.createElement("td");
    tdProducto.className = "table__productos";
    tr.appendChild(tdProducto);

    let imgTdProducto = document.createElement("img");
    imgTdProducto.src = item.imagen;
    tdProducto.appendChild(imgTdProducto);

    let tituloTdProducto = document.createElement("p");
    tituloTdProducto.className = "titulo";
    tituloTdProducto.innerHTML = item.titulo;
    tdProducto.appendChild(tituloTdProducto);

    let tdPrecio = document.createElement("td");
    tdPrecio.className = "table__price";
    tdPrecio.innerHTML = item.precio;
    tr.appendChild(tdPrecio);

    let tdCantidad = document.createElement("td");
    tdCantidad.className = "table__cantidad";
    tr.appendChild(tdCantidad);

    let inputTdCantidad = document.createElement("input");
    inputTdCantidad.className = "inputDinamico";
    inputTdCantidad.setAttribute("type", "number");
    inputTdCantidad.setAttribute("value", "1");
    inputTdCantidad.setAttribute("min", "1");
    tdCantidad.appendChild(inputTdCantidad);

    let buttonTdCantidad = document.createElement("button");
    buttonTdCantidad.className = "delete btn btn-danger";
    buttonTdCantidad.innerHTML = "X";
    tdCantidad.appendChild(buttonTdCantidad);

    buttonTdCantidad.addEventListener("click", EliminarItemDelCarrito);

    tbody.appendChild(tr);

    tr.querySelector(".inputDinamico").addEventListener("change", ActualizarInput);
  });
  MontoTotalDelCarrito();
}



function AgregarItemAlCarrito (nuevoItem) {
  let inputContadorDinamico = tbody.getElementsByClassName("inputDinamico");
  for (let i = 0; i < aCarrito.length; i++) {
    if (aCarrito[i].titulo.trim() === nuevoItem.titulo.trim()) {
      aCarrito[i].cantidad++;
      let inputContadorDinamicoValor = inputContadorDinamico[i];
      inputContadorDinamicoValor.value++;
      MontoTotalDelCarrito();
      return null;
    }
  }
  aCarrito.push(nuevoItem);
  CrearCarrito();
}




function MontoTotalDelCarrito () {
  let total = 0;
  const itemCarritoTotal = document.querySelector(".itemCarritoTotal");
  const resumenSubTotal = document.querySelector(".resumenSubTotal");
  aCarrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ""));
    total = total + precio * item.cantidad;
  });

  itemCarritoTotal.innerHTML = `Total: $ ${total}`;
  resumenSubTotal.innerHTML = `$ ${total}`;
  AgregarEnLocalStorage();
}




function EliminarItemDelCarrito (e) {
  let botonBorrar = e.target;
  let tr = botonBorrar.closest(".trCarrito");
  let titulo = tr.querySelector(".titulo").textContent;
  for (let i = 0; i < aCarrito.length; i++) {
    if (aCarrito[i].titulo.trim() === titulo.trim()) {
      aCarrito.splice(i, 1);
    }
  }
  tr.remove();
  MontoTotalDelCarrito();
}





let btnVaciar = document.querySelector('.btnVaciar');
btnVaciar.addEventListener('click', VaciarCarrito);

function VaciarCarrito () {
  localStorage.clear();
  window.location.reload();
}




function ActualizarInput (e) {
  let actualizarInput = e.target;
  let tr = actualizarInput.closest(".trCarrito");
  let titulo = tr.querySelector(".titulo").textContent;
  for (let i = 0; i < aCarrito.length; i++) {
    if (aCarrito[i].titulo.trim() === titulo) {
      actualizarInput.value < 1 ? (actualizarInput.value = 1) : actualizarInput;
      aCarrito[i].cantidad = actualizarInput.value;
      MontoTotalDelCarrito();
    }
  }
}



// LOCALSTORAGE:
function AgregarEnLocalStorage () {
  localStorage.setItem("aCarrito", JSON.stringify(aCarrito));
}

window.onload = function () {
  let storage = JSON.parse(localStorage.getItem("aCarrito"));
  if (storage) {
    aCarrito = storage;
    CrearCarrito();
  }
};
