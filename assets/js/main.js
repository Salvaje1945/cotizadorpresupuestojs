const esImponsible = 'No podemos presupuestar su proyecto debido a que: ';

const pagWeb = 'web';

const wPress = 'wordpress';

const horasTrabajoXdia = 6;

const diasTrabajoXsemana = 5;

const precioXplazoSemana = 750;

const precioXplazoQuincena = 500;

const precioXplazoMes = 350;

const recargoXpresencial = 75;

const extraXwpress = 150;

const maximoSeccionesIncluidas = 4;

const recargoXseccionPagina = 30;

const extraXlogo = 75;

const hostingAnual = 35;

const dominioAnual = 15;

const mantenimientoAnual = 150;

const descXunPago = 5; 

const recargoXdosCuotas = 50;

const recargoXtresCuotas = 100;

const recargoXseisCuotas = 150;

const recargoXdoceCuotas = 500;

const recargoXpresExtraLogo = 25;

const precioXhoraExtra = 18;



let bienVenido = alert('¡Bienvenido! A continuación le haremos algunas preguntas sobre su proyecto para armar el presupuesto');

let proyectoTipo = prompt('¿Qué clase de sitio web necesita para su proyecto? Si necesita un sitio web original escriba "web", si necesita una plantilla de Wordpress personalizada escriba "wordpress".');

while(proyectoTipo == null || proyectoTipo == '' || proyectoTipo != 'web' || proyectoTipo != 'wordpress'){
    if(proyectoTipo == 'web' || proyectoTipo == 'wordpress'){
        break;
    } else {
        error = alert('Es necesario que indique el tipo de proyecto para continuar con la cotización del presupuesto');
        proyectoTipo = prompt('¿Qué clase de sitio web necesita para su proyecto? Si necesita un sitio web original escriba "web", si necesita una plantilla de Wordpress personalizada escriba "wordpress".');
    }
}

let hosting = confirm('¿Desea incluir en el presupuesto el servicio de web hosting o ya ha contratado uno? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".');

let dominio = confirm('¿Desea incluir en el presupuesto el registro de un dominio .com o ya posee su dominio? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".');

let logo = confirm('¿Desea incluir en el presupuesto el diseño de un logo para su proyecto o ya posee uno? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".');

let secciones = prompt('Indique el número de secciones que deberá tener su sitio web');

let tantasSecciones = parseInt(secciones);


while(isNaN(tantasSecciones) || tantasSecciones == 0){
    if(tantasSecciones > 0){
        secciones = tantasSecciones;
        break;
    } else {
        if(tantasSecciones === 0){
            error = alert('La página no puede tener menos de 1 sección.');
        } else {
            error = alert('No seas pelotudo y poné un número, chabón.');
        }
        secciones = prompt('Indique el número de secciones que deberá tener su sitio web');
        tantasSecciones = parseInt(secciones);
    }
}

let plazoEntrega = prompt('¿En qué plazo necesita tener su sitio web terminado y funcionando? Indique el plazo en la cantidad de días hábiles (ej: para una semana serán 5 días hábiles, por lo que debe escribir el número 5).');

let tantosDias = parseInt(plazoEntrega);

while(isNaN(tantosDias) || tantosDias < 5){
    if(tantosDias >= 5){
        plazoEntrega = tantosDias;
        break;
    } else {
        if(tantosDias < 5){
            error = alert('No podemos presupuestar proyectos con plazos de entrega menos a 1 semana (5 días hábiles).');
        } else {
            error = alert('No seas pelotudo y poné un número igual o mayor a 5, chabón.');
        }
        plazoEntrega = prompt('¿En qué plazo necesita tener su sitio web terminado y funcionando? Indique el plazo en la cantidad de días hábiles (ej: para una semana serán 5 días hábiles, por lo que debe escribir el número 5).');
        tantosDias = parseInt(plazoEntrega);
    }
}

let visitas = confirm('Las reuniones presenciales con nuestro equipo de trabajo tienen un costo extra por cuestiones de logística ¿Necesita tener reuniones presenciales con nuestro equipo? Si considera que será necesario, presione "Aceptar", de lo contrario presione "Cancelar".');

if (visitas == true){
    cantidadVisitas = prompt('Indique el número de reuniones con nuestro equipo de trabajo que cree que necesitará');

    tantasVisitas = parseInt(cantidadVisitas);

    while(isNaN(tantasVisitas) || tantasVisitas == 0){
        if(tantasVisitas > 0){
            cantidadVisitas = tantasVisitas;
            break;
        } else {
            if(tantasVisitas == 0){
                error = alert('Ya indicaste que necesitabas reuniones presenciales con nuestro equipo, por lo que la cantidad de 0 visitas no es válidad. Para continuar, indica la cantidad de reuniones presenciales que deseas, debiendo ser mínimo 1.');
            } else {
                error = alert('No seas pelotudo y poné un número, chabón.');
            }
            cantidadVisitas = prompt('Indique el número de reuniones con nuestro equipo de trabajo que cree que necesitará');
            tantasVisitas = parseInt(cantidadVisitas);
        }
    }
}

let mantenimiento = confirm('¿Desea contar con un servicio de mantenimiento para su sitio web? Si lo desea, presione "Aceptar", de lo contrario presione "Cancelar".');

let cuotas = confirm('¿Cómo desea realizar el pago del servicio? Si desea realizarlo en cuotas, presione "Aceptar", de lo contrario presione "Cancelar". Tenga en cuenta que tendrá recargos por la cantidad de cuotas así como un descuento sobre el precio final abonando en un sólo pago.');

if (cuotas == true) {
    cantidadCuotas = prompt('Indique el número de cuotas en que desea realizar el pago. Puede elegir entre 2, 3, 6 y 12 cuotas.');

    tantasCuotas = parseInt(cantidadCuotas);

    while(isNaN(tantasCuotas) || tantasCuotas != 2 || tantasCuotas != 3 || tantasCuotas != 6 || tantasCuotas != 12){
        if(tantasCuotas == 2 || tantasCuotas == 3 || tantasCuotas == 6 || tantasCuotas == 12){
            cantidadCuotas = tantasCuotas;
            break;
        } else {
            if (isNaN(tantasCuotas)) {
                error = alert('No seas pelotudo y poné la cantidad de cuotas que querés, pedazo de ñandú.');
            } else if (tantasCuotas != 2 || tantasCuotas != 3 || tantasCuotas != 6 || tantasCuotas != 12){
                error = alert('Sólo aceptamos pagos en 2, 3, 6 y 12 cuotas, elegí una de esas 4 opciones, pedazo de pancho.');
            } 
            cantidadCuotas = prompt('Indique el número de cuotas en que desea realizar el pago. Puede elegir entre 2, 3, 6 y 12 cuotas.');
            tantasCuotas = parseInt(cantidadCuotas);
        }
    }
}



document.write('<h2>Estos son los datos para elaborar su presupuesto. Corrobore que sean correctos.</h2>');

document.write('<br><br>');

document.write('<h2>Tipo de proyecto:</h2>');
document.write('<br>');
document.write('<p>');
document.write(proyectoTipo);
document.write('</p>');
document.write('<br><br>');

// console.log('Hosting:');
// if (hosting == true) {
//     console.log("Si");
// } else {
//     console.log("No");
// }

document.write('<h2>Servicio de hosting:</h2>');
document.write('<br>');
document.write('<p>');
if (hosting == true) {
    document.write('Si');
} else {
    document.write('No');
}
document.write('</p>');
document.write('<br><br>');

// console.log('Dominio:');
// if (dominio == true) {
//     console.log("Si");
// } else {
//     console.log("No");
// }

document.write('<h2>Servicio de registro de dominio:</h2>');
document.write('<br>');
document.write('<p>');
if (dominio == true) {
    document.write('Si');
} else {
    document.write('No');
}
document.write('</p>');
document.write('<br><br>');

// console.log('Logo:');
// if (logo == true) {
//     console.log("Si");
// } else {
//     console.log("No");
// }

document.write('<h2>Diseño de logo:</h2>');
document.write('<br>');
document.write('<p>');
if (logo == true) {
    document.write('Si');
} else {
    document.write('No');
}
document.write('</p>');
document.write('<br><br>');

// console.log('Secciones:');
// console.log(secciones);

document.write('<h2>Cantidad de secciones del sitio web:</h2>');
document.write('<br>');
document.write('<p>');
document.write(secciones);
document.write('</p>');
document.write('<br><br>');

// console.log('Plazo de entrega:');
// console.log(plazoEntrega);

document.write('<h2>Plazo de entrega requerido:</h2>');
document.write('<br>');
document.write('<p>');
document.write(plazoEntrega);
document.write(' días hábiles</p>');
document.write('<br><br>');

// console.log('Visitas:');
// if (visitas == true) {
//     console.log("Si");
//     console.log("Cantidad:");
//     console.log(cantidadVisitas);
// } else {
//     console.log("No");
// }

document.write('<h2>¿Requiere reuniones presenciales con equipo de trabajo?:</h2>');
document.write('<br>');
if (visitas == true) {
    document.write('<p>');
    document.write('Si');
    document.write('</p>');
    document.write('<br>');
    document.write('<h3>Cantidad de reuniones requeridas:</h3>');
    document.write('<br>');
    document.write('<p>');
    document.write(cantidadVisitas);
    document.write('</p>');
} else {
    document.write('<p>');
    document.write('No');
    document.write('</p>');
}
document.write('<br><br>');

// console.log('Mantenimiento:');
// if (mantenimiento == true) {
//     console.log("Si");
// } else {
//     console.log("No");
// }

document.write('<h2>Servicio de mantenimiento web:</h2>');
document.write('<br>');
document.write('<p>');
if (mantenimiento == true) {
    document.write('Si');
} else {
    document.write('No');
}
document.write('</p>');
document.write('<br><br>');


// console.log('Cuotas:');
// if (cuotas == true) {
//     console.log("Si");
//     console.log("Cantidad:");
//     console.log(cantidadCuotas);
// } else {
//     console.log("No");
// }

document.write('<h2>Forma de pago:</h2>');
document.write('<br>');
if (cuotas == true) {
    document.write('<p>');
    document.write('Cuotas');
    document.write('</p>');
    document.write('<br>');
    document.write('<h3>Cantidad de cuotas:</h3>');
    document.write('<br>');
    document.write('<p>');
    document.write(cantidadCuotas);
    document.write('</p>');
} else {
    document.write('<p>');
    document.write('Un pago.');
    document.write('</p>');
}
document.write('<br><br>');
document.write('<h2>Gracias por presupuestar su proyecto con nosotros. Nos comunicaremos con Usted a la brevedad para que podamos cerrar el trato y comenzar a trabajar.</h2>');



