const yargs = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        defaultDescription:'crea la base de multiplicar',
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un Numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: false,
    })


    .argv;

    module.exports = argv;
