const todoLosRegistros = document.querySelector("#todoLosRegistros")
const inputTotal = document.querySelector("#total")
const inputCosto = document.querySelector("#costo")
const inputPunto = document.querySelector("#punto")
const inputEfectivo = document.querySelector("#efectivo")
const inputTransferencia = document.querySelector("#transferencia")
const textareaDetalles = document.querySelector('#detalles')
const inputDivisa = document.querySelector("#divisa")
const inputFechaEntregaPunto = document.querySelector('#fechaEntregaPunto')
const pGanancia = document.querySelector("#ganancia")
const pGananciaDividida = document.querySelector('#gananciaDividida')
const pGananciaYefferson = document.querySelector('#yefferson')
const inputFecha = document.querySelector('#fecha')
const btnCopiar = document.querySelector('#copiar')
const btnBorrar = document.querySelector('#borrar')
const mostrarCopiado = document.querySelector('.copiado')
//const inputDetalles = document.querySelector('#detalles')


function restaInputs() {
    
    const ganancia = parseFloat(inputTotal.value) - parseFloat(inputCosto.value);
    const gananciaRedondeada = ganancia.toFixed(2)
    
    const gananciaDividida = gananciaRedondeada / 2;
    
    if (gananciaRedondeada) {
        pGanancia.innerText = parseFloat(gananciaRedondeada) + ' $'
        pGananciaDividida.innerText = `${gananciaDividida.toFixed(2)} $`  
        pGananciaYefferson.innerText = (parseFloat(inputCosto.value) + gananciaDividida).toFixed(2) + ' $'
        return
    }

}

inputTotal.addEventListener("input", restaInputs)
inputCosto.addEventListener("input", restaInputs)
setTimeout(restaInputs, 2000)


/***** Copiar texto a Portapapeles ******/

btnCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {

    const ganancia = parseFloat(inputTotal.value) - parseFloat(inputCosto.value)
    const gananciaRedondeada = ganancia.toFixed(2)
    const gananciaDividida = gananciaRedondeada / 2;

    /** Formatear Fecha **/
    const fechaAFormatear = inputFecha.value
    const fechaObjeto = new Date(fechaAFormatear)
    const dia = fechaObjeto.getUTCDate(); // Retorna el día del mes (1 al 31)
    const mes = fechaObjeto.getUTCMonth() + 1; // Retorna el mes (0 a 11), por eso sumamos 1
    const anio = fechaObjeto.getUTCFullYear(); // Retorna el año en formato completo (por ejemplo, 2023)
    const fechaNuevoFormato = `${dia.toString().padStart(2, "0")}-${mes.toString().padStart(2, "0")}-${anio}`;

    /*** Seleccionar el dìa de la semana ***/
    const fechaDiaSemana = new Date(inputFecha.value);
    const numeroDiaSemana = fechaDiaSemana.getUTCDay(); // Obtenemos el número del día de la semana (0 para domingo, 1 para lunes, etc.)
    const nombresDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];    
    const diaSemana = nombresDiasSemana[numeroDiaSemana]; // Obtenemos el nombre del día de la semana a partir del número obtenido

    /** ***************** */

const texto =
`*Refrescos*
*${diaSemana}* *${fechaNuevoFormato}*
  
Total: ${inputTotal.value}
Costo: ${inputCosto.value}
Ganancia: ${gananciaRedondeada}
÷2: ${gananciaDividida.toFixed(2)} (c/u)
  
*Yefferson: ${(parseFloat(inputCosto.value) + gananciaDividida).toFixed(2)} Total*
  
*Forma de Pago/Dinero*
• ${inputPunto.value} Punto (Se transfiere el ${inputFechaEntregaPunto.value})
• ${inputEfectivo.value} Bs Efectivo
• ${inputTransferencia.value} Transferencia
• ${inputDivisa.value} Divisas

• *Detalles:*
${textareaDetalles.value}`;

  copiarTextoAPortapapeles(texto)

  /** Mostar el boton de copiado al hacer click en copiar */
  mostrarCopiado.classList.remove('inactive')
  setTimeout(function() {mostrarCopiado.classList.add('inactive');}, 2000);

  /** Sonido del boton de copiar */
  const audio = new Audio('./sonido/Espada.wav');
  audio.play();

}



/** Esta funcion copia en el portapapeles el texto del navegador */
function copiarTextoAPortapapeles(texto) {
  navigator.clipboard.writeText(texto)
  .then(() => {
      console.log("Texto copiado al portapapeles: " + texto);
    })
    .catch((error) => {
      console.error("Error al copiar el texto: " + error);
    });
}







