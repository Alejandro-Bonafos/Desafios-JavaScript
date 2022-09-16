let presupuesto = parseFloat(prompt("Ingrese el importe con el que contas para viajar y te dejamos las opciones mas factibles"))
let cantidadCuotas = parseInt(prompt("lo queres pagar en cuotas? en cuantas cuotas lo pagarias: 1, 12 , 18 o 24"))

let unpago =((presupuesto * 20)/100)
 
let totalconcuotas = presupuesto

const calculador = () => {

    if (cantidadCuotas != 1) {
      //  for (i = 1; i <= cantidadCuotas; i++) {
            let porCuota =((presupuesto * 15) / 100)
            totalconcuotas = totalconcuotas + porCuota
         

        let valorPorCuota = (totalconcuotas / cantidadCuotas).toFixed(2) 
        confirm ("Al acceder al plan de cuotas se te sumara un 15% al precio final. Deseas continuar?")

        document.write( "Tu eleccion fue " + cantidadCuotas + "  y tu presupuesto es de  $" + presupuesto + ". Abonando en " + cantidadCuotas + " el precio de cada cuota es de $" + valorPorCuota + " ya que cuenta con un recargo del 15% en el total. Te Quedaria en un total de  $" + totalconcuotas + " Ahora decinos, a donde te gustaria viajar? Podes elegir hasta dos opciones" )
    }
    
    else {
       document.write( "Tu presupuesto es de $" + presupuesto + "Tenemos algo que contarte! Gracias a el metodo de pago que seleccionaste accedes a un descuento del  20%  por realizar el pago en 1 cuota. Te quedaria un total de $" + (presupuesto - unpago) +  " Generaste un ahorro de $" +  unpago  +  " FELICIDADES!. Ahora decinos, a donde te gustaria viajar? Podes elegir hasta dos opciones ")
    
    }
    
}

calculador()








  

