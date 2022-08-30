let presupuesto = parseFloat(prompt("Ingrese el importe con el que contas para viajar y te dejamos las opciones mas factibles"))
let cantidadCuotas = parseInt(prompt("lo queres pagar en cuotas? en cuantas cuotas lo pagarias: 1, 12 , 18 o 24"))

let unpago =((presupuesto * 20)/100)
 
let totalconcuotas = presupuesto

const calculador = () => {

    if (cantidadCuotas != 1) {
        for (i = 1; i <= cantidadCuotas; i++) {
            let porCuota =((presupuesto * 2) / 100)
            totalconcuotas = totalconcuotas + porCuota
         }

        let valorPorCuota = (totalconcuotas / cantidadCuotas).toFixed(2)
        alert ("Al acceder al plan de cuotas se te sumara un 2% en cada cuota. Deseas continuar?")

        document.write( "Tu presupuesto es de  $" + presupuesto + " podemos ofrecerte los siguientes destinos: Tucuman - Cordoba - Corrientes. Abonando en " + cantidadCuotas + " el precio de cada cuota es de $" + valorPorCuota + " ya que cuenta con un recargo del 2% en cada cuota. Te Quedaria en un total de  $" + totalconcuotas)
    }
    
    else {
        document.write( "Tu presupuesto es de $" + presupuesto + " y tenemos para ofrecerte estos destinos Tucuman - Cordoba - Corrientes. Pero ademas te contamos que accedes a un descuento del  20%  por realizar el pago en 1 cuota. Te quedaria un total de $" + (presupuesto - unpago) +  " Generaste un ahorro de $" +  unpago  + " FELICIDADES!")

    }
    

}

calculador()




  

