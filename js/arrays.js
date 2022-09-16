const territorio = ['Norte Grande', 'Patagonia', 'Cuyo', 'Centro']

function mostrarTerritorios() {
    console.log(territorio)
}

function agregaprovincia(){
    let nombre = prompt ("Donde te gustaria ir segun el territorio elegido:")
    let ciudad = prompt ("Ingresa la una ciudad de la provincia elegida:")
    let dias = prompt ("cuantos dias te quedarias?")
      provincias.push(new Provincia(nombre, ciudad, dias ))
       console,table(provincias)
}
