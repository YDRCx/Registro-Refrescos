const todoLosRegistros = document.querySelector("#todoLosRegistros")
const inputTotal = document.querySelector("#total")
const inputCosto = document.querySelector("#costo")
const inputPunto = document.querySelector("#punto")
const inputEfectivo = document.querySelector("#efectivo")
const inputTransferencia = document.querySelector("#transferencia")
const textareaDetalles = document.querySelector('#detalles')
const inputDivisa = document.querySelector("#divisa")
const pGanancia = document.querySelector("#ganancia")
const pGananciaDividida = document.querySelector('#gananciaDividida')
const pGananciaYefferson = document.querySelector('#yefferson')
const inputFecha = document.querySelector('#myDate')
const btnCopiar = document.querySelector('#copiar')
const btnBorrar = document.querySelector('#borrar')
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


/*Copiar texto a Portapapeles*/

btnCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {

    const ganancia = parseFloat(inputTotal.value) - parseFloat(inputCosto.value)
    const gananciaRedondeada = ganancia.toFixed(2)
    const gananciaDividida = gananciaRedondeada / 2;

    /**/
    const fechaAFormatear = inputFecha.value
    const fechaObjeto = new Date(fechaAFormatear)
    const dia = fechaObjeto.getDate();
    const mes = fechaObjeto.getMonth() + 1; // Los meses en JavaScript son base 0, por lo que se suma 1
    const anio = fechaObjeto.getFullYear();

    const fechaNuevoFormato = `${mes.toString().padStart(2, "0")}-${dia.toString().padStart(2, "0")}-${anio}`;
    /**/

  const texto =
`*Refrescos*
*${fechaNuevoFormato}*
  
Total: ${inputTotal.value}
Costo: ${inputCosto.value}
Ganancia: ${gananciaRedondeada}
÷2 :${gananciaDividida} c/u)
  
*Yefferson: ${(parseFloat(inputCosto.value) + gananciaDividida).toFixed(2)} Total*
  
*Forma de Pago/Dinero*
• ${inputPunto.value} Punto
• ${inputEfectivo.value} Bs Efectivo
• ${inputTransferencia.value} Transferencia
• ${inputDivisa.value} Divisas
• Detalles: ${textareaDetalles.value}
`; // Reemplaza con el texto que deseas copiar

  copiarTextoAPortapapeles(texto)
  console.log(texto);
}

function copiarTextoAPortapapeles(texto) {
    navigator.clipboard.writeText(texto)
    .then(() => {
        console.log("Texto copiado al portapapeles: " + text);
      })
      .catch((error) => {
        console.error("Error al copiar el texto: " + error);
      });
}

/*
Refrescos
Sábado 08/07/23

✓Total: 13.90$
Costo: 10.79$
 Ganancia: 3.11$
 ÷2 : 1.55$ c/u)

✓gananciaDividida: 12.34$ total

✓Forma de Pago/Dinero
•245.28bs punto (se transfiere el 09)
•20 bs Efectivo
•3$

*/






/*
inputDetalles.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        inputDetalles.value += "\n";
    }
})
*/