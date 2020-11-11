
const $botonRegistro = $('#btn-registrarse')[0];

$botonRegistro.onclick = function(e){
    e.preventDefault();
    

    //crear los nodos del form
    const usuarioNuevo = $('#crearEmail')[0].value;
    const contraseñaUNuevo = $('#crearPassword')[0].value;
    const confirmaContraseñaUNuevo = $('#confirmarPassword')[0].value;
    const erroresRegistro = $('#registro-errores')[0];
    if (usuarioNuevo===""|| contraseñaUNuevo===""||confirmaContraseñaUNuevo===""){
        alert("Favor de completar todos los campos");
    }else{
    //borrar errores previos
    chequearYBorrarErrores(erroresRegistro);
    //Iterar la array
    chequearMailExistente(chequearYBorrarErrores, erroresRegistro, usuarioNuevo);
    //2) SI NO EXISTE, crearlo y borrar posibles errores y clases 'error-texto' según el caso.
    if ((chequearMailExistente(chequearYBorrarErrores, erroresRegistro,usuarioNuevo) !== usuarioNuevo)) {
        //alert(`Bien, usted ha creado el usuario ${usuarioNuevo}`)

        //borro posibles errores previos
        $('#crearEmail')[0].classList.remove('error-input');
        $('#crearEmail')[0].className = 'form-control';

        //Si el mail es nuevo pero las contraseñas difieren
        if(contraseñaUNuevo !== confirmaContraseñaUNuevo){
            chequearYBorrarErrores(erroresRegistro);

            let errorRegistro = document.createElement("li");
            errorRegistro.classList.add('error-texto');
            errorRegistro.innerText = "Las contraseñas no coinciden. Escribalas nuevamente."
            $('#crearPassword')[0].className = 'error-input';
            $('#confirmarPassword')[0].className = 'error-input';

            erroresRegistro.appendChild(errorRegistro);

        }//
        else {
            //eliminar rastros de estilo de errores
            chequearYBorrarErrores(erroresRegistro);
            $('#crearPassword')[0].className = 'form-control';
            $('#confirmarPassword')[0].className = 'form-control';

            const newUser = {
                user: `${usuarioNuevo}`,
                password: `${confirmaContraseñaUNuevo}`
            }

            let existentes = localStorage.getItem('ALLUSERS');

            if (existentes === null) {
                existentes = [];
                existentes.push(newUser);
                let ALLUSERS = localStorage.setItem('ALLUSERS', JSON.stringify(existentes));
            }else{
                let ALLUSERS = existentes;
                ALLUSERS = JSON.parse(ALLUSERS);
                ALLUSERS.push(newUser);
                localStorage.setItem('ALLUSERS', JSON.stringify(ALLUSERS));
            }
            



            //Subo al newUser al LS
            // localStorage.setItem('newUser', JSON.stringify(newUser));
            
            $('.contenedor-login')[0].className = "oculto";
            $('#esExito')[0].classList.remove('oculto');
            $('body')[0].style.backgroundColor = "#5a5a5abe";

            redireccionar();
        }
    }
    }
}

function redireccionar(){
    setTimeout(function(){window.location.href = "login.html";}, 5500);
}

function chequearYBorrarErrores(input){
    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while(input.firstChild){
        input.removeChild(input.firstChild);
    };
}


function chequearMailExistente(chequearYBorrarErrores, erroresRegistro,usuarioNuevo){
    const ALLUSERS = JSON.parse(localStorage.getItem('ALLUSERS'));
    const mails = [];
    const pass = [];

    if(ALLUSERS === null){
        return '';
    }

    for(let i=0; i < ALLUSERS.length; i++){
        mails.push(ALLUSERS[i].user)
        pass.push(ALLUSERS[i].password)

        if(mails[i] === usuarioNuevo){
            chequearYBorrarErrores(erroresRegistro);

            let errorRegistro = document.createElement("li");
            errorRegistro.classList.add('error-texto');
            errorRegistro.innerText = "El mail/usuario ya está en uso. Ingrese otro mail para registrarse."
            $('#crearEmail')[0].className = 'error-input';

            erroresRegistro.appendChild(errorRegistro);
            $('#crearPassword')[0].className = 'form-control';
            $('#confirmarPassword')[0].className = 'form-control';
            $('#crearPassword')[0].value = "";
            $('#confirmarPassword')[0].value = "";

            
            return mails[i];
            break;
        }
    }
}