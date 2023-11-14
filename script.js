// console.log('Hola Promo P8');

//Trabajamos de dos maneras js: en el navegador y en el terminal (con Node.js)

//Sintaxis del lenguaje

/* Variables */

let name = "Pepe";
let otroNombre = "Rosa";
// console.log(name);
// name = "Rosa";
// console.log(name);

// const dias = ["lunes","martes","miercoles","..."]
// console.log(dias);
// dias = 25;
// console.log(dias);

/* Control de flujo - toma de decisiones */
/* if...else ó if...else if... ó switch...case */

/* cual es el número mayor de dos números */

// const num1 = 5;
// const num2 = 4;

// if(num1 > num2){
//     console.log(num1 + " es mayor que "+ num2);
// } else {
//     console.log(num2 + " es mayor que "+ num1);
// }

/* Ciclos | Loops | Iteradores .... */

/* while, do...while  */
/* for() */
// for(let number=1; number < 11; number++){
//     console.log(number);
// }

/* Trabajo con strings */

// let miNombreEnMiPrograma = "PEPE";

// if(name.toUpperCase() === miNombreEnMiPrograma){
//     console.log("iguales");
// } else {
//     console.log('diferentes');
// }

// let miNombreEnMiPrograma2 = "ROSA";

// if(otroNombre.toUpperCase() === miNombreEnMiPrograma2){
//     console.log("iguales");
// } else {
//     console.log('diferentes');
// }
/* Se puede trabajar con muchos tipos de información: Number, Math,... */

/* Calcular un número aleatorio */
// console.log(Math.floor(Math.random()*10))

/* Funciones */
const lista1 = ['PEPE', 'ROSA', 'ANA'];
const lista2 = ['ALAN', 'ROSE', 'MIKE'];


// function compararNombres(nombre, listaNombre){
//     // let miNombreEnMiPrograma = "PEPE";

//     // let resultado = "No existe en la lista";

//     // for(let i = 0; i< listaNombre.length; i++){
//     //     if(nombre.toUpperCase() === listaNombre[i]){
//     //         console.log("iguales");
//     //         break;
//     //         // resultado = "Existe en la lista";
//     //     }
//     // }

//     let mensaje = "existe en la lista";
//     // let resultado;

//     // if(listaNombre.includes(nombre.toUpperCase())){
//     //     resultado = "sí"
//     // } else {
//     //     resultado = "no"
//     // }

//    return  listaNombre.includes(nombre.toUpperCase())? nombre+ ' '+ ' sí '+ mensaje: nombre+ ' '+ ' no '+ mensaje;
// }

// const compararNombres = (nombre, listaNombre) => listaNombre.includes(nombre.toUpperCase())? nombre+ ' sí existe en la lista': nombre+ ' no existe en la lista';

const compararNombres = (nombre, listaNombre) => listaNombre.includes(nombre.toUpperCase()) ? ` ${nombre} sí existe en la lista` : ` ${nombre} no existe en la lista`;

console.log(compararNombres(otroNombre, lista1));
// document.write(compararNombres(otroNombre, lista1))
document.getElementsByTagName('p')[0].innerText = compararNombres(otroNombre, lista1)

// console.log(compararNombres(otroNombre, lista2));
// document.write(compararNombres(otroNombre, lista2))

