// Sintaxis de un objeto literal, posee características y es utilizado en programación orientada a objetos (POO o OOP)
let auto = {
    nombre:'Sandero',
    marca: 'Renoult',
    placa: 'ARY-510',
    color: 'Negro',
    precio: 52000000,
    estado:true,
    ciudad:'Medellin',
};
// Muestra en la consola todas las propiedades del objeto
console.log({auto});
console.table({auto});

// Mostrar el nombre del auto, consulta de una propiedad
console.warn('Mostrar el nombre del auto');
console.log('Nombre:', auto.nombre); // nombre del objeto.propiedad del objeto
console.log('Precio y el color:', auto['precio'], auto['color']); //Otra forma de mostrar información del objeto

// Crear una nueva propiedad para el objeto
auto.tipoAuto = 'Familiar'; // camelCase
auto.tipoAuto1 = 'Familiar-GamaBaja'; // camelCase
auto.tipoAuto2 = 'Familiar-GamaAlta'; // camelCase
console.log(auto);

// Eliminar una propiedad del objeto
delete auto.tipoAuto;
console.log(auto);

// Crear un objeto para determinar las propiedades de una película

let pelicula = {
    nombre:'Indiana Jones 5',
    actor1: 'Harrison Ford',
    actor2: 'Antonio Banderas',
    actor3: 'Phoebe Waller-Bridge',
    actor4: 'Mads Mikkelsen',
    estreno: '29 de Junio de 2023',
    director: 'James Mangold',
    presupuesto:300000000,
    // Anidación de objeto, con arreglo
    actores: ['Harrison Ford', 'Antonio Banderas', 'Phoebe Waller-Bridge', 'Mads Mikkelsen'],
};

console.warn('Película');
console.table(pelicula);

// Cuántos actores hay en el objeto de película
console.log('Los actores son: ', pelicula.actores.length); // .lenght, da el número de los elementos de un arreglo

// Anexar una propiedad para el objeto pelicula, en que salas
pelicula.salas = ['Viva', 'Mayorca', 'Florida', 'Los Puentes'];

console.log(pelicula)

//min 2:40:24 