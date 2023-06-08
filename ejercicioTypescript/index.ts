import { Persona, Sexo } from "./class/Persona";
import { Direccion, Provincia } from "./class/Direccion";
import { Mail } from "./class/Mail";
import { Telefono } from "./class/Telefono";


let agenda: Persona[] = [];

let casaFran = new Direccion("calleFran", 10, 2, "D", "28001", "Madrid", Provincia.Madrid);
let mailFran = new Mail("fran@mail.com");
let telefonoFran = new Telefono("654654654");

let fran = new Persona("Fran", "Garcia", "00000000L", new Date("2000-01-01"), "azul", Sexo.hombre, [casaFran], [mailFran], [telefonoFran], ["clase", "trabajo"]);
agenda.push(fran);

let casaMaria = new Direccion("calleMaria", 35, -1, "", "08042", "Barcelona", Provincia.Barcelona);
let mailMaria = new Mail("maria@mail.com");
let telefonoMaria = new Telefono("678678678");

let maria = new Persona("Maria", "Garcia", "22222222B", new Date("2005-01-01"), "amarillo", Sexo.mujer, [casaMaria], [mailMaria], [telefonoMaria], ["vecina"]);
agenda.push(maria);

let casaJesus = new Direccion("calleJesus", 125, 5, "4", "46001", "Valencia", Provincia.Valencia);
let mailJesus = new Mail("jesus@mail.com");
let telefonoJesus = new Telefono("699000111");

let jesus = new Persona("Jesus", "Perez", "11111111A", new Date("2015-12-25"), "blanco", Sexo.hombre, [casaJesus], [mailJesus], [telefonoJesus], ["trabajo"]);
agenda.push(jesus);

console.debug(agenda)
console.log("Personas en la agenda: ")
agenda.forEach(p => console.log(p.nombre))

let dniBuscado="22222222B"
console.log("# direcciones asociadas al dni buscado: " + agenda.find(p => p.dni == dniBuscado)?.direcciones.length)

let personaBuscada = agenda.find(p => p.dni == dniBuscado);
if (personaBuscada != undefined ){
    console.log("Coincidencias por dni " + dniBuscado + ": " + personaBuscada?.nombre)
    personaBuscada.direcciones.push(new Direccion("Calle2"));
    personaBuscada.mails.push(new Mail("mail2@mail.com"));
    personaBuscada.telefonos.push(new Telefono());
    console.log("Direccion añadida")
}else{
    console.log("Persona no encontrada")
}

console.log("# direcciones asociadas al dni buscado: " + agenda.find(p => p.dni == dniBuscado)?.direcciones.length)
