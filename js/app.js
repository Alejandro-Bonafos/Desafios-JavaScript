const listaDeDestino = [];
let total = 2;

do{
    let ingreso= prompt ("ingrese sus destinos (Podes elegir hasta dos opciones) ")
   listaDeDestino.push(ingreso.toUpperCase());
   console.log(listaDeDestino.length);
}while (listaDeDestino.length!=total)
const alternativas = ( "CORDOBA y SALTA")


let listaFinal = listaDeDestino.concat([alternativas])
confirm( "tenemos otros destinos para recomendarte, te gustaria saber cuales son?")
document.write("  Estas son las opciones que elegiste segun tu presupuesto y te dejamos otras opciones que se ajustan a tu presupuesto " + listaFinal)


