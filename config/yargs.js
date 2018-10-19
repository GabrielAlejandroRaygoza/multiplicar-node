const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en cosonla la tabla de multiplicar', opts)
    .command('Crear', 'Crear tabla de multiplicar con base y limite', opts)
    .help()
    .argv;


module.exports = {
    argv
}