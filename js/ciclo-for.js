// Ciclo for o el ciclo para

// Ejemplo 1: Muestre la tabla de multiplicar con base en 5 hasta 10

/**
 * 5x1=5
 * 5x2=10
 *  */

let num = 1; // Incializo una variable o un contador
const base = 5;
let resultado = '';

for (num = 1; num <= 10; num++) { //num++ significa num+1, aumenta de uno en uno
    // Para mostrar el resultado con el incremento
    resultado += `${base} x ${num} = ${num*base}\n`;// \n ingresa un salto de línea
}

console.log(resultado);