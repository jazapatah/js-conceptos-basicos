// if y else

// Ejemplo 1: Las personas mayores o iguales a 18 pueden ingresar en un Bar
let edad = 0; // También se puede dejar vacía, let edad;

if (edad >= 18) {
    console.log(`Puede ingresar, tu edad es: ${edad}`);
} else {
    console.log('No puedes ingresar, tu edad es: ' + edad);
}
// En este caso debería salir que no, ya que Edad = 0

// Ejemplo 2: Para las elecciones de presidente, los votantes deben ser mayores de edad (condición para ejercer el voto)
console.warn('Para las elecciones, aplicando condicional if y else')

let edadVotante = 18;

if (edadVotante >= 18) {
    console.log('Puedes votar');
} else {
    console.log('No puedes votar');
}

// Ejemplo 3: Cuáles fueron las asignaturas del día Martes Habilidades y Frontend, mostrar un mensaje con los nombres de los profesores
console.warn('Condicional con operadores de comparación and(&&)');
const materia1 = 'Habilidades';
const materia2 = 'Frontend';   
let dia = 'Martes'

if (dia === 'Martes' && materia1 === 'Habilidades' && materia2 === 'Frontend' ) { // || es "o" && es "y"
    console.log('Jorge ' + 'y'+ ' Diana');
} else {
    console.log('No son los profes')
}

// Condicional llamado Switch
// Ejemplo 4: Determinar las actividades habituales de acuerdo a los días de la semana
console.warn('Condicional Switch')
const diaSemana = 1;// Camel Case

// Sintaxis Switch (Switch Case)
switch (diaSemana) {
    case 0:
        console.log('Dia de la Semana: ' + 'Domingo');
        console.log('Ciclo vía ');
        console.log('Voy a cine ');
        break;
    case 1:
        console.log('Dia de la Semana: ' + 'Lunes');
        console.log('Estudiar ');
        console.log('Trabajar ');
        console.log('Doy clase al grupo 3 ');
        break;
    case 2:
        console.log('Dia de la Semana: ' + 'Martes');
        console.log('Estudiar ');
        console.log('Trabajar ');
        console.log('Doy clase al grupo 2 y 5 ');
        break;
    case 3:
        console.log('Dia de la Semana: ' + 'Miércoles');
        console.log('Estudiar ');
        console.log('Trabajar ');
        console.log('Doy clase al grupo 1 y 3 ');
        break;
    case 4:
        console.log('Dia de la Semana: ' + 'Jueves');
        console.log('Estudiar ');
        console.log('Trabajar ');
        console.log('Doy clase al grupo 1 y 3 ');
        break;
    case 5:
        console.log('Dia de la Semana: ' + 'Viernes');
        console.log('Estudiar ');
        console.log('Trabajar ');
        console.log('Doy clase al grupo 2 y 5 ');
        break;
    case 6:
        console.log('Dia de la Semana: ' + 'Sábado');
        console.log('Estudiar ');
        console.log('Trabajar ');
        console.log('Tomarme politas en la noche ');
        break;
    
    default:
        console.log('Día de la semana: ' + 'no encontrado');
        break;
}

// Ejemplo 5: Determinar los eventos de la feria de las flores

const diaEvento = 'Viernes';

switch (diaEvento) {
    case 'Viernes':
        console.log('Apertura de la feria ' + 'Viernes 28/07/23');
        break;
    case 'Sabado':
        console.log('Feria a ritmo de bicicleta ' + 'Sabado 29/07/23');
        break;
    case 'Domingo':
        console.log('Feria a ritmo de bicicleta ' + 'Domingo 30/07/23');
        break;

    default:
        console.log('Evento no encontrado');
        break;
}