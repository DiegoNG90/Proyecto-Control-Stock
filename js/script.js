console.log("Linkeado al index.html")
console.log("Linkeado al login.html")

const superUsuario = {
    user: "diego@hotmail.com",
    password: 123456
}

// const ALLUSERS = [];
// ALLUSERS.push(superUsuario);

localStorage.setItem('superUsuario', JSON.stringify(superUsuario));
let userRegistrado = localStorage.getItem('superUsuario');
userRegistrado = JSON.parse(userRegistrado);
// console.log(userRegistrado);


const $nodoBotonLogIn = $('#log-in')[0];

$nodoBotonLogIn.onclick = function (e){
    e.preventDefault();
    
    const $nodoMail = $('#inputEmail')[0].value;
    const $nodoPass = $('#inputPassword')[0].value;
    const $errores = $('#errores')[0];
    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while($errores.firstChild){
        $errores.removeChild($errores.firstChild);
    };
    
    //Si coinciden:
    if ($nodoMail === userRegistrado.user && $nodoPass === userRegistrado.password.toString()) {
        window.location.href = "index.html";
    }
    else {
        let error = document.createElement("li");
        error.classList.add('error-texto')
        
        
        $errores.appendChild(error);
        //Si el pass coincide pero el mail no: 
        if($nodoMail !== userRegistrado.user && $nodoPass === userRegistrado.password.toString() ){
            error.innerText = "El mail/usuario es incorrecto."
            $('#inputEmail')[0].className = 'error-input';
            $('#inputPassword')[0].className = 'form-control';
        }//Si el mail coincide pero el pass no:
        else if ($nodoMail === userRegistrado.user && $nodoPass !== userRegistrado.password.toString()) {
            error.innerText = "El password es incorrecto."
            $('#inputPassword')[0].className = 'error-input';
            $('#inputEmail')[0].className = 'form-control';
        }else{
            error.innerText = "El mail y la contraseña son incorrectos."
            $('#inputPassword')[0].className = 'error-input';
            $('#inputEmail')[0].className = 'error-input';
        }
    }  
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
