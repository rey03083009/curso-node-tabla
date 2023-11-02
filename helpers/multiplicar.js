const fs = require('fs');
const colors = require('colors')
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

 try {
    
    if(listar) {
        console.log('==============='.blue);
        console.log( 'Tabla del: '.green, colors.cyan(base) );
        console.log('==============='.blue);
    }


    let salida = '';

    for(let i = 1; i <= hasta; i++) {
        salida += (`${base} x ${i} = ${ base * i}\n`);
    };

    if(listar) {
        console.log(salida.underline.bgYellow);
    }
    

    
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
    
    return `tabla-${base}.txt`;

 } catch (error) {

    console.log(error);

 }


}

module.exports = {
    crearArchivo: crearArchivo
}