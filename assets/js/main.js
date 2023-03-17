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

const formularioDatos = document.querySelector('#form__presup--paso1')

const formularioProyecto = document.querySelector('#form__presup--paso2')

const formularioAdicionales = document.querySelector('#form__presup--paso3')

const datosClienteExistente = document.querySelector('#cliente__datos--yaexiste')

const datosClienteNuevo = document.querySelector('#cliente__datos--nuevo')

const datosClienteExistLista = document.querySelector('#cliente__exist--datos_lista')

const datosClienteNuevoLista = document.querySelector('#cliente__nuevo--datos_lista')

const clienteExistDatosConfirm = document.querySelector('#cliente__existente--datos_confirm')

const clienteExistDatosModif = document.querySelector('#cliente__existente--datos_modif')

const clienteNuevoDatosConfirm = document.querySelector('#cliente__nuevo--datos_confirm')

const clienteNuevoDatosModif = document.querySelector('#cliente__nuevo--datos_modif')

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

// FUNCIONES

document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(sessionStorage.getItem('Cliente')) != null){
        //datosCliente = JSON.parse(sessionStorage.getItem('Cliente'))
        clienteExistente = true
        //crearCliente()
        yaExisteCliente()
    } else {
        vengaElPasoUno()
    }
    
/*

    if(JSON.parse(sessionStorage.getItem('Proyecto')) != null){
        datosProyecto = JSON.parse(sessionStorage.getItem('Proyecto'))
    }
    crearProyecto()
    if(JSON.parse(sessionStorage.getItem('Adicionales')) != null){
        datosAdicionales = JSON.parse(sessionStorage.getItem('Adicionales'))
    }
    crearAdicionales()
    //console.log(datosCliente)

*/

})

const yaExisteCliente = () => {
    if(clienteExistente === true){
        datosCliente = JSON.parse(sessionStorage.getItem('Cliente'))
        //crearCliente()
        datosClienteExistente.style.display='block'
        muestraLosDatos()
        confirmarDatosExist()
    } else {
        vengaElPasoUno()
    }
}

const muestraLosDatos = () => {

    if (clienteExistente === true) {
        console.log(datosCliente + 'sesión previa')
        for (const elDatoTemp of datosCliente) {
            listaDatos = document.createElement('ul')
            listaDatos.innerHTML = `<li><b>Nombre:</b> ${elDatoTemp.nombre}</li>
                                    <li><b>Empresa:</b> ${elDatoTemp.empresa}</li>
                                    <li><b>Pais:</b> ${elDatoTemp.pais}</li>
                                    <li><b>Correo:</b> ${elDatoTemp.correo}</li>
                                    <li><b>Telefono:</b> ${elDatoTemp.telefono}</li>`
            datosClienteExistLista.appendChild(listaDatos)
        }
        /*
        listaDatos = document.createElement('ul')
        listaDatos.innerHTML = `<li><b>Nombre:</b> ${clienteNuevo.nombre}</li>
                                <li><b>Empresa:</b> ${clienteNuevo.empresa}</li>
                                <li><b>Pais:</b> ${clienteNuevo.pais}</li>
                                <li><b>Correo:</b> ${clienteNuevo.mail}</li>
                                <li><b>Telefono:</b> ${clienteNuevo.celular}</li>`
        datosClienteExistLista.appendChild(listaDatos)
        */

    } else {
        /*datosCliente = JSON.parse(sessionStorage.getItem('Cliente')) 
        if (datosCliente.length > 0) {
            for (const elDatoTemp of datosCliente) {
                listaDatos = document.createElement('ul')
                listaDatos.innerHTML = `<li>Nombre: ${elDatoTemp.nombre}</li>
                                <li>Empresa: ${elDatoTemp.empresa}</li>
                                <li>Pais: ${elDatoTemp.pais}</li>
                                <li>Correo: ${elDatoTemp.correo}</li>
                                <li>Telefono: ${elDatoTemp.telefono}</li>`
                datosClienteLista.appendChild(listaDatos)
            }
        } else {
            console.log('no llega datoscliente')
        }*/
        while(datosClienteNuevoLista.firstChild){
            datosClienteNuevoLista.removeChild(datosClienteNuevoLista.firstChild)
        }
        console.log(datosCliente + 'sesión nueva')
        for (const elDatoTemp of datosCliente) {
            listaDatos = document.createElement('ul')
            listaDatos.innerHTML = `<li><b>Nombre:</b> ${elDatoTemp.nombre}</li>
                                    <li><b>Empresa:</b> ${elDatoTemp.empresa}</li>
                                    <li><b>Pais:</b> ${elDatoTemp.pais}</li>
                                    <li><b>Correo:</b> ${elDatoTemp.correo}</li>
                                    <li><b>Telefono:</b> ${elDatoTemp.telefono}</li>`
            datosClienteNuevoLista.appendChild(listaDatos)
        }
        //console.log(datosCliente)
    }
}

const confirmarDatosExist = () => {
    clienteExistDatosConfirm.addEventListener('click', () => {
        datosClienteExistente.style.display='none'
        crearCliente()
    })
    clienteExistDatosModif.addEventListener('click', () => {
        datosClienteExistente.style.display='none'
        datosCliente = []
        sessionStorage.removeItem('Cliente')
        clienteExistente = false
        formularioDatos.reset()
        vengaElPasoUno()
    })
}

const confirmarDatos = () => {
    formularioDatos.style.display='none'
    datosClienteNuevo.style.display='block'
    clienteExistente = false
    //console.log(clienteNuevo)
    console.log(datosCliente)
    muestraLosDatos()
    
    clienteNuevoDatosConfirm.addEventListener('click', () => {
        datosClienteNuevo.style.display='none'
        crearCliente()
    })
    clienteNuevoDatosModif.addEventListener('click', () => {
        datosClienteNuevo.style.display='none'
        datosCliente = []
        sessionStorage.removeItem('Cliente')
        clienteExistente = false
        //formularioDatos.reset()
        vengaElPasoUno()
    })
}

const crearCliente = () => {
    if(datosCliente.length > 0){
        for (const elDato of datosCliente){
            clienteNuevo = new Cliente(elDato.id, elDato.nombre, elDato.empresa, elDato.pais, elDato.correo, elDato.telefono)
        }
        vengaElPasoDos()
        //console.log(clienteNuevo)

        /*clienteNuevo = new Cliente(datosCliente.id, datosCliente.nombre, datosCliente.empresa, datosCliente.pais, datosCliente.correo, datosCliente.telefono)
        sessionStorage.removeItem('Cliente')*/
    } else {
        console.log('algo está fallando')
    }
}

const crearProyecto = () => {
    if(datosProyecto.length > 0){
        for (const elDatoP of datosProyecto){
            proyectoNuevo = new Proyecto(elDatoP.proyectoT, elDatoP.disenio, elDatoP.plantilla, elDatoP.distribucion, elDatoP.secciones)
        }

        /*clienteNuevo = new Cliente(datosCliente.id, datosCliente.nombre, datosCliente.empresa, datosCliente.pais, datosCliente.correo, datosCliente.telefono)
        sessionStorage.removeItem('Cliente')*/
    } else {
        console.log('algo está fallando 2')
    }
}

const crearAdicionales = () => {
    if(datosAdicionales.length > 0){
        for (const elDatoA of datosAdicionales){
            adicionalesNuevo = new Adicionales(elDatoA.hosting, elDatoA.dominio, elDatoA.mantenimiento, elDatoA.logo)
        }

        /*clienteNuevo = new Cliente(datosCliente.id, datosCliente.nombre, datosCliente.empresa, datosCliente.pais, datosCliente.correo, datosCliente.telefono)
        sessionStorage.removeItem('Cliente')*/
    } else {
        console.log('algo está fallando 3')
    }
}

const vengaElPasoUno = () => {
    formularioDatos.style.display='block'
    formularioDatos.reset()
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
        $elPaisOtro.addEventListener('click', () => {
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
        })
    }
    
    const nombreMal = () => {
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

    const capturarDatos = (evt) => {
        evt.preventDefault()
        const nombre = $elNombre.value
        const empresa = $laEmpresa.value
        const pais = $paisOtro.value
        const otropais = $elPaisOtro.value
        const correo = $elCorreo.value
        const telefono = Number($elTelefono.value)
        //let datosOk = false
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
            formularioDatos.reset()
            document.getElementById('pa2').style.height='0px'
            document.getElementById('pa2').style.margin='0'
            clienteExistente = false

            /*if (pais === 'orto') {
                const clienteObj = {
                    id: Date.now(),
                    nombre: nombre,
                    empresa: empresa,
                    pais: otropais,
                    correo: correo,
                    telefono: telefono
                }
                datosCliente.push(clienteObj)
                sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))
        
                sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))
                document.getElementById('pa2').style.height='0px'
                document.getElementById('pa2').style.margin='0'
                crearCliente()
                vengaElPasoDos()

            } else {
                const clienteObj = {
                    id: Date.now(),
                    nombre: nombre,
                    empresa: empresa,
                    pais: pais,
                    correo: correo,
                    telefono: telefono
                }
                datosCliente.push(clienteObj)
                sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))

                sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))
                crearCliente()
                vengaElPasoDos()

            }*/

            confirmarDatos()







            /*
            if (pais === 'orto'){
                confirmacion = confirm(`Por favor confirme que sus datos sean correctos.\nNombre: ${nombre}\nEmpresa: ${empresa}\nPaís: ${otropais}\nCorreo electrónico: ${correo}\nTeléfono/móvil: ${telefono}\nSI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".`)
            } else {
                confirmacion = confirm(`Por favor confirme que sus datos sean correctos.\nNombre: ${nombre}\nEmpresa: ${empresa}\nPaís: ${pais}\nCorreo electrónico: ${correo}\nTeléfono/móvil: ${telefono}\nSI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".`)
            }
        
            if (confirmacion === true){
                if (pais === 'orto') {
                    const clienteObj = {
                        id: Date.now(),
                        nombre: nombre,
                        empresa: empresa,
                        pais: otropais,
                        correo: correo,
                        telefono: telefono
                    }
                    datosCliente.push(clienteObj)
                    //const cliEnte = JSON.stringify(clienteObj)
                    //sessionStorage.setItem('Cliente', cliEnte)
                    sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))
                    document.getElementById('pa2').style.height='0px'
                    document.getElementById('pa2').style.margin='0'
                    crearCliente()
                    vengaElPasoDos()
                } else {
                    const clienteObj = {
                        id: Date.now(),
                        nombre: nombre,
                        empresa: empresa,
                        pais: pais,
                        correo: correo,
                        telefono: telefono
                    }
                    datosCliente.push(clienteObj)
                    //const cliEnte = JSON.stringify(clienteObj)
                    //sessionStorage.setItem('Cliente', cliEnte)
                    sessionStorage.setItem('Cliente', JSON.stringify(datosCliente))
                    crearCliente()
                    vengaElPasoDos()
                }
            } else {
                return
            }

            */




        } else {
            return
        }
        //console.log(clienteNuevo)
    }
    
    //console.log(clienteNuevo)
    
    formularioDatos.addEventListener('submit', capturarDatos)

}

const vengaElPasoDos = () => {

    formularioDatos.style.display='none'
    formularioProyecto.style.display='block'
    console.log(clienteNuevo)

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
        $tipoDisenio.addEventListener('click', () => {
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
        })
        $tipoDisenio.addEventListener('change', () => {
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
        })
        $disenioDistri.addEventListener('click', () => {
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
        })
        $disenioDistri.addEventListener('change', () => {
            const laDistri = $disenioDistri.selectedIndex
            const distriEleccion = $disenioDistri.options[laDistri]
            if (distriEleccion.value != 'secciones') {
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
                $seccionesWeb.addEventListener('click', () => {
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
                })
            }
    
        })
    }
    
    const tipoWp = () => {
        $tipoPlantilla.addEventListener('click', () => {
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
        })
        $tipoPlantilla.addEventListener('change', () => {
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
        })
        $seccionesWp.addEventListener('click', () => {
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
        })
    }

    $tipoDeProyecto.addEventListener('click', tipoProyectoError)

    $tipoDeProyecto.addEventListener('change', tipoProyecto)

    const capturarProyecto = (evt) => {
        evt.preventDefault()
        const tipoProy = $tipoDeProyecto.value
        const tipoDis = $tipoDisenio.value
        const disDistri = $disenioDistri.value
        const webSec = $seccionesWeb.value
        const wpSec = $seccionesWp.value
        const tipoPlanti = $tipoPlantilla.value
    
        if (tipoProy === 'web'){
            confirmacionP = confirm(`Por favor confirme que la información brindada sea correcta.\nTipo de proyecto: ${tipoProy}\nTipo de diseño: ${tipoDis}\nDistribución del contenido: ${disDistri}\nSecciones: ${webSec}\nSI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".`)
        } else {
            confirmacionP = confirm(`Por favor confirme que la información brindada sea correcta.\nTipo de proyecto: ${tipoProy}\nTipo de plantilla: ${tipoPlanti}\nSecciones: ${wpSec}\nSI LOS DATOS SON CORRECTOS PRESIONE "ACEPTAR", SI DESEA MODIFICARLOS PRESIONE "CANCELAR".`)
        }
    
        if (confirmacionP === true){
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
        }
        console.log(proyectoNuevo)
    }

    formularioProyecto.addEventListener('submit', capturarProyecto)
}

const vengaElPasoTres = () => {

    //formularioDatos.style.display='none'
    formularioProyecto.style.display='none'
    formularioAdicionales.style.display='block'

    const capturarAdicionales = (evt) => {
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
        //const cliEnte = JSON.stringify(clienteObj)
        //sessionStorage.setItem('Cliente', cliEnte)
        sessionStorage.setItem('Adicionales', JSON.stringify(datosAdicionales))
        crearAdicionales()
        formularioAdicionales.reset()
        console.log(adicionalesNuevo)
    }

    formularioAdicionales.addEventListener('submit', capturarAdicionales)
}
