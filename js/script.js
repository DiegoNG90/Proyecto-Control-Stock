console.log("Linkeado al index.html")
console.log("Linkeado al login.html")

//SI! AHORA SI!
let ALLUSERS = [];
ALLUSERS = JSON.parse(localStorage.getItem('ALLUSERS'));

const $nodoBotonLogIn = $('#log-in')[0];


//VALIDAR LOGIN
$nodoBotonLogIn.onclick = function (e){
    e.preventDefault();
    
    const $nodoMail = $('#inputEmail')[0].value;
    const $nodoPass = $('#inputPassword')[0].value;
    const $errores = $('#errores')[0];
    
    
    const ALLUSERS = JSON.parse(localStorage.getItem('ALLUSERS'));
    const mails = [];
    const pass = [];
    for(let i=0; i < ALLUSERS.length; i++){
        mails.push(ALLUSERS[i].user)
        pass.push(ALLUSERS[i].password)
    
        //Si coinciden (LOGIN EXITOSO!):
        if ($nodoMail === mails[i] && $nodoPass === pass[i]) {
            let logueado = localStorage.getItem('LOGIN');

            if (logueado === null) {
                logueado = true;
                const LOGIN = localStorage.setItem('LOGIN', JSON.stringify(logueado))
            }else{
                const LOGIN = logueado;
                localStorage.setItem('LOGIN', JSON.stringify(LOGIN));
            }

            window.location.href = "index.html";

        }
        else {
            //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
            chequearYBorrarErrores($errores);

            let error = document.createElement("li");
            error.classList.add('error-texto')
            
            $errores.appendChild(error);
 
            //Si alguno de los campos está vacío:
            if (!$nodoMail || !$nodoPass) {
                //Si ambos están vacíos
                if (!$nodoMail && !$nodoPass) {
                    error.innerText = "El mail/usuario y la contraseña están incompletos."
                    $('#inputPassword')[0].className = 'error-input';
                    $('#inputEmail')[0].className = 'error-input';
                    break;
                } else if (!$nodoMail && $nodoPass !== "") {
                    error.innerText = "El mail/usuario está incompleto."
                    $('#inputMail')[0].className = 'error-input';
                    break;
                }else{
                    error.innerText = "La contraseña está incompleta."
                    $('#inputPassword')[0].className = 'error-input';
                    break;
                }
            }
            //Si el mail coincide pero el pass no:
            else if ($nodoMail === mails[i] && $nodoPass !== pass[i]) {
                error.innerText = "El password es incorrecto."
                $('#inputPassword')[0].className = 'error-input';
                $('#inputEmail')[0].className = 'form-control';
                // break;
            }
            //Si el pass coincide pero el mail no:
            else if($nodoMail !== mails[i] && $nodoPass === pass[i]){
                error.innerText = "El mail/usuario es incorrecto."
                $('#inputEmail')[0].className = 'error-input';
                $('#inputPassword')[0].className = 'form-control';
                // break;
            } 
            // Si el mail y el pass no coinciden
            else if($nodoMail !== mails[i] && $nodoPass !== pass[i]){
                error.innerText = "El mail/usuario y la contraseña no existen."
                $('#inputPassword')[0].className = 'error-input';
                $('#inputEmail')[0].className = 'error-input';
                // break;
            }
            else{
                continue;
            }
        }  
    }    
    
}

function chequearYBorrarErrores(input){
    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while(input.firstChild){
        input.removeChild(input.firstChild);
    };
}




function guardarDatos(){

}

function mostrarDatos(){

}

function eliminarItems(params) {
    localStorage.removeItem('elItemEnCuestion');
}

function eliminarTodo(params) {
    localStorage.clear();
}
