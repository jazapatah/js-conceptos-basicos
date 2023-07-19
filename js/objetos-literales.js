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

//min 2:05:37 