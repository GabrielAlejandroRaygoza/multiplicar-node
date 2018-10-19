//Requireds
const fs = require('fs'); //existe en node
var colors = require('colors');
// const fs = require('express');//No existe en node pero se instala
// const fs = require('./fs');//Archivos que nostros creamos

let listar = (base, limite = 10) => {

    console.log("====================".green);
    console.log(`tabla de ${ base }`.green);
    console.log("====================".green);
    if (limite <= 0) {
        console.log('No se aceptan estos limites');
        return;
    }
    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listar
};