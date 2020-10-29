console.log("Linkeado al index.html")
console.log("Linkeado al login.html")

const superUsuario = {
    user: "diego@hotmail.com",
    password: "123456"
}

//SI! AHORA SI!
let ALLUSERS = [];
ALLUSERS = JSON.parse(localStorage.getItem('ALLUSERS'));

//Subo el superusario al LS
localStorage.setItem('superUsuario', JSON.stringify(superUsuario));

//Guardo el LS en una variable para trabajarlo acá en .js
// let userRegistrado = localStorage.getItem('superUsuario');
//Lo parseo para poder trabajarlo
// userRegistrado = JSON.parse(userRegistrado);
//Subo userRegistrado al LS
// localStorage.setItem('userRegistrado', JSON.stringify(userRegistrado));
// console.log(userRegistrado);
// localStorage.setItem('ALLUSERS', JSON.stringify(ALLUSERS));

//Está subido superUsuario y userRegistrado


const $nodoBotonLogIn = $('#log-in')[0];

$nodoBotonLogIn.onclick = function (e){
    e.preventDefault();
    
    const $nodoMail = $('#inputEmail')[0].value;
    const $nodoPass = $('#inputPassword')[0].value;
    const $errores = $('#errores')[0];
    
    
    const ALLUSERS = [];
    const mails = [];
    const pass = [];
    //Iterar la array
    for(let i=0; i < Object.values(localStorage).length; i++){
        ALLUSERS.push(JSON.parse(Object.values(localStorage)[i]));
        mails.push(ALLUSERS[i].user)
        pass.push(ALLUSERS[i].password)
    
        //Si coinciden:
        if ($nodoMail === mails[i] && $nodoPass === pass[i]) {
            window.location.href = "index.html";
        }
        else {
            //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
            chequearYBorrarErrores($errores);

            let error = document.createElement("li");
            error.classList.add('error-texto')
            
            $errores.appendChild(error);
            //Si el pass coincide pero el mail no: 
            if($nodoMail !== mails[i] && $nodoPass === pass[i]){
                error.innerText = "El mail/usuario es incorrecto."
                $('#inputEmail')[0].className = 'error-input';
                $('#inputPassword')[0].className = 'form-control';
            }//Si el mail coincide pero el pass no:
            else if ($nodoMail === mails[i] && $nodoPass !== pass[i]) {
                error.innerText = "El password es incorrecto."
                $('#inputPassword')[0].className = 'error-input';
                $('#inputEmail')[0].className = 'form-control';
            } //Si los dos campos están vacíos:
            else if (!$nodoMail && !$nodoPass) {
                error.innerText = "El mail y la contraseña están incompletos."
                $('#inputPassword')[0].className = 'error-input';
                $('#inputEmail')[0].className = 'error-input';
            }
            else{
                error.innerText = "El mail y la contraseña son incorrectos."
                $('#inputPassword')[0].className = 'error-input';
                $('#inputEmail')[0].className = 'error-input';
            }
        }  
    }    
    
}

function chequearMailExistente(chequearYBorrarErrores, $errores, $nodoMail){

    const ALLUSERS = [];
    const mails = [];
    const pass = [];

    for(let i=0; i < Object.values(localStorage).length; i++){
        ALLUSERS.push(JSON.parse(Object.values(localStorage)[i]));
        mails.push(ALLUSERS[i].user)
        pass.push(ALLUSERS[i].password)

        if(mails[i] === $nodoMail){
            chequearYBorrarErrores($errores);

            
            let errorRegistro = document.createElement("li");
            errorRegistro.classList.add('error-texto');
            errorRegistro.innerText = "El mail/usuario ya está en uso. Ingrese otro mail para registrarse."
            $('#crearEmail')[0].className = 'error-input';

            $errores.appendChild(errorRegistro);
            $('#crearPassword')[0].className = 'form-control';
            $('#confirmarPassword')[0].className = 'form-control';
            
            return mails[i];
            break;
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
