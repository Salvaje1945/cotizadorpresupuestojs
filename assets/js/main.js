// CONSTANTES

const HORAS_TRABAJ_X_DIA = 6
const DIAS_TRABAJ_X_SEM = 5
const PRECIO_PLAZO_SEMANA = 750
const PRECIO_PLAZO_QUINCENA = 500
const PRECIO_PLAZO_MES = 350
const RECARGO_PRESENCIAL = 75
const EXTRA_WORDPRESS = 150
const EXTRA_PLANTILLA_PROF = 50
const DESC_FRAMEWORK = 50
const MAXIMO_SECCIONES_INC = 5
const RECARGO_SECCIONES_PAG = 30
const EXTRA_LOGO = 75
const HOSTING_ANUAL = 36
const DOMINIO_ANUAL = 15
const MANTENIMIENTO_ANUAL = 150
const DESCUENTO_UN_PAGO = 5
const RECARGO_DOS_CUOTAS = 50
const RECARGO_TRES_CUOTAS = 100
const RECARGO_SEIS_CUOTAS = 150
const RECARGO_DOCE_CUOTAS = 500
const PRECIO_HORA_EXTRA = 18
const PRECIO_DIA_EXTRA = PRECIO_HORA_EXTRA * HORAS_TRABAJ_X_DIA
const COTIZACION_DOLAR = 190

// CLASES

class Cliente {
    constructor(nom, ps, empr, corr, cel) {
        this.nombre = nom
        this.pais = ps
        this.empresa = empr
        this.mail = corr
        this.celular = cel
    }
}

class Proyecto {
    constructor(protip, distip, plantip, divis, secnum) {
        this.proyectoTipo = protip
        this.disenioTipo = distip
        this.plantillaTipo = plantip
        this.divisionSecciones = divis
        this.numeroSecciones = secnum
    }
}

class Adicionales {
    constructor(htg, dom, mant, dislog) {
        this.hosting = htg
        this.dominio = dom
        this.mantenimiento = mant
        this.logo = dislog
    }
}

class PautasTrabajo {
    constructor(plz, pres, numvis, forpag, cuots) {
        this.plazoEntrega = plz
        this.presenciales = pres
        this.cantidadPresenciales = numvis
        this.formaPago = forpag
        this.cuotas = cuots
    }
}

// FUNCIONES

function datosSolicitante() {
    introduccionCliente = alert('Antes de comenzar, le pedimos por favor que introduzca sus datos.')
    inicioRecoleccionDatos = true
    aprobarDatos = false
    while (inicioRecoleccionDatos === true || confirmarDatos === aprobarDatos) {
        datosProvisoriosCliente = []
        nombre = prompt('Por favor, escriba su nombre completo.')
        while (nombre === null || nombre === '') {
            error = alert('Es necesario que escriba su nombre completo.')
            nombre = prompt('Por favor, escriba su nombre completo.')
        }
        datosProvisoriosCliente.push(nombre)
        pais = prompt('Por favor, indique su pa??s de residencia.')
        while (pais === null || pais === '') {
            error = alert('Es necesario que indique su pa??s de residencia.')
            pais = prompt('Por favor, indique su pa??s de residencia.')
        }
        datosProvisoriosCliente.push(pais)
        empresa = prompt('Por favor, escriba el nombre de su empresa o negocio.')
        while (empresa === null || empresa === '') {
            error = alert('Es necesario que escriba el nombre de su empresa o negocio.')
            empresa = prompt('Por favor, escriba el nombre de su empresa o negocio.')
        }
        datosProvisoriosCliente.push(empresa)
        mail = prompt('Por favor, escriba su correo electr??nico.')
        while (mail === null || mail === '') {
            error = alert('Es necesario que escriba su correo electr??nico.')
            mail = prompt('Por favor, escriba su correo electr??nico.')
        }
        datosProvisoriosCliente.push(mail)
        celular = Number(prompt('Por favor, escriba su n??mero de celular sin utilizar espacios ni caracteres (ej: +, -, .), incluyendo la caracter??stica de su pa??s y su ciudad. Ej: 5491145555555'))
        while (isNaN(celular) || celular === null || celular === '' || celular === 0) {
            error = alert('Por favor, escriba un n??mero de tel??fono celular/m??vil v??lido.')
            celular = Number(prompt('Por favor, escriba su n??mero de celular sin utilizar espacios ni caracteres (ej: +, -, .), incluyendo la caracter??stica de su pa??s y su ciudad. Ej: 5491145555555'))
        }
        datosProvisoriosCliente.push(celular)
        // CONFIRMAR DATOS
        confirmarDatos = confirm('Por favor confirme que sus datos sean correctos. ' + 'Nombre: ' + datosProvisoriosCliente[0] + ' / Pa??s: ' + datosProvisoriosCliente[1] + ' / Empresa: ' + datosProvisoriosCliente[2] + ' / Mail: ' + datosProvisoriosCliente[3] + ' / Celular: ' + datosProvisoriosCliente[4] + ' // SI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".')
        if (confirmarDatos === true) {
            nuevoCliente = new Cliente(datosProvisoriosCliente[0], datosProvisoriosCliente[1], datosProvisoriosCliente[2], datosProvisoriosCliente[3], datosProvisoriosCliente[4])
            break
        }
    }
}

function datosSitio() {
    introduccionProyecto = alert('A continuaci??n le haremos algunas preguntas t??cnicas sobre las necesidades de su proyecto.')
    proyectoTipo = prompt('??Qu?? clase de sitio web necesita para su proyecto? Si necesita un sitio web original escriba "web", si necesita una plantilla de Wordpress personalizada escriba "wordpress".')
    while (proyectoTipo === null || proyectoTipo === '' || proyectoTipo != 'web' || proyectoTipo != 'wordpress') {
        if (proyectoTipo === 'web' || proyectoTipo === 'wordpress') {
            break
        } else {
            error = alert('Es necesario que indique el tipo de proyecto para continuar con la cotizaci??n del presupuesto. Recuerde que debe elegir entre la opci??n "web" o "wordpress" seg??n sus necesidades y debe escribir la palabra sin may??sculas ni espacios.')
            proyectoTipo = prompt('??Qu?? clase de sitio web necesita para su proyecto? Si necesita un sitio web original escriba "web", si necesita una plantilla de Wordpress personalizada escriba "wordpress".')
        }
    }
    // TIPO DE PROYECTO: WEB TRADICIONAL
    if (proyectoTipo === 'web') {
        inicioRecoleccionDatos = true
        aprobarDatos = false
        while (inicioRecoleccionDatos === true || confirmarDatos === aprobarDatos) {
            datosProvisoriosSitio = []
            datosProvisoriosSitio.push(proyectoTipo)
            // TIPO DE DISE??O
            disenioTipo = confirm('A la hora de elegir el tipo de dise??o para su sitio web tenemos dos opciones para ofrecerle. Puede optar por un dise??o totalmente original y desarrollado a la medida de sus necesidades comunicacionales (recomendado) o por un sitio desarrollado en base a un framework que ser?? m??s econ??mico pero al que Usted deber?? ajustarse. Si desea un sitio web hecho a su medida oprima "ACEPTAR", si desea un sitio web basado en un framework oprima "CANCELAR".')
            if (disenioTipo === true) {
                tipoDisenio = 'a medida'
            } else {
                tipoDisenio = 'framework'
            }
            datosProvisoriosSitio.push(tipoDisenio)
            // TIPO DE PLANTILLA (FALSE, PORQUE ES UNA OPCI??N ??NICAMENTE PARA TIPO DE PROYECTO = WORDPRESS)
            plantillaTipo = false
            datosProvisoriosSitio.push(plantillaTipo)
            // DIVISI??N DEL CONTENIDO-SECCIONES
            tipoDivision = confirm('Puede dividir el contenido de su sitio web en p??ginas independientes para cada secci??n (recomendado si el contendio de las secciones ser?? extenso) o puede integrar todas las secciones en una sola p??gina (Recomendado si el contenido de las secciones ser?? breve). ??C??mo desea hacerlo? Para dividir el contenido en p??ginas independientes para cada secci??n oprima "ACEPTAR", si desea integrar todas las secciones en una sola p??gina oprima "CANCELAR".')
            if (tipoDivision === true) {
                division = 'secciones'
                datosProvisoriosSitio.push(division)
                secciones = Number(prompt('Indique el n??mero de secciones que deber?? tener su sitio web'))
                while (isNaN(secciones) || secciones === 0 || secciones === 1) {
                    if (secciones > 1) {
                        break
                    } else {
                        if (secciones === 0 || secciones === 1) {
                            error = alert('La p??gina, dividida en p??ginas independientes para cada secci??n, no puede tener menos de 2 secciones.')
                        } else {
                            error = alert('Por favor, introduzca el N??MERO de secciones que tendr?? su sitio web.')
                        }
                        secciones = Number(prompt('Indique el n??mero de secciones que deber?? tener su sitio web'))
                    }
                }
                datosProvisoriosSitio.push(secciones)
            } else {
                division = 'integrado'
                secciones = 1
                datosProvisoriosSitio.push(division)
                datosProvisoriosSitio.push(secciones)
            }
            // CONFIRMAR DATOS
            confirmarDatos = confirm('Por favor confirme que los datos de su sitio web sean correctos. ' + 'Tipo de proyecto: ' + datosProvisoriosSitio[0] + ' / Tipo de dise??o: ' + datosProvisoriosSitio[1] + ' / divisi??n del contenido: ' + datosProvisoriosSitio[3] + ' / Cantidad de secciones: ' + datosProvisoriosSitio[4] + ' // SI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".')
            if (confirmarDatos === true) {
                nuevaWeb = new Proyecto(datosProvisoriosSitio[0], datosProvisoriosSitio[1], datosProvisoriosSitio[2], datosProvisoriosSitio[3], datosProvisoriosSitio[4])
                break
            }
        }
    }
    // TIPO DE PROYECTO: WORDPRESS
    if (proyectoTipo === 'wordpress') {
        inicioRecoleccionDatos = true
        aprobarDatos = false
        while (inicioRecoleccionDatos === true || confirmarDatos === aprobarDatos) {
            datosProvisoriosSitio = []
            datosProvisoriosSitio.push(proyectoTipo)
            // TIPO DE DISE??O: FALSE (PORQUE ES UNA OPCI??N ??NICAMENTE PARA WEB TRADICIONAL)
            tipoDisenio = false
            datosProvisoriosSitio.push(tipoDisenio)
            // TIPO DE PLANTILLA
            tipoPlantilla = confirm('El sistema de Wordpress trabaja con plantillas que pueden personalizarse para adaptarlas a las necesidades de su proyecto. Wordpress provee de una lista de plantillas de uso gratuito cuyo dise??os y la posibilidad de personalizaci??n poseen no pocas limitaciones. Sin embargo, tambien existen a la venta plantillas profesionales que permiten un alto nivel de personalizaci??n y otras tantas funciones que pueden potenciar el rendimiento de su sitio web. Si desea trabajar con una plantilla gratuita de Wordpress, presione "ACEPTAR", si desea trabajar con una plantilla profesional de pago presione "CANCELAR".')
            if (tipoPlantilla === true) {
                plantillaTipo = 'gratuita'
            } else {
                plantillaTipo = 'profesional'
            }
            datosProvisoriosSitio.push(plantillaTipo)
            // DIVISION DEL CONTENIDO: PARA WORDPRESS SIEMPRE SER?? "SECCIONES"
            division = 'secciones'
            datosProvisoriosSitio.push(division)
            // CANTIDAD DE SECCIONES
            secciones = Number(prompt('Indique el n??mero de secciones que deber?? tener su sitio web'))
            while (isNaN(secciones) || secciones === 0 || secciones === 1) {
                if (secciones > 1) {
                    break
                } else {
                    if (secciones === 0 || secciones === 1) {
                        error = alert('La p??gina no puede tener menos de 2 secciones.')
                    } else {
                        error = alert('Por favor, introduzca el N??MERO de secciones que tendr?? su sitio web.')
                    }
                    secciones = Number(prompt('Indique el n??mero de secciones que deber?? tener su sitio web'))
                }
            }
            datosProvisoriosSitio.push(secciones)
            // CONFIRMAR DATOS
            confirmarDatos = confirm('Por favor confirme que los datos de su sitio web sean correctos. ' + 'Tipo de proyecto: ' + datosProvisoriosSitio[0] + ' / Tipo de plantilla: ' + datosProvisoriosSitio[2] + ' / Cantidad de secciones: ' + datosProvisoriosSitio[4] + ' // SI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".')
            if (confirmarDatos === true) {
                nuevaWeb = new Proyecto(datosProvisoriosSitio[0], datosProvisoriosSitio[1], datosProvisoriosSitio[2], datosProvisoriosSitio[3], datosProvisoriosSitio[4])
                break
            }
        }
    }
}

function datosAdicionales() {
    introduccionAdicionales = alert('A continuaci??n le ofreceremos una serie de servicios adicionales de gran utilidad que Usted podr?? optar por contratar o no.')
    inicioRecoleccionDatos = true
    aprobarDatos = false
    while (inicioRecoleccionDatos === true || confirmarDatos === aprobarDatos) {
        datosProvisoriosAdicionales = []
        // HOSTING
        hosting = confirm('??Desea incluir en el presupuesto el servicio de web hosting o ya ha contratado uno? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".')
        if (hosting === true) {
            quiereHosting = 'Si'
        } else {
            quiereHosting = 'No'
        }
        datosProvisoriosAdicionales.push(hosting)
        // DOMINIO
        dominio = confirm('??Desea incluir en el presupuesto el registro de un dominio .com o ya posee su dominio? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".')
        if (dominio === true) {
            quiereDominio = 'Si'
        } else {
            quiereDominio = 'No'
        }
        datosProvisoriosAdicionales.push(dominio)
        // MANTENIMIENTO
        mantenimiento = confirm('??Desea contar con un servicio de mantenimiento para su sitio web? Si lo desea, presione "Aceptar", de lo contrario presione "Cancelar".')
        if (mantenimiento === true) {
            quiereMantenimiento = 'Si'
        } else {
            quiereMantenimiento = 'No'
        }
        datosProvisoriosAdicionales.push(mantenimiento)
        // DISE??O DE LOGOTIPO
        logo = confirm('??Desea incluir en el presupuesto el dise??o de un logo para su proyecto o ya posee uno? Si desea incluirlo, presione "Aceptar", de lo contrario presione "Cancelar".')
        if (logo === true) {
            quiereLogo = 'Si'
        } else {
            quiereLogo = 'No'
        }
        datosProvisoriosAdicionales.push(logo)
        // CONFIRMAR DATOS
        confirmarDatos = confirm('Por favor confirme que sus datos sean correctos. ' + 'Servicio de web hosting: ' + quiereHosting + ' / Servicio de registro de dominio .com : ' + quiereDominio + ' / Servicio de mantenimiento web: ' + quiereMantenimiento + ' / Servicio de dise??o de logo: ' + quiereLogo + ' // SI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".')
        if (confirmarDatos === true) {
            serviciosAdicionales = new Adicionales(datosProvisoriosAdicionales[0], datosProvisoriosAdicionales[1], datosProvisoriosAdicionales[2], datosProvisoriosAdicionales[3])
            break
        }
    }
}

function datosPautasTrabajo() {
    introduccionPautas = alert('A continuaci??n le haremos algunas preguntas sobre las pautas b??sicas de trabajo como el plazo de entrega del proyecto terminado y la forma de pago.')
    inicioRecoleccionDatos = true
    aprobarDatos = false
    while (inicioRecoleccionDatos === true || confirmarDatos === aprobarDatos) {
        datosProvisoriosPautas = []
        // PLAZO DE ENTREGA
        plazoEntrega = Number(prompt('??En qu?? plazo necesita tener su sitio web terminado y funcionando? Indique el plazo en la cantidad de d??as h??biles (ej: para una semana ser??n 5 d??as h??biles, por lo que debe escribir el n??mero 5).'))
        if (plazoEntrega >= 5 && plazoEntrega <= 40) {
        } else {
            while (isNaN(plazoEntrega) || plazoEntrega < 5 || plazoEntrega > 40) {
                if (plazoEntrega < 5) {
                    error = alert('No podemos presupuestar proyectos con plazos de entrega menos a 1 semana (5 d??as h??biles).')
                }
                if (plazoEntrega > 40) {
                    error = alert('Para proyectos complejos que llevan m??s de 2 meses (40 d??as h??biles) de desarrollo debe comunicarse directamente con nostros para recibir un presupuesto personalizado.')
                }
                if (isNaN(plazoEntrega)) {
                    error = alert('Por favor, introduzca un N??MERO igual o mayor a 5.')
                }
                plazoEntrega = Number(prompt('??En qu?? plazo necesita tener su sitio web terminado y funcionando? Indique el plazo en la cantidad de d??as h??biles (ej: para una semana ser??n 5 d??as h??biles, por lo que debe escribir el n??mero 5).'))
            }
        }
        datosProvisoriosPautas.push(plazoEntrega)
        // REUNIONES PRESENCIALES
        visitas = confirm('Las reuniones presenciales con nuestro equipo de trabajo tienen un costo extra por cuestiones de log??stica ??Necesita tener reuniones presenciales con nuestro equipo? Si considera que ser?? necesario, presione "Aceptar", de lo contrario presione "Cancelar".')
        if (visitas === true) {
            presenciales = 'Si'
            cantidadVisitas = Number(prompt('Indique el n??mero de reuniones con nuestro equipo de trabajo que cree que necesitar??'))
            while (isNaN(cantidadVisitas) || cantidadVisitas === 0) {
                if (cantidadVisitas > 0) {
                    break
                } else {
                    if (cantidadVisitas === 0) {
                        error = alert('Ya indicaste que necesitabas reuniones presenciales con nuestro equipo, por lo que la cantidad de 0 visitas no es v??lidad. Para continuar, indica la cantidad de reuniones presenciales que deseas, debiendo ser m??nimo 1.')
                    } else {
                        error = alert('Por favor, introduzca un N??MERO.')
                    }
                    cantidadVisitas = Number(prompt('Indique el n??mero de reuniones con nuestro equipo de trabajo que cree que necesitar??'))
                }
            }
        } else {
            presenciales = 'No'
            cantidadVisitas = 0
        }
        datosProvisoriosPautas.push(visitas)
        datosProvisoriosPautas.push(cantidadVisitas)
        // FORMA DE PAGO
        cuotas = confirm('??C??mo desea realizar el pago del servicio? Si desea realizarlo en cuotas, presione "Aceptar", de lo contrario presione "Cancelar". Tenga en cuenta que tendr?? recargos por la cantidad de cuotas as?? como un descuento sobre el precio final abonando en un s??lo pago.')
        if (cuotas === true) {
            formaPago = 'cuotas'
            cantidadCuotas = Number(prompt('Indique el n??mero de cuotas en que desea realizar el pago. Puede elegir entre 2, 3, 6 y 12 cuotas.'))
            while (isNaN(cantidadCuotas) || cantidadCuotas != 2 || cantidadCuotas != 3 || cantidadCuotas != 6 || cantidadCuotas != 12) {
                if (cantidadCuotas === 2 || cantidadCuotas === 3 || cantidadCuotas === 6 || cantidadCuotas === 12) {
                    break
                } else {
                    if (isNaN(cantidadCuotas)) {
                        error = alert('Por favor, indique la cantidad de cuotas en las que desea abonar nuestros servicios.')
                    } else if (cantidadCuotas != 2 || cantidadCuotas != 3 || cantidadCuotas != 6 || cantidadCuotas != 12) {
                        error = alert('S??lo aceptamos pagos en 2, 3, 6 y 12 cuotas, elija una de esas 4 opciones por favor.')
                    }
                    cantidadCuotas = Number(prompt('Indique el n??mero de cuotas en que desea realizar el pago. Puede elegir entre 2, 3, 6 y 12 cuotas.'))
                }
            }
        } else {
            formaPago = 'un pago'
            cantidadCuotas = 1
        }
        datosProvisoriosPautas.push(cuotas)
        datosProvisoriosPautas.push(cantidadCuotas)
        // CONFIRMAR DATOS
        confirmarDatos = confirm('Por favor confirme que sus datos sean correctos. ' + 'Plazo de entrega (en d??as h??biles): ' + datosProvisoriosPautas[0] + ' / Reuniones presenciales: ' + presenciales + ' / Cantidad de reuniones presenciales (si eligi?? no tener reuniones presenciales figurar?? "0"): ' + datosProvisoriosPautas[2] + ' / Forma de pago: ' + formaPago + ' / Cantidad de cuotas (si escogi?? pagar en un pago, figurar?? "1" cuota): ' + datosProvisoriosPautas[4] + ' // SI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".')
        if (confirmarDatos === true) {
            nuevasPautasTrabajo = new PautasTrabajo(datosProvisoriosPautas[0], datosProvisoriosPautas[1], datosProvisoriosPautas[2], datosProvisoriosPautas[3], datosProvisoriosPautas[4])
            break
        }
    }
}

function calcularPresupuesto() {
    datosNuevoPresupuesto = {
        tipoDeProyecto: nuevaWeb.proyectoTipo,
        tipoDeDisenio: nuevaWeb.disenioTipo,
        tipoDePlantilla: nuevaWeb.plantillaTipo,
        divisionDeSecciones: nuevaWeb.divisionSecciones,
        numeroDeSecciones: nuevaWeb.numeroSecciones,
        adicionalHosting: serviciosAdicionales.hosting,
        adicionalDominio: serviciosAdicionales.dominio,
        adicionalMantenimiento: serviciosAdicionales.mantenimiento,
        adicionalLogo: serviciosAdicionales.logo,
        plazoDeEntrega: nuevasPautasTrabajo.plazoEntrega,
        reunionesPresenciales: nuevasPautasTrabajo.presenciales,
        cantidadDeReuniones: nuevasPautasTrabajo.cantidadPresenciales,
        formaDePago: nuevasPautasTrabajo.formaPago,
        cantidadDeCuotas: nuevasPautasTrabajo.cuotas
    }
    //C??LCULO PRECIO POR PLAZO DE ENTREGA
    switch (datosNuevoPresupuesto.plazoDeEntrega) {
        case 5:
            precioBase = PRECIO_PLAZO_SEMANA
            break
        case 10:
            precioBase = PRECIO_PLAZO_QUINCENA
            break
        case 20:
            precioBase = PRECIO_PLAZO_MES
            break
        default:
            if (datosNuevoPresupuesto.plazoDeEntrega > 5 && datosNuevoPresupuesto.plazoDeEntrega < 10) {
                diasExtra = datosNuevoPresupuesto.plazoDeEntrega - 5
                adicionalXdiasExtra = PRECIO_DIA_EXTRA * diasExtra
                precioBase = PRECIO_PLAZO_SEMANA + adicionalXdiasExtra
            }
            if (datosNuevoPresupuesto.plazoDeEntrega > 10 && datosNuevoPresupuesto.plazoDeEntrega < 20) {
                diasExtra = datosNuevoPresupuesto.plazoDeEntrega - 10
                adicionalXdiasExtra = PRECIO_DIA_EXTRA * diasExtra
                precioBase = PRECIO_PLAZO_QUINCENA + adicionalXdiasExtra
            }
            if (datosNuevoPresupuesto.plazoDeEntrega > 20 && datosNuevoPresupuesto.plazoDeEntrega < 41) {
                diasExtra = datosNuevoPresupuesto.plazoDeEntrega - 20
                adicionalXdiasExtra = PRECIO_DIA_EXTRA * diasExtra
                precioBase = PRECIO_PLAZO_MES + adicionalXdiasExtra
            }
    }
    // C??LCULO PRECIO POR TIPO DE PROYECTO
    if (datosNuevoPresupuesto.tipoDeProyecto === 'wordpress') {
        if (datosNuevoPresupuesto.tipoDePlantilla === 'profesional') {
            precioXplantilla = EXTRA_PLANTILLA_PROF
        } else {
            precioXplantilla = 0
        }
        precioXplazoYtipo = precioBase + EXTRA_WORDPRESS + precioXplantilla
    } else {
        precioXplazoYtipo = precioBase
    }
    // C??LCULO PRECIO POR SECCIONES
    if (datosNuevoPresupuesto.numeroDeSecciones <= MAXIMO_SECCIONES_INC) {
        adicionalXsecciones = 0
    } else {
        seccionesExtra = datosNuevoPresupuesto.numeroDeSecciones - MAXIMO_SECCIONES_INC
        adicionalXsecciones = seccionesExtra * RECARGO_SECCIONES_PAG
    }
    // C??LCULO PRECIO POR SERVICIOS ADICIONALES
    if (datosNuevoPresupuesto.adicionalHosting === true) {
        addHosting = HOSTING_ANUAL
    } else {
        addHosting = 0
    }
    if (datosNuevoPresupuesto.adicionalDominio === true) {
        addDominio = DOMINIO_ANUAL
    } else {
        addDominio = 0
    }
    if (datosNuevoPresupuesto.adicionalMantenimiento === true) {
        addMante = MANTENIMIENTO_ANUAL
    } else {
        addMante = 0
    }
    if (datosNuevoPresupuesto.adicionalLogo === true) {
        addLogo = EXTRA_LOGO
    } else {
        addLogo = 0
    }
    adicionales = addHosting + addDominio + addMante + addLogo
    // C??LCULO PRECIO POR REUNIONES PRESENCIALES
    if (datosNuevoPresupuesto.reunionesPresenciales === false) {
        precioXvisitas = 0
    } else {
        precioXvisitas = datosNuevoPresupuesto.cantidadDeReuniones * RECARGO_PRESENCIAL
    }
    // C??LCULO DEL PRECIO FINAL
    precioProvisorio = precioXplazoYtipo + adicionalXsecciones + adicionales + precioXvisitas
    if (datosNuevoPresupuesto.tipoDeDisenio === 'framework') {
        precioProvConDesc = precioProvisorio - DESC_FRAMEWORK
    } else {
        precioProvConDesc = precioProvisorio
    }
    if (datosNuevoPresupuesto.formaDePago === false) {
        descuento = Number(((precioProvConDesc * DESCUENTO_UN_PAGO) / 100).toFixed(2))
        precioFinal = Number((precioProvConDesc - descuento).toFixed(2))
    } else {
        switch (datosNuevoPresupuesto.cantidadDeCuotas) {
            case 2:
                precioFinal = precioProvConDesc + RECARGO_DOS_CUOTAS
                break
            case 3:
                precioFinal = precioProvConDesc + RECARGO_TRES_CUOTAS
                break
            case 6:
                precioFinal = precioProvConDesc + RECARGO_SEIS_CUOTAS
                break
            case 12:
                precioFinal = precioProvConDesc + RECARGO_DOCE_CUOTAS
                break
        }
    }
    precioEnPesos = Number((precioFinal * COTIZACION_DOLAR).toFixed(2))
}

function mostrarPresupuesto() {
    const mostrarDatosCliente = ['<h3>Cliente:</h3><br><p>', nuevoCliente.nombre, '</p><br><h3>Pa??s:</h3><br><p>', nuevoCliente.pais, '</p><br><h3>Empresa:</h3><br><p>', nuevoCliente.empresa, '</p><br><h3>Correo electr??nico:</h3><br><p>', nuevoCliente.mail, '</p><br><h3>Celular/m??vil:</h3><br><p>', nuevoCliente.celular, '</p><br><br>']
    document.write('<h2>Datos del cliente:</h2><br><br>')
    for (i = 0; i < 11; i += 1) {
        document.write(mostrarDatosCliente[i])
    }
    document.write('<h2>Este es el detalle de su presupuesto:</h2><br>')
    // TABLA
    document.write('<table class="tabla__detalle"><tbody><tr class="tabla__detalle--titulos"><td class="tabla__detalle--cant">Cant.</td><td class="tabla__detalle--desc">Descripci??n</td><td class="tabla__detalle--vals">Unitario</td><td class="tabla__detalle--vals">Total</td></tr>')
    // FILA PROYECTO
    document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">')
    if (datosNuevoPresupuesto.tipoDeProyecto === 'web') {
        document.write('Sitio Web tradicional (Tipo de dise??o: ')
        if (datosNuevoPresupuesto.tipoDeDisenio === 'framework') {
            document.write('basado en framework)</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr>')
        } else {
            document.write('a medida)</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr>')
        }
    }
    if (datosNuevoPresupuesto.tipoDeProyecto === 'wordpress') {
        document.write('Plantilla de Wordpress personalizada</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr><tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Adicional por instalaci??n y gesti??n de plantilla en WP</td><td class="tabla__detalle--vals">' + EXTRA_WORDPRESS + '</td><td class="tabla__detalle--vals">' + EXTRA_WORDPRESS + '</td></tr>')
        if (datosNuevoPresupuesto.tipoDePlantilla === 'profesional') {
            document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Adicional por plantilla de pago (precio de plantilla + instalaci??n)</td><td class="tabla__detalle--vals">' + EXTRA_PLANTILLA_PROF + '</td><td class="tabla__detalle--vals">' + EXTRA_PLANTILLA_PROF + '</td></tr>')
        }
    }
    // FILA PLAZO
    document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Precio base seg??n plazo: ')
    if (datosNuevoPresupuesto.plazoDeEntrega >= 5 && datosNuevoPresupuesto.plazoDeEntrega < 10) {
        document.write('1 semana (5 d??as h??biles)</td><td class="tabla__detalle--vals">' + PRECIO_PLAZO_SEMANA + '</td><td class="tabla__detalle--vals">' + PRECIO_PLAZO_SEMANA + '</td></tr>')
        if (datosNuevoPresupuesto.plazoDeEntrega != 5) {
            document.write('<tr><td class="tabla__detalle--cant">' + diasExtra + '</td><td class="tabla__detalle--desc">Importe por d??as excedentes al plazo b??sico</td><td class="tabla__detalle--vals">' + PRECIO_DIA_EXTRA + '</td><td class="tabla__detalle--vals">' + adicionalXdiasExtra + '</td></tr>')
        }
    }
    if (datosNuevoPresupuesto.plazoDeEntrega >= 10 && datosNuevoPresupuesto.plazoDeEntrega < 20) {
        document.write('1 quincena (10 d??as h??biles)</td><td class="tabla__detalle--vals">' + PRECIO_PLAZO_QUINCENA + '</td><td class="tabla__detalle--vals">' + PRECIO_PLAZO_QUINCENA + '</td></tr>')
        if (datosNuevoPresupuesto.plazoDeEntrega != 10) {
            document.write('<tr><td class="tabla__detalle--cant">' + diasExtra + '</td><td class="tabla__detalle--desc">Importe por d??as excedentes al plazo b??sico</td><td class="tabla__detalle--vals">' + PRECIO_DIA_EXTRA + '</td><td class="tabla__detalle--vals">' + adicionalXdiasExtra + '</td></tr>')
        }
    }
    if (datosNuevoPresupuesto.plazoDeEntrega >= 20 && datosNuevoPresupuesto.plazoDeEntrega < 41) {
        document.write('1 mes (20 d??as h??biles)</td><td class="tabla__detalle--vals">' + PRECIO_PLAZO_MES + '</td><td class="tabla__detalle--vals">' + PRECIO_PLAZO_MES + '</td></tr>')
        if (datosNuevoPresupuesto.plazoDeEntrega != 20) {
            document.write('<tr><td class="tabla__detalle--cant">' + diasExtra + '</td><td class="tabla__detalle--desc">Importe por d??as excedentes al plazo b??sico</td><td class="tabla__detalle--vals">' + PRECIO_DIA_EXTRA + '</td><td class="tabla__detalle--vals">' + adicionalXdiasExtra + '</td></tr>')
        }
    }
    // FILA SECCIONES
    if (datosNuevoPresupuesto.numeroDeSecciones > MAXIMO_SECCIONES_INC) {
        document.write('<tr><td class="tabla__detalle--cant">5</td><td class="tabla__detalle--desc">Secciones incluidas en el sitio (hasta 5 sin costo extra)</td><td class="tabla__detalle--vals">-</td><td class="tabla__detalle--vals">-</td></tr><tr><td class="tabla__detalle--cant">' + seccionesExtra + '</td><td class="tabla__detalle--desc">Adicional por secciones extra</td><td class="tabla__detalle--vals">' + RECARGO_SECCIONES_PAG + '</td><td class="tabla__detalle--vals">' + adicionalXsecciones + '</td></tr>')
    }
    // FILAS SERVICIOS ADICIONALES
    if (datosNuevoPresupuesto.adicionalHosting === true) {
        document.write('<tr><td class="tabla__detalle--cant">12</td><td class="tabla__detalle--desc">Servicio de Web Hosting*</td><td class="tabla__detalle--vals">' + HOSTING_ANUAL / 12 + '</td><td class="tabla__detalle--vals">' + HOSTING_ANUAL + '</td></tr>')
    }
    if (datosNuevoPresupuesto.adicionalDominio === true) {
        document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Servicio registro de dominio*</td><td class="tabla__detalle--vals">' + DOMINIO_ANUAL + '</td><td class="tabla__detalle--vals">' + DOMINIO_ANUAL + '</td></tr>')
    }
    if (datosNuevoPresupuesto.adicionalLogo === true) {
        document.write('<tr><td class="tabla__detalle--cant">1</td><td class="tabla__detalle--desc">Dise??o de logo</td><td class="tabla__detalle--vals">' + EXTRA_LOGO + '</td><td class="tabla__detalle--vals">' + EXTRA_LOGO + '</td></tr>')
    }
    if (datosNuevoPresupuesto.adicionalMantenimiento === true) {
        document.write('<tr><td class="tabla__detalle--cant">12</td><td class="tabla__detalle--desc">Servicio de Mantenimiento Web*</td><td class="tabla__detalle--vals">' + MANTENIMIENTO_ANUAL / 12 + '</td><td class="tabla__detalle--vals">' + MANTENIMIENTO_ANUAL + '</td></tr>')
    }
    // FILA REUNIONES PRESENCIALES
    if (datosNuevoPresupuesto.reunionesPresenciales === true) {
        document.write('<tr><td class="tabla__detalle--cant">' + datosNuevoPresupuesto.cantidadDeReuniones + '</td><td class="tabla__detalle--desc">Recargo por reuniones presenciales</td><td class="tabla__detalle--vals">' + RECARGO_PRESENCIAL + '</td><td class="tabla__detalle--vals">' + precioXvisitas + '</td></tr>')
    }
    // FILA SUBTOTAL
    document.write('<tr class="tabla__detalle--titulos"><td colspan="3" class="tabla__detalle--total">SUB-TOTAL U$D</td><td class="tabla__detalle--vals">' + precioProvisorio + '</td></tr>')
    // SI EL TIPO DE DISE??O ES FRAMEWORK, DESCUENTO
    if (datosNuevoPresupuesto.tipoDeDisenio === 'framework') {
        document.write('<tr><td colspan="3" class="tabla__detalle--total">Descuento por dise??o basado en framework</td><td class="tabla__detalle--vals">-' + DESC_FRAMEWORK + '</td></tr>')
    }
    // FORMA DE PAGO
    document.write('<tr><td colspan="3" class="tabla__detalle--total">')
    if (datosNuevoPresupuesto.formaDePago === false) {
        document.write('Descuento por abonar en un pago</td><td class="tabla__detalle--vals">-' + descuento)
    } else {
        document.write('Recargo por pago en ')
        switch (datosNuevoPresupuesto.cantidadDeCuotas) {
            case 2:
                document.write(datosNuevoPresupuesto.cantidadDeCuotas + ' cuotas</td><td class="tabla__detalle--vals">' + RECARGO_DOS_CUOTAS)
                break
            case 3:
                document.write(datosNuevoPresupuesto.cantidadDeCuotas + ' cuotas</td><td class="tabla__detalle--vals">' + RECARGO_TRES_CUOTAS)
                break
            case 6:
                document.write(datosNuevoPresupuesto.cantidadDeCuotas + ' cuotas</td><td class="tabla__detalle--vals">' + RECARGO_SEIS_CUOTAS)
                break
            case 12:
                document.write(datosNuevoPresupuesto.cantidadDeCuotas + ' cuotas</td><td class="tabla__detalle--vals">' + RECARGO_DOCE_CUOTAS)
                break
        }
    }
    // FILA TOTALES Y CIERRE TABLA
    document.write('</td></tr><tr class="tabla__detalle--titulos"><td colspan="3" class="tabla__detalle--total">TOTAL U$D</td><td class="tabla__detalle--vals">' + precioFinal + '</td></tr><tr class="tabla__detalle--titulos"><td colspan="3" class="tabla__detalle--total">TOTAL AR$</td><td class="tabla__detalle--vals">' + precioEnPesos + '</td></tr></tbody></table>')
    //CIERRE DE COTIZADOR
    document.write('<br><br><h2>Gracias por presupuestar su proyecto con nosotros. Nos comunicaremos con Usted a la brevedad para que podamos cerrar el trato y comenzar a trabajar.</h2>')
}

// EJECUCI??N

bienVenido = alert('??Bienvenido a nuestro presupuestador en l??nea! A continuaci??n le haremos algunas preguntas sobre su proyecto y las pautas de trabajo con las cuales realizaremos un presupuesto aproximado.')

datosSolicitante()

datosSitio()

datosAdicionales()

datosPautasTrabajo()

calcularPresupuesto()

mostrarPresupuesto()