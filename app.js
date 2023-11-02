const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv  = require('./config/yargs');





console.clear();

//No se utilizara nuevamente en el curso
/*const [, , arg3] = process.argv
const [, base] = arg3.split('=')*/



//const base = 2;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.cyan) )
    .catch(error => console.log(error))
