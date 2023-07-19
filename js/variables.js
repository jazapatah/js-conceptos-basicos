// para declarar variables se utilizan var, let y const
//Mejor no usar var, puede ocasionar una serie de inconvenientes

/** 
 * Tipos de datos son: string (textos), number,
 *  boolean (false, true), symbol, object, null
 * y undefined
 */ 

let edad = 20; //Tipo number

const miNombre = 'Jorge'; //Tipo string

const casado = false; //Tipo boolean

/* Cuando declaro una variable con let se puede modificar, pero si la declaro con const, no puedo hacerlo */

edad = 25;

console.log(edad)
console.table(edad, casado, miNombre);
//Concatenación usando el símbolo "+"
console.table('Mi edad es ' + edad, 'mi estado civil es ' + casado, 'Mi nombre es ' + miNombre);

// Operadores matemáticos

const num1 = 20;
const num2 = 20; // Js es case sensitive
const num3 = 60;
const suma = num1 +  num2 + num3;
const resta = num1 - num2 - num3;
const prod = num1*num2*num3;
const division = num1/num2/num3;

console.log(`La suma:  ${suma}`); //Concatenación con block tic, comillas oblicuas, alt gr + }

console.log(`La resta:  ${resta}`);
console.log(`El producto:  ${prod}`);
console.log(`La división:  ${division}`);