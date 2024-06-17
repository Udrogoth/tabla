const fs = require('fs')
const colors = require('colors')
const creatArchivo = async (multiplo = 1, listar, hasta) => {
    try {
        console.log('========================');
        console.log(`====Tabla del ${multiplo}===`);
        console.log('========================');

        let salida = '';
        let consola = '';
        let limite = hasta;
        for (let i = 0; i <= limite; i++) {
            salida += (`${multiplo} X ${i} = ${multiplo * i}\n`)
            consola += (`${multiplo} ${'X'.green} ${i} = ${multiplo * i}\n`)
        }
        let check = (listar) ? consola : 'Sin Listar';
        console.log(check);
        console.log('========================');


        fs.writeFileSync(`./salida/tabla-${multiplo}.txt`, salida);
        return (`tabla-${multiplo}.txt creada`);


    } catch (error) {
        throw error;
    }
};

module.exports = { creatArchivo };