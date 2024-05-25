"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Copiar del ejercicio anterior todos los objetos de tipo de pokemon
que ha generado.
Utilice ese objetos para crear una tarjeta de descripción de cada uno,
agregue esa información al HTML utilizando "innerHTML" como se vio
en los últimos ejemplos de clase.

*/


// Template para que utilice:

<article class="${pokemonTipo.estiloClase}">
  <div class="header">
    ${pokemonTipo.titulo}
  </div>
  <div>
    <p id="descripcion">
      ${pokemonTipo.descripcion}
    </p>
  </div>
  <img
    src="${pokemonTipo.icono}"
    class="icon-type"
    alt="icon type"
  />
</article>




function crearTarjeta(tipo) {
  const tarjeta = document.createElement("article");
  tarjeta.className = tipo.estiloClase;

  const header = document.createElement("div");
  header.className = "header";
  header.textContent = tipo.titulo;

  const descripcion = document.createElement("p");
  descripcion.id = "descripcion";
  descripcion.textContent = tipo.descripcion;

  const miContenedor = document.createElement("div");
  miContenedor.id = "miContenedor";
  const imagen = document.createElement("img");
  imagen.src = tipo.icono;
  imagen.className = "icon-type";
  imagen.alt = "icon type";

  miContenedor.appendChild(imagen);

  tarjeta.appendChild(header);
  tarjeta.appendChild(descripcion);
  tarjeta.appendChild(miContenedor);

  return tarjeta;
}

// Llama a la función para crear las tarjetas y agregarlas al contenedor
const tarjetasContainer = document.getElementById("tarjetasContainer");
tarjetasContainer.appendChild(crearTarjeta(tipoAgua));
tarjetasContainer.appendChild(crearTarjeta(tipoFuego));
tarjetasContainer.appendChild(crearTarjeta(tipoElectricidad));
tarjetasContainer.appendChild(crearTarjeta(tipoPlanta));
