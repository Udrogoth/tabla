const { creatArchivo } = require('./helpers/multiplicas');
const argv = require('./config/yargs');
console.clear();

console.log('base: yargs', argv.base);

creatArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

