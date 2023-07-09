const todoLosRegistros = document.querySelector("#todoLosRegistros")
const inputTotal = document.querySelector("#total")
const inputCosto = document.querySelector("#costo")
const pGanancia = document.querySelector("#ganancia")
const pYefferson = document.querySelector('#yefferson')
//const inputDetalles = document.querySelector('#detalles')


function restaInputs() {
    const ganancia = parseFloat(inputTotal.value) - parseFloat(inputCosto.value)
    const gananciaRedondeada = ganancia.toFixed(2)

    const gananciaYefferson = gananciaRedondeada / 2;

    if (gananciaRedondeada) {
        pGanancia.innerText = gananciaRedondeada + '$'
        pYefferson.innerText = `Yefferson: ${gananciaYefferson.toFixed(2)} $ Total`
        return
    }

}

/*
inputDetalles.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        inputDetalles.value += "\n";
    }
})
*/

inputTotal.addEventListener("input", restaInputs)
inputCosto.addEventListener("input", restaInputs)
setTimeout(restaInputs, 2000)


/*
Refrescos
Sábado 08/07/23

✓Total: 13.90$
 Costo: 10.79$
 Ganancia: 3.11$
 ÷2 : 1.55$ c/u)

✓Yefferson: 12.34$ total

✓Forma de Pago/Dinero
•245.28bs punto (se transfiere el 09)
•20 bs Efectivo
•3$

*/