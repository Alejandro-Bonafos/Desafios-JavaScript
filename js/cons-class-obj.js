//objeto literal

 const norte = {
prov:"Misiones",
capital: "Posadas",
clima: "caluroso"
}
const sur = {
    prov:"Tierra del Fuego",
    capital: "Ushuaia",
    clima: "Frio/humedo"
    }


class Provincia{
    constructor (nombre, ciudad, dias){
        this.nombre = nombre
        this.ciudad = ciudad
        this.dias = dias

    }
}

const provincias = []