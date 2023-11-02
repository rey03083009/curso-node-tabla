const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type:'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type:'boolean',
            default: false,
            describe: 'Muestra la tabla en consola, sin "-l" no mostrara resultados'
        })  
        .option('h', {
            alias: 'hasta',
            type:'number',
            default: 10,
            describe: 'Elige hasta que numero multiplicar'
        })                     
        .check((argv, options) => {
            if( isNaN( argv.b)) {
                throw 'La base tiene que ser numero'
            }
            return true;
        })
        .argv;


module.exports = argv;