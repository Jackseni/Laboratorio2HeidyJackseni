// Crear función para llamar
//funciones y calcular areas.

let calcSurface = (figure) => {
    const surfaces = require('./surfaces.js')

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    // Validar la figura a calcular.
    switch (figure) {
        case 'square':
            process.stdout.write('Por Favor Ingrese el lado de un cuadrado: ');
            process.stdin.on('data', (chunk) => {
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);
                process.stdout.write(`La superficie del cuadrado es ${surface} metros cuadrados \n`);
                process.stdin.destroy();
            });
            break;

        case 'triangle':
            process.stdout.write('Por Favor Ingrese la base y la altura de un triángulo, separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);
                process.stdout.write(`La superficie del triángulo es: ${surface} metros cuadrados\n`);
                process.stdin.destroy();

            });
            break;

        case 'rectangle':
            process.stdout.write('Por Favor Ingrese la base y la altura de un rectangulo, separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);
                process.stdout.write(`La superficie del rectángulo es: ${surface} metros cuadrados\n`);
                process.stdin.destroy();

            });
            break;

        case 'circle':
            process.stdout.write('Por favor ingrese el radio de un circulo: ');
            process.stdin.on('data', (chunk) => {
                let surface = surfaces.circle(parseFloat(chunk));
                process.stdout.write(`La superficie del circulo es ${surface} metros cuadrados \n `);
                process.stdin.destroy();

            });
            break;

        case 'ellipse':
            process.stdout.write('Por favor ingrese el Area y la Base del elipse, separados por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.ellipse(base, height);
                process.stdout.write(`La superficie de la elipse es de ${ surface } metros cuadradros \n `);
                process.stdin.destroy();

            });
            break;


        default:
            process.stdout.write('Olvidó la opción. Por Favor Intente de nuevo.\n');
            process.exit();
            break;
            break;
    }
}

calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write('Hasta la próxima\n');
});