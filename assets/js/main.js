// CLASES

class Cliente {
    constructor(id, nom, empr, ps, corr, cel) {
        this.id = id
        this.nombre = nom
        this.empresa = empr
        this.pais = ps
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

class PautasTrabajo {
    constructor(plz, pres, numvis, cuots) {
        this.plazoEntrega = plz
        this.presenciales = pres
        this.cantidadPresenciales = numvis
        this.pagos = cuots
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

class Presupuesto {
    constructor(id, idc, secx, adsecs, vis, revis, preprov, desc, prefin, prepe){
        this.id = id
        this.idc = idc
        this.seccionesXtra = secx
        this.adicionalSecciones = adsecs
        this.visitas = vis
        this.recargoVisitas = revis
        this.precioProvisorio = preprov
        this.descuento = desc
        this.precioFinal = prefin
        this.precioPesos = prepe
    }
}

// ELEMENTOS DEL DOM

// *** Formularios ***

const $formularioDatos = document.querySelector('#form__presup--paso1')

const $formularioProyecto = document.querySelector('#form__presup--paso2')

const $formularioPautas = document.querySelector('#form__presup--paso3')

const $formularioAdicionales = document.querySelector('#form__presup--paso4')

// *** Formularios: elementos ***
// Formulario de datos:

const $elNombre = document.querySelector('#nombre')

const $errorNombre = document.querySelector('#error-nombre')

const $laEmpresa = document.querySelector('#empresa')

const $errorEmpresa = document.querySelector('#error-empresa')

const $elPais = document.querySelector('#pais')

const $errorPais = document.querySelector('#error-pais')

const $paisOtroCont = document.querySelector('#pa2')

const $paisOtro = document.querySelector('#pais-otro')

const $errorPaisOtro = document.querySelector('#error-pais-otro')

const $elCorreo = document.querySelector('#correo')

const $errorCorreo = document.querySelector('#error-correo')

const $elTelefono = document.querySelector('#telefono')

const $errorTelefono = document.querySelector('#error-telefono')

// Formulario de proyecto:

const $tipoDeProyecto = document.querySelector('#protip')

const $errorTipoDeProyecto = document.querySelector('#error-protip')

// Tipo WEB:

const $tipoWeb = document.querySelector('#elementos__web')

const $tipoDisenio = document.querySelector('#dise')

const $errorTipoDisenio = document.querySelector('#error-dise')

const $disenioDistri = document.querySelector('#distri')

const $errorDisenioDistri = document.querySelector('#error-distri')

const $seccionesWebCont = document.querySelector('#seccionesweb')

const $seccionesWeb = document.querySelector('#websecc')

const $errorSeccionesWeb = document.querySelector('#error-websecc')

// Tipo WORDPRESS

const $tipoWp = document.querySelector('#elementos__wp')

const $tipoPlantilla = document.querySelector('#planti')

const $errorTipoPlantilla = document.querySelector('#error-planti')

const $seccionesWp = document.querySelector('#wpsecc')

const $errorSeccionesWp = document.querySelector('#error-wpsecc')

// Formulario de pautas:

const $plazoDeEntrega = document.querySelector('#plazo')

const $errorPlazo = document.querySelector('#error-plazo')

const $reunionesPresent = document.querySelector('#reuniones')

const $errorReuniones = document.querySelector('#error-reuniones')

const $reunionesCantCont = document.querySelector('#reuniones__num')

const $reunionesCant = document.querySelector('#reuniones__cant')

const $errorReunionesCant = document.querySelector('#error-reuniones__cant')

const $pagosCant = document.querySelector('#pagos')

// Formulario de adicionales:

const $host = document.querySelector('#hosting')

const $domi = document.querySelector('#dominio')

const $mante = document.querySelector('#mantenimiento')

const $lgo = document.querySelector('#logo')

// *** Visualización y modificación de datos recolectados ***

const $clienteDatos = document.querySelector('#muestra__datos--cliente')

const $datosClienteTitulo = document.querySelector('#datos__cliente--titulo')

const $datosClienteLista = document.querySelector('#cliente__datos--lista')

const $datosClienteParrafo = document.querySelector('#datos__cliente--parrafo')

// Modificación de datos: pseudo-botones

const $confirmaDatosBtnOk = document.querySelector('#confirma__datos--ok')

const $confirmaDatosBtnModif = document.querySelector('#confirma__datos--modif')

// *** Visualización tabla de presupuesto ***

const $presupuestoDatos = document.querySelector('#datos__presupuesto')

const $contenedorTabla = document.querySelector('#tabla__presupuesto--cont')

const $tablaPresup = document.querySelector('#tabla__presupuesto')

const $tablaCabeza = document.querySelector('#tabla__cabecera')

const $tablaFilaTotal = document.querySelector('#tabla__fila--total')

const $tablaFilaTotalDt = document.querySelector('#tabla__total--dato')

const $tablaFilaTotalP = document.querySelector('#tabla__fila--total_p')

const $tablaFilaTotalPdt = document.querySelector('#tabla__totalP--dato')



// CONSTANTES

const HORAS_TRABAJ_X_DIA = 6
const DIAS_TRABAJ_X_SEM = 5
const PRECIO_PLAZO_SEMANA = 750
const PRECIO_PLAZO_QUINCENA = 600
const PRECIO_PLAZO_TRESEM = 450
const PRECIO_PLAZO_MES = 350
const PRECIO_PLAZO_MASMES = 150
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

// ARRAYS

let datosCliente = []

let datosProyecto = []

let datosPautas = []

let datosAdicionales = []

let presupuestoFinal = []

let presupTablaDetalle = []

let presupTablaRecyDesc = []

// VARIABLES

let clienteExistente = false

let moDif = false

let numeroDePaso = 0


// FUNCIONES

document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(sessionStorage.getItem('Cliente')) != null){
        clienteExistente = true
        numeroDePaso = 1
        yaExisteCliente()
    } else {
        vengaElPasoUno()
    }
})

const yaExisteCliente = () => {
    if(clienteExistente === true){
        datosCliente = JSON.parse(sessionStorage.getItem('Cliente'))
        clienteExistente === true
        confirmarDatos()
    } else {
        vengaElPasoUno()
    }
}

// Funciones: ELEMENTOS DE LOS FORMULARIOS Y SU FUNCIONAMIENTO

const elementosFormPasoUno = () => {
    $clienteDatos.classList.remove('activo')
    $formularioDatos.classList.add('activo')

    const nombreMalFx = () => {
        $elNombre.onblur = function(){
            if ($elNombre.value === null || $elNombre.value === ''){
                $elNombre.classList.add('error')
                $errorNombre.classList.add('activo')
            } else {
                $elNombre.classList.add('bien')
            }
        }
        $elNombre.onfocus = function(){
            if($elNombre.classList.contains('bien')){
                $elNombre.classList.remove('bien')
            }
            if($elNombre.classList.contains('error')){
                $elNombre.classList.remove('error')
            }
            if($errorNombre.classList.contains('activo')){
                $errorNombre.classList.remove('activo')
            }
        }
    }

    const empresaMalFx = () => {
        $laEmpresa.onblur = function(){
            if ($laEmpresa.value === null || $laEmpresa.value === ''){
                $laEmpresa.classList.add('error')
                $errorEmpresa.classList.add('activo')
            } else {
                $laEmpresa.classList.add('bien')
            }
        }
        $laEmpresa.onfocus = function(){
            if($laEmpresa.classList.contains('bien')){
                $laEmpresa.classList.remove('bien')
            }
            if($laEmpresa.classList.contains('error')){
                $laEmpresa.classList.remove('error')
            }
            if($errorEmpresa.classList.contains('activo')){
                $errorEmpresa.classList.remove('activo')
            }
        }
    }

    const paisMalFx = () => {
        $elPais.onblur = function(){
            if ($elPais.value === null || $elPais.value === '' || $elPais.value === 'vacio'){
                $elPais.classList.add('error')
                $errorPais.classList.add('activo')
            } else {
                $elPais.classList.add('bien')
            }
        }
        $elPais.onfocus = function(){
            if($elPais.classList.contains('bien')){
                $elPais.classList.remove('bien')
            }
            if($elPais.classList.contains('error')){
                $elPais.classList.remove('error')
            }
            if($errorPais.classList.contains('activo')){
                $errorPais.classList.remove('activo')
            }
        }
    }

    const elOtroPaisMalFx = () => {
        $paisOtro.onblur = function(){
            if($paisOtro.value === null || $paisOtro.value === ''){
                $paisOtroCont.classList.remove('activo')
                $paisOtro.classList.add('error')
                $errorPaisOtro.classList.add('activo')
            } else {
                $elPais.classList.add('bien')
                $paisOtro.classList.add('bien')
            }
        }
        $paisOtro.onfocus = function(){
            if($paisOtro.classList.contains('bien')){
                $paisOtro.classList.remove('bien')
            }
            if($paisOtro.classList.contains('error')){
                $paisOtro.classList.remove('error')
            }
            if($errorPaisOtro.classList.contains('activo')){
                $errorPaisOtro.classList.remove('activo')
            }
        }
    }

    const correoMalFx = () => {
        $elCorreo.onblur = function(){
            if ($elCorreo.value === null || $elCorreo.value === ''){
                $elCorreo.classList.add('error')
                $errorCorreo.classList.add('activo')
            } else {
                $elCorreo.classList.add('bien')
            }
        }
        $elCorreo.onfocus = function(){
            if($elCorreo.classList.contains('bien')){
                $elCorreo.classList.remove('bien')
            }
            if($elCorreo.classList.contains('error')){
                $elCorreo.classList.remove('error')
            }
            if($errorCorreo.classList.contains('activo')){
                $errorCorreo.classList.remove('activo')
            }
        }
    }

    const telefonoMalFx = () => {
        $elTelefono.onblur = function(){
            if ($elTelefono.value === null || $elTelefono.value === ''){
                $elTelefono.classList.add('error')
                $errorTelefono.classList.add('activo')
            } else {
                $elTelefono.classList.add('bien')
            }
        }
        $elTelefono.onfocus = function(){
            if($elTelefono.classList.contains('bien')){
                $elTelefono.classList.remove('bien')
            }
            if($elTelefono.classList.contains('error')){
                $elTelefono.classList.remove('error')
            }
            if($errorTelefono.classList.contains('activo')){
                $errorTelefono.classList.remove('activo')
            }
        }
    }
    
    const nombreMal = () => {
        if(moDif === true){
            $elNombre.value = ''
        }
        nombreMalFx()
    }

    const empresaMal = () => {
        if(moDif === true){
            $laEmpresa.value = ''
        }
        if($elNombre.value === ''){
            $elNombre.classList.add('error')
            $errorNombre.classList.add('activo')
        }
        nombreMalFx()
        empresaMalFx()
    }

    const paisMal = () => {
        if($laEmpresa.value === ''){
            $laEmpresa.classList.add('error')
            $errorEmpresa.classList.add('activo')
        }
        empresaMalFx()
        paisMalFx()
    }

    const paisNoEsta = () => {
        const elPaisNoEsta = $elPais.selectedIndex
        const escribaOtroPais = $elPais.options[elPaisNoEsta]
        if (escribaOtroPais.value != 'orto') {
            if($paisOtroCont.classList.contains('activo')){
                $paisOtroCont.classList.replace('activo', 'pasivo')
            } else {
                $paisOtroCont.classList.add('pasivo')
            }
            if(escribaOtroPais.value === 'vacio' || escribaOtroPais.value === '' || escribaOtroPais.value === null ) {
                $elPais.classList.add('error')
                $errorPais.classList.add('activo')
            } else {
                $elPais.classList.add('bien')
            }
            $elPais.onfocus = function(){
                if($elPais.classList.contains('bien')){
                    $elPais.classList.remove('bien')
                }
                if($elPais.classList.contains('error')){
                    $elPais.classList.remove('error')
                }
                if($errorEmpresa.classList.contains('activo')){
                    $errorEmpresa.classList.remove('activo')
                }
            }
        } else {
            if($paisOtroCont.classList.contains('pasivo')){
                $paisOtroCont.classList.replace('pasivo', 'activo')
            } 
            elOtroPais()
        }
    }

    const elOtroPaEveClic = () => {
        if(moDif === true && $paisOtro.value != ''){
            $paisOtro.value = ''
        }
        elOtroPaisMalFx()  
    }
    
    const elOtroPais = () => {

        if(moDif === true && $paisOtro.value != ''){
            $paisOtro.value = ''
        }

        paisMalFx()

        elOtroPaEveClic()



    }
    
    const correoMal = () => {
        if($elPais.value === 'orto'){
            if($paisOtro.value === null || $paisOtro.value === ''){
                $paisOtroCont.classList.remove('activo')
                $paisOtro.classList.add('error')
                $errorPaisOtro.classList.add('activo')
                $paisOtro.onfocus = function(){
                    if($paisOtro.classList.contains('bien')){
                        $paisOtro.classList.remove('bien')
                    }
                    if($paisOtro.classList.contains('error')){
                        $paisOtro.classList.remove('error')
                    }
                    if($errorPaisOtro.classList.contains('activo')){
                        $errorPaisOtro.classList.remove('activo')
                    } 
                }
            }
        }
        if ($elPais.value === 'vacio'){
            $elPais.classList.add('error')
            $errorPais.classList.add('activo')
            $elPais.onfocus = function(){
                $elPais.onfocus = function(){
                    if($elPais.classList.contains('bien')){
                        $elPais.classList.remove('bien')
                    }
                    if($elPais.classList.contains('error')){
                        $elPais.classList.remove('error')
                    }
                    if($errorPais.classList.contains('activo')){
                        $errorPais.classList.remove('activo')
                    }
                } 
            }
        }

        if(moDif === true){
            document.getElementById('correo').value = ''
        }

        correoMalFx()
    }
    
    const telefonoMal = () => {
        if(moDif === true){
            document.getElementById('telefono').value = ''
        }
        if($elCorreo.value === ''){
            $elCorreo.classList.add('error')
            $errorCorreo.classList.add('activo')
        }
        correoMalFx()
        telefonoMalFx()
    }

    $elNombre.addEventListener('click', nombreMal)

    $laEmpresa.addEventListener('click', empresaMal)
    
    $elPais.addEventListener('click', paisMal)

    $elPais.addEventListener('change', paisNoEsta)

    $paisOtro.addEventListener('click', elOtroPaEveClic)

    //$paisOtro.addEventListener('click', elOtroPaEveClic)

    $elCorreo.addEventListener('click', correoMal)

    $elTelefono.addEventListener('click', telefonoMal)
}

const elementosFormPasoDos = () => {
    $clienteDatos.classList.remove('activo')
    $formularioProyecto.classList.add('activo')

    const tipoProyectoErrorFx = () => {
        $tipoDeProyecto.onblur = function(){
            if ($tipoDeProyecto.value === 'vacio'){
                $tipoDeProyecto.classList.add('error')
                $errorTipoDeProyecto.classList.add('activo')
            } else {
                $tipoDeProyecto.classList.add('bien')
                if ($tipoDeProyecto.value === 'web'){
                    tipoWeb()
                }
                if ($tipoDeProyecto.value === 'wordpress'){
                    tipoWp()
                }
            }
        }
        $tipoDeProyecto.onfocus = function(){
            if($tipoDeProyecto.classList.contains('bien')){
                $tipoDeProyecto.classList.remove('bien')
            }
            if($tipoDeProyecto.classList.contains('error')){
                $tipoDeProyecto.classList.remove('error')
            }
            if($errorTipoDeProyecto.classList.contains('activo')){
                $errorTipoDeProyecto.classList.remove('activo')
            }
        }
    }

    const tipoProyectoError = () => {
        tipoProyectoErrorFx()
    }
    
    const tipoProyecto = () => {
        const elProyecto = $tipoDeProyecto.selectedIndex
        const proyectoEleccion = $tipoDeProyecto.options[elProyecto]
        if(proyectoEleccion.value === 'vacio'){
            if($tipoDeProyecto.classList.contains('bien')){
                $tipoDeProyecto.classList.replace('bien', 'error')
            }
            $tipoDeProyecto.classList.add('error')
            $errorTipoDeProyecto.classList.add('activo')
            if($tipoWeb.classList.contains('activo')){
                $tipoWeb.classList.replace('activo', 'pasivo')
            }
            if($tipoWp.classList.contains('activo')){
                $tipoWp.classList.replace('activo', 'pasivo')
            }
            $tipoDeProyecto.onfocus = function(){
                if($tipoDeProyecto.classList.contains('bien')){
                    $tipoDeProyecto.classList.remove('bien')
                }
                if($tipoDeProyecto.classList.contains('error')){
                    $tipoDeProyecto.classList.remove('error')
                }
                if($errorTipoDeProyecto.classList.contains('activo')){
                    $errorTipoDeProyecto.classList.remove('activo')
                }
            }
        } else {
            if (proyectoEleccion.value === 'web'){
                tipoWeb()
            }
            if (proyectoEleccion.value === 'wordpress'){
                tipoWp()
            }
        }
    }

    const tipoDisComprobClic = () => {
        $tipoDisenio.onblur = function(){
            if($tipoDisenio.value === 'vacio'){
                if($tipoDisenio.classList.contains('bien')){
                    $tipoDisenio.classList.remove('bien')
                }
                $errorTipoDisenio.classList.add('activo')
                $tipoDisenio.classList.add('error')
                $tipoDisenio.onfocus = function(){
                    $tipoDisenio.classList.remove('error')
                    $errorTipoDisenio.classList.remove('activo')
                }
            } else {
                $tipoDisenio.classList.add('bien')
            }
        }
        $tipoDisenio.onfocus = function(){
            if($tipoDisenio.classList.contains('bien')){
                $tipoDisenio.classList.remove('bien')
            }
            if($tipoDisenio.classList.contains('error')){
                $tipoDisenio.classList.remove('error')
            }
            if($errorTipoDisenio.classList.contains('activo')){
                $errorTipoDisenio.classList.remove('activo')
            }
        }
    }

    const tipoDisComprobChang = () => {
        const elDisenio = $tipoDisenio.selectedIndex
        const disenioEleccion = $tipoDisenio.options[elDisenio]
        $tipoDisenio.onblur = function(){
            if(disenioEleccion.value === 'vacio'){
                if($tipoDisenio.classList.contains('bien')){
                    $tipoDisenio.classList.remove('bien')
                }
                $errorTipoDisenio.classList.add('activo')
                $tipoDisenio.classList.add('error')
                $tipoDisenio.onfocus = function(){
                    $tipoDisenio.classList.remove('error')
                    $errorTipoDisenio.classList.remove('activo')
                }
            } else {
                $tipoDisenio.classList.add('bien')
            }
        }

    }

    const disenioDistriVacio = () => {
        if($disenioDistri.classList.contains('bien')){
            $disenioDistri.classList.remove('bien')
        }
        $errorDisenioDistri.classList.add('activo')
        $disenioDistri.classList.add('error')
        $disenioDistri.onfocus = function(){
            $disenioDistri.classList.remove('error')
            $errorDisenioDistri.classList.remove('activo')
        }
    }

    const disDistriComprobClic = () => {
        
        $disenioDistri.onblur = function(){
            if($disenioDistri.value === 'vacio'){
                if($seccionesWebCont.classList.contains('activo')){
                    $seccionesWebCont.classList.replace('activo', 'pasivo')
                }
                disenioDistriVacio()
            } else {
                $disenioDistri.classList.add('bien')
                if($disenioDistri.value != 'secciones'){
                    if($seccionesWebCont.classList.contains('activo')){
                        $seccionesWebCont.classList.replace('activo', 'pasivo')
                    }
                } else {
                    $seccionesWebCont.classList.replace('pasivo', 'activo')
                    seccWebComprobClic()
                }

            }
        }
        $disenioDistri.onfocus = function(){
            if($disenioDistri.classList.contains('bien')){
                $disenioDistri.classList.remove('bien')
            }
            if($disenioDistri.classList.contains('error')){
                $disenioDistri.classList.remove('error')
            }
            if($errorDisenioDistri.classList.contains('activo')){
                $errorDisenioDistri.classList.remove('activo')
            }
            if($seccionesWebCont.classList.contains('pasivo') === false && $errorSeccionesWeb.classList.contains('activo')){
                $seccionesWebCont.classList.add('activo')
                $errorSeccionesWeb.classList.remove('activo')
                $seccionesWeb.classList.remove('error')
            }
        }
    }

    const disDistriComprobChang = () => {

        const laDistri = $disenioDistri.selectedIndex
        const distriEleccion = $disenioDistri.options[laDistri]
        if (distriEleccion.value != 'secciones') {
            if($seccionesWebCont.classList.contains('activo')){
                $seccionesWebCont.classList.replace('activo', 'pasivo')
            }
            if($disenioDistri.classList.contains('bien')){
                $disenioDistri.classList.remove('bien')
            }
            if(distriEleccion.value === 'vacio' || distriEleccion.value === '' || distriEleccion.value === null ) {
                if($disenioDistri.classList.contains('bien')){
                    $disenioDistri.classList.remove('bien')
                }
                $disenioDistri.onblur = function() {
                    if($disenioDistri.classList.contains('bien')){
                        $disenioDistri.classList.remove('bien')
                    }
                    $errorDisenioDistri.classList.add('activo')
                    $disenioDistri.classList.add('error')
                    $disenioDistri.onfocus = function(){
                        if($disenioDistri.classList.contains('bien')){
                            $disenioDistri.classList.remove('bien')
                        }
                        if($disenioDistri.classList.contains('error')){
                            $disenioDistri.classList.remove('error')
                        }
                        if($errorDisenioDistri.classList.contains('activo')){
                            $errorDisenioDistri.classList.remove('activo')
                        }
                    }
                }
            } else {
                $disenioDistri.classList.add('bien')
            }
        } else {
            $seccionesWebCont.classList.replace('pasivo', 'activo')
            seccWebComprobClic()
        }
        
        $disenioDistri.onfocus = function(){
            if($disenioDistri.classList.contains('bien')){
                $disenioDistri.classList.remove('bien')
            }
            if($disenioDistri.classList.contains('error')){
                $disenioDistri.classList.remove('error')
            }
            if($errorDisenioDistri.classList.contains('activo')){
                $errorDisenioDistri.classList.remove('activo')
            }
        }

    }

    const seccWebComprobClic = () => {
        $seccionesWeb.onblur = function(){
            if($seccionesWeb.value === null || $seccionesWeb.value === '' || Number($seccionesWeb.value) === 0 || isNaN(Number($seccionesWeb.value))){
                if($seccionesWebCont.classList.contains('activo')){
                    $seccionesWebCont.classList.remove('activo')
                }
                $seccionesWeb.classList.add('error')
                $errorSeccionesWeb.classList.add('activo')
            } else {
                $seccionesWeb.classList.add('bien')
                $seccionesWebCont.classList.add('activo')
            }
        }
        $seccionesWeb.onfocus = function(){
            if($seccionesWeb.classList.contains('bien')){
                $seccionesWeb.classList.remove('bien')
            }
            if($seccionesWeb.classList.contains('error')){
                $seccionesWeb.classList.remove('error')
            }
            if($errorSeccionesWeb.classList.contains('activo')){
                $errorSeccionesWeb.classList.remove('activo')
            }
            $seccionesWebCont.classList.add('activo')
            $seccionesWeb.onblur = function(){
                $seccionesWebCont.classList.add('activo')
            }
        }
    }

    const tipoWeb = () => {
        if($tipoWp.classList.contains('activo')){
            $tipoWp.classList.replace('activo', 'pasivo')
        }
        $tipoWeb.classList.replace('pasivo', 'activo')

        tipoDisComprobClic()

        tipoDisComprobChang()

        disDistriComprobClic()

        disDistriComprobChang()

        seccWebComprobClic()
 
    }

    const tipoPlantiComprobClic = () => {

        $tipoPlantilla.onblur = function(){
            if($tipoPlantilla.value === 'vacio'){
                if($tipoPlantilla.classList.contains('bien')){
                    $tipoPlantilla.classList.remove('bien')
                }
                $errorTipoPlantilla.classList.add('activo')
                $tipoPlantilla.classList.add('error')
                $tipoPlantilla.onfocus = function(){
                    $tipoPlantilla.classList.remove('error')
                    $errorTipoPlantilla.classList.remove('activo')
                }
            } else {
                $tipoPlantilla.classList.add('bien')
            }
        }
        $tipoPlantilla.onfocus = function(){
            if($tipoPlantilla.classList.contains('bien')){
                $tipoPlantilla.classList.remove('bien')
            }
            if($tipoPlantilla.classList.contains('error')){
                $tipoPlantilla.classList.remove('error')
            }
            if($errorTipoPlantilla.classList.contains('activo')){
                $errorTipoPlantilla.classList.remove('activo')
            }
        }

    }

    const tipoPlantiComprobChang = () => {
        const laPlanti = $tipoPlantilla.selectedIndex
        const plantiEleccion = $tipoPlantilla.options[laPlanti]
        $tipoPlantilla.onblur = function () {
            if (plantiEleccion.value === 'vacio') {
                if ($tipoPlantilla.classList.contains('bien')) {
                    $tipoPlantilla.classList.remove('bien')
                }
                $errorTipoPlantilla.classList.add('activo')
                $tipoPlantilla.classList.add('error')
                $tipoPlantilla.onfocus = function () {
                    $tipoPlantilla.classList.remove('error')
                    $errorTipoPlantilla.classList.remove('activo')
                }
            } else {
                $tipoPlantilla.classList.add('bien')
            }
        }

    }

    const seccWpComprobClic = () => {
        $seccionesWp.onblur = function(){
            if($seccionesWp.value === null || $seccionesWp.value === '' || Number($seccionesWp.value) === 0 || isNaN(Number($seccionesWp.value))){
                $seccionesWp.classList.add('error')
                $errorSeccionesWp.classList.add('activo')
            } else {
                $seccionesWp.classList.add('bien')
            }
        }
        $seccionesWp.onfocus = function(){
            if($seccionesWp.classList.contains('bien')){
                $seccionesWp.classList.remove('bien')
            }
            if($seccionesWp.classList.contains('error')){
                $seccionesWp.classList.remove('error')
            }
            if($errorSeccionesWp.classList.contains('activo')){
                $errorSeccionesWp.classList.remove('activo')
            }
        }

    }
    
    const tipoWp = () => {
        if($tipoWeb.classList.contains('activo')){
            $tipoWeb.classList.replace('activo', 'pasivo')
        }
        $tipoWp.classList.replace('pasivo', 'activo')

        tipoPlantiComprobClic()

        tipoPlantiComprobChang()
        
        seccWpComprobClic()
        
    }

    $tipoDeProyecto.addEventListener('click', tipoProyectoError)

    $tipoDeProyecto.addEventListener('change', tipoProyecto)

    $tipoDisenio.addEventListener('click', tipoDisComprobClic)
        
    $tipoDisenio.addEventListener('change', tipoDisComprobChang)

    $disenioDistri.addEventListener('click', disDistriComprobClic)

    $disenioDistri.addEventListener('change', disDistriComprobChang)

    $seccionesWeb.addEventListener('click', seccWebComprobClic)

    $tipoPlantilla.addEventListener('click', tipoPlantiComprobClic)

    $tipoPlantilla.addEventListener('change', tipoPlantiComprobChang)

    $seccionesWp.addEventListener('click', seccWpComprobClic)
}

const elementosFormPasoTres = () => {
    $clienteDatos.classList.remove('activo')
    $formularioPautas.classList.add('activo')

    const validarPlazoClic = () => {
        $plazoDeEntrega.onblur = function(){
            if ($plazoDeEntrega.value === 'vacio') {
                $errorPlazo.classList.add('activo')
                $plazoDeEntrega.classList.add('error')
                $plazoDeEntrega.onfocus = function () {
                    $errorPlazo.classList.remove('activo')
                    $plazoDeEntrega.classList.remove('error')
                }
            } else {
                $plazoDeEntrega.classList.add('bien')
            }
        }
        $plazoDeEntrega.onfocus = function () {
            if($plazoDeEntrega.classList.contains('bien')){
                $plazoDeEntrega.classList.remove('bien')
            }
            if($plazoDeEntrega.classList.contains('error')){
                $plazoDeEntrega.classList.remove('error')
            }
            if($errorPlazo.classList.contains('activo')){
                $errorPlazo.classList.remove('activo')
            }
        }
    }

    const validarPlazoChang = () => {
        const plazoIndex = $plazoDeEntrega.selectedIndex
        const plazoOptions = $plazoDeEntrega.options[plazoIndex]
        $plazoDeEntrega.onblur = function(){
            if (plazoOptions.value === 'vacio' || plazoOptions.value === '' || plazoOptions.value === null) {
                $errorPlazo.classList.add('activo')
                $plazoDeEntrega.classList.add('error')
                $plazoDeEntrega.onfocus = function () {
                    $errorPlazo.classList.remove('activo')
                    $plazoDeEntrega.classList.remove('error')
                }
            } else {
                $plazoDeEntrega.classList.add('bien')
            }
        }
        $plazoDeEntrega.onfocus = function () {
            if($plazoDeEntrega.classList.contains('bien')){
                $plazoDeEntrega.classList.remove('bien')
            }
            if($plazoDeEntrega.classList.contains('error')){
                $plazoDeEntrega.classList.remove('error')
            }
            if($errorPlazo.classList.contains('activo')){
                $errorPlazo.classList.remove('activo')
            }
        }
    }

    const reunionesPresentClic = () => {
        $reunionesPresent.onblur = function(){
            if ($reunionesPresent.value === null || $reunionesPresent.value === '' || $reunionesPresent.value === 'vacio') {
                $errorReuniones.classList.add('activo')
                $reunionesPresent.classList.add('error')
                $reunionesPresent.onclick = function () {
                    if($reunionesPresent.classList.contains('bien')){
                        $reunionesPresent.classList.remove('bien')
                    }
                    if($reunionesPresent.classList.contains('error')){
                        $reunionesPresent.classList.remove('error')
                    }
                    if($errorReuniones.classList.contains('activo')){
                        $errorReuniones.classList.remove('activo')
                    }
                }
            } else {
                $reunionesPresent.classList.add('bien')
            }
        }
        $reunionesPresent.onclick = function () {
            if($reunionesPresent.classList.contains('bien')){
                $reunionesPresent.classList.remove('bien')
            }
            if($reunionesPresent.classList.contains('error')){
                $reunionesPresent.classList.remove('error')
            }
            if($errorReuniones.classList.contains('activo')){
                $errorReuniones.classList.remove('activo')
            }
        }
    }

    const reunionesPresentChang = () => {
        const lasReuni = $reunionesPresent.selectedIndex
        const reuniEleccion = $reunionesPresent.options[lasReuni]
        if(reuniEleccion.value != 'si'){
            if($reunionesCantCont.classList.contains('activo')){
                $reunionesCantCont.classList.replace('activo', 'pasivo')
            } else {
                $reunionesCantCont.classList.add('pasivo')
            }
            if(reuniEleccion.value === 'vacio' || reuniEleccion.value === '' || reuniEleccion.value === null ) {
                $reunionesPresent.classList.add('error')
                $errorReuniones.classList.add('activo')
            } else {
                $reunionesPresent.classList.add('bien')
            }
            $reunionesPresent.onfocus = function () {
                if($reunionesPresent.classList.contains('bien')){
                    $reunionesPresent.classList.remove('bien')
                }
                if($reunionesPresent.classList.contains('error')){
                    $reunionesPresent.classList.remove('error')
                }
                if($errorReuniones.classList.contains('activo')){
                    $errorReuniones.classList.remove('activo')
                }
            }
        } else {
            if($reunionesCantCont.classList.contains('pasivo')){
                $reunionesCantCont.classList.replace('pasivo', 'activo')
            } 
            cantReunComprobClic()
        }
    }

    const cantReunComprobClic = () => {
        $reunionesCant.onblur = function () {
            if ($reunionesCant.value === null || $reunionesCant.value === '' || Number($reunionesCant.value) === 0) {
                $reunionesCantCont.classList.remove('activo')
                $errorReunionesCant.classList.add('activo')
                $reunionesCant.classList.add('error')
            } else {
                $reunionesPresent.classList.add('bien')
                $reunionesCant.classList.add('bien')
            }
        }
        $reunionesCant.onfocus = function () {
            if($reunionesCant.classList.contains('bien')){
                $reunionesCant.classList.remove('bien')
            }
            if($reunionesCant.classList.contains('error')){
                $reunionesCant.classList.remove('error')
            }
            if($errorReunionesCant.classList.contains('activo')){
                $errorReunionesCant.classList.remove('activo')
            }
        }
    }

    const validarPagos = () => {
        $pagosCant.onblur = function () {
            $pagosCant.classList.add('bien')
        }
        $pagosCant.onfocus = function () {
            $pagosCant.classList.remove('bien')
        }
    }    

    $plazoDeEntrega.addEventListener('click', validarPlazoClic)

    $plazoDeEntrega.addEventListener('change', validarPlazoChang)

    //$reunionesPresent.addEventListener('click', reunionesPresentClic)

    $reunionesPresent.onclick = reunionesPresentClic

    $reunionesPresent.addEventListener('change', reunionesPresentChang)

    $reunionesCant.addEventListener('click', cantReunComprobClic)

    $pagosCant.addEventListener('click', validarPagos)

    $pagosCant.addEventListener('change', validarPagos)

}

const elementosFormPasoCuatro = () => {

    $clienteDatos.classList.remove('activo')
    $formularioAdicionales.classList.add('activo')
    
}

// Funciones: CAPTURA DATOS DE FORMULARIOS

const capturarDatosPasoUno = (evt) => {
    evt.preventDefault()
    const nombre = $elNombre.value
    const empresa = $laEmpresa.value
    const pais = $elPais.value
    const otropais = $paisOtro.value
    const correo = $elCorreo.value
    const telefono = Number($elTelefono.value)
    let elPais = ''
    let nombreOk = false
    let empresaOk = false
    let paisOk = false
    let correoOk = false
    let telefonoOk = false
    if (nombre === null || nombre === ''){
        $elNombre.classList.add('error')
        $errorNombre.classList.add('activo')
        $elNombre.onclick = function(){
            if($elNombre.classList.contains('bien')){
                $elNombre.classList.remove('bien')
            }
            if($elNombre.classList.contains('error')){
                $elNombre.classList.remove('error')
            }
            if($errorNombre.classList.contains('activo')){
                $errorNombre.classList.remove('activo')
            }
        }
        nombreOk = false
    } else {
        $elNombre.classList.add('bien')
        nombreOk = true
    }
    if (empresa === null || empresa === ''){
        $laEmpresa.classList.add('error')
        $errorEmpresa.classList.add('activo')
        $laEmpresa.onclick = function(){
            if($laEmpresa.classList.contains('bien')){
                $laEmpresa.classList.remove('bien')
            }
            if($laEmpresa.classList.contains('error')){
                $laEmpresa.classList.remove('error')
            }
            if($errorEmpresa.classList.contains('activo')){
                $errorEmpresa.classList.remove('activo')
            }
        }
        empresaOk = false
    } else {
        $laEmpresa.classList.add('bien')
        empresaOk = true
    }
    if (pais === null || pais === '' || pais === 'vacio'){
        $elPais.classList.add('error')
        $errorPais.classList.add('activo')
        $elPais.onclick = function(){
            if($elPais.classList.contains('bien')){
                $elPais.classList.remove('bien')
            }
            if($elPais.classList.contains('error')){
                $elPais.classList.remove('error')
            }
            if($errorPais.classList.contains('activo')){
                $errorPais.classList.remove('activo')
            }
        }
        paisOk = false
    } else {
        if (pais === 'orto'){
            if (otropais === null || otropais === ''){
                $paisOtro.classList.add('error')
                $errorPaisOtro.classList.add('activo')
                $paisOtro.onclick = function(){
                    if($paisOtro.classList.contains('bien')){
                        $paisOtro.classList.remove('bien')
                    }
                    if($paisOtro.classList.contains('error')){
                        $paisOtro.classList.remove('error')
                    }
                    if($errorPaisOtro.classList.contains('activo')){
                        $errorPaisOtro.classList.remove('activo')
                    }
                }
                paisOk = false
            } else {
                $paisOtro.classList.add('bien')
                paisOk = true
                elPais = otropais
            }
        } else {
            $elPais.classList.add('bien')
            paisOk = true
            elPais = pais
        }
    }
    if (correo === null || correo === ''){
        $elCorreo.classList.add('error')
        $errorCorreo.classList.add('activo')
        $elCorreo.onclick = function(){
            if($elCorreo.classList.contains('bien')){
                $elCorreo.classList.remove('bien')
            }
            if($elCorreo.classList.contains('error')){
                $elCorreo.classList.remove('error')
            }
            if($errorCorreo.classList.contains('activo')){
                $errorCorreo.classList.remove('activo')
            }
        }
        correoOk = false
    } else {
        $elCorreo.classList.add('bien')
        correoOk = true
    }
    if (telefono === null || telefono === '' || telefono === 0 || isNaN(telefono)){
        $elTelefono.classList.add('error')
        $errorTelefono.classList.add('activo')
        $elTelefono.onclick = function(){
            if($elTelefono.classList.contains('bien')){
                $elTelefono.classList.remove('bien')
            }
            if($elTelefono.classList.contains('error')){
                $elTelefono.classList.remove('error')
            }
            if($errorTelefono.classList.contains('activo')){
                $errorTelefono.classList.remove('activo')
            }
        }
        telefonoOk = false
    } else {
        $elTelefono.classList.add('bien')
        telefonoOk = true
    }
    if(nombreOk === true && empresaOk === true && paisOk === true && correoOk === true && telefonoOk === true){
        const clienteObj = {
            id: Date.now(),
            nombre: nombre,
            empresa: empresa,
            pais: elPais,
            correo: correo,
            telefono: telefono
        }
        datosCliente.push(clienteObj)
        sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))
        clienteExistente = false
        numeroDePaso = 1
        confirmarDatos()
    } else {
        return
    }
}

const capturarDatosPasoDos = (evt) => {
    evt.preventDefault()
    const tipoProy = $tipoDeProyecto.value
    const tipoDis = $tipoDisenio.value
    const disDistri = $disenioDistri.value
    let webSec = Number($seccionesWeb.value)
    const wpSec = Number($seccionesWp.value)
    const tipoPlanti = $tipoPlantilla.value

    let disTipOk = false
    let distriOk = false
    let webSecOk = false
    let wpSecOk = false
    let planTipOk = false

    if(tipoProy === 'web') {
        if(tipoDis === null || tipoDis === '' || tipoDis === 'vacio'){
            $errorTipoDisenio.classList.add('activo')
            $tipoDisenio.classList.add('error')
            $tipoDisenio.onclick = function(){
                $errorTipoDisenio.classList.remove('activo')
                $tipoDisenio.classList.remove('error')
            }
            disTipOk = false
        } else {
            $tipoDisenio.classList.add('bien')
            disTipOk = true
        }

        if (disDistri === null || disDistri === '' || disDistri === 'vacio') {
            $errorDisenioDistri.classList.add('activo')
            $disenioDistri.classList.add('error')
            $disenioDistri.onclick = function(){
                $errorDisenioDistri.classList.remove('activo')
                $disenioDistri.classList.remove('error')
            }
            distriOk = false
        } else {
            $disenioDistri.classList.add('bien')
            distriOk = true
        }

        if(disDistri === 'integrado'){
            webSecOk = true
            webSec = 0
        } else {
            if(webSec === null || webSec === '' || webSec === 0){
                $errorSeccionesWeb.classList.add('activo')
                $seccionesWeb.classList.add('error')
                $seccionesWeb.onclick = function () {
                    $errorSeccionesWeb.classList.remove('activo')
                    $seccionesWeb.classList.remove('error')
                }
                webSecOk = false
            } else {
                $seccionesWeb.classList.add('bien')
                webSecOk = true
            }
        }

        if(disTipOk === true && distriOk === true && webSecOk === true){
            const proyectoObj = {
                proyectoT: tipoProy,
                disenio: tipoDis,
                distribucion: disDistri,
                secciones: webSec,
                plantilla: 'no'
            }
            datosProyecto.push(proyectoObj)
            sessionStorage.setItem('Proyecto', JSON.stringify(datosProyecto))
            numeroDePaso = 2
            confirmarDatos()
        } else {
            return
        }
    } 

    if(tipoProy === 'wordpress') {
        if(tipoPlanti === null || tipoPlanti === '' || tipoPlanti === 'vacio'){
            $errorTipoPlantilla.classList.add('activo')
            $tipoPlantilla.classList.add('error')
            $tipoPlantilla.onclick = function(){
                $errorTipoPlantilla.classList.remove('activo')
                $tipoPlantilla.classList.remove('error')
            }
            planTipOk = false
        } else {
            $tipoPlantilla.classList.add('bien')
            planTipOk = true
        }

        if(wpSec === null || wpSec === '' || wpSec === 0){
            $errorSeccionesWp.classList.add('activo')
            $seccionesWp.classList.add('error')
            $seccionesWp.onclick = function () {
                $errorSeccionesWp.classList.remove('activo')
                $seccionesWp.classList.remove('error')
            }
            wpSecOk = false
        } else {
            $seccionesWp.classList.add('bien')
            wpSecOk = true
        }

        if(planTipOk === true && wpSecOk === true){
            const proyectoObj = {
                proyectoT: tipoProy,
                disenio: 'no',
                distribucion: 'no',
                secciones: wpSec,
                plantilla: tipoPlanti
            }
            datosProyecto.push(proyectoObj)
            sessionStorage.setItem('Proyecto', JSON.stringify(datosProyecto))
            numeroDePaso = 2
            confirmarDatos()
        } else {
            return
        }
    }
}

const capturarDatosPasoTres = (evt) => {
    evt.preventDefault()
    const entregaPlazo = $plazoDeEntrega.value
    const reunPres = $reunionesPresent.value
    const reunCant = Number($reunionesCant.value)
    const pagCant = Number($pagosCant.value)

    let entPlzOk = false
    let reunPresOk = false
    let reuniCantOk = false
    let conversionPlazo = ''
    let conversionPagos = ''
    

    if (entregaPlazo === null || entregaPlazo === '' || entregaPlazo === 'vacio') {
        $plazoDeEntrega.classList.add('error')
        $errorPlazo.classList.add('activo')
        $plazoDeEntrega.onclick = function () {
            $plazoDeEntrega.classList.remove('error')
            $errorPlazo.classList.remove('activo')
        }
        entPlzOk = false
    } else {
        $plazoDeEntrega.classList.add('bien')
        entPlzOk = true
        switch (Number(entregaPlazo)) {
            case 5:
                conversionPlazo = 'Una semana (5 días hábiles)'
                break
            case 10:
                conversionPlazo = 'Dos semanas (10 días hábiles)'
                break
            case 15:
                conversionPlazo = 'Tres semanas (15 días hábiles)'
                break
            case 20:
                conversionPlazo = 'Un mes (20 días hábiles)'
                break
            case 21:
                conversionPlazo = 'Más de un mes'
                break
        }
    }

    if (reunPres === null || reunPres === '' || reunPres === 'vacio') {
        $reunionesPresent.classList.add('error')
        $errorReuniones.classList.add('activo')
        $reunionesPresent.onclick = function () {
            $reunionesPresent.classList.remove('error')
            $errorReuniones.classList.remove('activo')
        }
        reunPresOk = false
    } else {
        $reunionesPresent.classList.add('bien')
        reunPresOk = true
    }

    if(reunPres === 'no'){
        reuniCantOk = true
    } else {
        if (reunCant === null || reunCant === '' || reunCant === 0) {
            $reunionesCant.classList.add('error')
            $errorReunionesCant.classList.add('activo')
            $reunionesCant.onclick = function () {
                $reunionesCant.classList.remove('error')
                $errorReunionesCant.classList.remove('activo')
            }
            reuniCantOk = false
        } else {
            $reunionesCant.classList.add('bien')
            reuniCantOk = true
        }
    }

    switch (pagCant) {
        case 1:
            conversionPagos = 'Un solo pago (Incluye 5% desc.)'
            break
        case 2:
            conversionPagos = 'Dos cuotas (Incluye recargos)'
            break
        case 3:
            conversionPagos = 'Tres cuotas (Incluye recargos)'
            break
        case 6:
            conversionPagos = 'Seis cuotas (Incluye recargos)'
            break
        case 12:
            conversionPagos = 'Doce cuotas (Incluye recargos)'
            break
    }

    if(entPlzOk === true && reunPresOk === true && reuniCantOk === true){
        const pautasObj = {
            plazo: Number(entregaPlazo),
            plazoconvers: conversionPlazo,
            reuniones: reunPres,
            reunionescant: Number(reunCant),
            pagos: pagCant,
            pagosconvers: conversionPagos
        }
        datosPautas.push(pautasObj)
        sessionStorage.setItem('Pautas', JSON.stringify(datosPautas))
        numeroDePaso = 3
        confirmarDatos()
    } else {
        return
    }
}

const capturarDatosPasoCuatro = (evt) => {
    evt.preventDefault()
    const hosting = $host.checked
    const dominio = $domi.checked
    const mantenimiento = $mante.checked
    const logo = $lgo.checked
    
    const adicionalesObj = {
        hosting: hosting,
        dominio: dominio,
        mantenimiento: mantenimiento,
        logo: logo
    }

    datosAdicionales.push(adicionalesObj)
    sessionStorage.setItem('Adicionales', JSON.stringify(datosAdicionales))
    crearAdicionales()
}

// Funciones: MOSTRAR LOS DATOS RECOLECTADOS

const muestraLosDatos = () => {
    if(clienteExistente === false){
        $datosClienteTitulo.innerText = 'Usted ha introducido los siguientes datos:'
        $datosClienteParrafo.innerText = 'Si los datos son correctos presione "continuar", si desea modificar los datos presione "modificar".'
        while($datosClienteLista.firstChild){
            $datosClienteLista.removeChild($datosClienteLista.firstChild)
        }
        for (const elDatoTemp of datosCliente) {
            listaDatos = document.createElement('ul')
            listaDatos.innerHTML = `<li><b>Nombre:</b> ${elDatoTemp.nombre}</li>
                                    <li><b>Empresa:</b> ${elDatoTemp.empresa}</li>
                                    <li><b>Pais:</b> ${elDatoTemp.pais}</li>
                                    <li><b>Correo:</b> ${elDatoTemp.correo}</li>
                                    <li><b>Telefono:</b> ${elDatoTemp.telefono}</li>`
            $datosClienteLista.appendChild(listaDatos)
        }
    }
    if(clienteExistente === true){
        $datosClienteTitulo.innerText = 'Al parecer, Usted ya registra una sesión iniciada con los siguientes datos:'
        $datosClienteParrafo.innerText = 'Si desea presupuestar un nuevo proyecto utilizando estos datos, presione "continuar", si desea modificar los datos o introducir datos nuevos para presupuestar un nuevo proyecto presione "modificar".'
        for (const elDatoTemp of datosCliente) {
            listaDatos = document.createElement('ul')
            listaDatos.innerHTML = `<li><b>Nombre:</b> ${elDatoTemp.nombre}</li>
                                    <li><b>Empresa:</b> ${elDatoTemp.empresa}</li>
                                    <li><b>Pais:</b> ${elDatoTemp.pais}</li>
                                    <li><b>Correo:</b> ${elDatoTemp.correo}</li>
                                    <li><b>Telefono:</b> ${elDatoTemp.telefono}</li>`
            $datosClienteLista.appendChild(listaDatos)
        }
    }
    
}

const muestraLosDatosProyecto = () => {
    $datosClienteTitulo.innerText = 'Estos son las especificaciones técnicas básicas de su proyecto:'
    $datosClienteParrafo.innerText = 'Si los datos son correctos presione "continuar", si desea modificar los datos presione "modificar".'
    while ($datosClienteLista.firstChild) {
        $datosClienteLista.removeChild($datosClienteLista.firstChild)
    }
    for (const elDatoTemp of datosProyecto) {
        listaDatos = document.createElement('ul')
        if(elDatoTemp.proyectoT === 'web'){
            listaDatos.innerHTML = `<li><b>Tipo de Proyecto:</b> ${elDatoTemp.proyectoT}</li>
                                <li><b>Tipo de diseño:</b> ${elDatoTemp.disenio}</li>
                                <li><b>Distrib. contenido:</b> ${elDatoTemp.distribucion}</li>
                                <li><b>Cantidad de secciones:</b> ${elDatoTemp.secciones}</li>`
        }
        if(elDatoTemp.proyectoT === 'wordpress'){
        listaDatos.innerHTML = `<li><b>Tipo de Proyecto:</b> ${elDatoTemp.proyectoT}</li>
                                <li><b>Tipo de plantilla:</b> ${elDatoTemp.plantilla}</li>
                                <li><b>Cantidad de secciones:</b> ${elDatoTemp.secciones}</li>`
        }
        $datosClienteLista.appendChild(listaDatos)
    }
}

const muestraLosDatosPautas = () => {
    $datosClienteTitulo.innerText = 'Estas son las pautas básicas de trabajo y la forma de pago que Usted eligió:'
    $datosClienteParrafo.innerText = 'Si los datos son correctos presione "continuar", si desea modificar los datos presione "modificar".'
    while ($datosClienteLista.firstChild) {
        $datosClienteLista.removeChild($datosClienteLista.firstChild)
    }
    for (const elDatoTemp of datosPautas) {
        listaDatos = document.createElement('ul')
        if(elDatoTemp.reuniones === 'no'){
            listaDatos.innerHTML = `<li><b>Plazo de entrega:</b> ${elDatoTemp.plazoconvers}</li>
                                <li><b>Reuniones presenciales:</b> ${elDatoTemp.reuniones}</li>
                                <li><b>Forma de pago:</b> ${elDatoTemp.pagosconvers}</li>`
        } else {
            listaDatos.innerHTML = `<li><b>Plazo de entrega:</b> ${elDatoTemp.plazoconvers}</li>
                                <li><b>Reuniones presenciales:</b> ${elDatoTemp.reuniones}</li>
                                <li><b>Cantidad de reuniones:</b> ${elDatoTemp.reunionescant}</li>
                                <li><b>Forma de pago:</b> ${elDatoTemp.pagosconvers}</li>`
        }
        $datosClienteLista.appendChild(listaDatos)
    }
}

function mostrarPresupuesto() {

    $presupuestoDatos.classList.add('activo')

    for (const filaDato of presupTablaDetalle) {
        laFila = document.createElement('tr')
        laFila.innerHTML = `<td class="tabla__detalle--cant">${filaDato.cantidad}</td>
                                <td class="tabla__detalle--desc">${filaDato.descripcion}</td>
                                <td class="tabla__detalle--vals">${filaDato.unitario}</td>
                                <td class="tabla__detalle--vals">${filaDato.total}</td>`
        $tablaPresup.appendChild(laFila)
        //$tablaPresup.insertBefore(laFila, $tablaFilaTotal)
    }

    let filaSubT = document.createElement('tr')
    filaSubT.classList.add('tabla__detalle--titulos')
    filaSubT.innerHTML = `<td colspan="3" class="tabla__detalle--total">SUB-TOTAL U$D</td>
                        <td class="tabla__detalle--vals" id="tabla__subtotal--fila_dato">${presupuestoNuevo.precioProvisorio}</td>`
    $tablaPresup.appendChild(filaSubT)

   if(presupTablaRecyDesc.length > 0){
        for (const celda of presupTablaRecyDesc) {
            laFilaDesc = document.createElement('tr')
            laFilaDesc.innerHTML = `<td colspan="3" class="tabla__detalle--total">${celda.descripcion}</td>
                                    <td class="tabla__detalle--vals">${celda.monto}</td>`
            $tablaPresup.appendChild(laFilaDesc)
        }
    }

    let filaTotal = document.createElement('tr')
    filaTotal.classList.add('tabla__detalle--titulos')
    filaTotal.innerHTML = `<td colspan="3" class="tabla__detalle--total">TOTAL U$D</td>
                            <td class="tabla__detalle--vals">${presupuestoNuevo.precioFinal}</td>`
    $tablaPresup.appendChild(filaTotal)

    let filaTotalP = document.createElement('tr')
    filaTotalP.classList.add('tabla__detalle--titulos')
    filaTotalP.innerHTML = `<td colspan="3" class="tabla__detalle--total">TOTAL AR$</td>
                            <td class="tabla__detalle--vals">${presupuestoNuevo.precioPesos}</td>`
    $tablaPresup.appendChild(filaTotalP)

}

// Funciones: CONFIRMAR DATOS

const confirmarCliente = () => {
    $formularioDatos.classList.remove('activo')
    if(clienteExistente === false){
        clienteExistente = false
        console.log(datosCliente)
        muestraLosDatos()
    } 
    if(clienteExistente === true){
        clienteExistente = true        
        muestraLosDatos()
    }
    $confirmaDatosBtnOk.onclick = crearCliente
    $confirmaDatosBtnModif.onclick = reseteoFormPasoUno
}

const confirmarProyecto = () => {
    $formularioProyecto.classList.remove('activo')
    muestraLosDatosProyecto()
    $confirmaDatosBtnOk.onclick = crearProyecto
    $confirmaDatosBtnModif.onclick = reseteoFormPasoDos
}

const confirmarPautas = () => {
    $formularioPautas.classList.remove('activo')
    muestraLosDatosPautas()
    $confirmaDatosBtnOk.onclick = crearPautas
    $confirmaDatosBtnModif.onclick = reseteoFormPasoTres
}

const confirmarDatos = () => {
    $clienteDatos.classList.add('activo')

    if(numeroDePaso === 1){
        confirmarCliente()
    }

    if(numeroDePaso === 2){
        confirmarProyecto()
    }

    if(numeroDePaso === 3) {
        confirmarPautas()
    }
    
}

// Funciones: RESETEO DE FORMULARIOS

const reseteoFormPasoUno = () => {
    datosCliente = []
    sessionStorage.removeItem('Cliente')
    clienteExistente = false
    moDif = true
    $elNombre.classList.remove('bien')
    $laEmpresa.classList.remove('bien')
    $elPais.classList.remove('bien')
    $paisOtro.classList.remove('bien')
    $elCorreo.classList.remove('bien')
    $elTelefono.classList.remove('bien')
    
    vengaElPasoUno()
}

const reseteoFormPasoDos = () => {
    datosProyecto = []
    sessionStorage.removeItem('Proyecto')
    $tipoDeProyecto.classList.remove('bien')
    if($tipoWeb.classList.contains('activo')){
        $tipoWeb.classList.replace('activo', 'pasivo')
    }
    if($tipoWp.classList.contains('activo')){
        $tipoWp.classList.replace('activo', 'pasivo')
    }
    $tipoDisenio.classList.remove('bien')
    $disenioDistri.classList.remove('bien')
    if($seccionesWebCont.classList.contains('activo')){
        $seccionesWebCont.classList.replace('activo', 'pasivo')
    }
    $seccionesWeb.classList.remove('bien')
    $tipoPlantilla.classList.remove('bien')
    $seccionesWp.classList.remove('bien')
    $formularioProyecto.reset()
    vengaElPasoDos()
}

const reseteoFormPasoTres = () => {
    datosPautas = []
    sessionStorage.removeItem('Pautas')
    $plazoDeEntrega.classList.remove('bien')
    $reunionesPresent.classList.remove('bien')
    if($reunionesCantCont.classList.contains('activo')){
        $reunionesCantCont.classList.replace('activo', 'pasivo')
    } else {
        $reunionesCantCont.classList.add('pasivo')
    }
    if($reunionesCant.classList.contains('bien')){
        $reunionesCant.classList.remove('bien')
    }
    $pagosCant.classList.remove('bien')
    $formularioPautas.reset()
    vengaElPasoTres()
}

// Funciones: CREAR CLASES/OBJETOS

const crearCliente = () => {
    $clienteDatos.classList.remove('activo')
    if(datosCliente.length > 0){
        for (const elDato of datosCliente){
            clienteNuevo = new Cliente(elDato.id, elDato.nombre, elDato.empresa, elDato.pais, elDato.correo, elDato.telefono)
        }
        console.log(clienteNuevo)
        console.log('Vamos al paso 2')
        vengaElPasoDos()
    } else {
        console.log('algo está fallando')
    }
}

const crearProyecto = () => {
    $clienteDatos.classList.remove('activo')
    if(datosProyecto.length > 0){
        for (const elDatoP of datosProyecto){
            proyectoNuevo = new Proyecto(elDatoP.proyectoT, elDatoP.disenio, elDatoP.plantilla, elDatoP.distribucion, elDatoP.secciones)
        }
        sessionStorage.removeItem('Proyecto')
        console.log(proyectoNuevo)
        console.log('Vamos al paso 3')
        vengaElPasoTres()
    } else {
        console.log('algo está fallando 2')
    }
}

const crearPautas = () => {
    $clienteDatos.classList.remove('activo')
    if(datosPautas.length > 0){
        for (const elDatoPa of datosPautas){
            pautasNuevo = new PautasTrabajo(elDatoPa.plazo, elDatoPa.reuniones, elDatoPa.reunionescant, elDatoPa.pagos)
        }
        sessionStorage.removeItem('Pautas')
        console.log(pautasNuevo)
        console.log('Vamos al paso 4')
        vengaElPasoCuatro()
    } else {
        console.log('algo está fallando 3')
    }
}

const crearAdicionales = () => {
    $formularioAdicionales.classList.remove('activo')
    if(datosAdicionales.length > 0){
        for (const elDatoA of datosAdicionales){
            adicionalesNuevo = new Adicionales(elDatoA.hosting, elDatoA.dominio, elDatoA.mantenimiento, elDatoA.logo)
        }
        sessionStorage.removeItem('Adicionales')
        console.log(adicionalesNuevo)
        console.log('Finaliza la recolección de datos; ahora... ¡A calcular!')
        calcularPresupuesto()

        
    } else {
        console.log('algo está fallando 4')
    }
}

const crearPresupuesto = () => {
    //$clienteDatos.classList.remove('activo')
    if(presupuestoFinal.length > 0){
        for (const datoPf of presupuestoFinal){
            presupuestoNuevo = new Presupuesto(datoPf.id, datoPf.idc, datoPf.seccionesXtra, datoPf.adicionalSecciones, datoPf.visitas, datoPf.recargoVisitas, datoPf.precioProv, datoPf.descuento, datoPf.precioFinal, datoPf.precioPesos)
        }
        mostrarPresupuesto()
    } else {
        console.log('algo está fallando')
    }
}

// Funciones: CÁLCULO DE PRESUPUESTO

function calcularPresupuesto() {

    

    let proyectoDatosCalculo = []
    proyectoDatosCalculo.push(proyectoNuevo)

    let pautasDatosCalculo = []
    pautasDatosCalculo.push(pautasNuevo)

    let adicionalesDatosCalculo = []
    adicionalesDatosCalculo.push(adicionalesNuevo)

    const datosParaCalculo = proyectoDatosCalculo.concat(pautasDatosCalculo).concat(adicionalesDatosCalculo)

    

    let precioBase
    let descripBase
    let precioXplantilla
    let precioXplazoYtipo
    let adicionalXsecciones
    let seccionesExtra
    let addHosting
    let hostingDesc
    let hostingUnit
    let addDominio
    let dominioDesc
    let addMante
    let manteDesc
    let manteUnit
    let addLogo
    let addRecXmasMes
    let logoDesc
    let adicionales
    let precioXvisitas

    //CÁLCULO PRECIO POR PLAZO DE ENTREGA

    switch (datosParaCalculo[1].plazoEntrega) {
        case 5:
            precioBase = PRECIO_PLAZO_SEMANA
            descripBase = 'Precio base según plazo: 1 semana (5 días hábiles)'
            break
        case 10:
            precioBase = PRECIO_PLAZO_QUINCENA
            descripBase = 'Precio base según plazo: 2 semanas (10 días hábiles)'
            break
        case 15:
            precioBase = PRECIO_PLAZO_TRESEM
            descripBase = 'Precio base según plazo: 3 semanas (15 días hábiles)'
            break
        case 20:
            precioBase = PRECIO_PLAZO_MES
            descripBase = 'Precio base según plazo: 1 mes (20 días hábiles)'
            break
        case 21:
            precioBase = PRECIO_PLAZO_MES
            descripBase = 'Precio base según plazo: Más de 1 mes'
            break
    }

    // CÁLCULO PRECIO POR TIPO DE PROYECTO
    

    if (datosParaCalculo[0].proyectoTipo === 'wordpress') {
        if (datosParaCalculo[0].plantillaTipo === 'profesional') {
            precioXplantilla = EXTRA_PLANTILLA_PROF
        } else {
            precioXplantilla = 0
        }
        precioXplazoYtipo = precioBase + EXTRA_WORDPRESS + precioXplantilla
    } else {
        precioXplazoYtipo = precioBase
    }

    // CÁLCULO PRECIO POR SECCIONES

    

    if (datosParaCalculo[0].numeroSecciones <= MAXIMO_SECCIONES_INC) {
        adicionalXsecciones = 0
        seccionesExtra = 'no'
    } else {
        seccionesExtra = datosParaCalculo[0].numeroSecciones - MAXIMO_SECCIONES_INC
        adicionalXsecciones = seccionesExtra * RECARGO_SECCIONES_PAG
    }

    // CÁLCULO PRECIO POR SERVICIOS ADICIONALES

    

    if (datosParaCalculo[2].hosting === true) {
        addHosting = HOSTING_ANUAL
        hostingDesc = 'Servicio de Web Hosting*'
        hostingUnit = HOSTING_ANUAL / 12
    } else {
        addHosting = 0
    }
    if (datosParaCalculo[2].dominio === true) {
        addDominio = DOMINIO_ANUAL
        dominioDesc = 'Servicio registro de dominio*'
    } else {
        addDominio = 0
    }
    if (datosParaCalculo[2].mantenimiento === true) {
        addMante = MANTENIMIENTO_ANUAL
        manteDesc = 'Servicio de Mantenimiento Web*'
        manteUnit = MANTENIMIENTO_ANUAL / 12
    } else {
        addMante = 0
    }
    if (datosParaCalculo[2].logo === true) {
        addLogo = EXTRA_LOGO
        logoDesc = 'Diseño de logo'
    } else {
        addLogo = 0
    }
    if (datosParaCalculo[1].plazoEntrega === 21){

        addRecXmasMes = PRECIO_PLAZO_MASMES
    } else {
        addRecXmasMes = 0
    }
    adicionales = addHosting + addDominio + addMante + addLogo + addRecXmasMes
    
    // CÁLCULO PRECIO POR REUNIONES PRESENCIALES

    

    if (datosParaCalculo[1].presenciales === 'no') {
        precioXvisitas = 0
    } else {
        precioXvisitas = datosParaCalculo[1].cantidadPresenciales * RECARGO_PRESENCIAL
    }

    // CREACIÓN DE ARRAY PARA FILAS DE TABLA
    
    let proyectoDesc

    if(datosParaCalculo[0].proyectoTipo === 'wordpress'){
        proyectoDesc = 'Sitio Web en base a Wordpress'
    }

    if(datosParaCalculo[0].proyectoTipo === 'web'){
        if (datosParaCalculo[0].disenioTipo === 'framework') {
            proyectoDesc = 'Sitio Web tradicional maquetado con framework'
        } else {
            proyectoDesc = 'Sitio Web tradicional hecho a medida'
        }
        
    }

    const filaProy = {
        cantidad: 1,
        descripcion: proyectoDesc,
        unitario: '-',
        total: '-'
    }

    presupTablaDetalle.push(filaProy)

    if(datosParaCalculo[0].proyectoTipo === 'wordpress'){
        
        const filaAdWp = {
            cantidad: 1,
            descripcion: 'Adicional por instalación y gestión de plantilla en WP',
            unitario: EXTRA_WORDPRESS,
            total: EXTRA_WORDPRESS
        }

        presupTablaDetalle.push(filaAdWp)

        if (datosParaCalculo[0].plantillaTipo === 'profesional') {

            const filaPlantiProf = {
                cantidad: 1,
                descripcion: 'Adicional por plantilla de pago (precio de plantilla + instalación)',
                unitario: EXTRA_PLANTILLA_PROF,
                total: EXTRA_PLANTILLA_PROF
            }

            presupTablaDetalle.push(filaPlantiProf)
        }
    }

    const filaPrecioBase = {
        cantidad: 1,
        descripcion: descripBase,
        unitario: precioBase,
        total: precioBase
    }

    presupTablaDetalle.push(filaPrecioBase)

    if (datosParaCalculo[1].plazoEntrega === 21){

        const filaAdPlzXtra = {
            cantidad: 1,
            descripcion: 'Importe por exceso de plazo',
            unitario: PRECIO_PLAZO_MASMES,
            total: PRECIO_PLAZO_MASMES
        }
        
        presupTablaDetalle.push(filaAdPlzXtra)
    }

    if (datosParaCalculo[0].numeroSecciones > MAXIMO_SECCIONES_INC) {

        const filaSecInc = {
            cantidad: 5,
            descripcion: 'Secciones incluidas en el sitio (hasta 5 sin costo extra)',
            unitario: '-',
            total: '-'
        }
        
        presupTablaDetalle.push(filaSecInc)

        const filaSecXtra = {
            cantidad: seccionesExtra,
            descripcion: 'Adicional por secciones extra',
            unitario: RECARGO_SECCIONES_PAG,
            total: adicionalXsecciones
        }
        
        presupTablaDetalle.push(filaSecXtra)

    }

    if (datosParaCalculo[2].hosting === true) {
        const filaHost = {
            cantidad: 12,
            descripcion: hostingDesc,
            unitario: hostingUnit,
            total: HOSTING_ANUAL
        }
        
        presupTablaDetalle.push(filaHost)
    }

    if (datosParaCalculo[2].dominio === true) {
        const filaDominio = {
            cantidad: 1,
            descripcion: dominioDesc,
            unitario: DOMINIO_ANUAL,
            total: DOMINIO_ANUAL
        }
        
        presupTablaDetalle.push(filaDominio)
    }

    if (datosParaCalculo[2].mantenimiento === true) {
        const filaMante = {
            cantidad: 12,
            descripcion: manteDesc,
            unitario: manteUnit,
            total: MANTENIMIENTO_ANUAL
        }
        
        presupTablaDetalle.push(filaMante)
    }

    if (datosParaCalculo[2].logo === true) {
        const filaLogo = {
            cantidad: 1,
            descripcion: logoDesc,
            unitario: EXTRA_LOGO,
            total: EXTRA_LOGO
        }
        
        presupTablaDetalle.push(filaLogo)
    }

    if (datosParaCalculo[1].presenciales === 'si') {
        
        

        const filaVisit = {
            cantidad: datosParaCalculo[1].cantidadPresenciales,
            descripcion: 'Recargo por reuniones presenciales',
            unitario: RECARGO_PRESENCIAL,
            total: precioXvisitas
        }
        
        presupTablaDetalle.push(filaVisit)
    }





    // CÁLCULO DEL PRECIO FINAL
    let precioProvisorio = precioXplazoYtipo + adicionalXsecciones + adicionales + precioXvisitas
    let precioProvConDesc
    if (datosParaCalculo[0].disenioTipo === 'framework') {
        precioProvConDesc = precioProvisorio - DESC_FRAMEWORK

        const filaDescFw = {
            tipo: 'Descuento',
            descripcion: 'Descuento por maquetación con framework',
            monto: '-' + DESC_FRAMEWORK
        }

        presupTablaRecyDesc.push(filaDescFw)

    } else {
        precioProvConDesc = precioProvisorio
    }
    let descuento
    let precioFinal
    let reCarg
    if (datosParaCalculo[1].pagos === 1) {
        descuento = Number(((precioProvConDesc * DESCUENTO_UN_PAGO) / 100).toFixed(2))
        precioFinal = Number((precioProvConDesc - descuento).toFixed(2))

        const filaDescUnP = {
            tipo: 'Descuento',
            descripcion: 'Descuento por abonar en un pago',
            monto: '-' + descuento
        }

        presupTablaRecyDesc.push(filaDescUnP)


    } else {
        switch (datosParaCalculo[1].pagos) {
            case 2:
                precioFinal = precioProvConDesc + RECARGO_DOS_CUOTAS
                reCarg = RECARGO_DOS_CUOTAS
                break
            case 3:
                precioFinal = precioProvConDesc + RECARGO_TRES_CUOTAS
                reCarg = RECARGO_TRES_CUOTAS
                break
            case 6:
                precioFinal = precioProvConDesc + RECARGO_SEIS_CUOTAS
                reCarg = RECARGO_SEIS_CUOTAS
                break
            case 12:
                precioFinal = precioProvConDesc + RECARGO_DOCE_CUOTAS
                reCarg = RECARGO_DOCE_CUOTAS
                break
        }

        const filaRecXcuot = {
            tipo: 'Recargo',
            descripcion: 'Recargo por pago en' + datosParaCalculo[1].pagos + 'cuotas',
            monto: reCarg
        }

        presupTablaRecyDesc.push(filaRecXcuot)
    }
    let precioEnPesos = Number((precioFinal * COTIZACION_DOLAR).toFixed(2))

    const presupuestoObj = {
        id: Date.now(),
        idc: clienteNuevo.id,
        seccionesXtra: seccionesExtra,
        adicionalSecciones: adicionalXsecciones,
        visitas: datosParaCalculo[1].presenciales,
        recargoVisitas: precioXvisitas,
        precioProv: precioProvisorio,
        descuento: descuento,
        precioFinal: precioFinal,
        precioPesos: precioEnPesos
    }
    presupuestoFinal.push(presupuestoObj)
    sessionStorage.setItem('Presupuesto', JSON.stringify(presupuestoFinal))

    crearPresupuesto()

}

// EJECUCIÓN 

// Ejecución: FORMULARIOS

const vengaElPasoUno = () => {
    
    elementosFormPasoUno()
    
    $formularioDatos.addEventListener('submit', capturarDatosPasoUno)

}

const vengaElPasoDos = () => {
    
    elementosFormPasoDos()
    
    $formularioProyecto.addEventListener('submit', capturarDatosPasoDos)

}

const vengaElPasoTres = () => {
    
    elementosFormPasoTres()
    
    $formularioPautas.addEventListener('submit', capturarDatosPasoTres)

}

const vengaElPasoCuatro = () => {

    elementosFormPasoCuatro()

    $formularioAdicionales.addEventListener('submit', capturarDatosPasoCuatro)
}

