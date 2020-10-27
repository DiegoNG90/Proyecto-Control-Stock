
const $botonRegistro = $('#btn-registrarse')[0];

$botonRegistro.onclick = function(e){
    e.preventDefault();
    //Traer la array guardada en localStorage
    localStorage.getItem('ALLUSERS');
    let usersRegistrados = localStorage.getItem('ALLUSERS');
    usersRegistrados = JSON.parse(usersRegistrados);
    
    //crear los nodos del form
    const usuarioNuevo = $('#crearEmail')[0].value;
    const contraseñaUNuevo = $('#crearPassword')[0].value;
    const confirmaContraseñaUNuevo = $('#confirmarPassword')[0].value;
    const erroresRegistro = $('#registro-errores')[0];

    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while(erroresRegistro.firstChild){
        erroresRegistro.removeChild(erroresRegistro.firstChild);
    };

    //Iterar la array usersRegistrados
    for (const element of usersRegistrados) {
        //1) Chequear si el mail/usuario existe
        if(element.user === usuarioNuevo){
            //alert("El usuario ya existe, ingrese otro mail/user.")
            let errorRegistro = document.createElement("li");
            errorRegistro.classList.add('error-texto');
            errorRegistro.innerText = "El mail/usuario ya está en uso. Ingrese otro mail para registrarse."
            $('#crearEmail')[0].className = 'error-input';

            erroresRegistro.appendChild(errorRegistro);
            $('#crearPassword')[0].className = 'form-control';
            $('#confirmarPassword')[0].className = 'form-control';


        }//2) SI NO EXISTE, crearlo y borrar posibles errores y clases 'error-texto' según el caso.
        else {
            //alert(`Bien, usted ha creado el usuario ${usuarioNuevo}`)

            //borro posibles errores previos
            $('#crearEmail')[0].classList.remove('error-input');
            $('#crearEmail')[0].className = 'form-control';

            //Si el mail es nuevo pero las contraseñas difieren
            if(contraseñaUNuevo !== confirmaContraseñaUNuevo){
                let errorRegistro = document.createElement("li");
                errorRegistro.classList.add('error-texto');
                errorRegistro.innerText = "Las contraseñas no coinciden. Escribalas nuevamente."
                $('#crearPassword')[0].className = 'error-input';
                $('#confirmarPassword')[0].className = 'error-input';

                erroresRegistro.appendChild(errorRegistro);

            }//
            else {
                //eliminar rastros de estilo de errores
                $('#crearPassword')[0].className = 'form-control';
                $('#confirmarPassword')[0].className = 'form-control';

                const newUser = {
                    user: `${usuarioNuevo}`,
                    password: `${confirmaContraseñaUNuevo}`
                }
                
                let usersRegistrados = localStorage.getItem('ALLUSERS');
                usersRegistrados = JSON.parse(usersRegistrados);
                usersRegistrados.push(newUser);

                localStorage.setItem('ALLUSERS', JSON.stringify(usersRegistrados));
                
                $('#main-registro')[0].className = "oculto";
                $('#esExito')[0].classList.remove('oculto');
                $('body')[0].style.backgroundColor = "#311c1c";

                break;
            }
            

        }
            
    }
    redireccionar();
}

function redireccionar(){
    setTimeout(function(){window.location.href = "login.html";}, 2500);
}

function exportarUsersRegistrados(){

}
