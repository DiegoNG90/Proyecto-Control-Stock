
const $botonRegistro = $('#btn-registrarse')[0];

$botonRegistro.onclick = function(e){
    e.preventDefault();
    

    //crear los nodos del form
    const usuarioNuevo = $('#crearEmail')[0].value;
    const contraseñaUNuevo = $('#crearPassword')[0].value;
    const confirmaContraseñaUNuevo = $('#confirmarPassword')[0].value;
    const erroresRegistro = $('#registro-errores')[0];
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
            
            //Subo al newUser al LS
            localStorage.setItem('newUser', JSON.stringify(newUser));
            
            $('#main-registro')[0].className = "oculto";
            $('#esExito')[0].classList.remove('oculto');
            $('body')[0].style.backgroundColor = "#311c1c";

            redireccionar();
        }
    }
}

function redireccionar(){
    setTimeout(function(){window.location.href = "login.html";}, 2500);
}

function exportarUsersRegistrados(){

}

function chequearYBorrarErrores(input){
    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while(input.firstChild){
        input.removeChild(input.firstChild);
    };
}


function chequearMailExistente(chequearYBorrarErrores, erroresRegistro,usuarioNuevo){
    const ALLUSERS = [];
    const mails = [];
    const pass = [];

    for(let i=0; i < Object.values(localStorage).length; i++){
        ALLUSERS.push(JSON.parse(Object.values(localStorage)[i]));
        mails.push(ALLUSERS[i].user)
        pass.push(ALLUSERS[i].password)

        if(mails[i] === usuarioNuevo){
            chequearYBorrarErrores(erroresRegistro);

            //alert("El usuario ya existe, ingrese otro mail/user.")
            let errorRegistro = document.createElement("li");
            errorRegistro.classList.add('error-texto');
            errorRegistro.innerText = "El mail/usuario ya está en uso. Ingrese otro mail para registrarse."
            $('#crearEmail')[0].className = 'error-input';

            erroresRegistro.appendChild(errorRegistro);
            $('#crearPassword')[0].className = 'form-control';
            $('#confirmarPassword')[0].className = 'form-control';
            
            return mails[i];
            break;
        }
    }
}