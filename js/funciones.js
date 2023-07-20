// Funciones
/**
 * Funciones tradicionales function
 */

function primerNombre() {
    console.log('Jorge');
}
// Prueba propia de una función tomando de ejemplo la anterior función
function primerNombre2(nombre) {
    console.log(`${nombre}`);
}
// Llamar la función
primerNombre(); // se llama con el nombre seguido de paréntesis
primerNombre2('Jordan');

// Otra forma de crear funciones, función anónima
const segundoNombre = function() {
    console.log('Enrique')
}
// Llamar la función
segundoNombre();

// Crear una función con argumentos
/**
 * 
 * @param {number} edad tipo número entero
 */
function miEdad(edad){
    console.log('Mi edad es: '+ edad);
}

miEdad(23);

// Función de flecha, en este caso sin parámetros =>
const estadoCivil = () => {
    console.log(`Estado civil: ${'soltero'}`);
}

estadoCivil();

// Ejemplo: crear la suma de dos números utilizando función de flecha

const suma = (num1,num2) => {
    return num1 + num2;
}
// Llamar la función Suma
console.log(suma(2,3));
console.log('La suma es: ' + suma(2,3));

// Función para unificar los nombres
const UnirNombre = (nombre1,nombre2) => {
    return nombre1 + nombre2;
}
console.log('Tu nombre completo es: ' + UnirNombre('Jonatan',' Alexander'));