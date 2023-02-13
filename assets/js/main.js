const HORAS_TRABAJ_X_DIA = 6;

const DIAS_TRABAJ_X_SEM = 5;

const PRECIO_PLAZO_SEMANA = 750;

const PRECIO_PLAZO_QUINCENA = 500;

const PRECIO_PLAZO_MES = 350;

const RECARGO_PRESENCIAL = 75;

const EXTRA_WORDPRESS = 150;

const MAXIMO_SECCIONES_INC = 4;

const RECARGO_SECCIONES_PAG = 30;

const EXTRA_LOGO = 75;

const HOSTING_ANUAL = 36;

const DOMINIO_ANUAL = 15;

const MANTENIMIENTO_ANUAL = 150;

const DESCUENTO_UN_PAGO = 5; 

const RECARGO_DOS_CUOTAS = 50;

const RECARGO_TRES_CUOTAS = 100;

const RECARGO_SEIS_CUOTAS = 150;

const RECARGO_DOCE_CUOTAS = 500;

const PRECIO_HORA_EXTRA = 18;

const PRECIO_DIA_EXTRA = PRECIO_HORA_EXTRA * HORAS_TRABAJ_X_DIA;

const COTIZACION_DOLAR = 190;

// Funciones

function recolectarDatos(){
    bienVenido = alert('¡Bienvenido! A continuación le haremos algunas preguntas sobre su proyecto para armar el presupuesto');
    proyectoTipo = prompt('¿Qué clase de sitio web necesita para su proyecto? Si necesita un sitio web original escriba "web", si necesita una plantilla de Wordpress personalizada escriba "wordpress".');
    while(proyectoTipo === null || proyectoTipo === '' || proyectoTipo != 'web' || proyectoTipo != 'wordpress'){
        if(proyectoTipo === 'web' || proyectoTipo === 'wordpress'){
            break;
        } else {
            error = alert('Es necesario que indique el tipo de proyecto para continuar con la cotización del presupuesto. Recuerde que debe elegir entre la opción "web" o "wordpress" según sus necesidades y debe escribir la palabra sin mayúsculas ni espacios.');
            proyectoTipo = prompt('¿Qué clase de sitio web necesita para su proyecto? Si necesita un sitio web original escriba "web", si necesita una plantilla de Wordpress personalizada escriba "wordpress".');
        }
    }
    hosting = confirm('¿Desea incluir en el presupuesto el servicio de web hosting o ya ha contratado uno? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".');
    dominio = confirm('¿Desea incluir en el presupuesto el registro de un dominio .com o ya posee su dominio? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".');
    logo = confirm('¿Desea incluir en el presupuesto el diseño de un logo para su proyecto o ya posee uno? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".');
    secciones = prompt('Indique el número de secciones que deberá tener su sitio web');
    tantasSecciones = parseInt(secciones);
    while(isNaN(tantasSecciones) || tantasSecciones === 0){
        if(tantasSecciones > 0){
            break;
        } else {
            if(tantasSecciones === 0){
                error = alert('La página no puede tener menos de 1 sección.');
            } else {
                error = alert('Por favor, introduzca el NÚMERO de secciones que tendrá su sitio web.');
            }
            secciones = prompt('Indique el número de secciones que deberá tener su sitio web');
            tantasSecciones = parseInt(secciones);
        }
    }
    plazoEntrega = prompt('¿En qué plazo necesita tener su sitio web terminado y funcionando? Indique el plazo en la cantidad de días hábiles (ej: para una semana serán 5 días hábiles, por lo que debe escribir el número 5).');
    tantosDias = parseInt(plazoEntrega);
    if(tantosDias >= 5 && tantosDias <= 40){

    } else {
        while(isNaN(tantosDias) || tantosDias < 5 || tantosDias > 40){
            if(tantosDias < 5){
                error = alert('No podemos presupuestar proyectos con plazos de entrega menos a 1 semana (5 días hábiles).');
            }
            if(tantosDias > 40){
                error = alert('Para proyectos complejos que llevan más de 2 meses (40 días hábiles) de desarrollo debe comunicarse directamente con nostros para recibir un presupuesto personalizado.');
            } 
            if(isNaN(tantosDias)) {
                error = alert('Por favor, introduzca un NÚMERO igual o mayor a 5.');
            }
            plazoEntrega = prompt('¿En qué plazo necesita tener su sitio web terminado y funcionando? Indique el plazo en la cantidad de días hábiles (ej: para una semana serán 5 días hábiles, por lo que debe escribir el número 5).');
            tantosDias = parseInt(plazoEntrega);
        }
    }
    visitas = confirm('Las reuniones presenciales con nuestro equipo de trabajo tienen un costo extra por cuestiones de logística ¿Necesita tener reuniones presenciales con nuestro equipo? Si considera que será necesario, presione "Aceptar", de lo contrario presione "Cancelar".');
    if (visitas === true){
        cantidadVisitas = prompt('Indique el número de reuniones con nuestro equipo de trabajo que cree que necesitará');
        tantasVisitas = parseInt(cantidadVisitas);
        while(isNaN(tantasVisitas) || tantasVisitas === 0){
            if(tantasVisitas > 0){
                break;
            } else {
                if(tantasVisitas === 0){
                    error = alert('Ya indicaste que necesitabas reuniones presenciales con nuestro equipo, por lo que la cantidad de 0 visitas no es válidad. Para continuar, indica la cantidad de reuniones presenciales que deseas, debiendo ser mínimo 1.');
                } else {
                    error = alert('Por favor, introduzca un NÚMERO.');
                }
                cantidadVisitas = prompt('Indique el número de reuniones con nuestro equipo de trabajo que cree que necesitará');
                tantasVisitas = parseInt(cantidadVisitas);
            }
        }
    }
    mantenimiento = confirm('¿Desea contar con un servicio de mantenimiento para su sitio web? Si lo desea, presione "Aceptar", de lo contrario presione "Cancelar".'); 
    cuotas = confirm('¿Cómo desea realizar el pago del servicio? Si desea realizarlo en cuotas, presione "Aceptar", de lo contrario presione "Cancelar". Tenga en cuenta que tendrá recargos por la cantidad de cuotas así como un descuento sobre el precio final abonando en un sólo pago.');
    if (cuotas === true) {
        cantidadCuotas = prompt('Indique el número de cuotas en que desea realizar el pago. Puede elegir entre 2, 3, 6 y 12 cuotas.');
        tantasCuotas = parseInt(cantidadCuotas);
        while(isNaN(tantasCuotas) || tantasCuotas != 2 || tantasCuotas != 3 || tantasCuotas != 6 || tantasCuotas != 12){
            if(tantasCuotas === 2 || tantasCuotas === 3 || tantasCuotas === 6 || tantasCuotas === 12){
                break;
            } else {
                if (isNaN(tantasCuotas)) {
                    error = alert('Por favor, indique la cantidad de cuotas en las que desea abonar nuestros servicios.');
                } else if (tantasCuotas != 2 || tantasCuotas != 3 || tantasCuotas != 6 || tantasCuotas != 12){
                    error = alert('Sólo aceptamos pagos en 2, 3, 6 y 12 cuotas, elija una de esas 4 opciones por favor.');
                } 
                cantidadCuotas = prompt('Indique el número de cuotas en que desea realizar el pago. Puede elegir entre 2, 3, 6 y 12 cuotas.');
                tantasCuotas = parseInt(cantidadCuotas);
            }
        }
    }
}

function calculoPresupuesto(){
    //CÁLCULO PRECIO POR PLAZO DE ENTREGA
    switch(tantosDias){
        case 5:
            precioBase = PRECIO_PLAZO_SEMANA;
            break;
        case 10:
            precioBase = PRECIO_PLAZO_QUINCENA;
            break;
        case 20:
            precioBase = PRECIO_PLAZO_MES;
            break;
        default:
            if(tantosDias > 5 && tantosDias < 10) {
                diasExtra = tantosDias - 5;
                adicionalXdiasExtra = PRECIO_DIA_EXTRA * diasExtra;
                precioBase = PRECIO_PLAZO_SEMANA + adicionalXdiasExtra;
            }
            if(tantosDias > 10 && tantosDias < 20) {
                diasExtra = tantosDias - 10;
                adicionalXdiasExtra = PRECIO_DIA_EXTRA * diasExtra;
                precioBase = PRECIO_PLAZO_QUINCENA + adicionalXdiasExtra;
            }
            if(tantosDias > 20 && tantosDias < 41) {
                diasExtra = tantosDias - 20;
                adicionalXdiasExtra = PRECIO_DIA_EXTRA * diasExtra;
                precioBase = PRECIO_PLAZO_MES + adicionalXdiasExtra;
            }
    }
    // CÁLCULO PRECIO POR TIPO DE PROYECTO
    if(proyectoTipo === 'wordpress'){
        precioXplazoYtipo = precioBase + EXTRA_WORDPRESS;
    } else {
        precioXplazoYtipo = precioBase;
    }
    // CÁLCULO PRECIO POR SERVICIOS ADICIONALES
    if(hosting === true){
        addHosting = HOSTING_ANUAL;
    } else {
        addHosting = 0;
    }
    if(dominio === true) {
        addDominio = DOMINIO_ANUAL;
    } else {
        addDominio = 0;
    }
    if(logo === true) {
        addLogo = EXTRA_LOGO;
    } else {
        addLogo = 0;
    }
    if(mantenimiento === true) {
        addMante = MANTENIMIENTO_ANUAL;
    } else {
        addMante = 0;
    }
    adicionales = addHosting + addDominio + addLogo + addMante;
    // CÁLCULO PRECIO POR SECCIONES
    if(tantasSecciones <= MAXIMO_SECCIONES_INC){
        adicionalXsecciones = 0;
    } else {
        seccionesExtra = tantasSecciones - MAXIMO_SECCIONES_INC;
        adicionalXsecciones = seccionesExtra * RECARGO_SECCIONES_PAG;
    }
    // CÁLCULO PRECIO POR REUNIONES PRESENCIALES
    if(visitas === false){
        precioXvisitas = 0;
    } else {
        precioXvisitas = tantasVisitas * RECARGO_PRESENCIAL;
    }
    // CÁLCULO DEL PRECIO FINAL
    precioProvisorio = precioXplazoYtipo + adicionales + adicionalXsecciones + precioXvisitas;
    if(cuotas === false){
        descuento = (precioProvisorio * DESCUENTO_UN_PAGO) / 100;
        precioFinal = precioProvisorio - descuento;
    } else {
        switch(tantasCuotas){
            case 2:
                precioFinal = precioProvisorio + RECARGO_DOS_CUOTAS;
                break;
            case 3:
                precioFinal = precioProvisorio + RECARGO_TRES_CUOTAS;
                break;
            case 6:
                precioFinal = precioProvisorio + RECARGO_SEIS_CUOTAS;
                break;
            case 12:
                precioFinal = precioProvisorio + RECARGO_DOCE_CUOTAS;
                break;
        }
    }
    precioEnPesos = precioFinal * COTIZACION_DOLAR;
}

function mostrarPresupuesto(){
    document.write('<h2>Estos son los datos que Usted nos ha brindado para elaborar su presupuesto.</h2><br><br><h3>Tipo de proyecto:</h3><br><p>');
    document.write(proyectoTipo);
    document.write('</p><br><h3>Plazo de entrega requerido:</h3><br><p>');
    document.write(plazoEntrega);
    document.write(' días hábiles</p><br><h3>Cantidad de secciones:</h3><br><p>');
    document.write(tantasSecciones);
    document.write('</p><br><h3>Servicio de hosting:</h3><br><p>');
    if (hosting === true) {
        document.write('Si');
    } else {
        document.write('No');
    }
    document.write('</p><br><h3>Registro de dominio:</h3><br><p>');
    if (dominio === true) {
        document.write('Si');
    } else {
        document.write('No');
    }
    document.write('</p><br><h3>Diseño de logo:</h3><br><p>');
    if (logo === true) {
        document.write('Si');
    } else {
        document.write('No');
    }
    document.write('</p><br><h3>Servicio de mantenimiento web:</h3><br><p>');
    if (mantenimiento === true) {
        document.write('Si');
    } else {
        document.write('No');
    }
    document.write('</p><br><h2>Este es el detalle:</h2><br>');
    // TABLA
    document.write('<table class="tabla__detalle"><tbody><tr class="tabla__detalle--titulos"><td class="tabla__detalle--cant">Cant.</td><td class="tabla__detalle--desc">Descripción</td><td class="tabla__detalle--vals">Unitario</td><td class="tabla__detalle--vals">Total</td></tr>');
    // FILA PROYECTO
    document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">');
    if(proyectoTipo === 'web'){
        document.write('Sitio Web a medida</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr>');
    }
    if(proyectoTipo === 'wordpress'){
        document.write('Plantilla de Wordpress personalizada</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr>');
        document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Adicional por instalación y gestión de plantilla en WP</td><td class="tabla__detalle--vals">');
        document.write(EXTRA_WORDPRESS);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(EXTRA_WORDPRESS);
        document.write('</td></tr>');
    }
    // FILA PLAZO
    document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Precio base según plazo: ');
    if(tantosDias >= 5 && tantosDias < 10) {
        document.write('1 semana (5 días hábiles)</td><td class="tabla__detalle--vals">');
        document.write(PRECIO_PLAZO_SEMANA);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(PRECIO_PLAZO_SEMANA);
        document.write('</td></tr>');
        if(tantosDias != 5){
            document.write('<tr><td class="tabla__detalle--cant">');
            document.write(diasExtra);
            document.write('</td><td class="tabla__detalle--desc">Importe por días excedentes al plazo básico</td><td class="tabla__detalle--vals">');
            document.write(PRECIO_DIA_EXTRA);
            document.write('</td><td class="tabla__detalle--vals">');
            document.write(adicionalXdiasExtra);
            document.write('</td></tr>');
        }
    }
    if(tantosDias >= 10 && tantosDias < 20) {
        document.write('1 quincena (10 días hábiles)</td><td class="tabla__detalle--vals">');
        document.write(PRECIO_PLAZO_QUINCENA);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(PRECIO_PLAZO_QUINCENA);
        document.write('</td></tr>');
        if(tantosDias != 10){
            document.write('<tr><td class="tabla__detalle--cant">');
            document.write(diasExtra);
            document.write('</td><td class="tabla__detalle--desc">Importe por días excedentes al plazo básico</td><td class="tabla__detalle--vals">');
            document.write(PRECIO_DIA_EXTRA);
            document.write('</td><td class="tabla__detalle--vals">');
            document.write(adicionalXdiasExtra);
            document.write('</td></tr>');
        }
    }
    if(tantosDias >= 20 && tantosDias < 41) {
        document.write('1 mes (20 días hábiles)</td><td class="tabla__detalle--vals">');
        document.write(PRECIO_PLAZO_MES);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(PRECIO_PLAZO_MES);
        document.write('</td></tr>');
        if(tantosDias != 20){
            document.write('<tr><td class="tabla__detalle--cant">');
            document.write(diasExtra);
            document.write('</td><td class="tabla__detalle--desc">Importe por días excedentes al plazo básico</td><td class="tabla__detalle--vals">');
            document.write(PRECIO_DIA_EXTRA);
            document.write('</td><td class="tabla__detalle--vals">');
            document.write(adicionalXdiasExtra);
            document.write('</td></tr>');
        }
    }
    // FILA SECCIONES
    if(tantasSecciones > MAXIMO_SECCIONES_INC){
        document.write('<tr><td class="tabla__detalle--cant">4</td><td class="tabla__detalle--desc">Secciones incluidas en el sitio (hasta 4 sin costo extra)</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr><tr><td class="tabla__detalle--cant">');
        document.write(seccionesExtra);
        document.write('</td><td class="tabla__detalle--desc">Adicional por secciones extra</td><td class="tabla__detalle--vals">');
        document.write(RECARGO_SECCIONES_PAG);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(adicionalXsecciones);
        document.write('</td></tr>');
    }
    // FILAS SERVICIOS ADICIONALES
    if(hosting === true){
        document.write('<tr><td class="tabla__detalle--cant">12</td><td class="tabla__detalle--desc">Servicio de Web Hosting*</td><td class="tabla__detalle--vals">');
        document.write(HOSTING_ANUAL / 12);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(HOSTING_ANUAL);
        document.write('</td></tr>');
    }
    if(dominio === true) {
        document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Servicio registro de dominio*</td><td class="tabla__detalle--vals">');
        document.write(DOMINIO_ANUAL);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(DOMINIO_ANUAL);
        document.write('</td></tr>');
    }
    if(logo === true) {
        document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Diseño de logo</td><td class="tabla__detalle--vals">');
        document.write(EXTRA_LOGO);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(EXTRA_LOGO);
        document.write('</td></tr>');
    }
    if(mantenimiento === true) {
        document.write('<tr><td class="tabla__detalle--cant">12</td><td class="tabla__detalle--desc">Servicio de Mantenimiento Web*</td><td class="tabla__detalle--vals">');
        document.write(MANTENIMIENTO_ANUAL / 12);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(MANTENIMIENTO_ANUAL);
        document.write('</td></tr>');
    }
    // FILA REUNIONES PRESENCIALES
    if(visitas === true){
        document.write('<tr><td class="tabla__detalle--cant">');
        document.write(tantasVisitas);
        document.write('</td><td class="tabla__detalle--desc">Recargo por reuniones presenciales</td><td class="tabla__detalle--vals">');
        document.write(RECARGO_PRESENCIAL);
        document.write('</td><td class="tabla__detalle--vals">');
        document.write(precioXvisitas);
        document.write('</td></tr>');
    }
    // FILA SUBTOTAL
    document.write('<tr class="tabla__detalle--titulos"><td colspan="3" class="tabla__detalle--total">SUB-TOTAL U$D</td><td class="tabla__detalle--vals">');
    document.write(precioProvisorio);
    document.write('</td></tr>');
    // FORMA DE PAGO
    document.write('<tr><td colspan="3" class="tabla__detalle--total">');
    if (cuotas === false){
        document.write('Descuento por abonar en un pago</td><td class="tabla__detalle--vals">-');
        document.write(descuento);
    } else {
        document.write('Recargo por pago en ');
        switch(tantasCuotas){
            case 2:
                document.write(tantasCuotas);
                document.write(' cuotas</td><td class="tabla__detalle--vals">');
                document.write(RECARGO_DOS_CUOTAS);
                break;
            case 3:
                document.write(tantasCuotas);
                document.write(' cuotas</td><td class="tabla__detalle--vals">');
                document.write(RECARGO_TRES_CUOTAS);
                break;
            case 6:
                document.write(tantasCuotas);
                document.write(' cuotas</td><td class="tabla__detalle--vals">');
                document.write(RECARGO_SEIS_CUOTAS);
                break;
            case 12:
                document.write(tantasCuotas);
                document.write(' cuotas</td><td class="tabla__detalle--vals">');
                document.write(RECARGO_DOCE_CUOTAS);
                break;
        }
    }
    document.write('</td></tr>');
    // FILA TOTALES
    document.write('<tr class="tabla__detalle--titulos"><td colspan="3" class="tabla__detalle--total">TOTAL U$D</td><td class="tabla__detalle--vals">');
    document.write(precioFinal);
    document.write('</td></tr><tr class="tabla__detalle--titulos"><td colspan="3" class="tabla__detalle--total">TOTAL AR$</td><td class="tabla__detalle--vals">');
    document.write(precioEnPesos);
    document.write('</td></tr></tbody></table>');
}

// Constantes



recolectarDatos()

calculoPresupuesto()

mostrarPresupuesto()

document.write('<br><br>');
document.write('<h2>Gracias por presupuestar su proyecto con nosotros. Nos comunicaremos con Usted a la brevedad para que podamos cerrar el trato y comenzar a trabajar.</h2>');