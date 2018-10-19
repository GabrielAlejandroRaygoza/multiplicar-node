const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));

        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];


//console.log('LIMITE', argv.limite);