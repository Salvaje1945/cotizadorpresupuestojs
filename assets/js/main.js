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

class Adicionales {
    constructor(htg, dom, mant, dislog) {
        this.hosting = htg
        this.dominio = dom
        this.mantenimiento = mant
        this.logo = dislog
    }
}

// CONSTANTES

const $formularioDatos = document.querySelector('#form__presup--paso1')

const $formularioProyecto = document.querySelector('#form__presup--paso2')

const $formularioAdicionales = document.querySelector('#form__presup--paso3')

const $clienteDatos = document.querySelector('#muestra__datos--cliente')

const $datosClienteTitulo = document.querySelector('#datos__cliente--titulo')

const $datosClienteLista = document.querySelector('#cliente__datos--lista')

const $datosClienteParrafo = document.querySelector('#datos__cliente--parrafo')

const $clienteDatosBtnOk = document.querySelector('#cliente__datos--ok')

const $clienteDatosBtnModif = document.querySelector('#cliente__datos--modif')

const $proyectoDatosBtnOk = document.querySelector('#proyecto__datos--ok')

const $proyectoDatosBtnModif = document.querySelector('#proyecto__datos--modif')

const $elNombre = document.querySelector('#nombre')

const $laEmpresa = document.querySelector('#empresa')

const $paisOtro = document.querySelector('#pais')

const $elPaisOtro = document.querySelector('#pais-otro')

const $elCorreo = document.querySelector('#correo')

const $elTelefono = document.querySelector('#telefono')

const $tipoDeProyecto = document.querySelector('#protip')

const $tipoDisenio = document.querySelector('#dise')

const $disenioDistri = document.querySelector('#distri')

const $seccionesWeb = document.querySelector('#websecc')

const $tipoPlantilla = document.querySelector('#planti')

const $seccionesWp = document.querySelector('#wpsecc')

const $host = document.querySelector('#hosting')

const $domi = document.querySelector('#dominio')

const $mante = document.querySelector('#mantenimiento')

const $lgo = document.querySelector('#logo')

// ARRAYS

let datosCliente = []

let datosProyecto = []

let datosAdicionales = []

// VARIABLES

let clienteExistente = false

let moDif = false


// FUNCIONES

document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(sessionStorage.getItem('Cliente')) != null){
        clienteExistente = true
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

function crearCliente () {
    $clienteDatos.style.display='none'
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
    $clienteDatos.style.display='none'
    if(datosProyecto.length > 0){
        for (const elDatoP of datosProyecto){
            proyectoNuevo = new Proyecto(elDatoP.proyectoT, elDatoP.disenio, elDatoP.plantilla, elDatoP.distribucion, elDatoP.secciones)
        }
        sessionStorage.removeItem('Proyecto')
        console.log(proyectoNuevo)
        console.log('Vamos al paso 3')
    } else {
        console.log('algo está fallando 2')
    }
}

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

const confirmarDatos = () => {
    $formularioDatos.style.display='none'
    $clienteDatos.style.display='block'
    if(clienteExistente === false){
        clienteExistente = false
        console.log(datosCliente)
        muestraLosDatos()
    } 
    if(clienteExistente === true){
        clienteExistente = true        
        muestraLosDatos()
    }
    $clienteDatosBtnOk.addEventListener('click', crearCliente)
    $clienteDatosBtnModif.addEventListener('click', reseteoFormPasoUno)
}

const confirmarProyecto = () => {
    $formularioProyecto.style.display='none'
    $clienteDatosBtnOk.style.display='none'
    $clienteDatosBtnModif.style.display='none'
    $clienteDatos.style.display='block'
    $proyectoDatosBtnOk.style.display='block'
    $proyectoDatosBtnModif.style.display='block'
    muestraLosDatosProyecto()
    $proyectoDatosBtnOk.addEventListener('click', crearProyecto)
    $proyectoDatosBtnModif.addEventListener('click', reseteoFormPasoDos)
}

// RESETEO DE FORMULARIOS

const reseteoFormPasoUno = () => {
    datosCliente = []
    sessionStorage.removeItem('Cliente')
    clienteExistente = false
    moDif = true
    document.getElementById('nombre').style.border='3px solid transparent'
    document.getElementById('empresa').style.border='3px solid transparent'
    document.getElementById('pais').style.border='3px solid transparent'
    document.getElementById('pais-otro').style.border='3px solid transparent'
    document.getElementById('correo').style.border='3px solid transparent'
    document.getElementById('telefono').style.border='3px solid transparent'
    vengaElPasoUno()
}

const reseteoFormPasoDos = () => {
    datosProyecto = []
    sessionStorage.removeItem('Proyecto')
    document.getElementById('protip').style.border='3px solid transparent'
    document.getElementById('elementos__wp').style.height='0px'
    document.getElementById('elementos__wp').style.overflow='hidden'
    document.getElementById('elementos__web').style.height='0px'
    document.getElementById('elementos__web').style.overflow='hidden'
    document.getElementById('dise').style.border='3px solid transparent'
    document.getElementById('distri').style.border='3px solid transparent'
    document.getElementById('websecc').style.border='3px solid transparent'
    document.getElementById('planti').style.border='3px solid transparent'
    document.getElementById('wpsecc').style.border='3px solid transparent'
    $formularioProyecto.reset()
    vengaElPasoDos()
}

// ELEMENTOS DE FORMULARIOS

const elementosFormPasoUno = () => {
    $clienteDatos.style.display='none'
    $formularioDatos.style.display='block'
    const paisNoEsta = () => {
        const elPaisNoEsta = $paisOtro.selectedIndex
        const escribaOtroPais = $paisOtro.options[elPaisNoEsta]
        if (escribaOtroPais.value != 'orto') {
            document.getElementById('pa2').style.height='0px'
            document.getElementById('pa2').style.margin='0'
            if(escribaOtroPais.value === 'vacio' || escribaOtroPais.value === '' || escribaOtroPais.value === null ) {
                document.getElementById('pais').style.border='3px solid red'
                $paisOtro.onblur = function() {
                    document.getElementById('pais').style.border='3px solid rgb(72, 33, 247)'
                }
                $paisOtro.onfocus = function(){
                    document.getElementById('pais').style.border='3px solid rgb(72, 33, 247)'
                }
            } else {
                document.getElementById('pais').style.border='3px solid green'
            }
        } else {
            document.getElementById('pa2').style.height='67px' 
            document.getElementById('pa2').style.margin='0 0 15px' 
            elOtroPais()
        }
    }
    
    const elOtroPais = () => {

        if(moDif === true && $elPaisOtro.value != ''){
            document.getElementById('pais-otro').value = ''
        }

        const elOtroPaEveClic = () => {
            if(moDif === true && $elPaisOtro.value != ''){
                document.getElementById('pais-otro').value = ''
            }
            $elPaisOtro.onblur = function(){
                if($elPaisOtro.value === null || $elPaisOtro.value === ''){
                    document.getElementById('pa2').style.height='102px'
                    document.getElementById('error-pais-otro').style.height='35px'
                    document.getElementById('pais-otro').style.border='3px solid red'
                } else {
                    document.getElementById('pais-otro').style.border='3px solid green'
                    document.getElementById('pais').style.border='3px solid green'
                }
            }
            $elPaisOtro.onfocus = function(){
                document.getElementById('pais-otro').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-pais-otro').style.height='0px'
                document.getElementById('pa2').style.height='67px' 
            }
        }

        $elPaisOtro.addEventListener('click', elOtroPaEveClic)


    }
    
    const nombreMal = () => {

        if(moDif === true){
            document.getElementById('nombre').value = ''
        }

        $elNombre.onblur = function(){
            if ($elNombre.value === null || $elNombre.value === ''){
                document.getElementById('nom').style.height='102px'
                document.getElementById('error-nombre').style.height='35px'
                document.getElementById('nombre').style.border='3px solid red'
            } else {
                document.getElementById('nombre').style.border='3px solid green'
            }
        }
    
        $elNombre.onfocus = function(){
            document.getElementById('nombre').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-nombre').style.height='0px'
            document.getElementById('nom').style.height='67px'
        }
    }
    
    const empresaMal = () => {
        if ($elNombre.value === null || $elNombre.value === ''){
            document.getElementById('nom').style.height='102px'
            document.getElementById('error-nombre').style.height='35px'
            document.getElementById('nombre').style.border='3px solid red'
            $elNombre.onfocus = function(){
                document.getElementById('nombre').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-nombre').style.height='0px'
                document.getElementById('nom').style.height='67px'
            }
        }

        if(moDif === true){
            document.getElementById('empresa').value = ''
        }

        $laEmpresa.onblur = function(){
            if ($laEmpresa.value === null || $laEmpresa.value === ''){
                document.getElementById('emp').style.height='102px'
                document.getElementById('error-empresa').style.height='35px'
                document.getElementById('empresa').style.border='3px solid red'
            } else {
                document.getElementById('empresa').style.border='3px solid green'
            }
        }
    
        $laEmpresa.onfocus = function(){
            document.getElementById('empresa').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-empresa').style.height='0px'
            document.getElementById('emp').style.height='67px'
        }
    }
    
    const completeEmpresa = () => {
        $paisOtro.onblur = function(){
            if ($paisOtro.value === 'vacio'){
                document.getElementById('pa').style.height='102px'
                document.getElementById('error-pais').style.height='35px'
                document.getElementById('pais').style.border='3px solid red'
                $paisOtro.onfocus = function(){
                    document.getElementById('pais').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-pais').style.height='0px'
                    document.getElementById('pa').style.height='67px' 
                }
            }
        }
        if ($laEmpresa.value === null || $laEmpresa.value === ''){
            document.getElementById('emp').style.height='102px'
            document.getElementById('error-empresa').style.height='35px'
            document.getElementById('empresa').style.border='3px solid red'
            $laEmpresa.onfocus = function(){
                document.getElementById('empresa').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-empresa').style.height='0px'
                document.getElementById('emp').style.height='67px'
            }
        }
    }
    
    const correoMal = () => {
        if($paisOtro.value === 'orto'){
            if($elPaisOtro.value === null || $elPaisOtro.value === ''){
                document.getElementById('pa2').style.height='102px'
                document.getElementById('error-pais-otro').style.height='35px'
                document.getElementById('pais-otro').style.border='3px solid red'
                $elPaisOtro.onfocus = function(){
                    document.getElementById('pais-otro').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-pais-otro').style.height='0px'
                    document.getElementById('pa2').style.height='67px' 
                }
            }
        }
        if ($paisOtro.value === 'vacio'){
            document.getElementById('pa').style.height='102px'
            document.getElementById('error-pais').style.height='35px'
            document.getElementById('pais').style.border='3px solid red'
            $paisOtro.onfocus = function(){
                document.getElementById('pais').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-pais').style.height='0px'
                document.getElementById('pa').style.height='67px' 
            }
        }

        if(moDif === true){
            document.getElementById('correo').value = ''
        }

        $elCorreo.onblur = function(){
            if ($elCorreo.value === null || $elCorreo.value === ''){
                document.getElementById('mail').style.height='102px'
                document.getElementById('error-correo').style.height='35px'
                document.getElementById('correo').style.border='3px solid red'
            } else {
                document.getElementById('correo').style.border='3px solid green'
            }
        }
    
        $elCorreo.onfocus = function(){
            document.getElementById('correo').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-correo').style.height='0px'
            document.getElementById('mail').style.height='67px'
        }
    }
    
    const telefonoMal = () => {
        if ($elCorreo.value === null || $elCorreo.value === ''){
            document.getElementById('mail').style.height='102px'
            document.getElementById('error-correo').style.height='35px'
            document.getElementById('correo').style.border='3px solid red'
            $elCorreo.onfocus = function(){
                document.getElementById('correo').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-correo').style.height='0px'
                document.getElementById('mail').style.height='67px'
            }
        }

        if(moDif === true){
            document.getElementById('telefono').value = ''
        }
    
        $elTelefono.onblur = function(){
            let valorTelefono = Number($elTelefono.value)
            if (valorTelefono === null || valorTelefono === '' || valorTelefono === 0 || isNaN(valorTelefono)){
                document.getElementById('tel').style.height='102px'
                document.getElementById('error-telefono').style.height='35px'
                document.getElementById('telefono').style.border='3px solid red'
            } else {
                document.getElementById('telefono').style.border='3px solid green'
            }
        }
    
        $elTelefono.onfocus = function(){
            document.getElementById('telefono').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-telefono').style.height='0px'
            document.getElementById('tel').style.height='67px'
        }
    }

    $paisOtro.addEventListener('click', completeEmpresa)

    $paisOtro.addEventListener('change', paisNoEsta)

    $elNombre.addEventListener('click', nombreMal)

    $laEmpresa.addEventListener('click', empresaMal)

    $elCorreo.addEventListener('click', correoMal)

    $elTelefono.addEventListener('click', telefonoMal)
}

const elementosFormPasoDos = () => {
    $clienteDatos.style.display='none'
    $formularioProyecto.style.display='block'

    const tipoProyectoError = () => {
        $tipoDeProyecto.onblur = function(){
            if ($tipoDeProyecto.value === 'vacio'){
                document.getElementById('protip').style.border='3px solid red'
                document.getElementById('proyectotipo').style.height='102px'
                document.getElementById('error-protip').style.height='35px'
                $tipoDeProyecto.onfocus = function(){
                    document.getElementById('protip').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-protip').style.height='0px'
                    document.getElementById('proyectotipo').style.height='67px' 
                    //tipoProyecto()
                }
            }
        }
        //tipoProyecto()
    }
    
    const tipoProyecto = () => {
        const elProyecto = $tipoDeProyecto.selectedIndex
        const proyectoEleccion = $tipoDeProyecto.options[elProyecto]
        if (proyectoEleccion.value != 'web' && proyectoEleccion.value != 'wordpress') {
            document.getElementById('elementos__wp').style.height='0px'
            document.getElementById('elementos__wp').style.overflow='hidden'
            document.getElementById('elementos__web').style.height='0px'
            document.getElementById('elementos__web').style.overflow='hidden'
            if(proyectoEleccion.value === 'vacio' || proyectoEleccion.value === '' || proyectoEleccion.value === null){
                document.getElementById('protip').style.border='3px solid red'
                document.getElementById('proyectotipo').style.height='102px'
                document.getElementById('error-protip').style.height='35px'
                $tipoDeProyecto.onblur = function() {
                    document.getElementById('protip').style.border='3px solid rgb(72, 33, 247)'
                }
            }
        } else {
            if(proyectoEleccion.value === 'web'){
                document.getElementById('elementos__web').style.height='200px'
                document.getElementById('elementos__web').style.overflow='visible'
                document.getElementById('elementos__wp').style.height='0px'
                document.getElementById('elementos__wp').style.overflow='hidden'
                document.getElementById('protip').style.border='3px solid green'
                tipoWeb()
            }
            if(proyectoEleccion.value === 'wordpress'){
                document.getElementById('elementos__wp').style.height='160px'
                document.getElementById('elementos__wp').style.overflow='visible'
                document.getElementById('elementos__web').style.height='0px'
                document.getElementById('elementos__web').style.overflow='hidden'
                document.getElementById('protip').style.border='3px solid green'
                tipoWp()
            }
            
        }
    }

    const tipoWeb = () => {

        const tipoDisComprobClic = () => {
            $tipoDisenio.onblur = function(){
                if($tipoDisenio.value === 'vacio'){
                    document.getElementById('disenio').style.height='102px'
                    document.getElementById('error-dise').style.height='35px'
                    document.getElementById('dise').style.border='3px solid red'
                    $tipoDisenio.onfocus = function(){
                        document.getElementById('dise').style.border='3px solid rgb(72, 33, 247)'
                        document.getElementById('error-dise').style.height='0px'
                        document.getElementById('disenio').style.height='67px'
                    }
                } else {
                    document.getElementById('dise').style.border='3px solid green'
                }
            }
        }

        const tipoDisComprobChang = () => {
            const elDisenio = $tipoDisenio.selectedIndex
            const disenioEleccion = $tipoDisenio.options[elDisenio]
            if(disenioEleccion.value === 'vacio'){
                document.getElementById('disenio').style.height='102px'
                document.getElementById('error-dise').style.height='35px'
                document.getElementById('dise').style.border='3px solid red'
                $tipoDisenio.onfocus = function(){
                    document.getElementById('dise').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-dise').style.height='0px'
                    document.getElementById('disenio').style.height='67px'
                }
            }
        }

        const disDistriComprobClic = () => {
            $disenioDistri.onblur = function(){
                if($disenioDistri.value === 'vacio'){
                    document.getElementById('distribucion').style.height='102px'
                    document.getElementById('error-distri').style.height='35px'
                    document.getElementById('distri').style.border='3px solid red'
                    $disenioDistri.onfocus = function(){
                        document.getElementById('distri').style.border='3px solid rgb(72, 33, 247)'
                        document.getElementById('error-distri').style.height='0px'
                        document.getElementById('distribucion').style.height='67px'
                    }
                } else {
                    document.getElementById('distri').style.border='3px solid green'
                }
            }
        }

        const disDistriComprobChang = () => {

            const seccWebComprobClic = () => {
                $seccionesWeb.onblur = function(){
                    if($seccionesWeb.value === null || $seccionesWeb.value === '' || Number($seccionesWeb.value) === 0){
                        document.getElementById('elementos__web').style.height='277px'
                        document.getElementById('seccionesweb').style.height='102px'
                        document.getElementById('error-websecc').style.height='35px'
                        document.getElementById('websecc').style.border='3px solid red'
                    } else {
                        document.getElementById('websecc').style.border='3px solid green'
                    }
                }
                $seccionesWeb.onfocus = function(){
                    document.getElementById('elementos__web').style.height='242px'
                    document.getElementById('websecc').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-websecc').style.height='0px'
                    document.getElementById('seccionesweb').style.height='67px' 
                }
            }

            const laDistri = $disenioDistri.selectedIndex
            const distriEleccion = $disenioDistri.options[laDistri]
            if (distriEleccion.value != 'secciones') {
                $seccionesWeb.value = 1
                document.getElementById('seccionesweb').style.height='0px'
                document.getElementById('seccionesweb').style.margin='0'
                document.getElementById('elementos__web').style.height='200px'
                if(distriEleccion.value === 'vacio' || distriEleccion.value === '' || distriEleccion.value === null ) {
                    document.getElementById('distribucion').style.height='102px'
                    document.getElementById('error-distri').style.height='35px'
                    document.getElementById('distri').style.border='3px solid red'
                    $disenioDistri.onfocus = function(){
                        document.getElementById('distri').style.border='3px solid rgb(72, 33, 247)'
                        document.getElementById('error-distri').style.height='0px'
                        document.getElementById('distribucion').style.height='67px'
                    }
                }
            } else {
                document.getElementById('distri').style.border='3px solid green'
                document.getElementById('elementos__web').style.height='242px'
                document.getElementById('seccionesweb').style.height='67px' 
                document.getElementById('seccionesweb').style.margin='0 0 15px'
                
                $seccionesWeb.addEventListener('click', seccWebComprobClic)
            }
    
        }

        $tipoDisenio.addEventListener('click', tipoDisComprobClic)
        
        $tipoDisenio.addEventListener('change', tipoDisComprobChang)
        
        $disenioDistri.addEventListener('click', disDistriComprobClic)

        $disenioDistri.addEventListener('change', disDistriComprobChang)
    }
    
    const tipoWp = () => {

        const tipoPlantiComprobClic = () => {
            $tipoPlantilla.onblur = function(){
                if($tipoPlantilla.value === 'vacio'){
                    document.getElementById('plantilla').style.height='102px'
                    document.getElementById('error-planti').style.height='35px'
                    document.getElementById('planti').style.border='3px solid red'
                    $tipoPlantilla.onfocus = function(){
                        document.getElementById('planti').style.border='3px solid rgb(72, 33, 247)'
                        document.getElementById('error-planti').style.height='0px'
                        document.getElementById('plantilla').style.height='67px'
                    }
                } else {
                    document.getElementById('planti').style.border='3px solid green'
                }
            }
        }

        const tipoPlantiComprobChang = () => {
            const laPlanti = $tipoPlantilla.selectedIndex
            const plantiEleccion = $tipoPlantilla.options[laPlanti]
            if(plantiEleccion.value === 'vacio'){
                document.getElementById('plantilla').style.height='102px'
                document.getElementById('error-planti').style.height='35px'
                document.getElementById('planti').style.border='3px solid red'
                $tipoPlantilla.onfocus = function(){
                    document.getElementById('planti').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-planti').style.height='0px'
                    document.getElementById('plantilla').style.height='67px'
                }
            } else {
                $tipoPlantilla.onblur = function(){
                    document.getElementById('planti').style.border='3px solid green'
                }
            }
        }

        const seccWpComprobClic = () => {
            $seccionesWp.onblur = function(){
                if($seccionesWp.value === null || $seccionesWp.value === '' || Number($seccionesWp.value) === 0){
                    document.getElementById('elementos__wp').style.height='195px'
                    document.getElementById('seccioneswp').style.height='102px'
                    document.getElementById('error-wpsecc').style.height='35px'
                    document.getElementById('wpsecc').style.border='3px solid red'
                } else {
                    document.getElementById('wpsecc').style.border='3px solid green'
                }
            }
            $seccionesWp.onfocus = function(){
                document.getElementById('elementos__wp').style.height='160px'
                document.getElementById('wpsecc').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-wpsecc').style.height='0px'
                document.getElementById('seccioneswp').style.height='67px' 
            }
        }

        $tipoPlantilla.addEventListener('click', tipoPlantiComprobClic)

        $tipoPlantilla.addEventListener('change', tipoPlantiComprobChang)

        $seccionesWp.addEventListener('click', seccWpComprobClic)
    }

    $tipoDeProyecto.addEventListener('click', tipoProyectoError)

    $tipoDeProyecto.addEventListener('change', tipoProyecto)
}

// CAPTURAR DATOS DE FORMULARIOS

const capturarDatosPasoUno = (evt) => {
    evt.preventDefault()
    const nombre = $elNombre.value
    const empresa = $laEmpresa.value
    const pais = $paisOtro.value
    const otropais = $elPaisOtro.value
    const correo = $elCorreo.value
    const telefono = Number($elTelefono.value)
    let elPais = ''
    let nombreOk = false
    let empresaOk = false
    let paisOk = false
    let correoOk = false
    let telefonoOk = false
    if (nombre === null || nombre === ''){
        document.getElementById('nom').style.height='102px'
        document.getElementById('error-nombre').style.height='35px'
        document.getElementById('nombre').style.border='3px solid red'
        document.getElementById('nombre').onclick = function(){
            document.getElementById('nombre').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-nombre').style.height='0px'
            document.getElementById('nom').style.height='67px'
        }
        nombreOk = false
    } else {
        document.getElementById('nombre').style.border='3px solid green'
        nombreOk = true
    }
    if (empresa === null || empresa === ''){
        document.getElementById('emp').style.height='102px'
        document.getElementById('error-empresa').style.height='35px'
        document.getElementById('empresa').style.border='3px solid red'
        document.getElementById('empresa').onclick = function(){
            document.getElementById('empresa').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-empresa').style.height='0px'
            document.getElementById('emp').style.height='67px'
        }
        empresaOk = false
    } else {
        document.getElementById('empresa').style.border='3px solid green'
        empresaOk = true
    }
    if (pais === null || pais === '' || pais === 'vacio'){
        document.getElementById('pa').style.height='102px'
        document.getElementById('error-pais').style.height='35px'
        document.getElementById('pais').style.border='3px solid red'
        document.getElementById('pais').onclick = function(){
            document.getElementById('pais').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-pais').style.height='0px'
            document.getElementById('pa').style.height='67px'
        }
        paisOk = false
    } else {
        if (pais === 'orto'){
            if (otropais === null || otropais === ''){
                document.getElementById('pa2').style.height='102px'
                document.getElementById('error-pais-otro').style.height='35px'
                document.getElementById('pais-otro').style.border='3px solid red'
                document.getElementById('pais-otro').onclick = function(){
                    document.getElementById('pais-otro').style.border='3px solid rgb(72, 33, 247)'
                    document.getElementById('error-pais-otro').style.height='0px'
                    document.getElementById('pa2').style.height='67px'
                }
                paisOk = false
            } else {
                document.getElementById('pais-otro').style.border='3px solid green'
                paisOk = true
                elPais = otropais
            }
        } else {
            document.getElementById('pais').style.border='3px solid green'
            paisOk = true
            elPais = pais
        }
    }
    if (correo === null || correo === ''){
        document.getElementById('mail').style.height='102px'
        document.getElementById('error-correo').style.height='35px'
        document.getElementById('correo').style.border='3px solid red'
        document.getElementById('correo').onclick = function(){
            document.getElementById('correo').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-correo').style.height='0px'
            document.getElementById('mail').style.height='67px'
        }
        correoOk = false
    } else {
        document.getElementById('correo').style.border='3px solid green'
        correoOk = true
    }
    if (telefono === null || telefono === '' || telefono === 0 || isNaN(telefono)){
        document.getElementById('tel').style.height='102px'
        document.getElementById('error-telefono').style.height='35px'
        document.getElementById('telefono').style.border='3px solid red'
        document.getElementById('telefono').onclick = function(){
            document.getElementById('telefono').style.border='3px solid rgb(72, 33, 247)'
            document.getElementById('error-telefono').style.height='0px'
            document.getElementById('tel').style.height='67px'
        }
        telefonoOk = false
    } else {
        document.getElementById('telefono').style.border='3px solid green'
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
    const webSec = Number($seccionesWeb.value)
    const wpSec = Number($seccionesWp.value)
    const tipoPlanti = $tipoPlantilla.value

    let proTipOk = false
    let disTipOk = false
    let distriOk = false
    let webSecOk = false
    let wpSecOk = false
    let planTipOk = false

    if (tipoProy === null || tipoProy === '' || tipoProy === 'vacio') {
        document.getElementById('protip').style.border = '3px solid red'
        document.getElementById('proyectotipo').style.height = '102px'
        document.getElementById('error-protip').style.height = '35px'
        document.getElementById('protip').onclick = function () {
            document.getElementById('protip').style.border = '3px solid rgb(72, 33, 247)'
            document.getElementById('error-protip').style.height = '0px'
            document.getElementById('proyectotipo').style.height = '67px'
            //tipoProyecto()
        }
        return
    } else {
        proTipOk = true
    }

    if(proTipOk === true && tipoProy === 'web') {
        if(tipoDis === null || tipoDis === '' || tipoDis === 'vacio'){
            document.getElementById('disenio').style.height='102px'
            document.getElementById('error-dise').style.height='35px'
            document.getElementById('dise').style.border='3px solid red'
            document.getElementById('dise').onclick = function(){
                document.getElementById('dise').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-dise').style.height='0px'
                document.getElementById('disenio').style.height='67px'
            }
            disTipOk = false
        } else {
            document.getElementById('dise').style.border='3px solid green'
            disTipOk = true
        }

        if (disDistri === null || disDistri === '' || disDistri === 'vacio') {
            document.getElementById('distribucion').style.height = '102px'
            document.getElementById('error-distri').style.height = '35px'
            document.getElementById('distri').style.border = '3px solid red'
            document.getElementById('distri').onclick = function () {
                document.getElementById('distri').style.border = '3px solid rgb(72, 33, 247)'
                document.getElementById('error-distri').style.height = '0px'
                document.getElementById('distribucion').style.height = '67px'
            }
            distriOk = false
        } else {
            document.getElementById('distri').style.border = '3px solid green'
            distriOk = true
        }

        if(webSec === 1){
            webSecOk = true
        } else {
            if(webSec === null || webSec === '' || webSec === 0 || isNaN(webSec)){
                document.getElementById('seccionesweb').style.height = '102px'
                document.getElementById('error-websecc').style.height = '35px'
                document.getElementById('websecc').style.border = '3px solid red'
                document.getElementById('websecc').onclick = function () {
                    document.getElementById('websecc').style.border = '3px solid rgb(72, 33, 247)'
                    document.getElementById('error-websecc').style.height = '0px'
                    document.getElementById('seccionesweb').style.height = '67px'
                }
                webSecOk = false
            } else {
                document.getElementById('websecc').style.border='3px solid green'
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
            confirmarProyecto()
        } else {
            return
        }
    } 

    if(proTipOk === true && tipoProy === 'wordpress') {
        if(tipoPlanti === null || tipoPlanti === '' || tipoPlanti === 'vacio'){
            document.getElementById('plantilla').style.height = '102px'
            document.getElementById('error-planti').style.height = '35px'
            document.getElementById('planti').style.border = '3px solid red'
            document.getElementById('planti').onclick = function () {
                document.getElementById('planti').style.border = '3px solid rgb(72, 33, 247)'
                document.getElementById('error-planti').style.height = '0px'
                document.getElementById('plantilla').style.height = '67px'
            }
            planTipOk = false
        } else {
            document.getElementById('planti').style.border='3px solid green'
            planTipOk = true
        }

        if(wpSec === null || wpSec === '' || isNaN(wpSec) || wpSec === 0){
            document.getElementById('seccioneswp').style.height='102px'
            document.getElementById('error-wpsecc').style.height='35px'
            document.getElementById('wpsecc').style.border='3px solid red'
            document.getElementById('wpsecc').onclick = function(){
                document.getElementById('wpsecc').style.border='3px solid rgb(72, 33, 247)'
                document.getElementById('error-wpsecc').style.height='0px'
                document.getElementById('seccioneswp').style.height='67px' 
            }
            wpSecOk = false
        } else {
            document.getElementById('wpsecc').style.border='3px solid green'
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
            confirmarProyecto()
        } else {
            return
        }
    }

    /*if (tipoProy === 'web') {
        confirmacionP = confirm(`Por favor confirme que la información brindada sea correcta.\nTipo de proyecto: ${tipoProy}\nTipo de diseño: ${tipoDis}\nDistribución del contenido: ${disDistri}\nSecciones: ${webSec}\nSI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".`)
    } else {
        confirmacionP = confirm(`Por favor confirme que la información brindada sea correcta.\nTipo de proyecto: ${tipoProy}\nTipo de plantilla: ${tipoPlanti}\nSecciones: ${wpSec}\nSI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".`)
    }

    if (confirmacionP === true) {
        if (tipoProy === 'web') {
            const proyectoObj = {
                proyectoT: tipoProy,
                disenio: tipoDis,
                distribucion: disDistri,
                secciones: webSec,
                plantilla: 'no'
            }
            datosProyecto.push(proyectoObj)
            //const cliEnte = JSON.stringify(clienteObj)
            //sessionStorage.setItem('Cliente', cliEnte)
            sessionStorage.setItem('Proyecto', JSON.stringify(datosProyecto))
            crearProyecto()
            vengaElPasoTres()
        } else {
            const proyectoObj = {
                proyectoT: tipoProy,
                disenio: 'no',
                distribucion: 'no',
                secciones: wpSec,
                plantilla: tipoPlanti
            }
            datosProyecto.push(proyectoObj)
            //const cliEnte = JSON.stringify(clienteObj)
            //sessionStorage.setItem('Cliente', cliEnte)
            sessionStorage.setItem('Proyecto', JSON.stringify(datosProyecto))
            crearProyecto()
            vengaElPasoTres()
        }
    } else {
        return
    }*/
}

// EJECUCIÓN DE FORMULARIOS

const vengaElPasoUno = () => {
    
    elementosFormPasoUno()

    //$formularioDatosBtnEnv.addEventListener('click', capturarDatosPasoUno)
    
    $formularioDatos.addEventListener('submit', capturarDatosPasoUno)

}

const vengaElPasoDos = () => {
    
    elementosFormPasoDos()

    //$formularioDatosBtnEnv.addEventListener('click', capturarDatosPasoUno)
    
    $formularioProyecto.addEventListener('submit', capturarDatosPasoDos)

}

